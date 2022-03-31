import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButton{
    priceId: string;
}

export function SubscribeButton({priceId}) {
    const {data: session} = useSession();

    function handleSubscribe(){
        if(!session){
            signIn('github')
            return;
        }

        
    }

    return(
        <button
            type="button"
            onClick={handleSubscribe}
            className={styles.subscribeButton}
        
        > Subscribe now</button>
    )
}