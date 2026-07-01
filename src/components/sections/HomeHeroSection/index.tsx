import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function HomeHeroSection() {
  const avatars = [
    {
      id: 1,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqY14i7yoGKWHVb7JDPSXR3HUye-IwOtj7VDxZQcc3YMUVR5arjfVVITtrBjqAgxjIDRot0lcnjmNzxwLgaale68huHz7R7rFUFu09FWEY6k4OicZmzNJ4_sgNuXi87jHz8YstGoDrYdqneSctmF78CHkd0Z6W5RkM0BssGILiYW03kiZxlSdHWdhIio4YOyNuxDZxsE5WJsqJo_fB7n0DbZkdOzgU7i38w3Y99zExLmoMe9jgjrLFuyhgQRdEpm6uhv5R-2b115bc",
      alt: "A small circular profile picture of a professional woman smiling in a bright office. Soft lighting, neutral colors."
    },
    {
      id: 2,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdJySKr8nSSgx0G6s62zPc3pz4UqYtXQFgdXUZJVq7CCfOgtpEjUmTrgEA96lD_AwdEzz7MFs9juIroVNmrfBsYLNm4s49r57FQA99XLRIDPFbbBHX2Rhw0bvOEx32KJ0pCoWhHJ6WcUJC2mxYHWw6lBXDXo0QCzuhnQzV_gzm0eQ3p5GrzdB27zY99-3WO6HIoDKY5nv5n2ggvVoBlR0af51BSu1419trTYYc2rKmnHV20_yrpPmI8xkOMPSiYvAYJN9ZmAZYL9WL",
      alt: "A small circular profile picture of a young professional man in a modern workspace. Warm lighting."
    },
    {
      id: 3,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWNpa9bYZewJsPacRwrUW1fMJJNqGYc_VKc1-5eaKJX-f3BCzf3PTBNWo5EfEQKjOFQlCdcTHwpYnDBrM2suRvUjDJLLbFpewXpWOKteOfo-zYeLivZJ1Hj4RxhVR5qAyN5v_UpUdL4v7lQnpBb1lBBGwKIfwIOKuKu6smozugFFmh7tb6sfvxzYizghcNHIP6cYK7cyPSqi7j8Nuc_nmuR4st61BX2hzSaSfAXjsBaHvfawsB1Eb9JJ96klYomzbuQ9z5NtV4lKmM",
      alt: "A small circular profile picture of a cheerful woman with glasses in a creative studio. Clean light mode aesthetic."
    }
  ];

  return (
    <section aria-label="Hero Section" className={styles['hero-section']}>
      <div className={styles['hero-container']}>
        <div className={styles['hero-grid']}>
          {/* Typography & Content Layer */}
          <div className={styles['hero-content']}>
            <div className={styles['hero-subtle-accent']} aria-hidden="true"></div>
            
            <motion.h1 
              className={styles['hero-title']}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Destrave sua Comunicação.<br />
              <span className={styles['hero-title-highlight']}>Conquiste sua Autonomia.</span>
            </motion.h1>
            
            <motion.p 
              className={styles['hero-description']}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Um ambiente seguro para aprender inglês, respeitando o seu ritmo. Nossa metodologia é focada em remover bloqueios psicológicos, sem promessas falsas, guiando você para uma comunicação fluida e autêntica.
            </motion.p>
            
            <motion.div 
              className={styles['hero-actions']}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <button className={styles['hero-cta-button']} type="button" aria-label="Agendar seu Bate-Papo Inicial de Alinhamento">
                Agendar seu Bate-Papo Inicial de Alinhamento
                <span className={`material-symbols-outlined ${styles['hero-cta-icon']}`} aria-hidden="true">arrow_forward</span>
              </button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className={styles['hero-trust']}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <div className={styles['hero-trust-avatars']}>
                {avatars.map((avatar) => (
                  <div 
                    key={avatar.id}
                    className={styles['hero-trust-avatar']}
                    style={{ backgroundImage: `url('${avatar.url}')` }}
                    aria-label={avatar.alt}
                    role="img"
                  ></div>
                ))}
              </div>
              <div className={styles['hero-trust-text']}>
                Junte-se a dezenas de alunos destravados.
              </div>
            </motion.div>
          </div>

          {/* Visual Asset Layer */}
          <motion.div 
            className={styles['hero-visual']}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className={styles['hero-visual-backdrop']} aria-hidden="true"></div>
            
            <div className={styles['hero-visual-card']}>
              <img 
                className={styles['hero-visual-image']} 
                alt="A high-quality, professional portrait of Maitê, a confident and welcoming English mentor. She is in a modern, brightly lit space with plants, conveying a safe, unblocked, and empathetic learning environment. Minimalist light mode aesthetic, soft natural lighting." 
                loading="lazy" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaDslRqjYGOFhDtij0wxg0OFhgzSHXkLPpvCIhDWFdTh259SjJsjyel-sk9Q6woaLJUJuImayGHqHLn3b0WBUbYQXpqTD7f4aBkQwlwHvrg_buDXskqYzSWMsgLA4zGFcu1PBM-DZ7e1p9mW-06WzmmOf1cFkJAcL7NV-k060qo5LgqwDtkwaww9PoVGosZ7ueyEZEuX4iV1W96HRHZJTSmSsGvgmgXif83mEw2wThug6C9a9SD6Yn3r_FcsIHL3_kBeS4l2ZkkYlz"
              />
              
              {/* Floating Badge */}
              <motion.div 
                className={styles['hero-floating-badge']}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "backOut", delay: 0.9 }}
              >
                <div className={styles['hero-floating-badge-icon-wrapper']}>
                  <span className={`material-symbols-outlined ${styles['hero-floating-badge-icon']}`} aria-hidden="true">psychology</span>
                </div>
                <div>
                  <div className={styles['hero-floating-badge-title']}>Abordagem</div>
                  <div className={styles['hero-floating-badge-subtitle']}>Centrada em você!</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
