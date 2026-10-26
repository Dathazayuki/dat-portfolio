import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { copy, profile, projects, skillGroups } from "./content.js";
import resumeUrl from "../CV_TrinhMinhDat (2).pdf?url";
import "./styles.css";
import "./nightcity.css";
import "./project-media.css";

function Icon({ name = "arrow", size = 20 }) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    right: <path d="M4 12h16m-6-6 6 6-6 6" />,
    down: <path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" />,
    code: <path d="m7 7-5 5 5 5m10-10 5 5-5 5m-3-14-4 18" />,
    game: <><path d="M7 6h10c3 0 6 12 4 13s-5-4-6-4H9c-1 0-4 5-6 4S4 6 7 6Z" /><path d="M6 10v5m-2-2.5h4m8-2h.01m2 3h.01" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    github: <path d="M9 19c-4 1-4-2-6-2m13 5v-4c0-1-.3-2-1-2.5 4-.5 6-2 6-6a5 5 0 0 0-1.5-3.5c.4-1 .4-2.5-.1-3.5-2-.5-4 1-4 1a14 14 0 0 0-7 0s-2-1.5-4-1c-.5 1-.5 2.5-.1 3.5A5 5 0 0 0 3 9.5c0 4 2 5.5 6 6-.7.5-1 1.5-1 2.5v4" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
    copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M15 8V3H3v13h5" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    star: <path d="m12 2 2.4 7.6H22l-6.2 4.5 2.4 7.5L12 17l-6.2 4.6 2.4-7.5L2 9.6h7.6Z" />,
    play: <path d="m8 4 13 8-13 8Z" />,
    figma: <><rect x="4" y="2" width="16" height="6" rx="3" /><path d="M12 2v17a3 3 0 1 1-3-3h3M12 8H7a3 3 0 0 0 0 6h5" /><circle cx="17" cy="11" r="3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Brand() {
  return <span className="brand"><span className="brand-mark">đ<span>.</span></span><span>DAT<span className="brand-slash">/</span>DEV<span className="brand-star">✳</span></span></span>;
}

function SectionHeading({ number, label, title, accent, description }) {
  return <div className="section-heading reveal"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}<br /><em>{accent}</em></h2></div>{description && <p className="section-description">{description}</p>}</div>;
}

function ProjectVisual({ project, lang, imageIndex = 0, eager = false, cover = false }) {
  if (cover && project.imageLayout === "portrait") return <div className="project-visual screenshot-visual portrait-cover">{project.images.map(photo => <img key={photo.src} src={photo.src} alt={photo.caption[lang]} width={photo.width} height={photo.height} loading="lazy" decoding="async" />)}</div>;
  const photo = project.images?.[imageIndex];
  if (photo) return <div className={`project-visual screenshot-visual ${project.imageLayout === "portrait" ? "portrait-visual" : ""}`}><img src={photo.src} alt={photo.caption[lang]} width={photo.width} height={photo.height} loading={eager ? "eager" : "lazy"} decoding="async" /></div>;
  return null;
}

function ProjectGallery({ project, lang }) {
  const [imageIndex, setImageIndex] = useState(0);
  const t = copy[lang];
  const images = project.images;
  if (!images?.length) return <div role="img" aria-label={t.preview}><ProjectVisual project={project} lang={lang} /></div>;
  const changeImage = direction => setImageIndex(index => (index + direction + images.length) % images.length);
  return <div className={`project-gallery ${project.imageLayout === "portrait" ? "portrait-gallery" : ""}`} role="region" aria-label={`${project.title}: ${t.gallery}`} tabIndex={images.length > 1 ? 0 : undefined} onKeyDown={e => {
    if (images.length < 2 || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); changeImage(e.key === "ArrowLeft" ? -1 : 1); }
  }}>
    <figure><ProjectVisual project={project} lang={lang} imageIndex={imageIndex} eager />
      <figcaption className="gallery-caption" aria-live="polite"><span>{images[imageIndex].caption[lang]}</span>{images.length > 1 && <span className="gallery-counter">{imageIndex + 1} / {images.length}</span>}</figcaption>
    </figure>
    {images.length > 1 && <div className="gallery-controls">
      <button className="icon-button gallery-previous" onClick={() => changeImage(-1)} aria-label={t.previousImage}><Icon name="right" size={18} /></button>
      <div className="gallery-thumbnails">{images.map((photo, index) => <button key={photo.src} onClick={() => setImageIndex(index)} aria-pressed={imageIndex === index} aria-label={`${t.showImage} ${index + 1}: ${photo.caption[lang]}`}><img src={photo.src} alt="" width={photo.width} height={photo.height} loading="lazy" decoding="async" /></button>)}</div>
      <button className="icon-button" onClick={() => changeImage(1)} aria-label={t.nextImage}><Icon name="right" size={18} /></button>
    </div>}
  </div>;
}

