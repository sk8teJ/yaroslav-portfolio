import { useEffect, useState } from 'react';

const content = {
  ru: {
    nav: ['Проекты', 'Навыки', 'Обо мне', 'Хакатоны', 'Контакты'],
    availability: 'Открыт к junior-позициям и стажировкам',
    role: 'Junior Prompt Engineer',
    roleAccent: 'AI Automation Specialist.',
    intro: 'Изучаю большие языковые модели и создаю прикладные AI-решения: от разработки промптов и поиска по документам до автоматизации рабочих процессов.',
    projectsLabel: 'Практика / 01—03',
    projectsTitle: 'AI, автоматизация и аналитика на практике.',
    projectsLead: 'Три самостоятельных проекта, в которых я изучаю полный цикл: от постановки задачи и выбора инструментов до тестирования результата.',
    projects: [
      { number: '01 / GENERATIVE AI', title: 'AI Knowledge Assistant', description: 'RAG-ассистент для PDF, DOCX и TXT: извлекает текст, разбивает его на фрагменты, создаёт embeddings через Gemini, хранит их в ChromaDB и ищет релевантный контекст для ответов с указанием источников.', details: 'Дополнительно реализованы управление документами, защита от повторной загрузки и базовые проверки качества retrieval и генерации ответов.', tags: ['Python', 'Gemini API', 'ChromaDB', 'RAG', 'Embeddings'], repo: 'https://github.com/sk8teJ/ai-knowledge-assistant', demo: 'https://drive.google.com/drive/folders/1uXn2B5RHkVf8cxZVi_pXPY02j6cO50Jg?usp=sharing' },
      { number: '02 / WORKFLOW AUTOMATION', title: 'AI Request Manager', description: 'Workflow на n8n для приёма обращений через Telegram и их автоматизированной обработки. Google Gemini определяет категорию, приоритет и тональность, формирует краткое описание, назначает ответственное подразделение и определяет необходимость участия сотрудника.', details: 'Результаты сохраняются в n8n Data Tables и направляются по соответствующей ветке уведомлений. Отдельные workflow отвечают за обработку ошибок и формирование аналитики.', tags: ['n8n', 'Google Gemini API', 'Telegram Bot API', 'n8n Data Tables', 'JSON'], repo: 'https://github.com/sk8teJ/ai-request-manager', demo: 'https://drive.google.com/file/d/1UGbDxi80J0YD-6bMpyKEt1oCF3E-IDOM/view?usp=sharing' },
      { number: '03 / BUSINESS ANALYTICS', title: 'Business Process Analytics', description: 'Учебный аналитический проект интернет-магазина на синтетических данных. PostgreSQL и SQL используются для анализа заказов, платежей, возвратов, доставки и длительности этапов бизнес-процессов.', details: 'Создан интерактивный дашборд на Streamlit и Plotly, а также сценарный калькулятор потенциального эффекта автоматизации и ROI.', tags: ['Python', 'Pandas', 'PostgreSQL', 'SQL', 'Streamlit', 'Plotly'], repo: 'https://github.com/sk8teJ/business-process-analytics' },
    ],
    skillsLabel: 'Инструменты и подходы / 04',
    skillsTitle: 'Навыки и технологии.',
    hard: 'Hard Skills',
    hardSkills: ['Prompt Engineering: разработка, тестирование и улучшение промптов', 'LLM: ChatGPT, Google Gemini, DeepSeek, Qwen', 'RAG, embeddings, chunking и векторный поиск', 'Google Gemini API, REST API и JSON', 'Автоматизация workflow в n8n', 'Python и Pandas — учебные проекты и анализ данных; HTML, CSS, JavaScript, React — базовые навыки', 'SQL и PostgreSQL: базовые запросы и работа с данными', 'Streamlit, Plotly, Bootstrap 5', 'Основы ML и базовая оценка качества AI-решений', 'Git и GitHub: базовая работа с репозиториями'],
    soft: 'Soft Skills',
    softSkills: ['Аналитическое и системное мышление', 'Декомпозиция задач и формулирование требований', 'Внимание к деталям и проверка результата', 'Критическая оценка ответов AI', 'Самостоятельное обучение и поиск технических решений', 'Командная работа и взаимодействие с разработчиками', 'Итеративное улучшение решений'],
    aboutLabel: 'Профессиональный профиль / 05',
    aboutTitle: 'Сначала понять задачу. Затем подобрать инструмент и проверить результат.',
    about: [
      'Начинающий специалист в области Prompt Engineering и прикладного искусственного интеллекта. Изучаю и применяю большие языковые модели для обработки и структурирования информации, классификации запросов, поиска по документам и автоматизации рабочих процессов.',
      'Практикуюсь с ChatGPT, Google Gemini, DeepSeek и Qwen: разрабатываю и тестирую промпты, настраиваю последовательности взаимодействия с AI-моделями. В личных и учебных проектах использую Python, API, embeddings, RAG и инструменты автоматизации.',
      'Умею декомпозировать задачи, формулировать требования к результату, проверять ответы моделей и дорабатывать решения на основе тестирования. Интересуюсь развитием в Prompt Engineering, AI Automation и внедрением LLM в бизнес-процессы.',
    ],
    hackLabel: 'Командная работа / 06',
    hackTitle: 'Хакатоны и кейсы.',
    hackLead: 'Опыт командной работы над прототипами: от изучения задачи и подготовки требований до тестирования и обратной связи.',
    hackathons: [
      { year: '2024', name: '«Цифровой прорыв. Сезон: Искусственный интеллект»', track: 'AI-помощник для анализа резюме и зарплатных ожиданий', role: 'Участвовал в создании первоначального прототипа, проверял его на практических примерах, проводил пользовательское тестирование, собирал обратную связь и передавал замечания разработчикам.' },
      { year: '2025', name: 'IT_ONE Cup. Code & Analyst', track: '«Финансовый радар» — анализ банковских переводов и выявление подозрительных операций', role: 'Анализировал предметную область, собирал и структурировал информацию, участвовал в формировании функциональных требований и подготовке ТЗ, тестировал реализованные функции.' },
      { year: '2025', name: 'Всероссийский кейс-чемпионат «ProЦифру» · Газпром нефть', track: 'Система автоматизированного анализа соответствия компетенций IT-специалистов требованиям рынка', role: 'Разрабатывал frontend-интерфейс, реализовывал UI и отображение результатов анализа, использовал Bootstrap 5 и взаимодействовал с backend/ML-участниками команды.' },
    ],
    eduLabel: 'Образование / 07',
    eduTitle: 'Образование.',
    university: 'ННГУ им. Н. И. Лобачевского',
    master: 'Магистратура · Прикладная информатика',
    masterDesc: 'Программа «Информационные технологии и искусственный интеллект» · с 2026 · заочная форма',
    bachelor: 'Бакалавриат · Бизнес-информатика',
    bachelorDesc: 'Программа «Аналитические методы и информационные технологии поддержки принятия решений в экономике и бизнесе» · 2026 · диплом получен',
    contactLabel: 'На связи / 08',
    contactTitle: 'Давайте обсудим задачу.',
    emailHint: 'Написать на почту',
    telegramHint: 'Открыть Telegram',
    githubHint: 'Код, проекты и эксперименты',
    footer: 'Сделано с вниманием к деталям.',
    top: 'Наверх ↑',
  },
  en: {
    nav: ['Projects', 'Skills', 'About', 'Hackathons', 'Contact'],
    availability: 'Open to junior roles and internships',
    role: 'Junior Prompt Engineer',
    roleAccent: 'AI Automation Specialist.',
    intro: 'Exploring large language models and building practical AI solutions — from prompt design and document search to workflow automation.',
    projectsLabel: 'Selected work / 01—03',
    projectsTitle: 'AI, automation, and analytics in practice.',
    projectsLead: 'Three independent projects exploring the full cycle: from problem framing and tool selection to testing the outcome.',
    projects: [
      { number: '01 / GENERATIVE AI', title: 'AI Knowledge Assistant', description: 'A RAG assistant for PDF, DOCX, and TXT files. It extracts and chunks text, creates Gemini embeddings, stores them in ChromaDB, and retrieves relevant context for source-grounded answers.', details: 'Also includes document management, duplicate-upload protection, and basic retrieval and answer-generation evaluation.', tags: ['Python', 'Gemini API', 'ChromaDB', 'RAG', 'Embeddings'], repo: 'https://github.com/sk8teJ/ai-knowledge-assistant', demo: 'https://drive.google.com/drive/folders/1uXn2B5RHkVf8cxZVi_pXPY02j6cO50Jg?usp=sharing' },
      { number: '02 / WORKFLOW AUTOMATION', title: 'AI Request Manager', description: 'An n8n workflow that receives Telegram requests and processes them automatically. Google Gemini classifies category, priority, and sentiment, creates a short summary, assigns a responsible department, and determines whether a human agent is needed.', details: 'Results are stored in n8n Data Tables and routed to the appropriate notification branch. Separate workflows handle execution errors and generate analytics reports.', tags: ['n8n', 'Google Gemini API', 'Telegram Bot API', 'n8n Data Tables', 'JSON'], repo: 'https://github.com/sk8teJ/ai-request-manager', demo: 'https://drive.google.com/file/d/1UGbDxi80J0YD-6bMpyKEt1oCF3E-IDOM/view?usp=sharing' },
      { number: '03 / BUSINESS ANALYTICS', title: 'Business Process Analytics', description: 'An educational e-commerce analytics project based on synthetic data. PostgreSQL and SQL are used to analyse orders, payments, returns, delivery, and business-process duration.', details: 'Includes an interactive Streamlit and Plotly dashboard and a scenario-based calculator for potential automation impact and ROI.', tags: ['Python', 'Pandas', 'PostgreSQL', 'SQL', 'Streamlit', 'Plotly'], repo: 'https://github.com/sk8teJ/business-process-analytics' },
    ],
    skillsLabel: 'Tools and methods / 04',
    skillsTitle: 'Skills and technologies.',
    hard: 'Hard Skills',
    hardSkills: ['Prompt engineering: prompt design, testing, and iteration', 'LLMs: ChatGPT, Google Gemini, DeepSeek, Qwen', 'RAG, embeddings, chunking, and vector search', 'Google Gemini API, REST APIs, and JSON', 'Workflow automation with n8n', 'Python and Pandas — educational projects and data analysis; HTML, CSS, JavaScript, React — foundational skills', 'SQL and PostgreSQL: basic queries and data handling', 'Streamlit, Plotly, Bootstrap 5', 'ML fundamentals and basic AI solution evaluation', 'Git and GitHub: basic repository workflows'],
    soft: 'Soft Skills',
    softSkills: ['Analytical and systems thinking', 'Task decomposition and requirements definition', 'Attention to detail and result validation', 'Critical evaluation of AI outputs', 'Independent learning and technical problem-solving', 'Teamwork and collaboration with developers', 'Iterative improvement'],
    aboutLabel: 'Profile / 05',
    aboutTitle: 'Understand the problem first. Choose the tool, then validate the result.',
    about: [
      'I am an early-career specialist in prompt engineering and applied AI. I explore how large language models can support information processing, request classification, document search, and workflow automation.',
      'I have hands-on practice with ChatGPT, Google Gemini, DeepSeek, and Qwen, including prompt design and testing. My personal and educational projects use Python, APIs, embeddings, RAG, and automation tools.',
      'I break tasks into steps, define expected outputs, evaluate model responses, and improve solutions through testing. I am looking to grow in Prompt Engineering, AI Automation, and practical LLM adoption in business processes.',
    ],
    hackLabel: 'Team experience / 06',
    hackTitle: 'Hackathons and case projects.',
    hackLead: 'Team experience building prototypes — from understanding the challenge and shaping requirements to testing and feedback.',
    hackathons: [
      { year: '2024', name: 'Digital Breakthrough: Artificial Intelligence Season', track: 'AI assistant for resume analysis and salary expectations', role: 'Contributed to the initial prototype, tested practical scenarios, took part in user testing, collected feedback, and passed findings to developers.' },
      { year: '2025', name: 'IT_ONE Cup. Code & Analyst', track: 'Financial Radar — bank transfer analysis and suspicious transaction detection', role: 'Analysed the problem domain, collected and structured information, contributed to functional requirements and developer specifications, and tested implemented features.' },
      { year: '2025', name: 'All-Russian ProЦифру Case Championship · Gazprom Neft', track: 'Automated matching of IT specialists’ competencies with market requirements', role: 'Developed the frontend interface, implemented UI and analysis-result views, used Bootstrap 5, and collaborated with backend/ML teammates.' },
    ],
    eduLabel: 'Education / 07',
    eduTitle: 'Education.',
    university: 'Lobachevsky State University of Nizhny Novgorod',
    master: 'Master’s · Applied Informatics',
    masterDesc: 'Information technologies and artificial intelligence · since 2026 · part-time',
    bachelor: 'Bachelor’s · Business Informatics',
    bachelorDesc: 'Analytical methods and information technologies for decision support in economics and business · 2026 · graduated',
    contactLabel: 'Get in touch / 08',
    contactTitle: 'Let’s talk about the problem.',
    emailHint: 'Send me an email',
    telegramHint: 'Open Telegram',
    githubHint: 'Code, projects, and experiments',
    footer: 'Made with attention to detail.',
    top: 'Back to top ↑',
  },
};

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

