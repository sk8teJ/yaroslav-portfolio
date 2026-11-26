<div align="center">
  <img src="assets/github-profile-banner.svg" alt="Ярослав — системный аналитик" width="100%">
  <p><strong>Системный анализ · Требования · Процессы · Интеграции</strong></p>
  <p>Портфолио с описанием проектов, подхода к анализу задач и используемых технологий.</p>
  <p><a href="https://yaroslav-portfolio.yaroslav-prokoshkin2134.workers.dev/">Открыть портфолио</a> · <a href="https://github.com/sk8teJ">GitHub</a></p>
</div>

---

## Проекты

| Проект | Описание | Технологии |
|---|---|---|
| [Ассистент по базе знаний](https://github.com/sk8teJ/ai-knowledge-assistant) | Поиск по PDF, DOCX и TXT, ответы с указанием источников, обработка документов | Python · Streamlit · Gemini · ChromaDB |
| [Менеджер обращений](https://github.com/sk8teJ/ai-request-manager) | Обработка обращений из Telegram: классификация, приоритизация, маршрутизация и уведомления | n8n · Google Gemini · Telegram |
| [Анализ бизнес-процессов](https://github.com/sk8teJ/business-process-analytics) | Анализ операций, SQL-метрики, дашборд и сценарный калькулятор эффекта автоматизации на синтетических данных | PostgreSQL · SQL · Pandas · Streamlit · Plotly |

## Автоматическая проверка

GitHub Actions запускает production-сборку Vite при каждом push и pull request в `main`. Проверка выполняется на Node.js 20.19 и 22.12.

## Локальный запуск

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

## Структура проекта

- `src/App.jsx` — секции сайта, тексты RU/EN, проекты и контакты.
- `src/styles.css` — адаптивные стили и анимации.
- `src/main.jsx` — точка входа React.
- `index.html` — метаданные страницы.
