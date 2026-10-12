import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Mail, MapPin, Phone,
  Terminal, Code2, Workflow, ShieldCheck, FlaskConical, Bot, CheckCircle2,
  ExternalLink, Menu, X, Award, GraduationCap, BriefcaseBusiness, Sparkles
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Jayanth Sivaraju',
  title: 'SDET · Quality Engineer',
  location: 'Hyderabad, India',
  email: 'jayanthramvamsi1@gmail.com',
  phone: '+91 7780581404',
  linkedin: 'https://www.linkedin.com/in/jayanth-sivaraju-970379196/',
  github: 'https://github.com/jayanthjrv',
};

const skills = [
  { title: 'UI Automation', icon: Code2, items: ['Playwright', 'Selenium', 'Python', 'Pytest', 'Ruby', 'Capybara', 'RSpec'] },
  { title: 'API Quality', icon: Workflow, items: ['REST API automation', 'GraphQL API automation', 'Postman', 'API functional testing'] },
  { title: 'Quality Engineering', icon: FlaskConical, items: ['Functional testing', 'Regression & sanity', 'Integration testing', 'Exploratory testing', 'Cross-browser testing', 'Responsive testing'] },
  { title: 'CI/CD & Tooling', icon: Terminal, items: ['Git & GitHub Actions', 'Jenkins', 'Akkeris', 'JIRA', 'Azure DevOps', 'TestRail'] },
  { title: 'AI-assisted Testing', icon: Bot, items: ['Agentic AI', 'AI Agents - GitHub Copilot', 'LLM-based test case generation', 'AI-driven quality engineering'] },
  { title: 'Frontend Knowledge', icon: Code2, items: ['React JS', 'Debugging', 'Defect analysis', 'AI-assisted development'] },
];

const projects = [
  {
    number: '01',
    type: 'TEST AUTOMATION FRAMEWORK',
    title: 'Playwright UI & API Framework',
    description: 'Designed and built a UI and API automation framework from scratch using Playwright, Python, and Pytest, with reusable components and automated pipeline execution.',
    tags: ['Playwright', 'Python', 'Pytest', 'CI/CD'],
    metric: '228 regression tests automated in one month',
    icon: Terminal,
  },
  {
    number: '02',
    type: 'API TEST AUTOMATION',
    title: 'Themes — API & UI Coverage',
    description: 'Expanded automated coverage across GraphQL, REST APIs, and UI workflows through focused scenario design and functional validation.',
    tags: ['GraphQL', 'REST API', 'UI Automation'],
    metric: 'GraphQL coverage: 30% → 90%',
    icon: Workflow,
  },
  {
    number: '03',
    type: 'AI-ASSISTED QUALITY ENGINEERING',
    title: 'Intelligent Test Automation',
    description: 'Explored AI-assisted approaches for test case generation and evaluation using large language models, including work with a locally hosted Llama model.',
    tags: ['Agentic AI', 'LLMs', 'DeepEval', 'Test Generation'],
    metric: 'Exploring smarter, risk-aware testing',
    icon: Bot,
  },
];

const experience = [
  {
    period: 'MAY 2026 — PRESENT',
    company: 'S&P Global',
    role: 'Software Development Engineer in Test (SDET)',
    location: 'Hyderabad, India',
    points: [
      'Develop and maintain Selenium + Python UI automation for dashboard functionality.',
      'Perform regression and sanity testing to validate functionality and release readiness.',
      'Collaborate with developers and stakeholders to investigate defects.',
      'Contribute to early Agentic AI initiatives for intelligent test automation and test case generation using LLMs through the internal Astra platform.',
      'Apply React knowledge and AI-assisted development tools to understand frontend behavior and support debugging.',
    ],
  },
  {
    period: 'MAY 2023 — MAY 2026',
    company: 'O.C. Tanner Pvt. Ltd.',
    role: 'Software Test Engineer',
    location: 'Hyderabad, India',
    points: [
      'Built a Playwright + Python + Pytest UI and API automation framework from scratch.',
      'Integrated QA and production automation suites into the Akkeris CI/CD pipeline.',
      'Automated 228 regression tests within one month and reduced manual regression effort.',
      'Raised GraphQL API automation coverage from 30% to 90%, REST API coverage from 40% to 60%, and UI automation coverage from 20% to 60%.',
      'Performed functional, regression, cross-browser, and security-oriented automation testing.',
    ],
  },
];

