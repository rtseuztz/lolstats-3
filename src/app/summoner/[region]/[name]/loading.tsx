import styles from './loading.module.css'

export default function loading() {

    return (
        <div className={styles.disable}>
            <div className={styles["lds-ellipsis"]}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

