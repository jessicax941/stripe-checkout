import ProductCard, { ProductCardProps } from '@/components/ui/product-card';

export default function Home() {
  const products: ProductCardProps[] = [
    {
      name: 'Beginner React Course',
      price: 29,
      priceId: 'price_1NlSeJAJHyunc9AP3XTRV3oS',
      description:
        'Dive into the world of modern web development with our beginner-friendly React course. Learn the essentials of React, JSX, and component-based architecture from scratch.',
      durationInHours: 3,
    },
    {
      name: 'Intermediate React Course',
      price: 39,
      priceId: 'price_1NlSefAJHyunc9APAnEK9ZAr',
      description:
        'Elevate your React skills with our intermediate-level course. Discover advanced concepts like state management with Redux, routing with React Router, and optimizing performance with React Hooks.',
      durationInHours: 6,
    },
    {
      name: 'Advanced React Course',
      price: 49,
      priceId: 'price_1NlSf9AJHyunc9APws5GISQF',
      description:
        'Unleash the full power of React with our advanced course designed for experienced developers. Delve deep into topics like server-side rendering, GraphQL integration, and building scalable React applications.',
      durationInHours: 9,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Level up your web development skills
      </h1>
      <div className="mt-8 flex flex-col lg:flex-row lg:justify-between w-fit lg:space-x-10 space-y-8 m-auto">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
