const asset = (name) => `${import.meta.env.BASE_URL}assets/case-study-workforce/${name}`;

export const workforceDispatchCaseStudy = {
  id: "workforce-dispatch",
  title: "Enterprise Mobile Workforce & Dispatch Platform",
  fullTitle: "Digitizing Enterprise Workforce Dispatch from Assignment to Closure",
  slides: [
    {
      chapter: "01 · Project Overview",
      title: "Replacing manual dispatch with a traceable digital workflow",
      body: "Dispatch operations relied on manual notifications and fragmented status updates. Without reliable transition tracking or audit controls, data errors accumulated and operational reports were delayed. The project digitized the full workflow across mobile and administrative experiences.",
      thumbnail: asset("thumbnails/thumb-01.webp"),
      images: [
        {
          src: asset("09-dashboard-annotations.webp"),
          alt: "Operational dashboard for the enterprise workforce dispatch platform",
          label: "Operational dashboard",
        },
      ],
      facts: ["Enterprise platform", "Web + mobile", "Role-based workflow", "Data integration"],
      callout: "My role — Led As-Is / To-Be requirements analysis, cross-device permission and state-machine design, schema definition, Stored Procedure refactoring, and coordinated delivery across mobile, web, backend, database, QA, and business teams.",
    },
    {
      chapter: "02 · Goals",
      title: "Stabilize the critical workflow before extending the platform",
      body: "The first release focused on locking down the core state transitions and fail-safe validation rules. Once the critical path was stable, the same rules could support surrounding modules without creating inconsistent data or conflicting status updates.",
      thumbnail: asset("thumbnails/thumb-02.webp"),
      images: [
        {
          src: asset("10-platform-home.webp"),
          alt: "Enterprise platform home screen with workforce management modules",
          label: "Unified platform entry point",
        },
      ],
      insights: [
        ["01 · Dispatch", "Create the task, identify eligible personnel, and send the assignment."],
        ["02 · Receive", "Record acknowledgement, availability, and exception responses."],
        ["03 · Execute", "Track attendance, equipment, progress, and field updates."],
        ["04 · Close", "Validate completion, preserve an audit trail, and enable reporting."],
      ],
      callout: "Core workflow: Dispatch → Receive → Execute → Close",
    },
    {
      chapter: "03 · Requirements Analysis",
      title: "Turn complex roles and operating rules into modular requirements",
      body: "Stakeholder interviews and As-Is / To-Be analysis were used to map roles, permissions, notifications, exceptions, data dependencies, and external integrations. The analysis was then decomposed into modules, state rules, field definitions, and testable acceptance criteria.",
      thumbnail: asset("thumbnails/thumb-03.webp"),
      images: [
        {
          src: asset("02-requirements-mindmap.webp"),
          alt: "Mind map of user roles, permissions, and workforce system functions",
          label: "Figure 1 · Role and function analysis",
        },
        {
          src: asset("01-scope-overview.webp"),
          alt: "Modularized enterprise platform scope and integration overview",
          label: "Analysis result · Modularized platform scope",
        },
      ],
      facts: ["Roles + permissions", "State + exception rules", "Data dependencies", "Acceptance criteria"],
    },
    {
      chapter: "04 · User Flow",
      title: "Align dispatch administrators, team leaders, and field personnel",
      body: "The end-to-end swimlane mapped event creation, personnel search, notification, acknowledgement, check-in, task execution, field reporting, equipment return, closure, and post-event analysis. It clarified ownership and handoffs before development began.",
      thumbnail: asset("thumbnails/thumb-04.webp"),
      images: [
        {
          src: asset("11-user-flow.webp"),
          alt: "Cross-role swimlane workflow for disaster dispatch and field operations",
          label: "Figure 2 · Cross-role operational flow",
        },
      ],
      facts: ["Event setup", "Dispatch preparation", "Field execution", "Closure + analysis"],
    },
    {
      chapter: "05 · Wireframes / Prototype",
      title: "Design one coherent experience across desktop and mobile",
      body: "The prototype work established reusable UI patterns, validated the mobile response journey, and tested how maps, alerts, dashboards, and operational details would adapt across devices. This gave engineering teams a shared interaction reference before implementation.",
      thumbnail: asset("thumbnails/thumb-05.webp"),
      images: [
        {
          src: asset("05-design-system.webp"),
          alt: "Interface component library and interaction patterns",
          label: "Figure 3 · UI components and interaction patterns",
        },
        {
          src: asset("06-mobile-flow.webp"),
          alt: "Mobile workflow prototypes for notifications, response, reporting, and maps",
          label: "Figure 4 · Mobile workflow prototype",
        },
        {
          src: asset("08-responsive-prototype.webp"),
          alt: "Responsive dispatch platform shown on desktop, tablet, and mobile",
          label: "Figure 5 · Responsive system concept",
        },
      ],
      facts: ["Reusable components", "Mobile response flow", "Responsive layouts", "GIS + dashboard views"],
    },
    {
      chapter: "06 · Requirements Specification",
      title: "Translate workflow decisions into build-ready specifications",
      body: "The specification connected user scenarios to permission matrices, state transitions, schema and field mappings, API input/output behavior, Stored Procedure logic, validation rules, exception handling, and UAT acceptance criteria. Activity diagrams made create, edit, delete, and role-permission behavior explicit.",
      thumbnail: asset("thumbnails/thumb-06.webp"),
      images: [
        {
          src: asset("07-deployment-architecture.webp"),
          alt: "Deployment and data-integration architecture for the platform",
          label: "System and data architecture",
        },
        {
          src: asset("12-spec-project-function.webp"),
          alt: "Activity diagram for project function management",
          label: "Function-management activity specification",
        },
        {
          src: asset("13-spec-role-management.webp"),
          alt: "Activity diagram for role and permission management",
          label: "Role-management activity specification",
        },
      ],
      facts: ["RBAC matrix", "Schema + fields", "API behavior", "SQL logic", "UAT criteria"],
    },
    {
      chapter: "07 · Rollout / Impact",
      title: "Deliver a testable workflow at enterprise scale",
      body: "The platform converted a manual assignment process into a trackable, testable, and reportable operating workflow. Rollout included test-case preparation, regression testing, UAT, SOPs, training support, and operational handover across mobile and administrative modules.",
      thumbnail: asset("thumbnails/thumb-07.webp"),
      images: [
          {
            src: asset("04-training-management.webp"),
            alt: "Administrative training course management interface",
            label: "Administrative module",
          },
          {
            src: asset("03-operational-dashboard.webp"),
            alt: "Workforce dispatch operations dashboard",
            label: "Live operational view",
          },
      ],
      insights: [
        ["8 major modules", "Requirements, integration, testing, and rollout across the verified functional scope."],
        ["50+ functional items", "Defined and validated across mobile and administrative workflows."],
        ["1M+ records", "Personnel, training, equipment, and task-related data processed or managed by the platform."],
        ["~10% faster", "Average reporting Stored Procedure execution time in controlled before/after tests, with regression and UAT validation."],
      ],
      callout: "Impact was measured through verified functional scope, data scale, and controlled SQL performance testing—not unverified user or delivery claims.",
    },
  ],
};

