import Icon from "../../common/icons/icon.js";
import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.topContainer}>
        <div className={styles.mainPhoto}>
        
        </div>
        <div className={styles.nav}>
          <h1 className={styles.name}>Tomasz Krajewski</h1>
          <div className={styles.icons}>
            <Icon className={' fa fa-github '} href="https://github.com/Kraianeczek?tab=repositories"></Icon>
            <Icon className={' fa fa-linkedin '} href="https://www.linkedin.com/in/tomasz-krajewski-a80792228/"></Icon>
            <Icon className={' fa fa-facebook '} href="https://www.facebook.com/tomasz.krajewski.54"></Icon>
          </div>
          <div class={styles.links}>
            <a href="#about" alt="about">About me</a>
            <a href="#skills" alt="skills">Skills</a>
            <a href="#portfolio" alt="portfolio">Portfolio</a>
            <a href="#contact" alt="contact">Contact</a>
            </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <a href="#about"><i className={styles.arrowDown + ' fa fa-angle-double-down '} alt="about"></i></a>
        <a href="#home"><i className={styles.arrowUp + ' fa fa-angle-double-up '} alt="home"></i></a>
      </div>
    </header>
  )
}

export default Header;