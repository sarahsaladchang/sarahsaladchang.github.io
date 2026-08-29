const interviewContent = {
  hr: {
    label: "HR / RECRUITER",
    questions: [
      {
        title: "Tell me about yourself.",
        answer: "我是 Sarah，一位具 5+ 年經驗、以產品思維工作的 Senior System Analyst。我的核心價值是把模糊的使用者需求，轉成工程團隊可以執行的系統規格，並一路協作到整合、UAT、上線與使用者採用。",
        href: "/projects/#workforce",
        evidence: [
          ["5+ years", "Enterprise software & system delivery"],
          ["End-to-end", "Requirements → integration → UAT → adoption"],
          ["Cross-functional", "Users, engineers, QA, data, AI & GIS teams"]
        ],
        footer: ["Based in Taiwan", "English collaboration"]
      },
      {
        title: "What do your activities outside work say about you?",
        answer: "我會跑馬拉松、接力，也曾到馬爾他學習語言與擔任活動主持。這些經驗共同訓練了我的長期節奏、臨場表達與跨文化適應——也是我在複雜專案中維持協作的方法。",
        href: "/about/#life-title",
        evidence: [
          ["Marathon", "Long-term focus & sustainable pacing"],
          ["Malta", "English communication & cultural adaptability"],
          ["Hosting", "Real-time response & audience awareness"]
        ],
        footer: ["Curious by nature", "Reliable in a relay"]
      }
    ]
  },
  manager: {
    label: "HIRING MANAGER",
    questions: [
      {
        title: "What type of role fits you best?",
        answer: "我最適合需要同時理解使用者、系統與交付的 Technical Product／Program 或 Senior System Analyst 角色。我的優勢不是只產出文件，而是把需求、介面、資料、風險與驗收接成一條可推進的路徑。",
        href: "/projects/",
        evidence: [
          ["Translation", "Business and user needs → technical decisions"],
          ["Integration", "API, data, AI, GIS & enterprise platforms"],
          ["Delivery", "Dependencies, testing, launch & adoption"]
        ],
        footer: ["Product-minded SA", "Technical delivery"]
      },
      {
        title: "What is the most complex project you have delivered?",
        answer: "企業行動派遣平台同時牽涉 8 大模組、50+ 功能項目與 1M+ 筆資料。我將人工派遣流程拆成角色、狀態、例外與驗收條件，並協調行動端、後端、資料庫、QA 與使用單位完成落地。",
        href: "/projects/#workforce",
        evidence: [
          ["8 modules", "A connected enterprise workflow"],
          ["50+ items", "Functional rules and acceptance criteria"],
          ["1M+ records", "Validation, mapping and reporting logic"]
        ],
        footer: ["Enterprise delivery", "Data at scale"]
      },
      {
        title: "How do you translate user needs into technical requirements?",
        answer: "我先釐清使用者真正要完成的任務，再把流程拆成角色、觸發條件、資料欄位、正常與例外路徑，接著轉成 UI 流程、API I/O、資料規則與可測試的驗收條件，讓工程與使用者對同一件事有共同定義。",
        href: "/projects/#workforce",
        evidence: [
          ["As-Is / To-Be", "Start from real operating behavior"],
          ["Specifications", "Flows, fields, rules, I/O and exceptions"],
          ["Acceptance", "Testable criteria shared across teams"]
        ],
        footer: ["Clarity before build", "Evidence after delivery"]
      },
      {
        title: "How do you work with engineers and stakeholders?",
        answer: "我會先把決策需要的脈絡整理清楚：目標、限制、依賴與驗收方式。對使用者確認價值與優先順序，對工程團隊確認介面與風險，再用具體產出和測試結果持續對齊，而不是只靠會議同步。",
        href: "/projects/#ogc",
        evidence: [
          ["Shared language", "Goals, constraints and definitions"],
          ["Dependencies", "Interfaces, ownership and delivery risks"],
          ["Proof", "Prototype, tests, demos and documentation"]
        ],
        footer: ["Cross-functional", "International experience"]
      }
    ]
  },
  technical: {
    label: "TECHNICAL INTERVIEWER",
    questions: [
      {
        title: "What experience do you have with AI products?",
        answer: "我負責的是 AI solution planning、整合規格與評估交付：設計從使用者意圖、MCP tool selection、API／database 到 RAG 與 GIS output 的完整流程，並以固定條件和多個品質面向建立可重複的評估。",
        href: "/projects/#genai",
        evidence: [
          ["5 MCP scenarios", "Flood, CCTV, street view, typhoon & sentiment"],
          ["80+ questions", "Verified standardized evaluation set"],
          ["5 dimensions", "Precision, recall, faithfulness, relevance & accuracy"]
        ],
        footer: ["AI integration", "Evaluation-driven"]
      },
      {
        title: "How deep is your API and data integration experience?",
        answer: "我能把整合需求定義到 request／response、參數、JSON／XML、欄位映射、錯誤行為與驗證方式；資料面具 SQL Server、View、Stored Procedure、資料驗證與效能分析經驗，也做過 OpenAPI 與 OGC 標準介面的跨系統協作。",
        href: "/projects/#ogc",
        evidence: [
          ["API contracts", "I/O, mapping, errors and validation"],
          ["SQL Server", "Views, SPs, reporting and data quality"],
          ["Open standards", "OpenAPI, OGC API & SensorThings"]
        ],
        footer: ["System integration", "Interoperability"]
      }
    ]
  }
};

