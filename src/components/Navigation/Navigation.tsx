import styles from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <div className={styles.nav}>
            <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#history">History</a></li>
        </ul>
        </div>
    )
}