const awards = [
  ['PLATINUM', 'Best Employee Award', 'Recognized by the Vice President — India at O.C. Tanner Pvt. Ltd. for innovative automation work and a successful demonstration to the US team.'],
  ['GOLD', 'Automation & CI/CD Integration', 'Recognized for complex automated-test integration with Akkeris pipelines and the Heimdall repository.'],
  ['GOLD', 'Regression Automation', 'Recognized for automating 228 regression tests within one month.'],
  ['SILVER', 'Quality Improvements', 'Recognized for identifying critical defects and improving automation coverage.'],
];

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark"><Terminal size={18}/></span><span>Jayanth Sivaraju</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav id="site-navigation" className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot"/> QUALITY-FIRST ENGINEERING <span className="availability-line"/></div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Jayanth Sivaraju<span className="accent">.</span></h1>
            <h2 className="hero-role">SDET <span>/</span> AI-driven Test Automation Engineer</h2>
            <p className="hero-description">I build reliable test automation, uncover meaningful defects, and help teams ship software with confidence.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#contact">Get in touch <Mail size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Hyderabad, India</span><span className="meta-divider"/><span>~4 years in quality engineering</span></div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <div className="photo-placeholder photo-image">
                <img src="/profile.jpg" alt="Jayanth Sivaraju" />
              </div>
              <div className="photo-caption"><div><span className="caption-label">CURRENT ROLE</span><strong>Software Development Engineer in Test</strong></div><span className="caption-icon"><Sparkles size={18}/></span></div>
              <div className="corner corner-tl"/><div className="corner corner-br"/>
            </div>
            <div className="floating-chip chip-top"><span className="chip-icon"><CheckCircle2 size={17}/></span><span><strong>Quality built in</strong><small>Not tested in at the end</small></span></div>
            <div className="floating-chip chip-bottom"><span className="chip-icon chip-purple"><Bot size={18}/></span><span><strong>AI + Automation</strong><small>Smarter test workflows</small></span></div>
            <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner"><span className="strip-label">FOCUS AREAS</span><span>UI  & API AUTOMATION</span><i/><span>FUNCTIONAL TESTING</span><i/><span>CI/CD INTEGRATION</span><i/><span>AI-ASSISTED TESTING</span></div>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / ABOUT" title={<>Quality is more than<br/><span className="muted-heading">finding bugs.</span></>} description="It's about building confidence into every release."/>
          <div className="about-grid">
            <div className="about-main"><p className="large-copy">I'm an SDET with <strong>around four years of experience</strong> across UI and API automation, functional testing, regression, sanity, and integration testing.</p><p>I've built automation frameworks from scratch, expanded API test coverage, and helped teams reduce repetitive regression effort. I enjoy investigating defects, understanding application behavior, and collaborating with developers to find the right fix.</p><p>I'm also exploring how AI can improve quality engineering through intelligent test generation, evaluation, and developer-assisted workflows.</p><a href="#experience" className="text-link">More about my journey <ArrowUpRight size={16}/></a></div>
            <div className="principles">
              <div className="principle"><span className="principle-num">01</span><div><h3>Prevent early</h3><p>Bring quality thinking into design and development, not just the final test cycle.</p></div></div>
              <div className="principle"><span className="principle-num">02</span><div><h3>Automate with purpose</h3><p>Build maintainable tests that provide useful feedback and protect critical user journeys.</p></div></div>
              <div className="principle"><span className="principle-num">03</span><div><h3>Investigate deeply</h3><p>Use evidence, risk, and root-cause analysis to help teams make confident releases.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section-block section-tinted" id="skills">
          <div className="section-wrap"><SectionHeading eyebrow="02 / TOOLKIT" title={<>Tools I use to build<br/><span className="muted-heading">quality at scale.</span></>} description="A mix of automation, testing strategy, delivery tooling, and AI-assisted development."/>
            <div className="skills-grid">{skills.map((s) => {const Icon=s.icon; return <article className="skill-card" key={s.title}><div className="skill-icon"><Icon size={20}/></div><h3>{s.title}</h3><div className="skill-tags">{s.items.map(item=><span key={item}>{item}</span>)}</div></article>})}</div>
          </div>
        </section>

        <section className="section-wrap section-block" id="work">
          <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Practical work.<br/><span className="muted-heading">Measurable impact.</span></>} description="Examples of the automation and quality engineering work I've contributed to."/>
          <div className="project-list">{projects.map(p=>{const Icon=p.icon;return <article className="project-card" key={p.number}><div className="project-number">{p.number}</div><div className="project-content"><span className="eyebrow project-type">{p.type}</span><h3>{p.title}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-aside"><div className="project-icon"><Icon size={22}/></div><span className="metric-label">HIGHLIGHT</span><strong>{p.metric}</strong></div></article>})}</div>
          <p className="project-note"><ShieldCheck size={16}/> Project summaries are generalized to avoid sharing confidential employer information.</p>
        </section>

        <section className="section-block section-tinted" id="experience">
          <div className="section-wrap"><SectionHeading eyebrow="04 / EXPERIENCE" title={<>Where I've made<br/><span className="muted-heading">an impact.</span></>} description="My professional journey in software testing and automation."/>
            <div className="timeline">{experience.map((job,i)=><article className="timeline-item" key={job.company}><div className="timeline-marker">{i===0?<BriefcaseBusiness size={17}/>:<Code2 size={17}/>}</div><div className="timeline-content"><div className="timeline-top"><span className="eyebrow">{job.period}</span><span className="job-location"><MapPin size={13}/>{job.location}</span></div><h3>{job.company}</h3><h4>{job.role}</h4><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></div></article>)}</div>
          </div>
        </section>

        <section className="section-wrap section-block" id="recognition">
          <SectionHeading eyebrow="05 / RECOGNITION" title={<>Work that was<br/><span className="muted-heading">recognized.</span></>} description="Selected awards and acknowledgements from my previous role."/>
          <div className="awards-grid">{awards.map(a=><article className="award-card" key={a[1]}><div className="award-top"><Award size={18}/><span>{a[0]}</span></div><h3>{a[1]}</h3><p>{a[2]}</p></article>)}</div>
        </section>

        <section className="education-section">
          <div className="section-wrap education-inner"><div className="education-icon"><GraduationCap size={24}/></div><div><span className="eyebrow">EDUCATION</span><h3>Bachelor of Technology — Information Technology</h3><p>Sir C R Reddy College of Engineering, JNTUK <span>·</span> 2019–2023</p></div><div className="education-score"><strong>8.02</strong><span>CGPA / 10</span></div></div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-card"><div className="contact-glow"/><span className="eyebrow">06 / CONTACT</span><h2>Let's make quality<br/><span className="muted-heading">a team habit.</span></h2><p>Interested in quality engineering, automation, or building more reliable software? I'd be happy to connect.</p><a className="button button-primary" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noreferrer">Say hello <ArrowUpRight size={17}/></a><div className="contact-details"><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noreferrer"><Mail size={16}/>{profile.email}</a><span className="contact-phone"><Phone size={16}/>{profile.phone}</span><a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16}/>LinkedIn <ExternalLink size={13}/></a></div></div>
        </section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><a href="#home" className="brand"><span className="brand-mark"><Terminal size={17}/></span><span>Jayanth Sivaraju</span></a><span>Designed with intent. Built for quality.</span><div className="footer-links"><a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><ExternalLink size={17}/></a><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} aria-label="Email" target="_blank" rel="noreferrer"><Mail size={17}/></a><a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Code2 size={17}/></a></div><span className="copyright">© {new Date().getFullYear()} {profile.name}</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