function HeroArt() {
  const ref = useRef(null);
  function move(e) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = e.currentTarget.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${((e.clientX - box.left) / box.width - .5) * 16}px`);
    ref.current.style.setProperty("--my", `${((e.clientY - box.top) / box.height - .5) * 16}px`);
  }
  return <div className="hero-art" ref={ref} onPointerMove={move} onPointerLeave={() => { ref.current.style.setProperty("--mx", "0px"); ref.current.style.setProperty("--my", "0px"); }} aria-hidden="true">
    <div className="art-topline"><span>INTERACTIVE BY NATURE</span><span>001 — ∞</span></div><div className="art-dot-grid" /><div className="art-glow" />
    <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
    <div className="art-center"><div className="hero-cube"><i className="cube-top" /><i className="cube-left" /><i className="cube-right" /><span>đ.</span></div></div>
    <div className="art-code"><div><i /><i /><i /><span>player.cs</span></div><code><span>void</span> CreateExperience()<br />{"{"}<br />&nbsp; ideas.<b>Build</b>();<br />&nbsp; curiosity.<b>KeepGoing</b>();<br />{"}"}</code></div>
    <div className="art-tag unity-tag"><Icon name="game" /><span>UNITY / C#<small>WORLDS IN THE MAKING</small></span><i /></div><div className="art-tag react-tag"><span className="react-symbol">⚛</span><span>REACT / WEB<small>IDEAS INTO INTERFACES</small></span></div>
    <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">+</span><span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
    <div className="art-bottomline"><span><i /> BUILD / PLAY / REPEAT</span><span>VN · 21°N 105°E</span></div>
  </div>;
}

function ProjectCard({ project, lang, index, onOpen }) {
  const t = copy[lang];
  function tilt(e) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--rx", `${-((e.clientY - box.top) / box.height - .5) * 3}deg`);
    e.currentTarget.style.setProperty("--ry", `${((e.clientX - box.left) / box.width - .5) * 3}deg`);
  }
  return <article className={`project-card ${project.featured ? "featured-card" : ""} ${project.id === "zero" ? "concept-card" : ""}`}>
    <button className="project-cover" onClick={() => onOpen(project)} onPointerMove={tilt} onPointerLeave={e => { e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); }} aria-label={`${t.details}: ${project.title}`}><ProjectVisual project={project} lang={lang} cover /><span className="cover-arrow"><Icon /></span>{project.images?.length > 1 && <span className="screenshot-count">{project.images.length} {t.imageCount}</span>}{project.featured && <span className="featured-badge"><Icon name="star" size={10} /> {t.featured}</span>}</button>
    <div className="project-info"><div className="project-meta"><span><i className={`category-dot ${project.type}`} />{project.format[lang]}</span><span>{String(index + 1).padStart(2, "0")}</span></div><h3><button onClick={() => onOpen(project)}>{project.title}<Icon /></button></h3><p>{project.description[lang]}</p>
      {project.team && <div className="team-summary"><span>{project.team} {t.people}</span>{project.duration && <><i />{project.duration[lang]}</>}<i /><span>{project.id === "presify" ? "VI / JP" : project.status[lang]}</span></div>}
      <div className="project-card-bottom"><div className="tech-tags">{project.tech.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}{project.tech.length > 3 && <span>+{project.tech.length - 3}</span>}</div><button className="details-button" onClick={() => onOpen(project)} aria-label={`${t.details}: ${project.title}`}><Icon name="right" size={18} /></button></div>
    </div>
  </article>;
}

function ProjectDialog({ project, lang, onClose }) {
  const ref = useRef(null);
  const t = copy[lang];
  useEffect(() => {
    const dialog = ref.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal(); document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; trigger?.focus({ preventScroll: true }); };
  }, []);
  return <dialog className="project-dialog" ref={ref} aria-labelledby="project-dialog-title" onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === ref.current) { const r = ref.current.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose(); } }}>
    <button className="dialog-close icon-button" onClick={onClose} aria-label={t.close} autoFocus><Icon name="close" /></button><div className="dialog-visual"><ProjectGallery project={project} lang={lang} /></div>
    <div className="dialog-content"><p className="eyebrow">{project.format[lang]}</p><h2 id="project-dialog-title">{project.title}</h2><p className="dialog-description">{project.description[lang]}</p>
      <dl className="project-facts"><div><dt>{t.status}</dt><dd>{project.status[lang]}</dd></div>{project.date && <div><dt>{t.timeline}</dt><dd>{project.date}</dd></div>}{project.team && <div><dt>{t.team}</dt><dd>{project.team} {t.people}</dd></div>}{project.duration && <div><dt>{t.duration}</dt><dd>{project.duration[lang]}</dd></div>}</dl>
      <h3>{project.teamContributions ? t.teamContributions : t.contributions}</h3>{project.teamContributions && <p className="team-note">{t.teamNote}</p>}<ul className="contribution-list">{(project.teamContributions || project.contributions)[lang].map(item => <li key={item}>{item}</li>)}</ul>
      <h3>{t.stack}</h3><div className="tech-tags dialog-tags">{project.tech.map(tag => <span key={tag}>{tag}</span>)}</div>{project.links.length > 0 && <div className="dialog-links">{project.links.map(link => <a key={link.url + (link.kind || "")} className={`button ${link.kind === "live" || link.kind === "prototype" || link.kind === "drive" ? "button-primary" : "button-outline"}`} href={link.url} target="_blank" rel="noreferrer">{link.label ? link.label[lang] : t[link.kind]}<Icon name={({ code: "github", video: "play", figma: "figma", prototype: "play", drive: "play" })[link.kind] || "arrow"} size={17} /></a>)}</div>}{project.accessNote && <p className="project-access-note">{project.accessNote[lang]}</p>}
    </div>
  </dialog>;
}

function App() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem("portfolio-language") === "vi" ? "vi" : "en"; } catch { return "en"; } });
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copyMessage, setCopyMessage] = useState("");
  const menuButton = useRef(null), progressRef = useRef(null), copyTimer = useRef(null);
  const t = copy[lang];
  const nav = [["projects", t.navProjects], ["about", t.navAbout], ["experience", t.navExperience], ["skills", t.navSkills]];
  const filtered = projects.filter(p => filter === "all" || p.type === filter);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]').content = t.pageDescription;
    try { localStorage.setItem("portfolio-language", lang); } catch { /* Language switching works even when storage is disabled. */ }
    setCopyMessage("");
  }, [lang]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .08 });
    document.documentElement.classList.add("motion-ready");
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => { observer.disconnect(); document.documentElement.classList.remove("motion-ready"); };
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty("--progress", max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      const marker = window.scrollY + Math.min(window.innerHeight * .35, 240);
      const atBottom = max > 0 && window.scrollY >= max - 2;
      let current = "home";
      document.querySelectorAll("main > section[id]").forEach(section => { if (section.offsetTop <= marker || atBottom) current = section.id; });
      setActiveSection(current); frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", schedule, { passive: true }); window.addEventListener("resize", schedule);
    const resizeObserver = new ResizeObserver(schedule); resizeObserver.observe(document.body);
    return () => { window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); resizeObserver.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = e => { if (e.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); } };
    const desktop = window.matchMedia("(min-width: 901px)");
    const resize = e => { if (e.matches) setMenuOpen(false); };
    window.addEventListener("keydown", close); desktop.addEventListener("change", resize);
    return () => { window.removeEventListener("keydown", close); desktop.removeEventListener("change", resize); };
  }, [menuOpen]);

  useEffect(() => () => clearTimeout(copyTimer.current), []);
  async function copyEmail() {
    clearTimeout(copyTimer.current);
    try { await navigator.clipboard.writeText(profile.email); setCopyMessage(t.copied); } catch { setCopyMessage(t.copyFailed); }
    copyTimer.current = setTimeout(() => setCopyMessage(""), 4000);
  }

  return <>
    <div className="city-backdrop" aria-hidden="true"><div className="city-skyline" /><div className="city-atmosphere" /><div className="city-scanlines" /></div>
    <a className="skip-link" href="#main-content">{t.skip}</a>
    <header className="site-header"><div className="header-inner"><a href="#home" aria-label={t.home} onClick={() => setMenuOpen(false)}><Brand /></a><nav className={`main-nav ${menuOpen ? "is-open" : ""}`} id="main-navigation" aria-label={t.navigation}>{nav.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined} onClick={() => setMenuOpen(false)}>{label}<span /></a>)}<a className="mobile-contact" href="#contact" aria-current={activeSection === "contact" ? "location" : undefined} onClick={() => setMenuOpen(false)}>{t.navContact}<Icon size={14} /></a></nav><div className="header-actions"><button className="language-toggle" onClick={() => setLang(lang === "en" ? "vi" : "en")} aria-label={t.switchLanguage}><span className={lang === "en" ? "selected" : ""}>EN</span><i>/</i><span className={lang === "vi" ? "selected" : ""}>VI</span></button><a className="header-contact" href="#contact" aria-current={activeSection === "contact" ? "location" : undefined}>{t.navContact}<Icon size={14} /></a><button className="menu-button icon-button" ref={menuButton} aria-label={t.menu} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button></div></div><div className="scroll-progress" ref={progressRef} /></header>
    {menuOpen && <div className="mobile-menu-shade" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    <main id="main-content" tabIndex={-1}>
      <section className="hero section-wrap" id="home"><div className="hero-content"><p className="eyebrow hero-eyebrow"><span className="status-dot" />{t.eyebrow}</p><p className="hero-greeting">{t.hello} <span>↗</span></p><h1>Trịnh Minh<br /><span className="hero-name">Đạt<span className="name-period">.</span></span><span className="name-asterisk" aria-hidden="true">✳</span></h1><div className="hero-roles"><span>{t.roleGame}</span><i>+</i><span>{t.roleWeb}</span></div><p className="hero-intro">{t.intro}</p><p className="hero-description">{t.introSub}</p><div className="hero-actions"><a className="button button-primary" href="#projects">{t.explore}<Icon name="arrow" size={17} /></a><a className="button button-text" href={resumeUrl} download="Trinh-Minh-Dat-CV.pdf">{t.resume}<Icon name="down" size={17} /></a></div></div><HeroArt /><div className="hero-bottomline"><span><i />{t.location}</span><span>{t.heroNote}</span><a href="#projects">{t.scroll}<span>↓</span></a></div></section>
      <div className="disciplines"><div className="section-wrap discipline-inner"><div><Icon name="game" size={26} /><span>{t.disciplineGame}<small>{t.gameLane}</small></span><b>01</b></div><span className="discipline-star" aria-hidden="true">✳</span><div><Icon name="code" size={26} /><span>{t.disciplineWeb}<small>{t.webLane}</small></span><b>02</b></div></div></div>

      <section className="projects-section section-wrap" id="projects"><SectionHeading number="01" label={t.projectsLabel} title={t.projectsTitle} accent={t.projectsAccent} description={t.projectsSub} /><div className="project-controls"><div className="filters" role="group" aria-label={t.projectsLabel}>{[["all", t.all], ["game", t.games], ["web", t.web], ["design", t.design]].map(([key, label]) => <button key={key} className={filter === key ? "active" : ""} aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}<span>{String(projects.filter(p => key === "all" || p.type === key).length).padStart(2, "0")}</span></button>)}</div><span className="results-count" role="status">{String(filtered.length).padStart(2, "0")} {t.projectCount} <span>↙</span></span></div><div className="project-grid" key={filter}>{filtered.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} lang={lang} onOpen={setActiveProject} />)}</div></section>

      <section className="about-section" id="about"><div className="section-wrap about-layout"><div className="about-left reveal"><p className="eyebrow"><span>02 /</span> {t.aboutLabel}</p><h2>{t.aboutTitle}<br /><em>{t.aboutAccent}</em></h2><div className="about-monogram" aria-hidden="true"><span>đ.</span><i>CODE WITH CURIOSITY</i><b>✳</b><small>HANOI / VIETNAM</small><div /></div></div><div className="about-right reveal"><p className="about-lead">{t.aboutLead}</p><p className="about-body">{t.aboutBody}</p><div className="education-card"><span className="education-icon">H</span><div><p className="eyebrow">{t.education}</p><h3>{t.university}</h3><p>{t.degree}</p><div><span>{t.present}</span><span>GPA <b>3.24</b> / 4.0</span></div></div></div><dl className="about-facts"><div><dt>{t.languages}</dt><dd>{t.languageList}</dd></div><div><dt>{t.focus}</dt><dd>{t.focusText}</dd></div></dl></div></div></section>

      <section className="experience-section section-wrap" id="experience"><SectionHeading number="03" label={t.journeyLabel} title={t.journeyTitle} accent={t.journeyAccent} /><div className="experience-card reveal"><div className="experience-company"><span className="company-icon">X<span>↗</span></span><div><h3>Xgame Studio</h3><p>{t.internshipDate}</p></div></div><div className="experience-detail"><span className="role-pill">{t.internship}</span><p>{t.internshipText}</p><ul>{t.internshipItems.map(item => <li key={item}><Icon name="check" size={15} /><span>{item}</span></li>)}</ul><div className="tech-tags"><span>Unity</span><span>C#</span><span>Playable Ads</span></div></div></div></section>

      <section className="skills-section section-wrap" id="skills"><SectionHeading number="04" label={t.skillsLabel} title={t.skillsTitle} accent={t.skillsAccent} description={t.skillsSub} /><div className="skills-grid">{skillGroups.map(({ icon, title, caption, tech, includeSoftSkills }, i) => <article className="skill-card reveal" key={icon}><div className="skill-card-top"><span><Icon name={icon} size={25} /></span><i>0{i + 1}</i></div><h3>{t[title]}</h3><p>{t[caption]}</p><div className="skill-tags">{[...tech, ...(includeSoftSkills ? t.softSkills : [])].map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-heading reveal"><p className="eyebrow"><span>05 /</span> {t.contactLabel}</p><h2>{t.contactTitle}<br /><em>{t.contactAccent}</em></h2><p>{t.contactText}</p><span className="contact-star" aria-hidden="true">✳</span></div><div className="contact-bottom"><div className="email-block"><span className="eyebrow">{t.emailLabel}</span><div><a href={`mailto:${profile.email}`} className="email-link">{profile.email}<Icon size={22} /></a><button className="icon-button copy-button" onClick={copyEmail} aria-label={t.copyEmail}><Icon name={copyMessage === t.copied ? "check" : "copy"} size={18} /></button></div><p className="copy-status" role="status">{copyMessage}</p></div><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label={t.viewGithub}><Icon name="github" size={18} />GitHub<Icon size={14} /></a><a href={resumeUrl} download="Trinh-Minh-Dat-CV.pdf"><Icon name="down" size={18} />{t.resume}<Icon size={14} /></a></div></div></div></section>
    </main>
    <footer className="site-footer section-wrap"><a href="#home" aria-label={t.home}><Brand /></a><p>© {new Date().getFullYear()} Trịnh Minh Đạt <span>·</span> {t.footer}</p><a className="back-top" href="#home">{t.top}<span>↑</span></a></footer>
    {activeSection !== "home" && <a href="#home" className="floating-top icon-button" aria-label={t.top}>↑</a>}{activeProject && <ProjectDialog project={activeProject} lang={lang} onClose={() => setActiveProject(null)} />}
  </>;
}

createRoot(document.getElementById("root")).render(<App />);
