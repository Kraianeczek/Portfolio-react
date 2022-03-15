import ArrowDown from "../../common/arrowDown/arrowDown.js";
import ArrowUp from "../../common/arrowUp/arrowUp.js";
import Nav from "../../partPages/nav/nav.js";
import ArrowBox from "../../views/arrowBox/arrowBox.js";
import styles from './header.module.scss';

const Header = () => {
  return (
    <header id="home">
      <div className={styles.topContainer}>
        <div className={styles.mainPhoto}>
        
        </div>
        <Nav />
      </div>
      <ArrowBox id="about" tit={
        <div>
          <ArrowDown href="#about"></ArrowDown>
          <ArrowUp href="#home"></ArrowUp>
        </div>}>
      </ArrowBox>
    </header>
  )
}

export default Header;