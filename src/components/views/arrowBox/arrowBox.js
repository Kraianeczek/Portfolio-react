import styles from './arrowBox.module.scss'

const ArrowBox = props => {
    return (
        <div className={styles.arrowBox} id={props.id}>{props.tit}
        </div>
    )
}

export default ArrowBox;