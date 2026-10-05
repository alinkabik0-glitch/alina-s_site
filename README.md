## Стек и версии
- **Node** 24.13.0
- **npm** 11.6.2
- **React** 19.3.0
- **TypeScript** 6.0.3
- **Vite** 8.3.0

## Команды для установки и запуска

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

RPI3I/
├── public/                    # Статические файлы, доступные по корневому URL
│   └── images/                # Логотипы партнёров и иконки
│       ├── icl-logo.png
│       └── tatneft-logo.png
│
├── src/                       # Исходный код приложения
│   ├── components/            # Переиспользуемые UI-компоненты
│   │   ├── About/             # Блок «О нас»
│   │   │   ├── About.tsx
│   │   │   └── About.module.css
│   │   ├── ContactForm/       # Форма обратной связи
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactForm.module.css
│   │   ├── Footer/            # Подвал сайта
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── Header/            # Шапка с навигацией
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   ├── Hero/              # Главный экран (Hero-блок)
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── LecturerCard/      # Карточка лектора (для списка)
│   │   │   ├── LecturerCard.tsx
│   │   │   └── LecturerCard.module.css
│   │   ├── LecturersList/     # Список лекторов с поиском и фильтрацией
│   │   │   ├── LecturersList.tsx
│   │   │   └── LecturersList.module.css
│   │   └── Partners/          # Блок партнёров
│   │       ├── Partners.tsx
│   │       └── Partners.module.css
│   │
│   ├── data/                  # Данные приложения
│   │   └── lecturersData.ts   # Массивы лекторов и партнёров
│   │
│   ├── pages/                 # Страницы приложения
│   │   ├── ContactsPage/      # Страница контактов
│   │   │   ├── ContactsPage.tsx
│   │   │   └── ContactsPage.module.css
│   │   ├── HomePage/          # Главная страница
│   │   │   ├── HomePage.tsx
│   │   │   ── HomePage.module.css
│   │   ├── LecturerPage/      # Детальная страница лектора
│   │   │   ├── LecturerPage.tsx
│   │   │   └── LecturerPage.module.css
│   │   └── LecturersPage/     # Каталог всех лекторов
│   │       ├── LecturersPage.tsx
│   │       └── LecturersPage.module.css
│   │
│   ├── styles/                # Глобальные стили
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── App.tsx                # Корневой компонент (роутинг)
│   └── main.tsx               # Точка входа в приложение
│
├── .gitignore                 # Исключения для Git
── index.html                 # HTML-шаблон Vite
├── package.json               # Зависимости и скрипты
├── tsconfig.json              # Конфигурация TypeScript
├── vite.config.ts             # Конфигурация Vite
└── README.md                  # Документация проекта

- Данные
Вся информация о лекторах (ФИО, образование, стаж, учёная степень, список дисциплин с темами, тарифы) и о партнёрах (название, описание, сайт) хранится в одном файле src/data/lecturersData.ts. Фото преподавателей подгружаются из облачного хранилища Cloudinary.
- Роутинг. 
Навигация реализована через hash-URL в корневом компоненте src/App.tsx. 