'use client';

import { jetbrains_mono } from '@/app/fonts';
import { RedirectToCheckoutOptions } from '@stripe/stripe-js';
import getStripe from '../../../utils/get-stripe';
import { Button } from './button';

export type ProductCardProps = {
  name: String;
  price: number;
  priceId: string;
  description: string;
  durationInHours: number;
};

function ProductCard(props: ProductCardProps) {
  const { name, price, priceId, description, durationInHours } = props;
  const handleClick = async () => {
    console.log('redirect to checkout');
    const options: RedirectToCheckoutOptions = {
      submitType: 'pay',
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: window.location.origin,
    };
    const stripe = await getStripe();
    if (stripe) {
      const { error } = await stripe?.redirectToCheckout(options);
    }
  };

  return (
    <>
      <div className="hover:bg-gradient-to-br hover:from-indigo-500 hover:to-fuchsia-500 p-0.5 hover:scale-105 hover:animate-animate-gradient bg-[length:300%_300%] transition ease-in-out duration-250 rounded-xl">
        <div className="max-w-md h-full flex flex-col justify-between space-y-8 px-10 py-8 border rounded-xl bg-slate-800 border-slate-800 hover:border-indigo-600 ">
          <div className="flex flex-col items-start space-y-4">
            <div>
              <h5
                className={`${jetbrains_mono.className} text-lg font-semibold`}
              >
                {name}
              </h5>
              <p className="text-slate-300">{durationInHours} hours</p>
            </div>
            <div className="z-[1]">
              <h6 className="text-2xl font-medium relative after:absolute after:h-3 after:w-14 after:bg-indigo-800 after:bottom-0 after:left-0 after:-z-[1]">
                $ {price}
              </h6>
              <p className="text-slate-300">One time payment</p>
            </div>
            <p>{description}</p>
          </div>
          <Button
            className={`${jetbrains_mono.className} text-lg px-6 py-6 rounded-md bg-indigo-500 text-slate-100 hover:bg-indigo-600 hover:text-inherit`}
            onClick={handleClick}
          >
            Purchase
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
