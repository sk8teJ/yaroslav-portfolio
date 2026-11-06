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
      { number: '02 / WORKFLOW AUTOMATION', title: 'AI Request Manager', description: 'Workflow на n8n для приёма обращений через Telegram и их автоматизированной обработки. DeepSeek через OpenRouter определяет категорию, приоритет, тональность, краткое содержание и ответственное подразделение.', details: 'Реализованы маршрутизация, сохранение результатов, уведомления, отдельные процессы обработки ошибок и аналитические отчёты.', tags: ['n8n', 'OpenRouter API', 'DeepSeek', 'Telegram Bot API', 'JSON'], repo: 'https://github.com/sk8teJ/ai-request-manager', demo: 'https://drive.google.com/file/d/1UGbDxi80J0YD-6bMpyKEt1oCF3E-IDOM/view?usp=sharing' },
      { number: '03 / BUSINESS ANALYTICS', title: 'Business Process Analytics', description: 'Учебный аналитический проект интернет-магазина на синтетических данных. PostgreSQL и SQL используются для анализа заказов, платежей, возвратов, доставки и длительности этапов бизнес-процессов.', details: 'Создан интерактивный дашборд на Streamlit и Plotly, а также сценарный калькулятор потенциального эффекта автоматизации и ROI.', tags: ['Python', 'Pandas', 'PostgreSQL', 'SQL', 'Streamlit', 'Plotly'], repo: 'https://github.com/sk8teJ/business-process-analytics' },
    ],
    skillsLabel: 'Инструменты и подходы / 04',
    skillsTitle: 'Навыки и технологии.',
    hard: 'Hard Skills',
    hardSkills: ['Prompt Engineering: разработка, тестирование и улучшение промптов', 'LLM: ChatGPT, Google Gemini, DeepSeek, Qwen', 'RAG, embeddings, chunking и векторный поиск', 'Google Gemini API, REST API и JSON', 'Автоматизация workflow в n8n', 'Python, Pandas, HTML, CSS, JavaScript, React', 'SQL и PostgreSQL: базовые запросы и работа с данными', 'Streamlit, Plotly, Bootstrap 5', 'Основы ML и базовая оценка качества AI-решений', 'Git и GitHub'],
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
    contactLead: 'Открыт к стажировкам, junior-позициям и профессиональному общению.',
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
      { number: '02 / WORKFLOW AUTOMATION', title: 'AI Request Manager', description: 'An n8n workflow that receives Telegram requests and processes them automatically. DeepSeek via OpenRouter classifies category, priority, sentiment, summary, and responsible department.', details: 'Includes request routing, result storage, notifications, dedicated error-handling workflows, and analytics reports.', tags: ['n8n', 'OpenRouter API', 'DeepSeek', 'Telegram Bot API', 'JSON'], repo: 'https://github.com/sk8teJ/ai-request-manager', demo: 'https://drive.google.com/file/d/1UGbDxi80J0YD-6bMpyKEt1oCF3E-IDOM/view?usp=sharing' },
      { number: '03 / BUSINESS ANALYTICS', title: 'Business Process Analytics', description: 'An educational e-commerce analytics project based on synthetic data. PostgreSQL and SQL are used to analyse orders, payments, returns, delivery, and business-process duration.', details: 'Includes an interactive Streamlit and Plotly dashboard and a scenario-based calculator for potential automation impact and ROI.', tags: ['Python', 'Pandas', 'PostgreSQL', 'SQL', 'Streamlit', 'Plotly'], repo: 'https://github.com/sk8teJ/business-process-analytics' },
    ],
    skillsLabel: 'Tools and methods / 04',
    skillsTitle: 'Skills and technologies.',
    hard: 'Hard Skills',
    hardSkills: ['Prompt engineering: prompt design, testing, and iteration', 'LLMs: ChatGPT, Google Gemini, DeepSeek, Qwen', 'RAG, embeddings, chunking, and vector search', 'Google Gemini API, REST APIs, and JSON', 'Workflow automation with n8n', 'Python, Pandas, HTML, CSS, JavaScript, React', 'SQL and PostgreSQL: basic queries and data handling', 'Streamlit, Plotly, Bootstrap 5', 'ML fundamentals and basic AI solution evaluation', 'Git and GitHub'],
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
    contactLead: 'Open to internships, junior roles, and professional conversations.',
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