document.documentElement.dataset.interactive = "ready";

const lensButtons = Array.from(document.querySelectorAll(".lens-tab"));
const questionLabel = document.querySelector("#question-label");
const questionTitle = document.querySelector("#question-title");
const questionAnswer = document.querySelector("#question-answer");
const evidenceLink = document.querySelector("#evidence-link");
const evidenceList = document.querySelector("#evidence-list");
const evidenceCount = document.querySelector("#evidence-count");
const progressBar = document.querySelector("#question-progress-bar");
const nextQuestion = document.querySelector("#next-question");
const evidenceFooter = document.querySelector(".evidence-footer");

let activeLens = "hr";
let activeQuestion = 0;

function renderQuestion() {
  if (!questionTitle) return;
  const group = interviewContent[activeLens];
  const item = group.questions[activeQuestion];
  const current = activeQuestion + 1;
  const total = group.questions.length;

  questionLabel.textContent = `${group.label} · QUESTION ${current} OF ${total}`;
  questionTitle.textContent = item.title;
  questionAnswer.textContent = item.answer;
  evidenceLink.href = item.href;
  evidenceCount.textContent = `${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  progressBar.style.width = `${(current / total) * 100}%`;
  evidenceList.innerHTML = item.evidence
    .map(([value, detail]) => `<li><strong>${value}</strong><span>${detail}</span></li>`)
    .join("");
  evidenceFooter.innerHTML = item.footer.map((value) => `<span>${value}</span>`).join("");
}

function selectLens(button) {
  activeLens = button.dataset.lens;
  activeQuestion = 0;
  lensButtons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", selected ? "true" : "false");
    item.tabIndex = selected ? 0 : -1;
  });
  renderQuestion();
}

lensButtons.forEach((button, index) => {
  button.addEventListener("click", () => selectLens(button));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + offset + lensButtons.length) % lensButtons.length;
    lensButtons[nextIndex].focus();
    selectLens(lensButtons[nextIndex]);
  });
});

nextQuestion?.addEventListener("click", () => {
  const total = interviewContent[activeLens].questions.length;
  activeQuestion = (activeQuestion + 1) % total;
  renderQuestion();
  questionTitle.focus({ preventScroll: true });
});

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const images = Array.from(carousel.querySelectorAll("img"));
  const status = carousel.querySelector("[data-carousel-status]");
  let index = 0;
  let touchStart = 0;

  const show = (newIndex) => {
    index = (newIndex + images.length) % images.length;
    images.forEach((image, imageIndex) => image.classList.toggle("is-visible", imageIndex === index));
    status.textContent = `${index + 1} / ${images.length}`;
  };

  carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => show(index - 1));
  carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => show(index + 1));
  carousel.addEventListener("touchstart", (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
  carousel.addEventListener("touchend", (event) => {
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 45) show(index + (delta < 0 ? 1 : -1));
  }, { passive: true });
});