const projectImages = [
  // Knowledge Assistant — research materials and a calm, document-focused workspace.
  'https://ponder.ing/_next/image?q=75&url=https%3A%2F%2Fd3n7w3548u188s.cloudfront.net%2Fblog%2F5ec1d016-37b0-47b4-bdd7-bf4ee24d63bf&w=1200',
  // AI Request Manager — a real-world process being mapped and structured.
  'https://images.squarespace-cdn.com/content/v1/5f2aa0eedb70c4714281636b/b5c4b3df-13ff-471b-9da8-2d33e4e5d549/header1.png',
  // Business Process Analytics — a warm, neutral analytics dashboard.
  'https://cdn.prod.website-files.com/63ba90c2fb087e5f140fe0eb/686752a07d7a4ecc43b7fe9e_68671cf2ea0b46f911c2fb3a-1751600009142.jpeg',
];

function App() {
  const [language, setLanguage] = useState('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'ru'
      ? 'Ярослав Прокошкин — AI, automation & analytics'
      : 'Yaroslav Prokoshkin — AI, automation & analytics';
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [language]);

  const closeMenu = () => setMenuOpen(false);
  const toggleLanguage = () => {
    setLanguage((current) => current === 'ru' ? 'en' : 'ru');
    closeMenu();
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={closeMenu}>YAROSLAV<span>.</span></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['work', 'capabilities', 'about', 'hackathons', 'contact'].map((id, i) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{t.nav[i]}</a>
            ))}
          </div>
          <div className="nav-actions">
            <span className="availability"><i />{t.availability}</span>
            <button className="lang-switch" type="button" onClick={toggleLanguage}>{language === 'ru' ? 'EN' : 'RU'}</button>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              <span /><span />
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow reveal">{language === 'ru' ? 'НЕЗАВИСИМАЯ ПРАКТИКА · AI И ТЕХНОЛОГИИ' : 'INDEPENDENT PRACTICE · AI & TECHNOLOGY'}</div>
              <h1 className="reveal delay-1">Yaroslav<br /><em>Prokoshkin.</em></h1>
              <p className="hero-role reveal delay-2">{t.role} <span>/</span> {t.roleAccent}</p>
              <p className="hero-description reveal delay-2">{t.intro}</p>
              <div className="hero-actions reveal delay-3">
                <a className="text-link" href="#work">{language === 'ru' ? 'Изучить проекты' : 'Explore selected work'} <Arrow /></a>
                <a className="text-link muted-link" href="#contact">{language === 'ru' ? 'Связаться' : 'Get in touch'} <Arrow /></a>
              </div>
              <div className="hero-index reveal delay-3"><span>01 — 08</span><span>{language === 'ru' ? 'ПОРТФОЛИО · 2026' : 'PORTFOLIO · 2026'}</span></div>
            </div>
            <div className="hero-visual reveal delay-2">
              <div className="hero-photo" role="img" aria-label={language === 'ru' ? 'Архитектурная фотография в тёплых естественных оттенках' : 'Architectural photograph in warm natural tones'} />
              <div className="photo-caption"><span>FIG. 01</span><span>{language === 'ru' ? 'Исследование формы и функции' : 'A study in form and function'}</span></div>
              <div className="vertical-note">{language === 'ru' ? 'ДУМАТЬ · СОЗДАВАТЬ · ПРОВЕРЯТЬ' : 'THINK · BUILD · VALIDATE'}</div>
            </div>
          </div>
          <div className="hero-bottom container"><span>{language === 'ru' ? 'НИЖНИЙ НОВГОРОД / РОССИЯ' : 'NIZHNY NOVGOROD / RUSSIA'}</span><a href="#work">{language === 'ru' ? 'ПРОКРУТИТЕ, ЧТОБЫ ИССЛЕДОВАТЬ' : 'SCROLL TO EXPLORE'} ↓</a></div>
        </section>

        <section className="intro-band">
          <div className="container intro-band-inner reveal">
            <span className="eyebrow">{language === 'ru' ? 'ПОДХОД' : 'APPROACH'}</span>
            <p>{language === 'ru'
              ? <>Соединяю <em>аналитическое мышление</em>, прикладной искусственный интеллект и внимание к деталям — чтобы превращать сложные задачи в понятные решения.</>
              : <>Bringing together <em>analytical thinking</em>, applied AI, and attention to detail to turn complex challenges into clear solutions.</>}</p>
            <span className="intro-mark">Y.</span>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="container">
            <div className="section-top reveal">
              <span className="eyebrow">{t.projectsLabel}</span>
              <span className="section-count">01 / {language === 'ru' ? 'ПРАКТИКА' : 'SELECTED WORK'}</span>
            </div>
            <div className="work-heading reveal">
              <h2>{t.projectsTitle}</h2>
              <p>{t.projectsLead}</p>
            </div>
            <div className="project-list">
              {t.projects.map((project, index) => (
                <article className={`project-row reveal ${index % 2 ? 'reverse' : ''}`} key={project.title}>
                  <div className="project-visual">
                    <div className={`project-photo project-photo-${index + 1}`} style={{ backgroundImage: `url("${projectImages[index]}")` }}>
                      <span className="photo-number">0{index + 1}</span>
                      <span className="photo-category">{project.number.split('/')[1]?.trim()}</span>
                    </div>
                  </div>
                  <div className="project-copy">
                    <span className="eyebrow">{project.number}</span>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-details">{project.details}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                    <div className="project-actions">
                      <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">{language === 'ru' ? 'Репозиторий' : 'Repository'} <Arrow /></a>
                      {project.demo && <a className="text-link muted-link" href={project.demo} target="_blank" rel="noopener noreferrer">{language === 'ru' ? 'Демонстрация' : 'Demo'} <Arrow /></a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capabilities section-pad" id="capabilities">
          <div className="container">
            <div className="section-top reveal"><span className="eyebrow">{t.skillsLabel}</span><span className="section-count">02 / {language === 'ru' ? 'ИНСТРУМЕНТАРИЙ' : 'CAPABILITIES'}</span></div>
            <div className="capabilities-heading reveal"><h2>{t.skillsTitle}</h2><p>{language === 'ru' ? 'Инструменты — это средства решения задачи. Важнее понимать, когда и зачем их применять.' : 'Tools are a means to solve a problem. Knowing when and why to use them matters more.'}</p></div>
            <div className="skills-layout reveal delay-1">
              <div className="skills-column"><div className="column-heading"><span>01</span><h3>{t.hard}</h3></div><ul>{t.hardSkills.map((skill) => <li key={skill}>{skill}<span>↗</span></li>)}</ul></div>
              <div className="skills-column soft-column"><div className="column-heading"><span>02</span><h3>{t.soft}</h3></div><ul>{t.softSkills.map((skill) => <li key={skill}>{skill}<span>↗</span></li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-layout">
            <div className="about-title reveal"><span className="eyebrow">{t.aboutLabel}</span><h2>{t.aboutTitle}</h2></div>
            <div className="about-body reveal delay-1">{t.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="about-signature">Yaroslav Prokoshkin <span>— 2026</span></div></div>
          </div>
        </section>

        <section className="hackathons section-pad" id="hackathons">
          <div className="container">
            <div className="section-top reveal"><span className="eyebrow">{t.hackLabel}</span><span className="section-count">03 / {language === 'ru' ? 'СОВМЕСТНАЯ РАБОТА' : 'COLLABORATION'}</span></div>
            <div className="hack-heading reveal"><h2>{t.hackTitle}</h2><p>{t.hackLead}</p></div>
            <div className="hack-list reveal delay-1">{t.hackathons.map((item, index) => <article className="hack-card" key={item.name}><div className="hack-index"><span>0{index + 1}</span><strong>{item.year}</strong></div><div className="hack-content"><h3>{item.name}</h3><p className="hack-track">{item.track}</p><p>{item.role}</p></div><span className="hack-arrow">↗</span></article>)}</div>
          </div>
        </section>

        <section className="education section-pad" id="education">
          <div className="container education-layout">
            <div className="education-heading reveal"><span className="eyebrow">{t.eduLabel}</span><h2>{t.eduTitle}</h2><p>{t.university}</p></div>
            <div className="education-content reveal delay-1"><article><span>2026 — PRESENT</span><h3>{t.master}</h3><p>{t.masterDesc}</p></article><article><span>2022 — 2026</span><h3>{t.bachelor}</h3><p>{t.bachelorDesc}</p></article></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="section-top reveal"><span className="eyebrow">{t.contactLabel}</span><span className="section-count">04 / CONTACT</span></div>
            <div className="contact-layout reveal"><h2>{t.contactTitle}</h2><div><a className="contact-email" href="mailto:yaroslav.prokoshkin2134@gmail.com">yaroslav.prokoshkin2134@gmail.com <Arrow /></a></div></div>
            <div className="contact-links reveal delay-1">
              <a href="https://t.me/j99j99jj9" target="_blank" rel="noopener noreferrer"><span>TELEGRAM</span><strong>@j99j99jj9</strong><Arrow /></a>
              <a href="https://github.com/sk8teJ" target="_blank" rel="noopener noreferrer"><span>GITHUB</span><strong>github.com/sk8teJ</strong><Arrow /></a>
              <a href="mailto:yaroslav.prokoshkin2134@gmail.com"><span>EMAIL</span><strong>{language === 'ru' ? 'Написать письмо' : 'Send an email'}</strong><Arrow /></a>
            </div>
            <footer className="footer"><span>© {new Date().getFullYear()} Yaroslav Prokoshkin</span><a href="#top">{t.top} ↑</a><span>{t.footer}</span></footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
