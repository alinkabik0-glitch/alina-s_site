import { useState } from 'react';
import styles from './LecturerCard.module.css';

interface Discipline {
  title: string;
  description: string;
  topics: string[];
}

interface Tariff {
  name: string;
  price: string;
}

interface Lecturer {
  id: number;
  fullName: string;
  gender: string;
  education: string;
  experience: string;
  degree: string;
  photoUrl: string;
  disciplines: Discipline[];
  tariffs: Tariff[];
}

interface LecturerCardProps {
  lecturer: Lecturer;
  onClick: () => void;
}

export default function LecturerCard({ lecturer, onClick }: LecturerCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={styles.lecturerCard} onClick={onClick}>
      <div className={styles.lecturerPhoto}>
        <img 
          src={imageError 
            ? `https://ui-avatars.com/api/?name=${encodeURIComponent(lecturer.fullName)}&size=300&background=4A90E2&color=fff`
            : lecturer.photoUrl
          }
          alt={lecturer.fullName}
          onError={() => setImageError(true)}
        />
      </div>
      <div className={styles.lecturerInfo}>
        <h3 className={styles.lecturerName}>{lecturer.fullName}</h3>
        <p className={styles.lecturerDegree}>
          {lecturer.degree !== 'нет' ? lecturer.degree : 'Практикующий специалист'}
        </p>
        <p className={styles.lecturerEducation}>{lecturer.education}</p>
        <p className={styles.lecturerExperience}>Стаж: {lecturer.experience}</p>
        <div className={styles.lecturerSubjects}>
          <span className={styles.subjectsCount}>{lecturer.disciplines.length} дисциплин</span>
        </div>
      </div>
    </div>
  );
}