import Link from "../../common/link/link";
import IconBox from "../../views/iconBox/iconBox"
import styles from './nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h1 className={styles.name}>Tomasz Krajewski</h1>
      <IconBox />
      <div class={styles.links}>
        <Link href="#about" alt="about" title="About me"></Link>
        <Link href="#skills" alt="skills" title="Skills"></Link>
        <Link href="#portfolio" alt="portfolio" title="Portfolio"></Link>
        <Link href="#contact" alt="contact" title="Contact"></Link>
      </div>
    </div>
  )
}

export default Nav;