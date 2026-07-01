import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles['contact-section']}>
      <div className={styles['container']}>
        {/* Left Side: Content */}
        <motion.div 
          className={styles['content-side']}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <div aria-hidden="true" className={styles['title-line']}></div>
            <h1 className={styles['title']}>
              Vamos conversar sobre o seu inglês?
            </h1>
            <p className={styles['description']}>
              Esse é o primeiro passo para criarmos o seu plano personalizado. Preencha os dados abaixo e eu te responderei pessoalmente em até 24h.
            </p>
          </div>
          
          <div className={styles['label-wrapper']}>
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className={styles['label-text']}>Atendimento Individualizado</span>
          </div>

          {/* Atmospheric Image Context */}
          <div className={styles['image-wrapper']}>
            <div className={styles['image-container']}>
              <img 
                className={styles['office-image']}
                alt="A sophisticated home office setup for a language mentor, featuring a clean desk with a minimalist laptop." 
                src="/images/contact-form.jpg" 
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div 
          className={styles['form-side']}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className={styles['form-card']}>
            <div className={styles['decorative-icon']}>
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: '6rem' }}>forum</span>
            </div>
            
            <form className={styles['form-wrapper']} onSubmit={handleSubmit}>
              <div className={styles['input-group']}>
                <label className={styles['input-label']} htmlFor="name">Como você se chama?</label>
                <input 
                  className={styles['input-field']} 
                  id="name" 
                  name="name" 
                  placeholder="Seu nome completo" 
                  required 
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles['input-group']}>
                <label className={styles['input-label']} htmlFor="email">Qual o seu melhor e-mail?</label>
                <input 
                  className={styles['input-field']} 
                  id="email" 
                  name="email" 
                  placeholder="exemplo@email.com" 
                  required 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles['input-group']}>
                <label className={styles['input-label']} htmlFor="message">O que mais te trava no inglês hoje?</label>
                <textarea 
                  className={styles['input-field']} 
                  id="message" 
                  name="message" 
                  placeholder="Conte-me um pouco sobre seus desafios..." 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button 
                className={styles['submit-button']} 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={`material-symbols-outlined ${styles['spin-icon']}`}>progress_activity</span>
                ) : (
                  <>
                    <span>Solicitar Bate-Papo</span>
                    <span className={`material-symbols-outlined ${styles['submit-icon']}`}>arrow_forward</span>
                  </>
                )}
              </button>
              
              <p className={styles['disclaimer']}>
                Ao enviar, você concorda com nossa política de privacidade e tratamento de dados.
              </p>
            </form>

            {/* Success State */}
            {isSuccess && (
              <div className={styles['success-state']}>
                <span className={`material-symbols-outlined ${styles['success-icon']}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <h2 className={styles['success-title']}>Mensagem Enviada!</h2>
                <p className={styles['success-message']}>
                  Obrigado pelo contato. Em breve entrarei em contato para darmos esse próximo passo juntos.
                </p>
                <button 
                  type="button"
                  className={styles['reset-button']} 
                  onClick={handleReset}
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
