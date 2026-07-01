import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function HomeContactCTASection() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / 10;
    const deltaY = (y - centerY) / 5;

    button.style.transform = `scale(1.03) translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;
    button.style.transform = 'scale(1) translate(0px, 0px)';
  };

  return (
    <section className={styles.section}>
      <motion.div 
        aria-hidden="true" 
        className={styles['bg-fragment']}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Mai
      </motion.div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles['content-col']}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              O primeiro passo para o seu destrave começa com uma conversa.
            </motion.h2>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Sem compromissos e sem julgamentos. Vamos entender juntos o seu momento e traçar a rota exata para a sua fluência através de uma metodologia focada na sua psicologia.
            </motion.p>
            <motion.div 
              className={styles['btn-wrapper']}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <button
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                aria-label="Agendar Bate-Papo Inicial para destravar seu inglês"
                className={styles['cta-button']}
              >
                <span>Agendar Bate-Papo Inicial</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </motion.div>
          </div>
          <motion.div 
            className={styles['visual-col']}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
          >
            <div className={styles['visual-wrapper']}>
              <div className={styles['visual-inner']}>
                <span className={`material-symbols-outlined ${styles['chat-icon']}`}>
                  forum
                </span>
                <div className={styles['notification-dot']} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
