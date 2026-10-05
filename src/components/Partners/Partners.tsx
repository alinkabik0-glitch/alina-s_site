import styles from './Partners.module.css';
import { partners } from '../../data/lecturersData';

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Партнёры</h2>
        <div className={styles.partnersGrid}>
          {partners.map(partner => (
            <div key={partner.id} className={styles.partnerCard}>
              <div className={styles.partnerHeader}>
                <div className={styles.partnerLogo}>
                  {partner.name === 'ICL' ? (
                    <img 
                      src="https://storage.yandexcloud.net/rpi/d62e84c8-c213-4a7c-a8ad-db3fb7b70228_image.png"
                      alt="ICL"
                      className={styles.logoImage}
                    />
                  ) : partner.name === 'TATNEFT' ? (
                    <img 
                      src="https://storage.yandexcloud.net/rpi/44217d44-9a77-4056-be8f-9d2eb27c5cd3_image.png"
                      alt="TATNEFT"
                      className={styles.logoImage}
                    />
                  ) : (
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                  )}
                </div>
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.externalLink}
                  aria-label="Перейти на сайт партнёра"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
              <p className={styles.partnerDescription}>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}