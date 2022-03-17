import { useTyping } from "../../../redux/typingRedux.js";
import ArrowDown from "../../common/arrowDown/arrowDown.js";
import ArrowUp from "../../common/arrowUp/arrowUp.js";
import Nav from "../../partPages/nav/nav.js";
import ArrowBox from "../../views/arrowBox/arrowBox.js";
import styles from './header.module.scss';

const typingTexts = ['front-end developer', 'concept artist'];

const Header = () => {

  const typing2 = useTyping(typingTexts);

  return (
    <header id="home">
      <div className="topContainer">
        <div className={styles.mainPhoto}>
          <span className={styles.text + ' ' + styles.blink}>I am {typing2}</span>
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