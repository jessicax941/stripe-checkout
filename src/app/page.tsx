import ProductCard from '@/components/ui/product-card';

export default function Home() {
  const products = [
    {
      name: 'beginner course',
      price: 29,
      priceId: 'price_1NlSeJAJHyunc9AP3XTRV3oS',
    },
    {
      name: 'intermediate',
      price: 39,
      priceId: 'price_1NlSefAJHyunc9APAnEK9ZAr',
    },
    {
      name: 'advanced',
      price: 49,
      priceId: 'price_1NlSf9AJHyunc9APws5GISQF',
    },
  ];
  return (
    <main className="px-16 py-8">
      <h1 className="text-lg">React courses</h1>
      <div className="mt-4 flex flex-col space-y-4">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </main>
  );
}
