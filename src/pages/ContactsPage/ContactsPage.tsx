import styles from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function ContactsPage() {
  return (
    <div className={styles.contactsPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Контакты</h1>
          <p className={styles.pageSubtitle}>
            Свяжитесь с нами для записи на занятие или получения консультации
          </p>
        </div>

        <div className={styles.contactsGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h3>Email</h3>
              <p>alinkabik0@gmail.com</p>
            </div>
            <div className={styles.contactCard}>
              <h3>Телефон</h3>
              <p>+7 (922) 941-27-20</p>
            </div>
            <div className={styles.contactCard}>
              <h3> Адрес</h3>
              <p>г. Казань, ул. Академика Сахарова, 29</p>
            </div>
            <div className={styles.contactCard}>
              <h3>Часы работы</h3>
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 18:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>

          <div className={styles.contactFormSection}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}