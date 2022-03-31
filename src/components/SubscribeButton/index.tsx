import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButton{
    priceId: string;
}

export function SubscribeButton({priceId}) {
    const {data: session} = useSession();

    async function handleSubscribe(){
        if(!session){
            signIn('github')
            return;
        }

        try {
            const res = await api.post('/subscribe')
            const {sessionId} = res.data;
            const stripe = await getStripeJs();
            
            await stripe.redirectToCheckout({sessionId});
        } catch (error) {
            console.log(error)
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