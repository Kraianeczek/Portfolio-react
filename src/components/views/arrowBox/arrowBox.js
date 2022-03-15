import ArrowDown from "../../common/arrowDown/arrowDown"
import ArrowUp from "../../common/arrowUp/arrowUp"
import styles from './arrowBox.module.scss'

const ArrowBox = () => {
    return (
        <div className={styles.arrowBox}>
            <ArrowDown></ArrowDown>
            <ArrowUp></ArrowUp>
        </div>
    )
}

export default ArrowBox;