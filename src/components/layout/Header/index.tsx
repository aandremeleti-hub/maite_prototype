import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logoMaite from '../../../assets/logo_maite.svg';

export function Header() {
  return (
    <header className={styles['header-container']}>
      <div className={styles['header-content']}>
        <Link className={styles['header-logo']} to="/" aria-label="Home - Mai Personal Class">
          <img src={logoMaite} alt="Mai Personal Class" className={styles['header-logo-image']} />
        </Link>
        
        <nav className={styles['header-nav']} aria-label="Main Navigation">
          <Link to="/methodology" className={styles['header-nav-link']} aria-label="Methodology section">Methodology</Link>
          <Link to="/about" className={styles['header-nav-link']} aria-label="About section">About</Link>
          <a href="#testimonials" className={styles['header-nav-link']} aria-label="Testimonials section">Testimonials</a>
          <Link to="/contact" className={styles['header-nav-link']} aria-label="Contact section">Contact</Link>
        </nav>

        <div className={styles['header-actions']}>
          <a className={styles['header-cta-button']} href="#" aria-label="Agendar Sessão">
            Agendar Sessão
          </a>
          <button className={styles['header-mobile-toggle']} aria-label="Menu" type="button">
            <span className="material-symbols-outlined" aria-hidden="true">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
