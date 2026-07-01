import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logoMaite from '../../../assets/logo_maite.svg';
import { InstagramIcon } from '../../icons/InstagramIcon';

export interface GlobalFooterProps {}

export function GlobalFooter(_props: Readonly<GlobalFooterProps>) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles['footer-container']} aria-label="Global Footer">
      {/* Call to Action Section */}
      <div className={styles['footer-cta-wrapper']}>
        <div className={styles['footer-cta-container']}>
          <div className={styles['footer-cta-content']}>
            <div className={styles['footer-cta-text-wrapper']}>
              <h2 className={styles['footer-cta-title']}>
                Pronto para destravar a sua comunicação?
              </h2>
              <p className={styles['footer-cta-subtitle']}>
                Dê o primeiro passo para o seu inglês personalizado. Solicite um bate-papo de 15 minutos.
              </p>
            </div>
            <Link 
              to="/contact" 
              className={styles['footer-cta-button']} 
              aria-label="Falar com a Maitê para agendar uma sessão de bate-papo"
            >
              <span>Falar com a Maitê</span>
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles['footer-content']}>
        {/* Branding Column */}
        <div className={styles['footer-brand-column']}>
          <Link to="/" className={styles['footer-logo-link']} aria-label="Mai Personal Class - Home">
            <img 
              src={logoMaite} 
              alt="Logo oficial de Mai Personal Class" 
              className={styles['footer-logo']} 
              loading="lazy"
            />
          </Link>
          <p className={styles['footer-tagline']}>
            Mai Personal Class — A sua destravadora de comunicação.
          </p>
        </div>

        {/* Sitemap Column */}
        <div className={styles['footer-links-column']}>
          <h2 className={styles['footer-column-title']}>Navegação</h2>
          <nav aria-label="Links rápidos do rodapé">
            <ul className={styles['footer-links-list']}>
              <li>
                <Link to="/" className={styles['footer-link']} aria-label="Ir para a página inicial">Home</Link>
              </li>
              <li>
                <Link to="/methodology" className={styles['footer-link']} aria-label="Conhecer a metodologia de ensino">Metodologia</Link>
              </li>
              <li>
                <Link to="/about" className={styles['footer-link']} aria-label="Saber mais sobre a professora Maitê">Sobre a Maitê</Link>
              </li>
              <li>
                <Link to="/contact" className={styles['footer-link']} aria-label="Ir para a página de contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Column */}
        <div className={styles['footer-links-column']}>
          <h2 className={styles['footer-column-title']}>Contato</h2>
          <div className={styles['footer-contact-info']}>
            <a 
              href="mailto:contato@maipersonalclass.com" 
              className={styles['footer-email-link']}
              aria-label="Enviar um e-mail para contato@maipersonalclass.com"
            >
              contato@maipersonalclass.com
            </a>
            <p className={styles['footer-sla']}>
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '4px' }}>
                schedule
              </span>
              Respondemos em até 24h
            </p>
          </div>
        </div>

        {/* Social Connection Column */}
        <div className={styles['footer-links-column']}>
          <h2 className={styles['footer-column-title']}>Acompanhe-me</h2>
          <div className={styles['footer-social-wrapper']}>
            <a 
              href="https://www.instagram.com/maipersonalclass/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles['footer-social-link']}
              aria-label="Visitar perfil do Instagram de Mai Personal Class (abre em nova guia)"
            >
              <InstagramIcon className={styles['footer-instagram-icon']} aria-hidden="true" />
              <span>@maipersonalclass</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className={styles['footer-bottom']}>
        <div className={styles['footer-bottom-content']}>
          <p className={styles['footer-copyright']}>
            &copy; {currentYear} Mai Personal Class. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
