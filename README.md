# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Проект построен на базе шаблона Vite

Для запуска проекта 
1) npm install / yarn / pnpm install
2) npm run dev / yarn dev / pnpm dev

1) Для наглядности отображения событий добавил окно смены даты (в API нет будущих событий).
2) Использовал минимальное количество сторонних библиотек. Выбрал только styled-components и MobX (эти технологии указаны в вакансии).
3) В мобильной версии отсутствует четкий макет и размеры - использовал произвольные.
4) В макете таймер до события изображен не в ту сторону. Сделал против часовой.