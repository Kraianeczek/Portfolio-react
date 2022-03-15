import styles from './arrowUp.module.scss';

const ArrowUp = () => {
    return (
        <a href="#home"><i className={styles.arrowUp + ' fa fa-angle-double-up '} alt="home"></i></a>
    )
}

export default ArrowUp;