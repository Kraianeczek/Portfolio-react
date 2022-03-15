import styles from './arrowDown.module.scss';

const ArrowDown = props => {
    return (
        <a href={props.href}><i className={styles.arrowDown + ' fa fa-angle-double-down '} alt="about"></i></a>
    )
}

export default ArrowDown;