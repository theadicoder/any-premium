import { ProductCard } from "./ProductCard";

export const FeaturedProducts = () => {
  const products = [
    {
      title: "Netflix Premium",
      description: "4K Ultra HD + HDR streaming",
      price: 19.99,
      period: "month",
      features: [
        "4 screens at once",
        "Ultra HD streaming",
        "Ad-free experience",
        "Downloads available",
      ],
      popular: true,
    },
    {
      title: "Spotify Premium",
      description: "Ad-free music streaming",
      price: 9.99,
      period: "month",
      features: [
        "Ad-free music",
        "Offline listening",
        "High quality audio",
        "Unlimited skips",
      ],
    },
    {
      title: "Adobe Creative Cloud",
      description: "Professional creative tools",
      price: 52.99,
      period: "month",
      features: [
        "20+ creative apps",
        "100GB cloud storage",
        "Adobe Fonts",
        "Portfolio website",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Subscriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};