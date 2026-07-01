import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function MethodologyExampleSection() {
  const features = [
    {
      icon: "psychology",
      wrapperClass: `${styles['feature-icon-wrapper']} ${styles['bg-support-beige']}`,
      iconClass: `material-symbols-outlined ${styles['feature-icon']} ${styles['text-primary']}`,
      title: "Foco Psicológico",
      text: "Trabalhamos o medo de errar antes mesmo da gramática pura."
    },
    {
      icon: "forum",
      wrapperClass: `${styles['feature-icon-wrapper']} ${styles['bg-primary-container']}`,
      iconClass: `material-symbols-outlined ${styles['feature-icon']} ${styles['text-primary']}`,
      title: "Conexão Cultural",
      text: "Aprenda por que os nativos falam assim, não apenas o que eles dizir."
    },
    {
      icon: "trending_up",
      wrapperClass: `${styles['feature-icon-wrapper']} ${styles['bg-secondary-container']}`,
      iconClass: `material-symbols-outlined ${styles['feature-icon']} ${styles['text-secondary']}`,
      title: "Ritmo Humano",
      text: "Personalização real. Sem scripts prontos ou salas lotadas."
    }
  ];

  return (
    <>
      <section className={styles['methodology-example-section']}>
        <div className={styles['container-max']}>
          {/* Title */}
          <motion.div 
            className={styles['title-area']}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={styles['title-text']}>
              Por que a tradução literal trava o seu inglês?
            </h2>
            <p className={styles['subtitle-text']}>
              Muitas vezes o bloqueio não está na sua capacidade de aprender, mas na tentativa de forçar a lógica de um idioma dentro da estrutura de outro.
            </p>
          </motion.div>

          {/* VS Layout Comparison Container */}
          <div className={styles['vs-layout']}>
            {/* VS Divider for Desktop */}
            <motion.div 
              className={styles['vs-divider']}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "backOut", delay: 0.4 }}
            >
              VS
            </motion.div>

            {/* Block 1 (Error State) */}
            <motion.div 
              className={styles['error-block']}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className={styles['error-header']}>
                <span aria-hidden="true" className={`material-symbols-outlined ${styles['error-icon']}`}>close</span>
                <span className={styles['error-label']}>Literal Translation (Português Literal)</span>
              </div>
              <div className={styles['block-content']}>
                <p className={styles['error-phrase']}>"I have 40 years"</p>
                <p className={styles['translation-text']}>Eu tenho 40 anos</p>
              </div>
              <div className={styles['error-footer']}>
                <p className={styles['error-footer-text']}>Interferência direta do Português.</p>
              </div>
            </motion.div>

            {/* Block 2 (Correct State) */}
            <motion.div 
              className={styles['correct-block']}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <div aria-hidden="true" className={styles['correct-accent']}></div>
              <div className={styles['correct-header']}>
                <span aria-hidden="true" className={`material-symbols-outlined ${styles['correct-icon']}`}>check_circle</span>
                <span className={styles['correct-label']}>Native Logic (Lógica Nativa)</span>
              </div>
              <div className={styles['block-content']}>
                <p className={styles['correct-phrase']}>"I am 40 years old"</p>
                <p className={styles['correct-translation-text']}>Eu sou/estou com 40 anos</p>
              </div>
              <div className={styles['correct-footer']}>
                <p className={styles['correct-footer-text']}>Foco na mentalidade do idioma.</p>
              </div>
            </motion.div>
          </div>

          {/* Mentor's Bubble */}
          <motion.div 
            className={styles['mentor-bubble-container']}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <div className={styles['mentor-bubble']}>
              {/* Teacher's Photo */}
              <div className={styles['mentor-photo-wrapper']}>
                <img 
                  className={styles['mentor-photo']} 
                  alt="A professional and friendly portrait of a female English teacher named Maitê" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZtXAqdBEkSHx3gEz8rPQtoSrHrZAMvTUYcDPxwZM0SiDO199R6ZYshn57q08sRlXsjXYLyb33XLJAgVd0aAMPt5kQF9dXsKsv08orKDRTVo6__g_sIUQY6HxNgq1YDEdMpCs0IGeU5RGeyUTqouI8uH5P_GEb9yX2M_ECNsY-QoEpNxPHtzeRgrcm81VH8ADnJDA_dShuSXZIxGf0D6dBqC2ygh7aDGeK6PLmRJRFlxQ1wRm79ukAQghgmYcOXW14Z1A43KbuB9VD" 
                />
              </div>
              
              {/* Bubble Content */}
              <div className={styles['mentor-content']}>
                <div className={styles['mentor-note-label']}>
                  <span className={styles['mentor-note-text']}>Nota da Maitê</span>
                </div>
                <blockquote className={styles['mentor-quote']}>
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles['quote-icon']}`}>format_quote</span>
                  No inglês, a idade não é algo que você <span className={styles['highlight-text']}>'tem'</span> na mão, é um estado no qual você <span className={styles['highlight-text']}>'está'</span>. Quando você entende a cultura por trás da língua, não precisa mais decorar regras!
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* CTA Button at Bottom */}
          <motion.div 
            className={styles['cta-bottom']}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <button className={styles['cta-button']}>
              <span className={styles['cta-text']}>Testar o Método na Prática</span>
              <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className={styles['cta-support-text']}>Agende uma demonstração gratuita de 15 minutos.</p>
          </motion.div>
        </div>
      </section>

      {/* Secondary Section: Comparison Block Illustration */}
      <section className={styles['secondary-section']}>
        <div className={styles['container-max']} style={{ textAlign: 'center' }}>
          <motion.h3 
            className={styles['secondary-title']}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Como desbloqueamos sua comunicação
          </motion.h3>
          <div className={styles['features-grid']}>
            {features.map((feat, index) => (
              <motion.div 
                key={index} 
                className={styles['feature-card']}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
              >
                <div className={feat.wrapperClass}>
                  <span aria-hidden="true" className={feat.iconClass}>{feat.icon}</span>
                </div>
                <h4 className={styles['feature-card-title']}>{feat.title}</h4>
                <p className={styles['feature-card-text']}>{feat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
