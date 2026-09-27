import { useEffect, useRef, useState } from "react";
import { workforceDispatchCaseStudy } from "./caseStudyData";

const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

const folders = {
  work: {
    title: "Case Studies",
    subtitle: "5 items",
    images: [
      asset("thumbnails/folder-work-01.webp"),
      asset("thumbnails/folder-work-02.webp"),
      asset("thumbnails/folder-work-03.webp"),
    ],
    items: [
      {
        title: "Enterprise Mobile Workforce & Dispatch Platform",
        image: asset("case-study-workforce/card-workforce.webp"),
        tags: ["System Analysis", "Dispatch", "Enterprise Platform"],
        caseStudy: "workforce-dispatch",
      },
      {
        title: "AI-assisted Knowledge Experience",
        image: asset("project-ai-ops.webp"),
        tags: ["AI Application", "RAG Evaluation"],
      },
      {
        title: "Enterprise System Modernization",
        image: asset("project-system.avif"),
        tags: ["8 Modules", "50+ Functions"],
      },
      {
        title: "Cross-functional Delivery Toolkit",
        image: asset("project-automation.avif"),
        tags: ["UAT", "Launch"],
      },
      {
        title: "Product Discovery & Adoption",
        image: asset("project-research.avif"),
        tags: ["Research", "+12% Adoption"],
      },
    ],
  },
  beyond: {
    title: "Beyond Work",
    subtitle: "13 items",
    kind: "activities",
    images: [
      asset("thumbnails/folder-beyond-01.webp"),
      asset("thumbnails/folder-beyond-02.webp"),
      asset("thumbnails/folder-beyond-03.webp"),
    ],
    items: [
      {
        title: "Dadushan Trail Run",
        images: [asset("beyond-work-01.webp"), asset("beyond-work-02.webp")],
        description: "Trail running requires constant adjustment across terrain, energy, and weather. It helps me stay focused, make decisions under uncertainty, and keep moving with control.",
        tags: ["Trail Run", "Endurance", "Adaptability"],
      },
      {
        title: "Sun Moon Lake Marathon",
        images: [asset("beyond-work-03.webp"), asset("beyond-work-04.webp"), asset("beyond-work-05.webp")],
        description: "A long-distance race works like a roadmap: it requires clear goals, milestones, pacing, refueling, and constant strategy adjustment along the way.",
        tags: ["Marathon", "Roadmap", "Persistence"],
      },
      {
        title: "Taiwan Water Corporation International Exchange",
        images: [asset("beyond-work-06.webp")],
        description: "Participating in cross-cultural public service exchange helped me understand infrastructure, service communication, and practical collaboration from different perspectives.",
        tags: ["International Exchange", "Public Service", "Communication"],
      },
      {
        title: "Malta Language School",
        images: [asset("beyond-work-07.webp"), asset("beyond-work-08.webp"), asset("beyond-work-09.webp"), asset("beyond-work-10.webp")],
        description: "Studying abroad in Malta helped me practice English communication, adapt to different cultures, and become more proactive when collaborating with international teams.",
        tags: ["Language Learning", "International", "Communication"],
      },
      {
        title: "Hehuan North Peak",
        images: [asset("beyond-work-11.webp"), asset("beyond-work-12.webp")],
        description: "Hiking teaches me to observe routes, weather, and physical condition carefully while making risk-aware decisions in real environments.",
        tags: ["Mountain", "Outdoor", "Observation"],
      },
      {
        title: "Hupao Shuangxi Trail Run",
        images: [asset("beyond-work-13.webp"), asset("beyond-work-14.webp"), asset("beyond-work-15.webp")],
        description: "Running through mountain trails and stream crossings helps me practice focus, route judgment, and steady progress across changing terrain.",
        tags: ["Trail Run", "Focus", "Terrain"],
      },
      {
        title: "Taichung Half Marathon",
        images: [asset("beyond-work-16.webp"), asset("beyond-work-17.webp")],
        description: "Half-marathon training helps me plan practice within limited time, review progress, and adjust pace through trackable iteration.",
        tags: ["Half Marathon", "Iteration", "Discipline"],
      },
      {
        title: "Nantou Zhongxing New Village Marathon",
        images: [asset("beyond-work-18.webp")],
        description: "Running a local race reminds me that consistency matters as much as the finish line, and that steady commitment shapes the outcome.",
        tags: ["Local Race", "Consistency", "Focus"],
      },
      {
        title: "ELLE RUN",
        images: [asset("beyond-work-19.webp"), asset("beyond-work-20.webp")],
        description: "City running helps me maintain a regular training rhythm while practicing pacing, energy management, and self-discipline in a goal-oriented setting.",
        tags: ["Running", "Routine", "Momentum"],
      },
      {
        title: "ZEPPO Half Marathon",
        images: [asset("beyond-work-21.webp")],
        description: "Every half marathon is a recalibration of pacing, refueling, and real-time condition management, connecting planning with feedback from the field.",
        tags: ["Half Marathon", "Pacing", "Reflection"],
      },
      {
        title: "2026 Annual Party Hosting",
        images: [asset("beyond-work-22.webp")],
        description: "Hosting an annual event required clear communication, pacing, audience awareness, and quick responses while keeping the team engaged.",
        tags: ["Hosting", "Communication", "Engagement"],
      },
      {
        title: "Metropolitan Park Relay Race",
        images: [asset("beyond-work-23.webp")],
        description: "Relay racing turns individual pacing into a shared delivery plan, strengthening handoff discipline, team awareness, and mutual accountability.",
        tags: ["Relay Race", "Teamwork", "Handoff"],
      },
      {
        title: "VISOGE Night Run Party Taichung",
        images: [asset("beyond-work-24.webp")],
        description: "Running in changing weather and low-light conditions reinforced adaptability, energy management, and the habit of staying composed when conditions shift.",
        tags: ["Night Run", "Adaptability", "Resilience"],
      },
    ],
  },
};

