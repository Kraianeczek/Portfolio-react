import styles from './icon.module.scss'

const Icon = props => {
    return (
        <a href={props.href}><span className={styles.icon + props.className}></span></a>
    )
}

export default Icon;