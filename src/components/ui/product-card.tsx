'use client';

import { RedirectToCheckoutOptions } from '@stripe/stripe-js';
import getStripe from '../../../utils/get-stripe';
import { Button } from './button';

type ProductCardProps = {
  name: String;
  price: number;
  priceId: string;
};

function ProductCard(props: ProductCardProps) {
  const handleClick = async () => {
    console.log('redirect to checkout');
    const options: RedirectToCheckoutOptions = {
      submitType: 'pay',
      lineItems: [
        {
          price: props.priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/canceled`,
    };
    const stripe = await getStripe();
    if (stripe) {
      const { error } = await stripe?.redirectToCheckout(options);
    }
  };

  return (
    <div>
      <p>{props.name}</p>
      <p>${props.price}</p>
      <Button className="bg-slate-200 text-slate-900" onClick={handleClick}>
        Buy now
      </Button>
    </div>
  );
}

export default ProductCard;