const socials = [
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com/in/sarahsaladchang" },
  { label: "Email", short: "@", href: "mailto:sarahsaladchang@gmail.com" },
];

function Draggable({ initial, className = "", children, onActivate, label }) {
  const [position, setPosition] = useState(initial);
  const drag = useRef(null);

  const onPointerDown = (event) => {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    drag.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: position.x,
      y: position.y,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!drag.current || drag.current.id !== event.pointerId) return;
    const dx = event.clientX - drag.current.startX;
    const dy = event.clientY - drag.current.startY;
    if (Math.abs(dx) + Math.abs(dy) > 5) drag.current.moved = true;
    setPosition({
      x: Math.max(12, Math.min(window.innerWidth - 170, drag.current.x + dx)),
      y: Math.max(72, Math.min(window.innerHeight - 180, drag.current.y + dy)),
      rotate: initial.rotate,
    });
  };

  const onPointerUp = (event) => {
    if (!drag.current || drag.current.id !== event.pointerId) return;
    const shouldOpen = !drag.current.moved;
    drag.current = null;
    if (shouldOpen && onActivate) onActivate();
  };

  return (
    <div
      className={`draggable ${className}`}
      style={{
        "--x": `${position.x}px`,
        "--y": `${position.y}px`,
        "--r": `${position.rotate || 0}deg`,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onClick={() => {
        if (window.matchMedia("(max-width: 760px)").matches && onActivate) onActivate();
      }}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && onActivate) onActivate();
      }}
      role={onActivate ? "button" : undefined}
      tabIndex={onActivate ? 0 : undefined}
      aria-label={label}
    >
      {children}
    </div>
  );
}

function StickyNote({ tone, title, children }) {
  return (
    <article className={`sticky-note ${tone}`}>
      <h2>{title}</h2>
      <div className="sticky-note-copy">{children}</div>
    </article>
  );
}

