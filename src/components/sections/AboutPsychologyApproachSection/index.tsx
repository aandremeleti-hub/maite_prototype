import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function AboutPsychologyApproachSection() {
  const steps = [
    {
      icon: "psychology",
      title: "1. Acolhimento",
      description: "Entendemos suas travas e medos prévios sem julgamentos."
    },
    {
      icon: "shield_lock",
      title: "2. Safe Space",
      description: "Criamos um ambiente de aula totalmente seguro e livre de pressão."
    },
    {
      icon: "forum",
      title: "3. Fluência Natural",
      description: "A consequência direta de se sentir confiante e acolhido."
    }
  ];

  return (
    <section className={styles['approach-section']}>
      {/* Visual / Image Side */}
      <motion.div 
        className={styles['visual-side']}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img 
          className={styles['approach-image']}
          alt="A bright, modern portrait of an encouraging female English teacher in a minimalist, light-filled room." 
          src="/images/about-psychology.jpg" 
        />
        {/* Decorative accents */}
        <div aria-hidden="true" className={styles['accent-bottom']}></div>
        <div aria-hidden="true" className={styles['accent-top']}></div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        className={styles['content-side']}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className={styles['label-wrapper']}>
          <span aria-hidden="true" className={styles['label-line']}></span>
          <span className={styles['label-text']}>A Abordagem Psicológica</span>
        </div>
        
        <h2 className={styles['title']}>
          Por que você sempre trava na hora de falar?
        </h2>
        
        <p className={styles['description']}>
          O medo do julgamento é o maior obstáculo para a fluência. Nossa metodologia vai além da gramática; focamos no desbloqueio emocional. Maitê atua como sua base de confiança e destravadora mental, reconfigurando sua relação com o idioma para que a comunicação flua naturalmente.
        </p>

        {/* 3 Unlocking Steps Grid */}
        <div className={styles['steps-grid']}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={styles['step-card']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + (index * 0.15) }}
            >
              <div className={styles['icon-wrapper']}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{step.icon}</span>
              </div>
              <div>
                <h3 className={styles['step-title']}>{step.title}</h3>
                <p className={styles['step-description']}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
        >
          <button className={styles['cta-button']}>
            Vamos destravar juntos?
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
