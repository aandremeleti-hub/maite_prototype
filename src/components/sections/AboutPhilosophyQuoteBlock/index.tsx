import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function AboutPhilosophyQuoteBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const markLeftRef = useRef<HTMLDivElement>(null);
  const markRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || !markLeftRef.current || !markRightRef.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      markLeftRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      markRightRef.current.style.transform = `translate(${-moveX}px, ${-moveY}px) rotate(180deg)`;
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="philosophy-heading" 
      className={styles['philosophy-section']}
    >
      {/* Floating Large Marks for Depth - Animated in opacity only to avoid collision with mousemove transforms */}
      <motion.div 
        ref={markLeftRef} 
        aria-hidden="true" 
        className={`${styles['decoration-mark']} ${styles['mark-left']}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        “
      </motion.div>
      <motion.div 
        ref={markRightRef} 
        aria-hidden="true" 
        className={`${styles['decoration-mark']} ${styles['mark-right']}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        “
      </motion.div>
      
      <div className={styles['container']}>
        <motion.blockquote 
          id="philosophy-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={styles['manifesto-quote']} id="philosophy-heading">
            A shared problem is half of a problem.
          </h2>
          <cite className={styles['citation']}>
            — O princípio de acolhimento jamaicano da Mai Personal Class.
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
