import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import styles from "./EmailForm.module.css";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const params = new URLSearchParams();
      params.append("email", email);

      const response = await fetch("https://api.kvizik.ru/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (response.ok) {
        setStatus("Email успешно отправлен!");
        setIsSubmitted(true);
      } else {
        setStatus("Произошла ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      setStatus("Ошибка соединения. Проверьте ваше интернет-соединение.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className="formWrapper">
        {isSubmitted ? (
          <div className={styles.successMessage}>
            <Alert variant="success">Ваша заявка на ранний доступ принята!</Alert>
            <Button
              href="https://t.me/kvizikru"
              target="_blank"
              className={styles.button}
              style={{ marginTop: "10px" }}
            >
              Перейти в Telegram
            </Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit} className={styles.emailForm}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="i.ivanov@mail.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </Form.Group>
            <Button type="submit" className={styles.button} disabled={loading}>
              {loading ? "Отправка..." : "Отправить"}
            </Button>
            {status && (
              <Alert variant={status.includes("успешно") ? "success" : "danger"} className={styles.status}>
                {status}
              </Alert>
            )}
          </Form>
        )}
      </div>
    </div>
  );
};

export default EmailForm;
