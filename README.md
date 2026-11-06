# Ярослав Прокошкин — Junior Prompt Engineer / AI Automation Specialist

Одностраничное портфолио на React + Vite. Тёмная минималистичная визуальная концепция, адаптивная вёрстка, анимации появления секций и переключение русского/английского языков.

## Проекты в портфолио

- **AI Knowledge Assistant** — учебное RAG-приложение для PDF, DOCX и TXT: Gemini Embeddings, ChromaDB, поиск контекста, ответы с источниками, управление документами и автоматизированные базовые проверки retrieval и генерации.
- **AI Request Manager** — учебный workflow на n8n для обработки обращений из Telegram с помощью Google Gemini: классификация, приоритизация, определение тональности и подразделения, сохранение результатов в n8n Data Tables, уведомления, обработка ошибок и отдельный аналитический workflow.
- **Business Process Analytics** — учебный проект аналитики интернет-магазина на синтетических данных: PostgreSQL, SQL, Pandas, Streamlit, Plotly, сценарный ROI-калькулятор и запуск через Docker Compose.

## Автоматическая проверка\n\nGitHub Actions запускает production-сборку Vite при каждом push и pull request в `main`. Проверка выполняется на Node.js 20.19 и 22.12.\n\n## Требования

- Node.js 20.19+ или 22.12+
- npm

## Запуск в Windows PowerShell

Перейдите в папку проекта:

```powershell
cd путь\к\yaroslav-portfolio
npm install
npm run dev
```

Откройте локальный адрес, который Vite покажет в терминале (обычно `http://localhost:5173`).

## Проверка production-сборки

```powershell
npm run build
npm run preview
```

## Структура

- `src/App.jsx` — секции сайта, тексты RU/EN, проекты и контакты.
- `src/styles.css` — адаптивные стили и анимации.
- `src/main.jsx` — точка входа React.
- `index.html` — метаданные страницы.

Показатели и результаты, если они упоминаются в описаниях проектов, относятся только к фактически выполненным учебным проверкам. Business Process Analytics использует синтетические данные и не является коммерческим внедрением.
