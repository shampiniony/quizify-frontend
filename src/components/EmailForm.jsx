import React, { useState } from "react";
import styles from "./EmailForm.module.css"; // Импорт модульных стилей

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // Для отображения статуса
  const [loading, setLoading] = useState(false); // Для индикации загрузки

  // Функция для обработки отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Начинаем индикацию загрузки
    setStatus(""); // Сброс статуса перед новой попыткой

    try {
      const response = await fetch("https://example.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Отправляем email в теле запроса
      });

      if (response.ok) {
        // Если запрос успешен
        setStatus("Email успешно отправлен!");
      } else {
        // Если сервер вернул ошибку
        setStatus("Произошла ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      // Обработка исключений (например, проблема с сетью)
      setStatus("Ошибка соединения. Проверьте ваше интернет-соединение.");
    } finally {
      setLoading(false); // Останавливаем индикацию загрузки
    }
  };

  return (
    <div className={styles.container}>
      <div className="formWrapper">
        <form onSubmit={handleSubmit} className={styles.emailForm}>
          <input
            type="email"
            placeholder="pupupupupupu@pupu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Отправка..." : "Отправить"}
          </button>
          {status && <p className={styles.status}>{status}</p>}{" "}
          {/* Вывод статуса */}
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
