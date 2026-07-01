import { ContactFormSection } from '../../components/sections/ContactFormSection';
import styles from './styles.module.css';

export function Contact() {
  return (
    <main className={styles['contact-page']}>
      <ContactFormSection />
    </main>
  );
}
