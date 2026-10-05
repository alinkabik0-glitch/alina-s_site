import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>О нас</h2>
        <div className={styles.content}>
          <p>
            Наша учебная платформа соединяет компании, образовательные учреждения и НКО 
            с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, 
            бронирования и организации лекций, помогая находить экспертов, которые не просто 
            делятся знаниями, но и вдохновляют аудиторию.
          </p>
        </div>
      </div>
    </section>
  );
}