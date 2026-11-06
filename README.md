<div align="center">
  <img src="assets/github-profile-banner.svg" alt="Yaroslav Prokoshkin — AI, automation and business analytics" width="100%">
  <p><strong>AI · Automation · Business Analytics</strong></p>
  <p>Одностраничное портфолио на React + Vite с адаптивной вёрсткой, анимациями и переключением RU/EN.</p>
  <p><a href="https://yaroslav-portfolio.yaroslav-prokoshkin2134.workers.dev/">Открыть сайт</a> · <a href="https://github.com/sk8teJ">GitHub</a></p>
  <img alt="CI" src="https://github.com/sk8teJ/yaroslav-portfolio/actions/workflows/ci.yml/badge.svg?branch=main">
</div>

---

## Проекты

| Проект | Описание | Технологии |
|---|---|---|
| [AI Knowledge Assistant](https://github.com/sk8teJ/ai-knowledge-assistant) | Учебное RAG-приложение: поиск по PDF, DOCX и TXT, ответы с источниками, управление документами | Python · Streamlit · Gemini · ChromaDB |
| [AI Request Manager](https://github.com/sk8teJ/ai-request-manager) | Автоматизация обработки обращений из Telegram: классификация, приоритизация, маршрутизация и аналитика | n8n · Google Gemini · Telegram |
| [Business Process Analytics](https://github.com/sk8teJ/business-process-analytics) | Анализ операций интернет-магазина, SQL-метрики, дашборд и сценарный ROI-калькулятор на синтетических данных | PostgreSQL · SQL · Pandas · Streamlit · Plotly |

## Автоматическая проверка

GitHub Actions запускает production-сборку Vite при каждом push и pull request в `main`. Проверка выполняется на Node.js 20.19 и 22.12.

## Запуск локально

Требования: Node.js 20.19+ или 22.12+, npm.

```bash
npm install
npm run dev
```

## Production-сборка

```bash
npm run build
npm run preview
```

## Структура

- `src/App.jsx` — секции сайта, тексты RU/EN, проекты и контакты.
- `src/styles.css` — адаптивные стили и анимации.
- `src/main.jsx` — точка входа React.
- `index.html` — метаданные страницы.

Проекты в портфолио являются учебными и самостоятельными. Описания и результаты отражают фактически реализованный функционал; Business Process Analytics использует синтетические данные.
