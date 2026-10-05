import styles from './LecturersPage.module.css';
import LecturersList from '../../components/LecturersList/LecturersList';

interface LecturersPageProps {
  onNavigate: (page: string, lecturerId: number) => void;
}

export default function LecturersPage({ onNavigate }: LecturersPageProps) {
  return (
    <div className={styles.lecturersPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Наши лекторы</h1>
        <p className={styles.pageSubtitle}>
          Выберите специалиста из нашего каталога
        </p>
      </div>
      
      <LecturersList onNavigate={onNavigate} />
    </div>
  );
}