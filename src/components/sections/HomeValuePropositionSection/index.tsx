import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function HomeValuePropositionSection() {
  return (
    <section aria-labelledby="value-proposition-title" className={styles['home-value-proposition-section']}>
      <motion.div 
        className={styles['intro-content']}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className={styles['heading']} id="value-proposition-title">
          Resultados que transformam sua realidade.
        </h2>
        <p className={styles['description']}>
          Esqueça os livros engessados. Aqui, o inglês é uma ferramenta viva aplicada diretamente aos seus objetivos mais ambiciosos.
        </p>
      </motion.div>
      
      <div className={styles['grid-container']}>
        <div aria-hidden="true" className={styles['background-decoration']}></div>
        
        <motion.article 
          className={styles['featured-pillar']}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div aria-hidden="true" className={styles['featured-pillar-decoration']}></div>
          <div className={styles['featured-pillar-icon-wrapper']}>
            <span aria-hidden="true" className={`material-symbols-outlined ${styles['featured-pillar-icon']}`}>flight_takeoff</span>
          </div>
          <h3 className={styles['featured-pillar-title']}>Viagens</h3>
          <p className={styles['featured-pillar-text']}>
            Autonomia e segurança para explorar o mundo sem medo. De check-ins a jantares, a liberdade de ser você mesmo em qualquer lugar.
          </p>
          <div className={styles['featured-pillar-image-container']}>
            <div 
              aria-label="A dynamic, wide-angle photograph capturing a traveler confidently navigating a modern, sunlit airport terminal. The scene exudes independence and excitement, with natural light pouring through large glass windows, creating a bright, optimistic light-mode aesthetic. Soft accents of teal and beige subtly tie into the brand colors." 
              className={styles['featured-pillar-image']} 
              role="img"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOUl-o2a68H2bc7CVp2R9kNKEgzrOoVUEYJ8bma7bcqZa_rpoHjvELR2zteAkhxloeyXhUp8m_9AbyarfPC3_2N-cGoMrfTIPOw7dMN6u6iHeiAc0rJTLuNgsbMtZbjAjKysxoxkTqqTyB4hMkVrrrNaA1Uhgvwlo-NrYqTu2zF9LRJ4p_kSrluWjnyExSD45MO9oltky8xWP4Oe9nRGEsLd3FkaH9ipo2_PzIUXhB1dMob_39jfZT4LXVpJEEoKidEsWbGjd0pW_j')" }}
            ></div>
          </div>
        </motion.article>
        
        <div className={styles['stacked-pillars-container']}>
          <motion.article 
            className={`${styles['pillar-card']} ${styles['pillar-card-career']}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <div aria-hidden="true" className={styles['pillar-card-career-bg-icon']}>
              <span className={`material-symbols-outlined ${styles['pillar-card-career-bg-icon-svg']}`}>work</span>
            </div>
            <div className={styles['pillar-card-content']}>
              <div className={styles['pillar-card-career-icon-wrapper']}>
                <span aria-hidden="true" className="material-symbols-outlined">work</span>
              </div>
              <div>
                <h3 className={styles['pillar-card-title']}>Profissão</h3>
                <p className={styles['pillar-card-text']}>
                  Destrave para reuniões, interviews e crescimento na carreira. Comunique-se com autoridade no cenário global.
                </p>
              </div>
            </div>
          </motion.article>
          
          <motion.article 
            className={`${styles['pillar-card']} ${styles['pillar-card-future']}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            <div aria-hidden="true" className={styles['pillar-card-future-border']}></div>
            <div className={styles['pillar-card-content']}>
              <div className={styles['pillar-card-future-icon-wrapper']}>
                <span aria-hidden="true" className="material-symbols-outlined">school</span>
              </div>
              <div>
                <h3 className={styles['pillar-card-title']}>Futuro dos Filhos</h3>
                <p className={styles['pillar-card-text']}>
                  Preparação direcionada para o futuro acadêmico e pessoal, garantindo a tranquilidade dos pais e a fluência real do jovem.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
