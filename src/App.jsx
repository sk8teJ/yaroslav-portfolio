import { useEffect, useState } from 'react';

const copy = {
  ru: {
    nav: ['Проекты', 'Направления', 'Обо мне', 'Контакты'],
    availability: 'Открыт к новым возможностям',
    heroDesc: 'Соединяю бизнес-задачи, данные и технологии искусственного интеллекта. Исследую процессы, ищу точки роста и создаю практичные цифровые решения.',
    viewWork: 'Смотреть проекты',
    aboutMe: 'Познакомиться',
    panelTitle: 'От данных — к решениям.',
    metrics: ['Процессы', 'Анализ', 'Интеллект', 'Автоматизация'],
    scroll: 'Листайте вниз',
    workEyebrow: 'Избранные проекты / 01—03',
    workTitle: 'Идеи, превращённые в работающие концепции.',
    workLead: 'Практика на стыке аналитики, автоматизации и AI. Каждый проект — способ разобраться в задаче и довести решение до понятного результата.',
    projects: [
      {
        index: '01 / BUSINESS INTELLIGENCE',
        title: 'Business Process Analytics',
        desc: 'Аналитика процессов интернет-магазина: от подготовки данных до поиска узких мест, задержек доставки и возможностей автоматизации.',
        tags: ['Python', 'PostgreSQL', 'Pandas', 'Streamlit', 'Plotly'],
        repo: 'https://github.com/sk8teJ/business-process-analytics',
        label: 'Изучить проект на GitHub',
      },
      {
        index: '02 / GENERATIVE AI',
        title: 'AI Knowledge Assistant',
        desc: 'Ассистент для работы с документами на основе RAG: извлечение текста, разбиение на фрагменты, векторный поиск и ответы с опорой на базу знаний.',
        tags: ['Python', 'Gemini', 'Embeddings', 'RAG', 'Vector search'],
        repo: 'https://github.com/sk8teJ/ai-knowledge-assistant',
        label: 'Изучить проект на GitHub',
      },
      {
        index: '03 / WORKFLOW AUTOMATION',
        title: 'AI Request Manager',
        desc: 'Автоматизация обработки входящих обращений: классификация запросов с помощью AI, маршрутизация, уведомления и контроль ошибок в workflow.',
        tags: ['n8n', 'Google Gemini', 'Telegram', 'Workflow', 'API'],
        repo: 'https://github.com/sk8teJ/ai-request-manager',
        label: 'Изучить проект на GitHub',
      },
    ],
    capEyebrow: 'Фокус / 04',
    capTitle: 'Четыре точки пересечения.',
    capLead: 'Работаю с задачей целиком: понимаю контекст, исследую данные, подбираю инструменты и проверяю, что решение действительно полезно.',
    caps: [
      ['Бизнес-анализ', 'Изучение процессов, формулирование требований и поиск возможностей для улучшений.'],
      ['Работа с данными', 'Подготовка, проверка и анализ данных, визуализация показателей и поиск закономерностей.'],
      ['AI-инструменты', 'LLM, RAG, embeddings и прикладные сценарии использования генеративного ИИ.'],
      ['Автоматизация', 'Связка сервисов и API, проектирование workflow и обработка повторяющихся задач.'],
    ],
    aboutEyebrow: 'Контекст / 05',
    aboutStatement: 'Мне интересно не просто внедрить инструмент. Важно понять, какую задачу он решает.',
    about: [
      'Ярослав — начинающий специалист на пересечении бизнес-анализа, данных и искусственного интеллекта. Мне близок подход, в котором технология начинается с понятной проблемы, а результат можно объяснить и проверить.',
      'В собственных проектах я изучаю полный путь от постановки задачи и подготовки данных до прототипа, автоматизации и представления результата. Сейчас развиваюсь в направлении Business & AI Analysis.',
      'Открыт к стажировкам, junior-позициям и задачам, в которых можно расти вместе с командой.',
    ],
    eduEyebrow: 'Образование / 06',
    eduTitle: 'Фундамент и развитие.',
    university: 'ННГУ им. Н. И. Лобачевского',
    bachelor: 'Бакалавриат · Бизнес-информатика',
    bachelorDesc: 'Аналитические методы и информационные технологии поддержки принятия решений в экономике и бизнесе · 2026',
    master: 'Магистратура · Прикладная информатика',
    masterDesc: 'Информационные технологии и искусственный интеллект · с 2026',
    contactEyebrow: 'На связи / 07',
    contactTitle: 'Давайте обсудим задачу.',
    contactLead: 'Открыт к профессиональному общению, новым проектам и возможностям для развития.',
    email: 'yaroslav.prokoshkin2134@gmail.com',
    emailHint: 'Написать на почту',
    telegram: '@j99j99jj9',
    telegramHint: 'Открыть Telegram',
    githubHint: 'Код, проекты и эксперименты',
    rights: 'Все права защищены.',
    backTop: 'Наверх ↑',
    footer: 'Сделано с вниманием к деталям.',
    dashboard: 'Операционная аналитика',
    order: 'Заказы',
    delivery: 'Доставка',
    returns: 'Возвраты',
    chart: 'Динамика заказов',
    answer: 'Ответ ассистента',
    answerText: 'В документах выделены три ключевых направления: приоритеты продукта, командные процессы и метрики качества.',
    workflow: 'Automation canvas',
    active: '● Workflow active',
    newRequest: 'Новое обращение',
    classify: 'Определить тему',
    route: 'Выбрать команду',
    notify: 'Отправить статус',
  },

  en: {
    nav: ['Work', 'Focus', 'About', 'Contact'],
    availability: 'Open to new opportunities',
    heroDesc: 'Connecting business challenges, data, and artificial intelligence. I explore processes, identify opportunities, and build practical digital solutions.',
    viewWork: 'Explore projects',
    aboutMe: 'A little about me',
    panelTitle: 'From data to decisions.',
    metrics: ['Processes', 'Analysis', 'Intelligence', 'Automation'],
    scroll: 'Scroll to explore',
    workEyebrow: 'Selected work / 01—03',
    workTitle: 'Ideas turned into working concepts.',
    workLead: 'Hands-on projects at the intersection of analytics, automation, and AI. Each project is an opportunity to understand a problem and turn it into a clear solution.',
    projects: [
      {
        index: '01 / BUSINESS INTELLIGENCE',
        title: 'Business Process Analytics',
        desc: 'E-commerce process analytics — from data preparation to identifying bottlenecks, delivery delays, and automation opportunities.',
        tags: ['Python', 'PostgreSQL', 'Pandas', 'Streamlit', 'Plotly'],
        repo: 'https://github.com/sk8teJ/business-process-analytics',
        label: 'Explore on GitHub',
      },
      {
        index: '02 / GENERATIVE AI',
        title: 'AI Knowledge Assistant',
        desc: 'A RAG-based document assistant: text extraction, chunking, vector search, and answers grounded in a knowledge base.',
        tags: ['Python', 'Gemini', 'Embeddings', 'RAG', 'Vector search'],
        repo: 'https://github.com/sk8teJ/ai-knowledge-assistant',
        label: 'Explore on GitHub',
      },
      {
        index: '03 / WORKFLOW AUTOMATION',
        title: 'AI Request Manager',
        desc: 'An automated intake workflow: AI-powered request classification, routing, notifications, and error handling.',
        tags: ['n8n', 'Google Gemini', 'Telegram', 'Workflow', 'API'],
        repo: 'https://github.com/sk8teJ/ai-request-manager',
        label: 'Explore on GitHub',
      },
    ],
    capEyebrow: 'Focus / 04',
    capTitle: 'Four areas of intersection.',
    capLead: 'I approach a challenge end to end: understand the context, explore the data, choose the tools, and check whether the solution is genuinely useful.',
    caps: [
      ['Business analysis', 'Exploring processes, shaping requirements, and identifying opportunities for improvement.'],
      ['Data & insights', 'Preparing, validating, and analysing data; visualising metrics and finding patterns.'],
      ['Applied AI', 'LLMs, RAG, embeddings, and practical generative AI use cases.'],
      ['Automation', 'Connecting services and APIs, designing workflows, and reducing repetitive work.'],
    ],
    aboutEyebrow: 'Background / 05',
    aboutStatement: 'It is not just about introducing a tool. It is about understanding the problem it should solve.',
    about: [
      'I am an early-career specialist exploring the intersection of business analysis, data, and artificial intelligence. I value an approach where technology starts with a clear problem and the outcome can be explained and tested.',
      'Through personal projects, I explore the journey from problem framing and data preparation to prototyping, automation, and communicating results. My current focus is Business & AI Analysis.',
      'Open to internships, junior roles, and opportunities to grow with a team.',
    ],
    eduEyebrow: 'Education / 06',
    eduTitle: 'A foundation for what is next.',
    university: 'Lobachevsky State University of Nizhny Novgorod',
    bachelor: 'Bachelor’s · Business Informatics',
    bachelorDesc: 'Analytical methods and information technologies for decision support in economics and business · 2026',
    master: 'Master’s · Applied Informatics',
    masterDesc: 'Information technologies and artificial intelligence · since 2026',
    contactEyebrow: 'Get in touch / 07',
    contactTitle: 'Let’s talk about the problem.',
    contactLead: 'Open to professional conversations, new projects, and opportunities to grow.',
    email: 'yaroslav.prokoshkin2134@gmail.com',
    emailHint: 'Send me an email',
    telegram: '@j99j99jj9',
    telegramHint: 'Open Telegram',
    githubHint: 'Code, projects, and experiments',
    rights: 'All rights reserved.',
    backTop: 'Back to top ↑',
    footer: 'Made with attention to detail.',
    dashboard: 'Operations overview',
    order: 'Orders',
    delivery: 'Delivery',
    returns: 'Returns',
    chart: 'Order volume',
    answer: 'Assistant response',
    answerText: 'Three key themes were identified: product priorities, team processes, and quality metrics.',
    workflow: 'Automation canvas',
    active: '● Workflow active',
    newRequest: 'New request',
    classify: 'Classify topic',
    route: 'Route to team',
    notify: 'Send status',
  },
};

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function DashboardVisual({ t }) {
  return (
    <div className="visual-frame dashboard-frame">
      <div className="frame-bar">
        <i /><i /><i />
        <span>business-process-analytics / overview</span>
      </div>

      <div className="dashboard">
        <aside className="dash-side">
          <div className="dash-logo" />
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className={`dash-nav ${n === 1 ? 'active' : ''}`}
            />
          ))}
        </aside>

        <div className="dash-main">
          <div className="dash-head">
            <span>{t.dashboard}</span>
            <div className="dash-filter" />
          </div>

          <div className="dash-kpis">
            <div className="dash-kpi">
              <small>{t.order}</small>
              <b>12.8k</b>
              <em>↗ 8.4%</em>
            </div>

            <div className="dash-kpi">
              <small>{t.delivery}</small>
              <b>3.2 d</b>
              <em>↘ 4.1%</em>
            </div>

            <div className="dash-kpi">
              <small>{t.returns}</small>
              <b>4.7%</b>
              <em>↘ 1.2%</em>
            </div>
          </div>

          <div className="dash-chart">
            <div className="dash-chart-label">{t.chart}</div>
            <svg viewBox="0 0 440 120" preserveAspectRatio="none">
              <path
                d="M0 96 L35 82 L70 89 L105 60 L140 70 L175 46 L210 55 L245 30 L280 41 L315 20 L350 29 L385 9 L440 16"
                fill="none"
                stroke="#9dbbf0"
                strokeWidth="2.5"
              />
              <path
                d="M0 96 L35 82 L70 89 L105 60 L140 70 L175 46 L210 55 L245 30 L280 41 L315 20 L350 29 L385 9 L440 16 L440 120 L0 120Z"
                fill="#9dbbf0"
                opacity=".10"
              />
            </svg>
          </div>

          <div className="dash-bottom">
            <div className="dash-mini" />
            <div className="dash-mini" />
          </div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeVisual({ t }) {
  return (
    <div className="visual-frame">
      <div className="frame-bar">
        <i /><i /><i />
        <span>knowledge assistant / workspace</span>
      </div>

      <div className="ai-window">
        <div className="ai-top">
          <span>KNOWLEDGE SPACE</span>
          <span className="ai-badge">RAG · ACTIVE</span>
        </div>

        <div className="ai-content">
          <div className="ai-docs">
            <div className="ai-doc">
              <small>PDF / 2.4 MB</small>
              <b>Product strategy.pdf</b>
            </div>
            <div className="ai-doc">
              <small>DOCX / 840 KB</small>
              <b>Team handbook.docx</b>
            </div>
            <div className="ai-doc">
              <small>TXT / 18 KB</small>
              <b>Research notes.txt</b>
            </div>
          </div>

          <div className="ai-answer">
            <small>{t.answer}</small>
            <p>{t.answerText}</p>
            <span className="ai-source">Source 01</span>
            <span className="ai-source">Source 03</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual({ t }) {
  return (
    <div className="visual-frame">
      <div className="frame-bar">
        <i /><i /><i />
        <span>workflow / request-routing</span>
      </div>

      <div className="flow-window">
        <div className="flow-head">
          <span>{t.workflow}</span>
          <span>{t.active}</span>
        </div>

        <div className="flow-canvas">
          <svg
            className="flow-lines"
            viewBox="0 0 600 310"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M300 67 V95 Q300 110 260 110 H100 V132 M300 110 H500 V132 M100 185 V218 Q100 235 145 235 H300 V248 M500 185 V218 Q500 235 455 235 H300 M300 185 V248" />
          </svg>

          <div className="flow-node n1">
            <small>TRIGGER</small>
            <b>{t.newRequest}</b>
          </div>

          <div className="flow-node n2">
            <small>AI CLASSIFIER</small>
            <b>{t.classify}</b>
          </div>

          <div className="flow-node n3">
            <small>ROUTING</small>
            <b>{t.route}</b>
          </div>

          <div className="flow-node n4">
            <small>NOTIFICATION</small>
            <b>{t.notify}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState('ru');
  const [menuOpen, setMenuOpen] = useState(false);

  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('visible');
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [language]);

  const closeMenu = () => setMenuOpen(false);

  const toggleLanguage = () => {
    setLanguage((current) => current === 'ru' ? 'en' : 'ru');
    closeMenu();
  };

  const visuals = [
    <DashboardVisual key="dashboard" t={t} />,
    <KnowledgeVisual key="knowledge" t={t} />,
    <WorkflowVisual key="workflow" t={t} />,
  ];

  return (
    <div className="site-shell" id="top">
      <header className="nav-shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={closeMenu}>
            Yaroslav<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['work', 'capabilities', 'about', 'contact'].map((id, i) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {t.nav[i]}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="lang-switch"
              type="button"
              onClick={toggleLanguage}
              aria-label={
                language === 'ru'
                  ? 'Switch to English'
                  : 'Переключить на русский'
              }
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </button>

            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 5h12M2 11h12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability reveal">
                <i />
                <span>{t.availability}</span>
              </div>

              <h1 className="reveal delay-1">
                Business <span className="line-two">&amp; AI Analyst.</span>
              </h1>

              <p className="hero-description reveal delay-2">
                {t.heroDesc}
              </p>

              <div className="hero-actions reveal delay-2">
                <a className="button-primary" href="#work">
                  {t.viewWork}
                  <Arrow />
                </a>

                <a className="button-secondary" href="#about">
                  {t.aboutMe}
                  <Arrow />
                </a>
              </div>
            </div>

            <div
              className="hero-art reveal delay-2"
              aria-label="Abstract analytics interface illustration"
            >
              <div className="orbit" />

              <div className="glass-panel">
                <div className="panel-top">
                  <span>Insight / 01</span>
                  <span className="panel-dots">
                    <i /><i /><i />
                  </span>
                </div>

                <div className="panel-title">{t.panelTitle}</div>

                <div className="metric-row">
                  <div className="metric">
                    <small>{t.metrics[0]}</small>
                    <strong>01<span>.</span></strong>
                    <em>{t.metrics[1]}</em>
                  </div>

                  <div className="metric">
                    <small>{t.metrics[2]}</small>
                    <strong>AI</strong>
                    <em>{t.metrics[3]}</em>
                  </div>
                </div>

                <div className="chart">
                  <svg
                    viewBox="0 0 330 105"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="area"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0"
                          stopColor="#9ab9f1"
                          stopOpacity=".34"
                        />
                        <stop
                          offset="1"
                          stopColor="#9ab9f1"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 82 C25 75 31 84 52 66 S82 62 102 68 S129 37 151 49 S177 60 197 36 S225 43 245 27 S278 32 300 10 L330 15 L330 105 L0 105Z"
                      fill="url(#area)"
                    />

                    <path
                      d="M0 82 C25 75 31 84 52 66 S82 62 102 68 S129 37 151 49 S177 60 197 36 S225 43 245 27 S278 32 300 10 L330 15"
                      fill="none"
                      stroke="#a9c5f5"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              <div className="float-tag one">Data · Strategy · AI</div>
              <div className="float-tag two">Think clearly. Build simply.</div>
            </div>
          </div>

          <div className="scroll-note">{t.scroll}</div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>Business analysis</span>
            <span>Data &amp; insights</span>
            <span>AI workflows</span>
            <span>Process automation</span>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="container">
            <div className="work-intro reveal">
              <div>
                <span className="eyebrow">{t.workEyebrow}</span>
                <h2 className="section-heading">{t.workTitle}</h2>
              </div>

              <p className="section-lead">{t.workLead}</p>
            </div>

            {t.projects.map((project, i) => (
              <article
                className={`project ${i % 2 === 0 ? 'light' : ''} reveal`}
                key={project.title}
              >
                <div className="project-inner">
                  <div className="project-copy">
                    <div className="project-index">{project.index}</div>

                    <h3>{project.title}</h3>

                    <p className="project-description">{project.desc}</p>

                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      className="project-link"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.label}
                      <Arrow />
                    </a>
                  </div>

                  <div className="project-visual">
                    {visuals[i]}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section-pad" id="capabilities">
          <div className="container">
            <div className="reveal">
              <span className="eyebrow">{t.capEyebrow}</span>
              <h2 className="section-heading">{t.capTitle}</h2>
              <p className="section-lead">{t.capLead}</p>
            </div>

            <div className="cap-grid reveal delay-1">
              {t.caps.map((cap, i) => (
                <div className="cap-item" key={cap[0]}>
                  <span className="cap-number">
                    0{i + 1} — {['BUSINESS', 'DATA', 'AI', 'AUTOMATION'][i]}
                  </span>

                  <h3>{cap[0]}</h3>
                  <p>{cap[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-grid">
            <div className="reveal">
              <span className="eyebrow">{t.aboutEyebrow}</span>
              <h2 className="about-statement">{t.aboutStatement}</h2>
            </div>

            <div className="about-copy reveal delay-1">
              {t.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-pad" id="education">
          <div className="container">
            <div className="reveal">
              <span className="eyebrow">{t.eduEyebrow}</span>
              <h2 className="section-heading">{t.eduTitle}</h2>
            </div>

            <div className="education-card reveal delay-1">
              <div className="education-label">{t.university}</div>

              <div>
                <div className="education-main">
                  <h3>{t.bachelor}</h3>
                  <p>{t.bachelorDesc}</p>
                </div>

                <div className="education-main">
                  <h3>{t.master}</h3>
                  <p>{t.masterDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact-top reveal">
              <div>
                <span className="eyebrow">{t.contactEyebrow}</span>
                <h2 className="section-heading">{t.contactTitle}</h2>
              </div>

              <p className="section-lead">{t.contactLead}</p>
            </div>

            <div className="contact-grid reveal delay-1">
              <a
                className="contact-card"
                href="mailto:yaroslav.prokoshkin2134@gmail.com"
              >
                <span className="contact-type">Email</span>
                <strong>
                  {t.email}
                  <Arrow />
                </strong>
                <small>{t.emailHint}</small>
              </a>

              <a
                className="contact-card"
                href="https://t.me/j99j99jj9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-type">Telegram</span>
                <strong>
                  {t.telegram}
                  <Arrow />
                </strong>
                <small>{t.telegramHint}</small>
              </a>

              <a
                className="contact-card"
                href="https://github.com/sk8teJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-type">GitHub</span>
                <strong>
                  github.com/sk8teJ
                  <Arrow />
                </strong>
                <small>{t.githubHint}</small>
              </a>
            </div>

            <footer className="footer">
              <span>
                © {new Date().getFullYear()} Yaroslav. {t.rights}
              </span>

              <a href="#top">{t.backTop}</a>

              <span>{t.footer}</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;