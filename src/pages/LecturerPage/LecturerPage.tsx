import styles from './LecturerPage.module.css';
import { lecturersData } from '../../data/lecturersData';

interface LecturerPageProps {
  lecturerId: number;
  onNavigate: (page: string) => void;
}

export default function LecturerPage({ lecturerId, onNavigate }: LecturerPageProps) {
  const lecturer = lecturersData.find(l => l.id === lecturerId);

  if (!lecturer) {
    return (
      <div className={styles.notFound}>
        <h2>Лектор не найден</h2>
        <button onClick={() => onNavigate('lecturers')}>Вернуться к списку</button>
      </div>
    );
  }

  return (
    <div className={styles.lecturerPage}>
      <div className={styles.container}>
        <button className={styles.backButton} onClick={() => onNavigate('lecturers')}>
          ← Назад к списку лекторов
        </button>

        <div className={styles.lecturerHeader}>
          <div className={styles.lecturerPhoto}>
            <img 
              src={lecturer.photoUrl} 
              alt={lecturer.fullName}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(lecturer.fullName)}&size=300&background=4A90E2&color=fff`;
              }}
            />
          </div>
          <div className={styles.lecturerInfo}>
            <h1 className={styles.lecturerName}>{lecturer.fullName}</h1>
            <p className={styles.lecturerDegree}>
              {lecturer.degree !== 'нет' ? lecturer.degree : 'Практикующий специалист'}
            </p>
            <p className={styles.lecturerEducation}>{lecturer.education}</p>
            <p className={styles.lecturerExperience}>Стаж: {lecturer.experience}</p>
            
            {/* Кнопка под ФИО */}
            <button 
              className={styles.ctaButton}
              onClick={() => onNavigate('contacts')}
            >
              Записаться на занятие
            </button>
          </div>
        </div>

        <div className={styles.disciplines}>
          <h2 className={styles.sectionTitle}>Преподаваемые дисциплины</h2>
          {lecturer.disciplines.map((discipline, index) => (
            <div key={index} className={styles.disciplineCard}>
              <h3 className={styles.disciplineTitle}>{discipline.title}</h3>
              <p className={styles.disciplineDescription}>{discipline.description}</p>
              <div className={styles.topicsList}>
                <h4>Темы курса:</h4>
                <ul>
                  {discipline.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tariffs}>
          <h2 className={styles.sectionTitle}>Тарифы</h2>
          <div className={styles.tariffsGrid}>
            {lecturer.tariffs.map((tariff, index) => (
              <div key={index} className={styles.tariffCard}>
                <h3 className={styles.tariffName}>{tariff.name}</h3>
                <p className={styles.tariffPrice}>{tariff.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <button className={styles.ctaButton} onClick={() => onNavigate('contacts')}>
            Записаться на занятие
          </button>
        </div>
      </div>
    </div>
  );
}