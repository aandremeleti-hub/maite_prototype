import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function MethodologyIntroSection() {
  return (
    <section className={styles['methodology-intro-section']} id="MethodologyIntroSection">
      <div className={styles['asymmetric-canvas']}>
        {/* Left Side: Old Method (The Friction) */}
        <motion.article 
          className={styles['old-method-panel']}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles['old-method-content']}>
            <motion.div 
              className={styles['old-method-badge']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: '18px' }}>history</span>
              <span className={styles['badge-text']}>MÉTODO TRADICIONAL</span>
            </motion.div>
            <motion.h2 
              className={styles['old-method-heading']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Há quanto tempo você estuda gramática e ainda <span className={styles['heading-strike']}>trava</span> na hora de falar?
            </motion.h2>
            <motion.figure 
              className={styles['old-method-figure']}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={styles['figure-overlay']}></div>
              <img 
                className={styles['figure-image']}
                alt="A vintage, slightly dusty stack of thick, heavy English grammar textbooks sitting on a rigid, cold wooden classroom desk. The lighting is harsh and monochromatic, creating long, stiff shadows that emphasize an institutional and uninspiring atmosphere. The focus is sharp on the worn edges of the pages, symbolizing a stagnant and outdated educational approach."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFDOjHpc-ChfeTiSP3-z7aRB15ut03Y3UtML-fnLCvmQvKgv1o7KAL9Zopm69VD2Om-k74Nzl1D5w1ELvX_Du0DHqS1IVqsKGFHEUQIBALGRPwn0gW79M8ZmMwGPenDdEeRowAPXpzj0LUNbzNvNRKUuGx-faNX6EGYJd6Ydo1JU6-8Ugtd_e7t43KkMw8SrFFN5Jm9D3ywyctpyZ6BWkk1z9xNj7W8o5YKeejoemHMPv7J3Wwp9kQd8QnyuGMQIRfeDGtldBkhJpv"
              />
            </motion.figure>
            <motion.p 
              className={styles['old-method-quote']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              "Regras decoradas, listas infinitas de verbos e o medo constante de cometer um erro bobo."
            </motion.p>
          </div>
          <div aria-hidden="true" className={styles['diagonal-split']}></div>
        </motion.article>

        {/* Right Side: New Method (The Freedom) */}
        <motion.article 
          className={styles['new-method-panel']}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Abstract Atmospheric Shapes */}
          <div aria-hidden="true" className={styles['floating-element-1']}></div>
          <div aria-hidden="true" className={styles['floating-element-2']}></div>
          
          <div className={styles['new-method-content']}>
            <motion.div 
              className={styles['new-method-badge']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span aria-hidden="true" className={`material-symbols-outlined ${styles['new-method-badge-icon']}`} style={{ fontSize: '20px' }}>auto_awesome</span>
              <span className={styles['new-method-badge-text']}>MAI PERSONAL CLASS</span>
            </motion.div>
            <motion.p 
              className={styles['new-method-text']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              O ensino tradicional falha porque tenta colocar a vida dentro de um script. Na <strong className={styles['text-highlight']}>Mai Personal Class</strong>, abandonamos os livros engessados.
            </motion.p>
            
            <div className={styles['new-method-grid']}>
              <div className={styles['new-method-grid-col-1']}>
                <motion.figure 
                  className={styles['new-method-grid-figure']}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <img 
                    className={styles['new-method-grid-image']}
                    alt="A vibrant and energetic scene of a young professional woman laughing and gesturing confidently during a dynamic English conversation in a modern, sun-drenched office lounge. The lighting is warm and natural, using a color palette of soft teals and muted purples that reflect a human-centric and empathetic learning environment. The mood is one of joy, unlocking, and authentic human connection." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIHZWlyfPx2bZ3u0pjew6imyzQldIUQSKo9vXe5A8Aq6aKJKPgD295afRlz8EL3R19NuEitgU3_yTJEnRPeOj4cOVW8Gtz2eS1O7qq8BnW-7CqDgMdffK3cUUcYaap-TEDKYgTi1IG2K0ABupfoJWVKtTfYy6QaJmIWfL4tEvquejPr_C-tESm5HIb2aExDkjbw2SoqZFs8L_c5kNx3er984fSSi03JFLP_RwshGvQQnxd_LZ6tMXOQ8uManxj3OcrFHnv94K6xCUU"
                  />
                </motion.figure>
                <motion.div 
                  className={styles['new-method-feature']}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles['new-method-feature-icon']}`}>check_circle</span>
                  <p className={styles['new-method-feature-text']}>Material vivo e adaptado à sua carreira.</p>
                </motion.div>
              </div>
              
              <div className={styles['new-method-grid-col-2']}>
                <motion.div 
                  className={styles['new-method-quote-box']}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <p className={styles['new-method-quote-text']}>
                    "A culpa de não falar não é sua; é de um método que ignora a psicologia do aprendizado."
                  </p>
                </motion.div>
                <motion.div 
                  className={styles['new-method-feature']}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <span aria-hidden="true" className={`material-symbols-outlined ${styles['new-method-feature-icon']}`}>psychology</span>
                  <p className={styles['new-method-feature-text']}>Foco no destrave emocional e prático.</p>
                </motion.div>
              </div>
            </div>
            
            <motion.button 
              className={styles['cta-button']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <span className={styles['cta-button-text']}>CONHECER MEU DESTRAVE</span>
              <span aria-hidden="true" className={`material-symbols-outlined ${styles['cta-button-icon']}`}>arrow_forward</span>
            </motion.button>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
