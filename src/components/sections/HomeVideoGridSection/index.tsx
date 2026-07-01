import { motion } from 'framer-motion';
import styles from './styles.module.css';

interface IVideoCard {
  id: string;
  title: string;
  mentorNote: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  ariaLabel: string;
}

const videoCards: IVideoCard[] = [
  {
    id: 'word-swallowing',
    title: 'Como nativos engolem palavras',
    mentorNote: "Repare como eles conectam o 'T' com o 'Y'. Não foque na perfeição, foque no ritmo!",
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhlGc7m5YLYr-KxxCVYWT5KOcfE9lO76wypX-lou-lOL8B3Ht0_apWpbgdWfTogrdPkifa5B1qWknbeZUuULcyIoOh28qNOe3yYJuU9mCkKUbDsNjX_fmHw0VUeV5ev_-NJ4hVZoF0RP4lasTINDDFxvE_KDr9SJf39v1ww9ERs-OROUU3KDJjOXtZK-XXiQLvErOiX_0pbygPPEkpphe9XTG4OEPelBjD4l-y809MwkaJxv3HFxsfZmk--ggjJlWxFOqWs8c0s3H5',
    thumbnailAlt: 'Street scene showing native English context',
    ariaLabel: 'Play video: Como nativos engolem palavras'
  },
  {
    id: 'have-vs-am-age',
    title: 'Diferença entre I HAVE and I AM age',
    mentorNote: "Um dos erros mais comuns! Lembre-se, em inglês você 'está' uma idade, não 'possui' ela. É sobre o estado de ser.",
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwIpXW_002xnTm6NwUo8fLCYBqMBnGbxQyTaur_FBNqoiq8Q1OKITFRUDnUNB_NjGb5HsvN2eIE1yHr3n3pVQy5kdNYyt5ILeon9iAizjpok8H78b0yUi23TWekeCeNW6pvWy1FCb6ToZlsCbk5tyrqX9rnSwkfCow2YFhtUO3BEWFOxgSLU8KBGMYKnCz61PC3ZEc7UILs8QKzP4YkeEZFlKBzP9kUKssM3Xk7xtEGk_YHjBQkU1GPJq2bVvqyUKtV4AelpKgFMcF',
    thumbnailAlt: 'Two people having a friendly conversation',
    ariaLabel: 'Play video: Diferença entre I HAVE and I AM age'
  },
  {
    id: 'accents-as-identity',
    title: 'Sotaques não são barreiras',
    mentorNote: 'Sotaque é identidade. O importante é a clareza da mensagem, não soar como um robô de Londres.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmXbSXOqOGeOiCELhE9qaqQJW5KyMUU2WWB9LuztvKEOrlUVIbIcEVaPtJrnhTFrmXO2jTIInP7GR01HbbrRd52-B131_1_2UH-6xvnb3_q5CZvAFm8m00GkFRghUv9LNtnVaBWYJEetOptA3d-D6m4OuW-w8itCh5Pgzuat2N6mWg_3DeH5inNc9X5G4smF0AnYUdOJNRFbG-ndawerUYhTwNxWj4IVXbgzG6DKO67qjvQ1k2ddJGgFSXvdXVqPfVzqXbLqJlnHc0',
    thumbnailAlt: 'A confident speaker communicating clearly',
    ariaLabel: 'Play video: Sotaques não são barreiras'
  }
];

export function HomeVideoGridSection() {
  return (
    <section aria-labelledby="video-section-title" className={styles['home-video-grid-section-container']}>
      <motion.header 
        className={styles['home-video-grid-section-header']}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className={styles['home-video-grid-section-heading']} id="video-section-title">
          Inglês da Vida Real. <br className={styles['home-video-grid-section-heading-break']} />Sem Filtros e Sem Julgamentos.
        </h2>
      </motion.header>
      
      <div className={styles['home-video-grid-section-grid']}>
        {videoCards.map((card, index) => (
          <motion.article 
            key={card.id}
            aria-label={card.ariaLabel} 
            className={styles['video-card']} 
            role="button" 
            tabIndex={0}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            <div className={styles['video-card-thumbnail-container']}>
              <img 
                loading="lazy" 
                alt={card.thumbnailAlt} 
                className={styles['video-card-thumbnail-image']} 
                src={card.thumbnailUrl}
              />
              <div aria-hidden="true" className={styles['video-card-play-button']}>
                <span className={`material-symbols-outlined ${styles['video-card-play-icon']}`}>play_arrow</span>
              </div>
            </div>
            
            <div className={styles['video-card-content']}>
              <h3 className={styles['video-card-title']}>{card.title}</h3>
              <div className={styles['video-card-mentor-note']}>
                <p className={styles['video-card-mentor-note-text']}>
                  <strong>Nota da Maitê:</strong> {card.mentorNote}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
