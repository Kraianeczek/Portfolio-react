import ArrowDown from '../../common/arrowDown/arrowDown';
import ArrowUp from '../../common/arrowUp/arrowUp';
import LeftSubtitle from '../../common/leftSubtitle/leftSubtitle';
import ArrowBox from '../../views/arrowBox/arrowBox';
import styles from './aboutMe.module.scss'

const AboutMe = () => {
  return (
    <div className="about">
      <div className="restContainer">
        <LeftSubtitle subtitle="About me" className="amBox" am="amSubtitle"></LeftSubtitle>
        <div className={styles.textBox}></div>
      </div>
      <ArrowBox tit={
        <div>
          <ArrowDown href="#skills"></ArrowDown>
          <ArrowUp href="#home"></ArrowUp>
        </div>}>
      </ArrowBox>
    </div>
  )
}

export default AboutMe;