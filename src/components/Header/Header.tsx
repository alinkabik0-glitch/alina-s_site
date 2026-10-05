import { useState } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAboutClick = () => {
    // Если мы не на главной - переходим на главную
    if (window.location.hash !== '#home' && window.location.hash !== '') {
      onNavigate('home');
      // Ждем перехода, затем скроллим
      setTimeout(() => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Если уже на главной - просто скроллим
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <button className={styles.navLink} onClick={() => onNavigate('home')}>
            Главная
          </button>
          <button className={styles.navLink} onClick={() => onNavigate('partners')}>
            Партнёры
          </button>
          <button className={styles.navLink} onClick={handleAboutClick}>
            О нас
          </button>
          <button className={styles.navLink} onClick={() => onNavigate('lecturers')}>
            Лекторы
          </button>
        </nav>

        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </header>
  );
}