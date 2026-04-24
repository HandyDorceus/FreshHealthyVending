import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Apple, Coffee, Salad, Candy } from 'lucide-react';

const productCategories = [
  {
    icon: Candy,
    name: 'Traditional Favorites',
    description: 'Classic snacks and treats for variety and satisfaction',
    color: 'bg-pink-500',
    image: 'https://orangecountyvendingservices.com/wp-content/uploads/2018/11/vending-snacks.png',
    imageAlt: 'Assorted snacks and treats',
  },
  {
    icon: Coffee,
    name: 'Beverages',
    description: 'Wide selection of drinks from water to coffee and energy drinks',
    color: 'bg-amber-500',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/unhealthy-bottled-drinks.jpg?quality=82&strip=1',
    imageAlt: 'Bottled beverages and drinks',
  },
  {
    icon: Salad,
    name: 'Fresh Meals',
    description: 'Ready-to-eat meals and salads for convenient lunch options',
    color: 'bg-emerald-500',
    image: 'https://images.squarespace-cdn.com/content/v1/62446ca05e198512f999836f/39290961-e0b3-4d7f-a71c-c903967f6e2b/hoagie-sandwich-wrap-packaging.jpg',
    imageAlt: 'Fresh meals and sandwiches',
  },
  {
    icon: Apple,
    name: 'Healthy Snacks',
    description: 'Nutritious options including nuts, fruit, granola bars, and more',
    color: 'bg-green-500',
    image: 'https://therealfooddietitians.com/wp-content/uploads/2022/07/Snack-for-Kids_65-scaled.jpg',
    imageAlt: 'Healthy snacks and nuts',
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-slate-600">
            From healthy alternatives to traditional favorites, we offer a diverse
            selection to satisfy every preference in your workplace.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} variant="bordered" className="hover:shadow-lg transition-shadow overflow-hidden">
                {category.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute bottom-3 left-3 w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground text-center mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-600 text-center">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-slate-600">Product Options</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">Fresh</div>
            <div className="text-slate-600">Daily Restocking</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">Custom</div>
            <div className="text-slate-600">Product Selection</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/products">
            <Button size="lg" variant="primary">
              Explore Our Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
