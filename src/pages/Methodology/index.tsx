import { MethodologyIntroSection } from '../../components/sections/MethodologyIntroSection';
import { MethodologyFeaturesGrid } from '../../components/sections/MethodologyFeaturesGrid';
import { MethodologyExampleSection } from '../../components/sections/MethodologyExampleSection';
import styles from './styles.module.css';

export function Methodology() {
  return (
    <main className={styles['methodology-page']}>
      <MethodologyIntroSection />
      <MethodologyFeaturesGrid />
      <MethodologyExampleSection />
    </main>
  );
}
