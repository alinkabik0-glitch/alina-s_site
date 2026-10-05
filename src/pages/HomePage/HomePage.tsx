import styles from './HomePage.module.css';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Partners from '../../components/Partners/Partners';
import ContactForm from '../../components/ContactForm/ContactForm';
import { lecturersData } from '../../data/lecturersData';
import LecturerCard from '../../components/LecturerCard/LecturerCard';

interface HomePageProps {
  onNavigate: (page: string, lecturerId?: number) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const topLecturers = lecturersData.slice(0, 3);

  return (
    <div className={styles.homePage}>
      <Hero onNavigate={onNavigate} />
      
      {/* Добавлен id для якорной ссылки */}
      <div id="about-section">
        <About />
      </div>
      
      <Partners />
      
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши лекторы</h2>
          <div className={styles.lecturersPreview}>
            {topLecturers.map(lecturer => (
              <LecturerCard 
                key={lecturer.id}
                lecturer={lecturer}
                onClick={() => onNavigate('lecturers', lecturer.id)}
              />
            ))}
          </div>
          <div className={styles.centerButton}>
            <button 
              className={styles.btnPrimary}
              onClick={() => onNavigate('lecturers')}
            >
              Смотреть всех лекторов
            </button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}