export const disasterResponseAgentCaseStudy = {
  id: "disaster-response-ai",
  title: "災害應變平台與 AI Agent 助手",
  fullTitle: "災害應變平台與 AI Agent 助手：整合防災情資、GIS 與 AI 智慧助理的應變決策平台",
  slides: [
    {
      chapter: "01 · Project Overview",
      title: "整合防災情資、GIS 與 AI 智慧助理的應變決策平台",
      body: "本專案為政府防災應變使用的整合平台，將災害知識、即時情資、GIS 地圖與 AI 智慧助理整合於同一操作環境，協助應變人員在平時整備、災中研判、會議準備及災後檢討等不同階段，更快速地取得可用資訊。",
      facts: ["平台支援規模 2,000+ 人", "5 大工具情境", "RAG 評測 80+ 題", "GIS 視覺化整合"],
      callout: "我的角色 — 主要系統分析與產品交付角色，負責需求訪談、使用情境與功能規格設計、資料與 API 介接規劃、AI 問答流程拆解、跨團隊協調、測試驗收、上線支援及教育訓練。合作對象涵蓋政府使用者、前後端、AI、Data、GIS、QA 與 Infrastructure 團隊。",
      images: [],
    },
    {
      chapter: "02 · Goals",
      title: "建立從模糊提問到精準工具呼叫的智慧防災決策支援",
      body: "專案目標在於建立可供大量應變人員使用的整合式防災平台，降低跨系統查找資訊的時間，將口語化災防問題轉化為可執行的工具查詢與圖資判讀。",
      insights: [
        ["01 · 跨系統整合", "建立可供大量應變人員使用的整合式防災平台，降低跨系統查找資訊的時間。"],
        ["02 · 意圖與參數抽取", "將模糊、口語化的災防問題轉換為可查詢的意圖、參數、資料來源與輸出格式。"],
        ["03 · 多元工具呼叫", "讓 AI 助手不只回覆文字，進一步呼叫 RAG、MCP／API、資料庫及 GIS 工具，輸出可直接判讀的卡片、地圖、圖片或連結。"],
        ["04 · 標準化評測驗收", "透過標準化測試題與 E2E／UAT，驗證回答正確性、工具呼叫、參數傳遞、回應速度及前端呈現。"],
        ["05 · 全流程支援", "支援平時整備、災前預警、災中應變、災後查詢與跨情境資訊整合。"],
      ],
      callout: "核心目標：降低跨系統查找時間，並讓 AI 助手直接驅動 RAG、API、資料庫與 GIS 工具輸出結構化判讀結果。",
      images: [],
    },
    {
      chapter: "03 · Requirements Analysis",
      title: "梳理使用者核心場景、資料介接規則與 AI 驗收標準",
      body: "盤點應變決策者、值勤人員、情資研判與業務承辦人員的使用情境，定義 5 大代表性工具（街景查詢、歷史颱風、網路輿情、CCTV 淹水影像、短期降雨／淹水預測），並制定完整的介接與品質標準。",
      facts: ["應變決策場景", "5 大代表性工具", "MCP／API 介接", "例外容錯機制", "80+ 題 RAG 題集"],
      insights: [
        ["使用者與核心場景", "涵蓋應變決策者、值勤人員、情資研判與業務承辦；支援即時應變、災前整備、會議前情資彙整與災後檢討。"],
        ["功能需求規劃", "提供自然語言輸入、建議問題與情境式選單，辨識意圖並抽取地點、時間、災害類型等必要參數，支援補問與分流。"],
        ["資料與介接需求", "定義各資料來源 API I/O、SQL View/SP、空間查詢條件，處理查無資料、逾時、不同步等例外流程。"],
        ["AI 品質與驗收標準", "建立 80+ 題標準化 RAG 評測題集，以 System Testing、E2E 及 UAT 驗證完整鏈路。"],
      ],
      images: [],
    },
    {
      chapter: "04 · User Flow",
      title: "提出問題、意圖分流到卡片與 GIS 圖資呈現的完整流程",
      body: "使用者進入平台後提出問題，系統辨識意圖與抽取參數；若不足先補問，若完整則分流至 RAG 知識檢索或 MCP／API 工具，最終將文字摘要、情資卡片與 GIS 地圖回傳，支援連續追問與研判處置。",
      callout: "核心流程：提出問題 → 意圖辨識 → 參數抽取／補問 → RAG 或 MCP／API 分流 → 資料查詢 → 卡片／GIS 呈現 → 追問與應變處置",
      insights: [
        ["1. 提問與意圖辨識", "使用者輸入問題或選擇建議情境，系統辨識意圖並抽取地點、時間、災害類型等關鍵參數。"],
        ["2. 追問補全與智慧分流", "參數不足時自動追問補充；資訊完整時判斷分流至 RAG 知識檢索或 MCP／API 工具查詢。"],
        ["3. 多來源資料整合獲取", "向知識庫、資料庫、外部情資服務或 GIS 圖層取得對應資訊，後端整理結構化輸出。"],
        ["4. 多元呈現與應變處置", "依情境呈現文字摘要、情資卡片、影像或地圖，使用者可繼續追問、切換情境並執行應變處置。"],
      ],
      images: [],
    },
    {
      chapter: "05 · Wireframes / Prototype",
      title: "既有防災平台主畫面結合側邊 AI 助手面板的原型架構",
      body: "原型以「既有災害應變平台＋側邊 AI 助手」為主要架構。主畫面以 GIS 地圖呈現即時圖層與點位，側邊面板包含建議問句、輸入框與情境選單，並依資料型態輸出資訊卡、圖像、地圖與來源連結，避免純文字對話。",
      facts: ["GIS 地圖主操作區", "側邊 AI 助手面板", "情境式快速選單", "多元回答元件", "流程原型驗證"],
      insights: [
        ["平台主畫面", "以 GIS 地圖作為主要操作區，呈現災情點位、圖層、警示及即時資訊。"],
        ["AI 助手面板", "固定於畫面側邊，包含歡迎訊息、可處理問題類型、建議問句、文字輸入框及附件功能。"],
        ["情境選單與回答元件", "依災害階段提供快速入口；依型態呈現文字、卡片、圖片、來源連結與地圖結果。"],
        ["流程原型與追蹤表", "以對話流程圖驗證意圖判斷與工具呼叫，建立需求到驗收的追蹤關係。"],
      ],
      images: [],
    },
    {
      chapter: "06 · Rollout / Impact",
      title: "串聯 5 大工具情境、80+ 題 RAG 評測與 2,000+ 人規模支援",
      body: "完成 5 大 MCP／工具情境規劃，建立 80+ 題標準化 RAG 評測題集，使不同檢索與回答策略可在一致條件下比較，並將 AI 輸出整合入卡片、GIS 與決策支援流程中。平台規模規劃支援 2,000+ 人。",
      insights: [
        ["5 大工具情境", "將 AI 問答延伸至即時資料、CCTV 影像、歷史案例、預測資訊與 GIS 結果。"],
        ["80+ 題 RAG 評測", "建立標準化題集，使不同檢索與回答策略可在固定條件下反覆比較。"],
        ["決策支援流程整合", "將 AI 輸出整合至卡片、GIS、API 與決策支援流程，而非停留在純聊天介面。"],
        ["2,000+ 人規模支援", "透過跨團隊規格對齊、System Testing、E2E 與 UAT，降低整合落差，平台規劃支援規模達 2,000+ 人。"],
      ],
      callout: "專案關鍵在於將模糊口語的自然語言問答，穩定轉化為工程可執行的 MCP 工具、GIS 圖層與決策卡片。",
      images: [],
    },
  ],
};

