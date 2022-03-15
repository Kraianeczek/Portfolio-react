import Icon from "../../common/icons/icon";
import styles from './iconBox.module.scss'

const IconBox = () => {
  return (
    <div className={styles.icons}>
      <Icon className={' fa fa-github '} href="https://github.com/Kraianeczek?tab=repositories"></Icon>
      <Icon className={' fa fa-linkedin '} href="https://www.linkedin.com/in/tomasz-krajewski-a80792228/"></Icon>
      <Icon className={' fa fa-facebook '} href="https://www.facebook.com/tomasz.krajewski.54"></Icon>
    </div>
  )
}

export default IconBox;