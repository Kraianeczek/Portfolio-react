import ArrowDown from '../../common/arrowDown/arrowDown';
import ArrowUp from '../../common/arrowUp/arrowUp';
import ArrowBox from '../../views/arrowBox/arrowBox';
import styles from './aboutMe.module.scss'

const AboutMe = () => {
  return (
    <div className={styles.about}>
      <div className={styles.restContainer}>

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