import styles from './arrowUp.module.scss';

const ArrowUp = props => {
    return (
        <a href={props.href}><i className={styles.arrowUp + ' fa fa-angle-double-up '} alt="home"></i></a>
    )
}

export default ArrowUp;