import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>EduBikbaby</h3>
          <p>Онлайн и офлайн обучение</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Контакты</h3>
          <p>Email: alinkabik0@gmail.com</p>
          <p>Телефон: +7 (922) 941-27-20</p>
          <p>Адрес: г. Казань, ул. Академика Сахарова, 29</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Разделы</h3>
          <p><a href="#home">Главная</a></p>
          <p><a href="#lecturers">Лекторы</a></p>
          <p><a href="#contacts">Контакты</a></p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2026 EduBikbaby.</p>
      </div>
    </footer>
  );
}