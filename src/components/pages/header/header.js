import Nav from "../../partPages/nav/nav.js";
import ArrowBox from "../../views/arrowBox/arrowBox.js";
import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.topContainer}>
        <div className={styles.mainPhoto}>
        
        </div>
        <Nav />
      </div>
      <ArrowBox />
    </header>
  )
}

export default Header;