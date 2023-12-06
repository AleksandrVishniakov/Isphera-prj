import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const configs = {
  header: "Тест по знанию ИТ",
  description: "Проверьте свои знания в мире информационных технологий с помощью этих 10 вопросов.",
  questions: [
    {
      type: "general",
      question: "Аббревиатура 'URL' расшифровывается как Universal Resource Locator.",
      answer: true,
      data: undefined,
    },
    {
      type: "checkbox",
      question: "Выберите языки программирования, которые относятся к высокоуровневым языкам.",
      answer: ["Java", "Python", "Assembly", "C#"],
      data: ["Java", "Python", "JavaScript", "C", "Assembly", "C#"],
    },
    {
      type: "radio",
      question: "Какой из перечисленных является системой контроля версий?",
      answer: "Git",
      data: ["SVN", "Mercurial", "Git", "Perforce"],
    },
    {
      type: "text",
      question: "Что означает акроним 'IoT' в контексте информационных технологий?",
      answer: "Интернет вещей",
      data: undefined,
    },
    {
      type: "general",
      question: "JavaScript можно использовать только для клиентского скриптинга в веб-браузерах.",
      answer: false,
      data: undefined,
    },
    {
      type: "checkbox",
      question: "Выберите популярные системы управления реляционными базами данных (СУБД).",
      answer: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      data: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Oracle", "Redis"],
    },
    {
      type: "radio",
      question: "Какой из перечисленных языков программирования был разработан JetBrains?",
      answer: "Kotlin",
      data: ["Java", "C#", "Kotlin", "Swift"],
    },
    {
      type: "text",
      question: "Что означает 'ИИ' в контексте компьютерных наук?",
      answer: "Искусственный интеллект",
      data: undefined,
    },
    {
      type: "general",
      question: "HTML является языком программирования.",
      answer: false,
      data: undefined,
    },
    {
      type: "checkbox",
      question: "Выберите популярные фреймворки или библиотеки для разработки интерфейса на JavaScript.",
      answer: ["React", "Angular", "Vue", "Express"],
      data: ["React", "Angular", "Vue", "Express", "Django", "Flask"],
    },
  ],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App item={{configs: configs}}/>
  </React.StrictMode>
);

