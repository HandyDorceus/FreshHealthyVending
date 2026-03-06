import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Apple, Coffee, Salad, Candy } from 'lucide-react';

const productCategories = [
  {
    icon: Apple,
    name: 'Healthy Snacks',
    description: 'Nutritious options including nuts, fruit, granola bars, and more',
    color: 'bg-green-500',
  },
  {
    icon: Coffee,
    name: 'Beverages',
    description: 'Wide selection of drinks from water to coffee and energy drinks',
    color: 'bg-amber-500',
  },
  {
    icon: Salad,
    name: 'Fresh Meals',
    description: 'Ready-to-eat meals and salads for convenient lunch options',
    color: 'bg-emerald-500',
  },
  {
    icon: Candy,
    name: 'Traditional Favorites',
    description: 'Classic snacks and treats for variety and satisfaction',
    color: 'bg-pink-500',
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
              <Card key={index} variant="bordered" className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className="text-white" size={32} />
                  </div>
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
