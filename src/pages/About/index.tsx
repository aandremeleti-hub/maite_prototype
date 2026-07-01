import { AboutBioSection } from '../../components/sections/AboutBioSection';
import { AboutPhilosophyQuoteBlock } from '../../components/sections/AboutPhilosophyQuoteBlock';
import { AboutPsychologyApproachSection } from '../../components/sections/AboutPsychologyApproachSection';
import styles from './styles.module.css';

export function About() {
  return (
    <main className={styles['about-page']}>
      <AboutBioSection />
      <AboutPhilosophyQuoteBlock />
      <AboutPsychologyApproachSection />
    </main>
  );
}
