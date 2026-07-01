import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function AboutBioSection() {
  return (
    <>
      {/* Primary Section: Editorial Bio */}
      <section className={styles['about-bio-section']}>
        <div className={styles['overlap-container']}>
          {/* Image Side */}
          <motion.article 
            className={styles['bio-image-wrapper']}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div aria-hidden="true" className={styles['cultural-offset']}></div>
            <div className={styles['image-container']}>
              <img 
                className={styles['bio-image']}
                alt="Maitê, professora de inglês com um sorriso acolhedor em um ambiente iluminado e profissional." 
                src="/images/maite-bio.jpg"
              />
            </div>
            <div aria-hidden="true" className={styles['decorative-square']}></div>
          </motion.article>

          {/* Text Content Side */}
          <motion.article 
            className={styles['bio-content-card']}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className={styles['section-label']}>
              <span aria-hidden="true" className={styles['label-line']}></span>
              <span className={styles['label-text']}>About Maitê</span>
            </div>
            
            <h2 className={styles['bio-title']}>
              Muito prazer, eu sou a Maitê.
            </h2>
            
            <div className={styles['bio-text']}>
              <p>
                Minha trajetória no ensino de inglês não começou em uma sala de aula tradicional, mas sim nas cores vibrantes e no ritmo pulsante da <strong>Jamaica</strong>. Foi lá, mergulhada em uma cultura onde a conexão humana é o pilar de tudo, que descobri o verdadeiro significado de "sharing is caring".
              </p>
              <p>
                Percebi que falar uma nova língua não é sobre decorar regras gramaticais rígidas, mas sobre <strong>destravar a voz</strong>. A filosofia jamaicana me ensinou que o aprendizado floresce em ambientes seguros, livres de julgamento, onde o erro é apenas uma nota em uma melodia maior.
              </p>
              <p>
                Hoje, trago essa energia solar e empática para cada sessão. Atuo como uma mentora que entende seus bloqueios e inibições. Minha missão é guiar você em uma jornada onde o inglês deixa de ser uma barreira e passa a ser a ponte para suas maiores ambições.
              </p>
            </div>
            
            <div className={styles['bio-footer']}>
              <p className={styles['bio-quote']}>
                "Maitê - Sua guia na jornada da comunicação humana."
              </p>
              <div className={styles['cta-container']}>
                <button className={styles['cta-button']}>
                  Conheça minha metodologia
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Secondary Section: Philosophy Quote */}
      <section className={styles['philosophy-section']}>
        <div className={styles['philosophy-container']}>
          <motion.div 
            className={styles['quote-wrapper']}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span aria-hidden="true" className={`material-symbols-outlined ${styles['quote-icon-top']}`}>format_quote</span>
            <h3 className={styles['philosophy-text']}>
              "O inglês é apenas uma ferramenta. A verdadeira mágica acontece quando você se sente seguro o suficiente para ser quem você é em qualquer lugar do mundo."
            </h3>
            <span aria-hidden="true" className={`material-symbols-outlined ${styles['quote-icon-bottom']}`}>format_quote</span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
