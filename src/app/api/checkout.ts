import { RedirectToCheckoutOptions } from '@stripe/stripe-js';
import { NextRequest } from 'next/server';
import getStripe from '../../../utils/get-stripe';

// export default async function checkout(req: NextApiRequest, res: NextApriceId: string) {
//   const options: RedirectToCheckoutOptions = {
//     submitType: 'pay',
//     lineItems: [
//       {
//         price: priceId,
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     successUrl: `${req.nextUrl.pathname}/success`,
//     cancelUrl: `${req.nextUrl.pathname}/canceled`,
//   };
//   const stripe = await getStripe();
//   if (stripe) {
//     const { error } = await stripe?.redirectToCheckout(options);
//   }
// }
