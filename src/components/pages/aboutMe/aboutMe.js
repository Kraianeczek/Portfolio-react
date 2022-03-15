import ArrowDown from '../../common/arrowDown/arrowDown';
import ArrowUp from '../../common/arrowUp/arrowUp';
import ArrowBox from '../../views/arrowBox/arrowBox';

const AboutMe = () => {
  return (
    <div className="about">
      <div className="restContainer">

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