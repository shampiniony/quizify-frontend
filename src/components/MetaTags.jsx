// src/components/MetaTags.js

import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = () => {
  const baseUrl = "https://kvizik.ru";
  const imageUrl = "/images/cat.svg";

  return (
    <Helmet>
      <title>Квизик!</title>
      <meta name="description" content="Веб-сервис с поддержкой ИИ для генерации тестов и заметок на основе загруженных текстов." />
      <meta name="keywords" content="искусственный интеллект, генерация тестов, образовательные технологии, онлайн-курсы, обучение, контроль знаний, API для разработчиков" />
      <meta name="author" content="ООО ШампсТех" />

      <meta property="og:title" content="Квизик!" />
      <meta property="og:description" content="Создавайте тесты и заметки на основе загруженных текстов с помощью нашего ИИ-сервиса." />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content="website" />

      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={baseUrl} />

      <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />

    </Helmet>
  );
};

export default MetaTags;