const toolGroups = [
  {
    title: "需求分析與設計規格相關工具：",
    tools: ["Figma", "AxureRP", "Roadmap", "PRD", "Prototype", "Draw.io", "XMind"],
  },
  {
    title: "專案管理：",
    tools: ["Notion", "SSDLC", "Git", "UAT", "E2ETesting", "SOP"],
  },
  {
    title: "技術整合與AI應用：",
    tools: ["SQL", "Schema", "RESTfulAPI", "JSON/XML", "LLM/RAG/MCP", "GIS/IoT"],
  },
];

function ToolsPanel() {
  return (
    <article className="tools-card">
      <h2>Tools</h2>
      {toolGroups.map((group) => (
        <section className="tool-group" key={group.title}>
          <h3>{group.title}</h3>
          <div className="tool-tags">
            {group.tools.map((tool) => <span key={tool}>#{tool}</span>)}
          </div>
        </section>
      ))}
    </article>
  );
}

function FolderArt({ images }) {
  return (
    <div className="folder-art" aria-hidden="true">
      {images.slice(0, 3).map((src, index) => (
        <div className={`folder-image layer-${index + 1}`} key={src}>
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
}

function FolderIcon({ folder }) {
  return (
    <div className="desktop-icon folder-icon">
      <FolderArt images={folder.images} />
      <div className="icon-label">
        <h3>{folder.title}</h3>
        <p>{folder.subtitle}</p>
      </div>
    </div>
  );
}

function GuestBookIcon() {
  return (
    <div className="desktop-icon">
      <div className="book-icon" aria-hidden="true">
        <span>GUEST</span>
        <span>BOOK</span>
        <i />
      </div>
      <div className="icon-label">
        <h3>Guest Book</h3>
        <p>Leave a note</p>
      </div>
    </div>
  );
}

function ResumeIcon() {
  return (
    <div className="desktop-icon">
      <div className="resume-icon">
        <img src={asset("resume.webp")} alt="Resume preview" />
      </div>
      <div className="icon-label">
        <h3>resume.pdf</h3>
      </div>
    </div>
  );
}

function ActivityCarousel({ item }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const swipeStart = useRef(null);
  const images = item.images || [item.image];
  const hasMultiplePhotos = images.length > 1;

  const movePhoto = (direction) => {
    setActivePhoto((current) => (current + direction + images.length) % images.length);
  };

  return (
    <div
      className="activity-media"
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") swipeStart.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (swipeStart.current === null) return;
        const distance = event.clientX - swipeStart.current;
        swipeStart.current = null;
        if (Math.abs(distance) > 44) movePhoto(distance > 0 ? -1 : 1);
      }}
    >
      <img
        src={images[activePhoto]}
        alt={`${item.title} photo ${activePhoto + 1} of ${images.length}`}
        loading="lazy"
        decoding="async"
      />
      {hasMultiplePhotos && (
        <>
          <button type="button" className="activity-nav previous" onClick={() => movePhoto(-1)} aria-label={`Previous ${item.title} photo`}>‹</button>
          <button type="button" className="activity-nav next" onClick={() => movePhoto(1)} aria-label={`Next ${item.title} photo`}>›</button>
          <span className="activity-counter">{activePhoto + 1} / {images.length}</span>
        </>
      )}
    </div>
  );
}

function WindowControls({ onClose }) {
  return (
    <div className="window-controls" aria-label="Window controls">
      <button className="control close" onClick={onClose} aria-label="Close window" />
    </div>
  );
}

function FinderWindow({ folder, onClose, onOpenCaseStudy }) {
  return (
    <div className="modal-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        className="finder-window"
        role="dialog"
        aria-modal="true"
        aria-label={`${folder.title} portfolio folder`}
      >
        <header className="finder-toolbar">
          <WindowControls onClose={onClose} />
          <div className="finder-title">
            <strong>{folder.title}</strong>
            <span>{folder.items.length} files</span>
          </div>
        </header>

        <div className={`file-grid ${folder.kind === "activities" ? "activity-grid" : ""}`}>
          {folder.items.map((item) => {
            const content = (
              <>
              {item.images ? <ActivityCarousel item={item} /> : <img src={item.image} alt="" loading="lazy" decoding="async" />}
              <h3 title={item.title}>{item.title}</h3>
              {item.description && <p className="activity-description">{item.description}</p>}
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              </>
            );

            if (item.caseStudy) {
              return (
                <button
                  type="button"
                  className="project-file project-file-button"
                  key={item.title}
                  onClick={() => onOpenCaseStudy(item.caseStudy)}
                  aria-label={`Open ${item.title} case study`}
                >
                  {content}
                </button>
              );
            }

            return <article className={`project-file ${item.description ? "activity-card" : ""}`} key={item.title}>{content}</article>;
          })}
        </div>
      </section>
    </div>
  );
}

function CaseStudyWindow({ study, onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const swipeStart = useRef(null);
  const slideCount = study.slides.length;

  const goTo = (nextSlide) => {
    setActiveSlide(Math.max(0, Math.min(slideCount - 1, nextSlide)));
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft") goTo(activeSlide - 1);
      if (event.key === "ArrowRight") goTo(activeSlide + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSlide, slideCount]);

  return (
    <div className="modal-layer case-study-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="case-study-window" role="dialog" aria-modal="true" aria-label={`${study.title} case study`}>
        <header className="case-study-toolbar">
          <WindowControls onClose={onClose} />
          <div className="case-study-title">
            <strong>{study.title}</strong>
            <span>{activeSlide + 1} of {slideCount}</span>
          </div>
          <nav className="case-study-navigation" aria-label="Case study chapters">
            <button type="button" onClick={() => goTo(activeSlide - 1)} disabled={activeSlide === 0}>Previous</button>
            <button type="button" onClick={() => goTo(activeSlide + 1)} disabled={activeSlide === slideCount - 1}>Next</button>
          </nav>
        </header>

        <div
          className="case-study-viewport"
          onPointerDown={(event) => { swipeStart.current = event.clientX; }}
          onPointerUp={(event) => {
            if (swipeStart.current === null) return;
            const distance = event.clientX - swipeStart.current;
            swipeStart.current = null;
            if (Math.abs(distance) > 60) goTo(activeSlide + (distance < 0 ? 1 : -1));
          }}
        >
          <div className="case-study-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {study.slides.map((slide, slideIndex) => {
              const images = slide.images ?? [
                { src: slide.image, alt: slide.imageAlt },
                ...(slide.secondaryImage ? [{ src: slide.secondaryImage, alt: "" }] : []),
              ];

              return (
                <article className="case-study-slide" key={slide.chapter} aria-hidden={slide.chapter !== study.slides[activeSlide].chapter}>
                  <div className="case-study-copy">
                    <p className="case-study-chapter">{slide.chapter}</p>
                    <h2>{slide.title}</h2>
                    <p className="case-study-body">{slide.body}</p>
                    {slide.facts && <div className="case-study-facts">{slide.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>}
                    {slide.insights && (
                      <div className="case-study-insights">
                        {slide.insights.map(([title, detail]) => <section key={title}><h3>{title}</h3><p>{detail}</p></section>)}
                      </div>
                    )}
                    {slide.callout && <blockquote>{slide.callout}</blockquote>}
                  </div>
                  <div className={`case-study-visual image-count-${images.length}`}>
                    {images.map((image) => (
                      <figure key={image.src}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading={slideIndex === activeSlide ? "eager" : "lazy"}
                          decoding="async"
                        />
                        {image.label && <figcaption>{image.label}</figcaption>}
                      </figure>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="case-study-thumbnails" role="tablist" aria-label="Jump to a chapter">
          {study.slides.map((slide, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === activeSlide}
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => goTo(index)}
              key={slide.chapter}
            >
              <img
                src={slide.thumbnail ?? (slide.images?.[0] ?? { src: slide.image }).src}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span>{slide.chapter.replace(/^\d+ · /, "")}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function GuestBook({ onClose }) {
  const [entries, setEntries] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sarah-portfolio-guestbook")) || [
        { message: "Thoughtful, clear and wonderfully playful.", name: "Portfolio visitor" },
        { message: "A great way to explore your work.", name: "Future teammate" },
      ];
    } catch {
      return [];
    }
  });
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const addEntry = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    const next = [...entries, { message: message.trim(), name: name.trim() || "Guest" }];
    setEntries(next);
    localStorage.setItem("sarah-portfolio-guestbook", JSON.stringify(next));
    setMessage("");
    setName("");
  };

  return (
    <div className="modal-layer guest-layer" role="presentation">
      <button className="guest-close" onClick={onClose} aria-label="Close guest book">×</button>
      <section className="open-book" role="dialog" aria-modal="true" aria-label="Guest book">
        <div className="book-page guest-entries">
          <h2>Guest Book</h2>
          <div className="entry-list">
            {entries.slice(-5).map((entry, index) => (
              <p key={`${entry.message}-${index}`}>
                {entry.message} <span>— {entry.name}</span>
              </p>
            ))}
          </div>
          <small>{entries.length} local entries</small>
        </div>
        <form className="book-page guest-form" onSubmit={addEntry}>
          <h2>Leave a note</h2>
          <label>
            Message
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value.slice(0, 100))}
              placeholder="Write your message..."
              maxLength={100}
            />
          </label>
          <label>
            Name
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
          </label>
          <button type="submit">Sign locally</button>
          <small>{message.length}/100 · saved only in this browser</small>
        </form>
      </section>
    </div>
  );
}

function ResumeWindow({ onClose }) {
  return (
    <div className="modal-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="resume-window" role="dialog" aria-modal="true" aria-label="Resume preview">
        <header className="finder-toolbar">
          <WindowControls onClose={onClose} />
          <div className="finder-title"><strong>resume.pdf</strong><span>Preview</span></div>
          <button className="print-button" onClick={() => window.print()}>Print / Save PDF</button>
        </header>
        <article className="resume-paper">
          <p className="eyebrow">TECHNICAL SOLUTION PM · DIGITAL TRANSFORMATION</p>
          <h2>Sarah Chang</h2>
          <p className="resume-summary">Turning complex requirements into clear specifications, reliable delivery, and measurable product outcomes.</p>
          <div className="metric-strip">
            <strong>5+ years</strong><strong>15+ projects</strong><strong>40K+ users</strong><strong>100% on-time</strong>
          </div>
          <h3>Selected impact</h3>
          <ul>
            <li>Coordinated cross-functional delivery from requirements and API/data integration through UAT, launch, and production support.</li>
            <li>Supported enterprise platforms spanning 8 modules, 50+ functions, and more than 1M records.</li>
            <li>Improved feature adoption by 12% and SQL Stored Procedure performance by approximately 10%.</li>
          </ul>
          <p className="resume-footnote">Replace the sample contact links and connect your final resume PDF before publishing.</p>
        </article>
      </section>
    </div>
  );
}

function MusicPlayer({ open, setOpen }) {
  const [playing, setPlaying] = useState(false);

  if (!open) {
    return (
      <button className="player-dock" onClick={() => setOpen(true)} aria-label="Open now playing">
        <span className="equalizer"><i /><i /><i /></span>
        <strong>Now Playing</strong>
        <b>＋</b>
      </button>
    );
  }

  return (
    <aside className="player-card" aria-label="Now playing">
      <header>
        <span><span className="equalizer"><i /><i /><i /></span>Now Playing</span>
        <button onClick={() => setOpen(false)} aria-label="Minimize player">—</button>
      </header>
      <div className="player-body">
        <img src={asset("music-cover.webp")} alt="Music cover" />
        <div>
          <strong>Focus mode</strong>
          <span>Sarah's work session</span>
          <button className="play-button" onClick={() => setPlaying((value) => !value)}>{playing ? "Ⅱ" : "▶"}</button>
        </div>
      </div>
    </aside>
  );
}

export function App() {
  const [activeFolder, setActiveFolder] = useState(null);
  const [guestOpen, setGuestOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (activeCaseStudy) {
          setActiveCaseStudy(null);
          return;
        }
        setActiveFolder(null);
        setGuestOpen(false);
        setResumeOpen(false);
        setPlayerOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCaseStudy]);

  return (
    <main className="desktop-shell">
      <div className="sky-photo" />
      <div className="dot-grid" />

      <header className="topbar">
        <div className="brand-lockup">
          <strong>SARAH CHANG</strong>
          <span>•</span>
          <p>TECHNICAL PRODUCT MANAGER + CURIOUS BUILDER</p>
        </div>
        <nav aria-label="Social links">
          {socials.map((social) => (
            <a href={social.href} key={social.label} aria-label={social.label} title={social.label}>
              {social.short}
            </a>
          ))}
        </nav>
      </header>

      <section className="desktop-canvas" aria-label="Interactive portfolio desktop">
        <Draggable initial={{ x: 36, y: 64, rotate: -2 }} className="note-one">
          <StickyNote tone="yellow" title="Technical Product Manager">
            <p>5 years of experience in system analysis and digital project delivery.</p>
            <p>My strength is translating complex business requirements into clear technical solutions and coordinating different teams to make sure projects are delivered successfully.</p>
          </StickyNote>
        </Draggable>

        <Draggable initial={{ x: 72, y: 367, rotate: 1.5 }} className="note-two">
          <StickyNote tone="white" title="Delivery Mindset">
            <p>Contributed to 15+ enterprise systems, data platforms, and AI-enabled projects across requirements, integration, testing, UAT, launch, and production support.</p>
          </StickyNote>
        </Draggable>

        <Draggable initial={{ x: 960, y: 106, rotate: 0.5 }} className="tools-panel">
          <ToolsPanel />
        </Draggable>

        <Draggable initial={{ x: 390, y: 96 }} onActivate={() => setActiveFolder("work")} label="Open Case Studies">
          <FolderIcon folder={folders.work} />
        </Draggable>

        <Draggable initial={{ x: 585, y: 96 }} onActivate={() => setGuestOpen(true)} label="Open Guest Book">
          <GuestBookIcon />
        </Draggable>

        <Draggable initial={{ x: 780, y: 96 }} onActivate={() => setResumeOpen(true)} label="Open resume preview">
          <ResumeIcon />
        </Draggable>

        <Draggable initial={{ x: 487, y: 340 }} onActivate={() => setActiveFolder("beyond")} label="Open Beyond Work">
          <FolderIcon folder={folders.beyond} />
        </Draggable>

        <Draggable initial={{ x: 682, y: 340 }} onActivate={() => setPlayerOpen(true)} label="Open Learning Playlist">
          <div className="desktop-icon">
            <div className="music-icon"><img src={asset("music-cover.webp")} alt="" /></div>
            <div className="icon-label"><h3>Learning Log</h3><p>3 items</p></div>
          </div>
        </Draggable>
      </section>

      <MusicPlayer open={playerOpen} setOpen={setPlayerOpen} />

      {activeFolder && (
        <FinderWindow
          folder={folders[activeFolder]}
          onClose={() => setActiveFolder(null)}
          onOpenCaseStudy={setActiveCaseStudy}
        />
      )}
      {guestOpen && <GuestBook onClose={() => setGuestOpen(false)} />}
      {resumeOpen && <ResumeWindow onClose={() => setResumeOpen(false)} />}
      {activeCaseStudy === workforceDispatchCaseStudy.id && <CaseStudyWindow study={workforceDispatchCaseStudy} onClose={() => setActiveCaseStudy(null)} />}
    </main>
  );
}
