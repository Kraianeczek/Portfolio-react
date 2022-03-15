import styles from './arrowDown.module.scss';

const ArrowDown = () => {
    return (
        <a href="#about"><i className={styles.arrowDown + ' fa fa-angle-double-down '} alt="about"></i></a>
    )
}

export default ArrowDown;