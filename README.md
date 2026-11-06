# Ярослав Прокошкин — Junior Prompt Engineer / AI Automation Specialist

Одностраничное портфолио на React + Vite. Тёмная минималистичная визуальная концепция, адаптивная вёрстка, анимации появления секций и переключение русского/английского языков.

## Проекты в портфолио

- **AI Knowledge Assistant** — RAG-поиск по PDF, DOCX и TXT, Gemini Embeddings, ChromaDB, управление документами и базовые проверки качества retrieval и генерации.
- **AI Request Manager** — автоматизация обработки обращений через n8n и Telegram; классификация с помощью DeepSeek через OpenRouter.
- **Business Process Analytics** — учебный проект аналитики бизнес-процессов на синтетических данных с PostgreSQL, Pandas, Streamlit и Plotly.

## Требования

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
