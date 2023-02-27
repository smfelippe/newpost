import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: Session } = useSession();
  const router = useRouter()
  async function handleSubscribe() {
    if (!Session) {
      signIn('github')
      return;
    }
    if (Session.activeSubscription) {
      router.push('posts');
      return;
    }

    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data;
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      console.log(err)
      alert(err.message);
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe here
    </button>
  )
}