export const nantouDisasterPlatformCaseStudy = {
  id: "nantou-disaster-platform",
  title: "縣市級防災情資整合平台（南投防災情資整合平台）",
  fullTitle: "縣市級防災情資整合平台：整合即時災情、水情、CCTV 與氣象的一站式營運儀表板",
  slides: [
    {
      chapter: "01 · Project Overview",
      title: "整合分散政府資料、即時水情與 CCTV 的縣市級防災儀表板",
      body: "本專案將分散於政府網站、即時災情、CCTV、水情、公告及通知來源的資料，整合成縣市政府可於平時整備與災害應變期間使用的防災網站與營運儀表板。工作重點涵蓋資料清理、更新頻率、快取、失敗保留、狀態監控與正式環境問題診斷。",
      facts: ["多來源資料整合", "Node.js 資料服務", "IIS Reverse Proxy", "快取與失敗保留", "LINE 通知整合"],
      callout: "我的角色 — 負責來源資料分析、網頁爬取與介接規格、XML／JSON API 設計、網站與儀表板規劃、Node.js 資料服務實作、IIS 部署協調、測試及 Production Support。",
      images: [],
    },
    {
      chapter: "02 · Goals",
      title: "集中異質防災資訊，建立具備快取容錯的穩定資料服務",
      body: "將多個來源、不同格式與更新頻率的防災資料集中呈現，減少人工切換網站與重複整理，並將非結構化網頁內容轉換為一致的 XML／JSON／API 資料。",
      insights: [
        ["01 · 集中資訊呈現在地化", "集中不同來源與格式的防災資料，減少人工切換網站與重複整理時間。"],
        ["02 · 標準化資料服務", "將非結構化或半結構化網頁轉為一致的 XML／JSON／API，供網站及下游系統重複使用。"],
        ["03 · 快取與即時平衡", "依資料特性設定更新週期（1~5 分鐘），兼顧最新資訊與系統穩定性。"],
        ["04 · 容錯與狀態診斷", "上游網站失效時仍保留最近一次成功資料，配合狀態 API 與 Log 快速定位問題。"],
        ["05 · 全方位防災支援", "支援防災資訊瀏覽、地圖研判、公告發布、LINE 通知及日常維運。"],
      ],
      callout: "核心目標：在上游網站短暫不穩定的現實條件下，透過成功快取與分層診斷，提供永不中斷的縣市防災資訊服務。",
      images: [],
    },
    {
      chapter: "03 · Requirements Analysis",
      title: "盤點資料來源、解析規則、更新週期與例外診斷機制",
      body: "主要使用者為縣市政府防災承辦人員、值勤人員及應變單位。平時查看天氣、水情、災情、CCTV 與公告；災時快速確認最新狀態與事件位置。系統需盤點來源網址、欄位清洗規則、排程更新頻率與失敗保留機制。",
      facts: ["Cheerio 解析", "XML Escape", "分層診斷", "ARR Proxy", "排程更新"],
      insights: [
        ["使用者與資訊需求", "平時掌握全區概況；災時快速定位事件、確認水情與發布通知。管理端需掌握每項資料健康度。"],
        ["資料整合規格", "定義重複過濾、日期數字解析、HTML 清理與特殊字元 XML Escape，轉為一致型別。"],
        ["穩定性與例外處理", "API 優先讀取成功快取，上游失敗保留既有資料不覆蓋，建立分層錯誤日誌。"],
        ["部署與維運架構", "Node.js 綁定 Localhost，由 IIS URL Rewrite/ARR 對外 Proxy，Task Scheduler 排程開機自啟與重試。"],
      ],
      images: [],
    },
    {
      chapter: "04 · User Flow",
      title: "從外部網頁爬取、格式清理到儀表板呈現與 LINE 推播的雙軌流程",
      body: "雙軌流程涵蓋一般使用者的即時情資研判與公告發布，以及背景資料服務依 1 分鐘或 5 分鐘週期排程抓取外部網頁、Cheerio 解析 DOM、清理轉換、快取更新與例外日誌追蹤。",
      callout: "核心流程：外部資料來源 → 排程抓取 → HTML／DOM 解析 → 清理與格式轉換 → 成功快取 → API／IIS → 儀表板、地圖與通知",
      insights: [
        ["一般使用者流程", "進入入口或儀表板，依災害類型查看天氣、水情、CCTV 與地圖，並發布公告或發送 LINE 通知。"],
        ["排程抓取與解析", "排程器依 1 或 5 分鐘啟動，Node.js 抓取網頁，Cheerio 解析 DOM 進行清洗與型別轉換。"],
        ["資料快取與 API 輸出", "將資料轉為標準 XML／JSON 寫入最新成功快取，透過 Express API 與 IIS Reverse Proxy 提供服務。"],
        ["失敗保留與維運定位", "若外部來源失敗，保留前次成功資料，並於狀態 API 與 Log 記錄錯誤供維運人員追查。"],
      ],
      images: [],
    },
    {
      chapter: "05 · Wireframes / Prototype",
      title: "入口總覽、災害主題頁、GIS 地圖與多裝置響應式設計",
      body: "原型與網站設計涵蓋桌面版、行動版及不同災害主題頁：包含一頁式防災總覽、颱風/豪雨主題頁、GIS 地圖點位、標準化資訊卡、公告與 LINE 通知管理介面、資料介接規格表與 Responsive Prototype。",
      facts: ["一頁式防災總覽", "颱風/豪雨主題頁", "GIS 空間圖層", "公告與 LINE 通知", "介接規格表", "RWD 響應式原型"],
      insights: [
        ["入口首頁", "以天氣概況、即時警示、常用資訊卡、地圖及最新公告建立一頁式防災總覽。"],
        ["災害主題頁", "依颱風、豪雨、淹水等事件切換主題色與資訊模組，使值勤人員快速辨識情境。"],
        ["GIS 地圖與資訊卡", "顯示事件點位、行政區、CCTV、水情圖層；將異質來源資料轉為一致卡片呈現。"],
        ["規格表與 RWD", "逐項記錄來源 URL、更新頻率、API 規格，並以多版型驗證桌面、平板與手機閱讀性。"],
      ],
      images: [],
    },
    {
      chapter: "06 · Rollout / Impact",
      title: "建立高容錯的公共資料服務鏈，支撐縣市即時防災營運",
      body: "將分散的公共防災資訊轉換為可供下游系統重複使用的結構化資料服務。透過成功快取與失敗保留機制，降低上游網站短暫異常對前端查詢的影響，並建立狀態 API、Log 與分層診斷方式，有效提升 Production Support 效率。",
      insights: [
        ["異質資料結構化", "成功將分散的公共防災網頁轉換為可供網站與下游系統使用的高可用資料服務。"],
        ["完整工程整合鏈路", "涵蓋網頁取得、HTML 解析、資料清洗、XML/JSON 轉換、API 提供到 IIS 部署。"],
        ["成功快取與高容錯", "即使外部上游網站短暫異常或斷線，系統仍保留前次成功資料，保障前端不空白。"],
        ["分層診斷與日常營運", "明確區隔爬蟲、Node.js、IIS、Proxy 或來源端問題，持續支援網站、儀表板與 LINE 通知營運。"],
      ],
      callout: "成效體現在端到端的工程韌性—將不穩定的外部網頁爬取，封裝成高穩定度、高容錯的企業級防災資料服務。",
      images: [],
    },
  ],
};

