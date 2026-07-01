import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function MethodologyFeaturesGrid() {
  const cards = [
    {
      icon: "forum",
      title: "Foco 100% em Conversação",
      description: "Falar inglês desde a primeira aula, sem escrita exaustiva. Priorizamos a fluidez e a confiança verbal para que você se sinta capaz de se expressar em qualquer situação."
    },
    {
      icon: "psychology",
      title: "Aulas no Seu Contexto",
      description: "Personalização extrema: abordamos sua rotina, profissão ou interesses reais. O conteúdo é moldado para ser útil imediatamente no seu dia a dia profissional ou pessoal."
    },
    {
      icon: "auto_stories",
      title: "Gramática Camuflada",
      description: "Regras ensinadas naturalmente através do diálogo e de uma correção gentil. Você aprende a estrutura do idioma enquanto fala, sem o peso de fórmulas gramaticais cansativas."
    },
    {
      icon: "payments",
      title: "Pagamento Justo (Pós-Aulas)",
      description: "Transparência total: você paga no final do mês apenas pelas aulas que efetivamente realizou. Sem multas de cancelamento ou taxas ocultas de materiais."
    }
  ];

  return (
    <section className={styles['methodology-features-grid']}>
      {/* Section Header */}
      <motion.div 
        className={styles['section-header']}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className={styles['section-subtitle']}>Nossa Metodologia</span>
        <h2 className={styles['section-title']}>
          Desbloqueando sua comunicação de forma humana e estratégica.
        </h2>
        <div aria-hidden="true" className={styles['section-divider']}></div>
      </motion.div>

      {/* Staggered Grid */}
      <div className={styles['stagger-container']}>
        {cards.map((card, index) => (
          <motion.div 
            key={index} 
            className={styles['methodology-card']}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
          >
            <div className={styles['card-icon-wrapper']}>
              <span aria-hidden="true" className={`material-symbols-outlined ${styles['card-icon']}`}>{card.icon}</span>
            </div>
            <h3 className={styles['card-title']}>{card.title}</h3>
            <p className={styles['card-description']}>
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Philosophy Quote */}
      <motion.div 
        className={styles['decorative-quote-container']}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <span aria-hidden="true" className={styles['quote-mark-left']}>“</span>
        <p className={styles['quote-text']}>
          Ensinar não é sobre transferir conhecimento, mas sobre criar espaços de segurança onde o aprendizado acontece naturalmente.
        </p>
        <span aria-hidden="true" className={styles['quote-mark-right']}>”</span>
      </motion.div>
    </section>
  );
}