function App() {
  const [language, setLanguage] = useState('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
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
      <header className="nav-shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={closeMenu}>Yaroslav<span>.</span></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['work', 'capabilities', 'about', 'hackathons', 'contact'].map((id, i) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{t.nav[i]}</a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="lang-switch" type="button" onClick={toggleLanguage} aria-label={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}>{language === 'ru' ? 'EN' : 'RU'}</button>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 5h12M2 11h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability reveal"><i /><span>{t.availability}</span></div>
              <h1 className="reveal delay-1">{t.role}<span className="line-two">{t.roleAccent}</span></h1>
              <p className="hero-description reveal delay-2">{t.intro}</p>
              <div className="hero-actions reveal delay-2">
                <a className="button-primary" href="#work">{language === 'ru' ? 'Смотреть проекты' : 'Explore projects'} <Arrow /></a>
                <a className="button-secondary" href="#about">{language === 'ru' ? 'Обо мне' : 'About me'} <Arrow /></a>
              </div>
            </div>
            <div className="hero-art reveal delay-2" aria-label="Abstract AI and automation illustration">
              <div className="orbit" />
              <div className="glass-panel">
                <div className="panel-top"><span>Prompt / Workflow / Result</span><span className="panel-dots"><i /><i /><i /></span></div>
                <div className="panel-title">{language === 'ru' ? 'От запроса — к решению.' : 'From prompt to outcome.'}</div>
                <div className="metric-row">
                  <div className="metric"><small>LLM</small><strong>AI<span>.</span></strong><em>Context & prompts</em></div>
                  <div className="metric"><small>Automation</small><strong>01</strong><em>Workflow</em></div>
                </div>
                <div className="chart"><svg viewBox="0 0 330 105" preserveAspectRatio="none" aria-hidden="true"><path d="M0 82 C25 75 31 84 52 66 S82 62 102 68 S129 37 151 49 S177 60 197 36 S225 43 245 27 S278 32 300 10 L330 15" fill="none" stroke="#a9c5f5" strokeWidth="2" /></svg></div>
              </div>
              <div className="float-tag one">LLM · RAG · API</div>
              <div className="float-tag two">Think clearly. Build simply.</div>
            </div>
          </div>
          <div className="scroll-note">{language === 'ru' ? 'Листайте вниз' : 'Scroll to explore'}</div>
        </section>

        <section className="trust-strip"><div className="container trust-inner"><span>Prompt engineering</span><span>Applied AI</span><span>RAG & vector search</span><span>Workflow automation</span></div></section>

        <section className="work section-pad" id="work">
          <div className="container">
            <div className="work-intro reveal"><div><span className="eyebrow">{t.projectsLabel}</span><h2 className="section-heading">{t.projectsTitle}</h2></div><p className="section-lead">{t.projectsLead}</p></div>
            {t.projects.map((project, i) => (
              <article className={`project ${i % 2 === 0 ? 'light' : ''} reveal`} key={project.title}>
                <div className="project-inner">
                  <div className="project-copy">
                    <div className="project-index">{project.number}</div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-details">{project.details}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                    <div className="project-actions">
                      <a className="project-link" href={project.repo} target="_blank" rel="noopener noreferrer">{language === 'ru' ? 'Исходный код на GitHub' : 'Source code on GitHub'} <Arrow /></a>
                      {project.demo && <a className="project-link secondary-link" href={project.demo} target="_blank" rel="noopener noreferrer">{language === 'ru' ? 'Демонстрация' : 'Demo'} <Arrow /></a>}
                    </div>
                  </div>
                  <div className="project-visual"><div className="project-art-card"><span>0{i + 1}</span><strong>{['RAG', 'WORKFLOW', 'ANALYTICS'][i]}</strong><small>{project.tags.slice(0, 3).join(' · ')}</small><div className="art-lines"><i /><i /><i /><i /></div></div></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section-pad" id="capabilities">
          <div className="container">
            <div className="reveal"><span className="eyebrow">{t.skillsLabel}</span><h2 className="section-heading">{t.skillsTitle}</h2></div>
            <div className="skills-layout reveal delay-1">
              <div className="skills-column"><h3>{t.hard}</h3><ul>{t.hardSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
              <div className="skills-column soft-column"><h3>{t.soft}</h3><ul>{t.softSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-grid"><div className="reveal"><span className="eyebrow">{t.aboutLabel}</span><h2 className="about-statement">{t.aboutTitle}</h2></div><div className="about-copy reveal delay-1">{t.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        </section>

        <section className="hackathons section-pad" id="hackathons">
          <div className="container">
            <div className="reveal"><span className="eyebrow">{t.hackLabel}</span><h2 className="section-heading">{t.hackTitle}</h2><p className="section-lead">{t.hackLead}</p></div>
            <div className="hack-list reveal delay-1">{t.hackathons.map((item) => <article className="hack-card" key={item.name}><div className="hack-year">{item.year}</div><div className="hack-content"><h3>{item.name}</h3><p className="hack-track">{item.track}</p><p>{item.role}</p></div></article>)}</div>
          </div>
        </section>

        <section className="education section-pad" id="education">
          <div className="container"><div className="reveal"><span className="eyebrow">{t.eduLabel}</span><h2 className="section-heading">{t.eduTitle}</h2></div>
            <div className="education-card reveal delay-1"><div className="education-label">{t.university}</div><div><div className="education-main"><h3>{t.master}</h3><p>{t.masterDesc}</p></div><div className="education-main"><h3>{t.bachelor}</h3><p>{t.bachelorDesc}</p></div></div></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact-top reveal"><div><span className="eyebrow">{t.contactLabel}</span><h2 className="section-heading">{t.contactTitle}</h2></div><p className="section-lead">{t.contactLead}</p></div>
            <div className="contact-grid reveal delay-1">
              <a className="contact-card" href="mailto:yaroslav.prokoshkin2134@gmail.com"><span className="contact-type">Email</span><strong>yaroslav.prokoshkin2134@gmail.com <Arrow /></strong><small>{t.emailHint}</small></a>
              <a className="contact-card" href="https://t.me/j99j99jj9" target="_blank" rel="noopener noreferrer"><span className="contact-type">Telegram</span><strong>@j99j99jj9 <Arrow /></strong><small>{t.telegramHint}</small></a>
              <a className="contact-card" href="https://github.com/sk8teJ" target="_blank" rel="noopener noreferrer"><span className="contact-type">GitHub</span><strong>github.com/sk8teJ <Arrow /></strong><small>{t.githubHint}</small></a>
            </div>
            <footer className="footer"><span>© {new Date().getFullYear()} Yaroslav. {language === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}</span><a href="#top">{t.top}</a><span>{t.footer}</span></footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
