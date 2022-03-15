import styles from './link.module.scss'

const Link = props => {
    return (
        <a className={styles.link} href={props.href} alt={props.alt}>{props.title}</a>
    )
}

export default Link;