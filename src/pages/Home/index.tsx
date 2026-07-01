import { HomeHeroSection } from '../../components/sections/HomeHeroSection'
import { HomeVideoGridSection } from '../../components/sections/HomeVideoGridSection'
import { HomeValuePropositionSection } from '../../components/sections/HomeValuePropositionSection'
import { HomeContactCTASection } from '../../components/sections/HomeContactCTASection'
import styles from './styles.module.css'

export function Home() {
  return (
    <main className={styles['home-page']}>
      <HomeHeroSection />
      <HomeVideoGridSection />
      <HomeValuePropositionSection />
      <HomeContactCTASection />
    </main>
  )
}
