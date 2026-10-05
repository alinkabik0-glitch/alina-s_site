import styles from './Hero.module.css';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroImage}>
          <img 
            src="https://storage.yandexcloud.net/rpi/popo.png" 
            alt="Преподаватель в классе"
          />
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
          </h1>
          <button 
            className={styles.findButton}
            onClick={() => onNavigate('lecturers')}
          >
            НАЙТИ ЛЕКТОРА
          </button>
        </div>
      </div>
    </section>
  );
}