export const aiVisionTrainingCaseStudy = {
  id: "ai-vision-training",
  title: "AI 影像辨識與自動訓練平台",
  fullTitle: "AI 影像辨識與自動訓練平台：面向搜救無人機影像的端到端模型生命週期 MLOps",
  slides: [
    {
      chapter: "01 · Project Overview",
      title: "搜救與災防無人機影像的端到端模型生命週期管理平台",
      body: "本專案面向無人機搜救與災害應變場景，針對山域、水域、彩色及熱顯影像建立從資料蒐集、標註、Dataset 管理、模型訓練、測試驗證、自動再訓練到 Model Drift 監控的完整模型生命週期平台。主要辨識目標為人員及搜救情境中的相關物件。",
      facts: ["彩色／熱顯影像", "山域／水域場景", "模型生命週期 MLOps", "500 筆自動再訓練", "Model Drift 監控"],
      callout: "我的角色 — 擔任 AI 需求與模型品質規劃角色，負責將使用者需求轉換為 Dataset 規則、標註流程、訓練觸發條件、模型版本、辨識率計算方式、測試案例與驗收條件，並協調前端、後端、AI、QA 及搜救使用者共同完成開發與驗證。",
      images: [],
    },
    {
      chapter: "02 · Goals",
      title: "建立跨場景標註流程、自動再訓練與可驗收的 AI 模型閉環",
      body: "建立可管理彩色、熱顯、山域及水域影像的資料與標註流程，提升訓練資料的一致性與可追蹤性，並將一次性模型訓練轉為持續循環的模型生命週期，產出可供搜救人員判讀的成果。",
      insights: [
        ["01 · 跨場景標註流程", "建立管理彩色、熱顯、山域及水域的資料與標註流程，提升訓練資料一致性與追蹤性。"],
        ["02 · 模型生命週期閉環", "將單次訓練轉為持續循環，支援新資料加入、自動再訓練、版本管理與品質比較。"],
        ["03 · 可測試與驗收指標", "將非確定性的 AI 輸出轉換為可測試、可驗收的資料集、情境、門檻與測試文件。"],
        ["04 · 搜救成果直觀呈現", "支援人員辨識，結果以影像框選、清單或 GIS 地圖方式供搜救人員直觀判讀。"],
        ["05 · 持續監控與防退化", "透過 Model Drift 與失敗案例回收，持續監控不同場域與資料分布下的模型品質。"],
      ],
      callout: "核心目標：把 AI 專案由『演算法單次訓練』升級為『可管理、可測試、可追溯並持續迭代』的產品生命週期。",
      images: [],
    },
    {
      chapter: "03 · Requirements Analysis",
      title: "拆解 Dataset 規則、自動再訓練門檻與嚴謹的驗收機制",
      body: "主要使用者包含搜救災防人員、資料標註人員、AI 工程師、系統管理者及 QA。搜救情境需涵蓋山域、水域、彩色與熱顯影像。系統需嚴密追溯影像來源、標註狀態、Dataset、訓練任務、模型版本與驗收結果。",
      facts: ["跨場景資料集", "500 筆觸發條件", "版本雙向追溯", "誤判／漏判分析", "Model Drift 監控"],
      insights: [
        ["使用者與場景需求", "確認不同環境下的人員辨識表現，全流程追溯標註、資料集、訓練與測試版本。"],
        ["Dataset 與標註需求", "嚴格區分彩色/熱顯與山/水域場景，定義有效標註條件與異常排除，綁定資料與模型關聯。"],
        ["訓練與模型管理", "支援建立任務與參數設定；自動再訓練規則包含累積 500 筆新標註有效影像。新模型不直接覆蓋舊版。"],
        ["品質驗收與 Drift 監控", "建立彩色與熱顯測試情境，定義辨識率計算方式與門檻，規劃 Model Drift 評估。"],
      ],
      images: [],
    },
    {
      chapter: "04 · User Flow",
      title: "上傳標註、自動訓練、QA 測試到成果地圖呈現的完整路徑",
      body: "涵蓋素材上傳、標註檢核、Dataset 劃分、訓練任務發起、彩色／熱顯測試集驗收、可用版本發布與 GIS 框選結果呈現，並在累積新標註資料達到 500 筆時啟動自動再訓練與 Drift 評估。",
      callout: "核心流程：影像／影片上傳 → 標註與品質檢查 → Dataset 建立 → 訓練任務 → 進度與版本管理 → 彩色／熱顯測試 → 驗收 → 新資料回收 → 自動再訓練／Drift 監控",
      insights: [
        ["1. 素材上傳與標註審核", "匯入彩色、熱顯、山域與水域素材，標註人員框選目標、設定標籤並完成品質檢查。"],
        ["2. 資料集劃分與任務建立", "管理者依場景建立 Dataset，AI 管理者設定參數並建立訓練任務，即時追蹤進度。"],
        ["3. 測試驗收與 GIS 呈現", "QA 執行彩色及熱顯測試核對誤判/漏判，合格模型發布並於影像或 GIS 地圖呈現結果。"],
        ["4. 自動再訓練與 Drift 監控", "累積 500 筆有效新標註時啟動再訓練評估，藉版本比對與 Drift 測試持續改善。"],
      ],
      images: [],
    },
    {
      chapter: "05 · Wireframes / Prototype",
      title: "素材管理、標註工作台、Dataset 庫、訓練任務與測試視窗",
      body: "原型以『資料、模型、測試』三條工作線為核心規劃：包含素材批次管理、標註編輯器、Dataset 版本庫、模型訓練列表、進度條看板、測試執行視窗、API 設定視窗及 GIS 搜救成果畫面。",
      facts: ["素材批次管理", "標註編輯工作台", "Dataset 版本庫", "訓練任務看板", "測試對比視窗", "GIS 成果地圖"],
      insights: [
        ["素材與標註工作台", "縮圖與清單管理大量素材；標註編輯介面在影像上框選目標並調整標籤與屬性。"],
        ["Dataset 與任務看板", "以列表管理資料集版本；以進度條與狀態呈現訓練排程與成功／失敗狀態。"],
        ["測試視窗與 API 設定", "選擇模型與測試集核對辨識框與誤判率；管理服務端點與參數以供前端串接。"],
        ["GIS 搜救成果呈現", "將影像拍攝位置、辨識狀態與框選結果放入 GIS 畫面，支援搜救情境直觀判讀。"],
      ],
      images: [],
    },
    {
      chapter: "06 · Rollout / Impact",
      title: "建立數萬筆影像處理能力與可落地的 MLOps 模型生命週期",
      body: "建立涵蓋資料有效性、標註、Dataset、模型訓練、版本管理、自動再訓練、Drift 監控與測試文件的模型生命週期控制流程。平台資料處理規模涵蓋數萬筆影像，支援彩色、熱顯、山域及水域等跨場景管理。",
      insights: [
        ["完整 MLOps 控制流程", "建立資料有效性、標註、版本管理、自動再訓練與測試文件的生命週期規範。"],
        ["數萬筆跨場景影像", "支援彩色、熱顯、山域及水域跨場景資料處理，打破單一環境訓練限制。"],
        ["明確再訓練觸發依據", "納入『累積 500 筆新標註有效影像』條件，使模型更新不再依賴人工隨機決策。"],
        ["工程化產品閉環", "將非確定性 AI 模型轉換為團隊能具體溝通、測試與維護的產品規格。"],
      ],
      callout: "專案成果重點在於把 AI 模型由單次訓練推進為可管理、可測試、可追溯並可持續改善的產品流程。",
      images: [],
    },
  ],
};
