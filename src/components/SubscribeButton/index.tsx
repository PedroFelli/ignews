import styles from './styles.module.scss';

interface SubscribeButton{
    priceId: string;
}

export function SubscribeButton({priceId}) {
    return(
        <button
            type="button"
            className={styles.subscribeButton}
        
        > Subscribe now</button>
    )
}