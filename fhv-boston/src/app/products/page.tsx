import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import {
  Apple,
  Coffee,
  Salad,
  Candy,
  Cookie,
  Milk,
  Sandwich,
  Sparkles,
  Leaf,
  Heart,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { fetchUnsplashImages } from '@/lib/unsplash';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Explore our wide selection of healthy snacks, beverages, fresh meals, and traditional favorites. Fresh Healthy Vending Boston offers 100+ product options.',
};

export default async function ProductsPage() {
  const productCategoryImages = await fetchUnsplashImages('food variety', 4, 'squarish');
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              From nutritious snacks to fresh meals and beverages, we offer a
              diverse selection to satisfy every taste and dietary preference.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We carefully curate our product selection to offer the perfect balance
              of healthy options and traditional favorites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {[
              {
                icon: Apple,
                name: 'Healthy Snacks',
                description:
                  'Nutritious options to fuel your day without the guilt.',
                color: 'bg-green-500',
                items: [
                  'Mixed nuts & trail mix',
                  'Protein bars',
                  'Dried fruits',
                  'Granola bars',
                  'Rice cakes',
                  'Veggie chips',
                ],
              },
              {
                icon: Coffee,
                name: 'Beverages',
                description:
                  'Stay hydrated and energized with our drink selection.',
                color: 'bg-amber-500',
                items: [
                  'Bottled water',
                  'Coffee & tea',
                  'Energy drinks',
                  'Juices',
                  'Sports drinks',
                  'Sparkling water',
                ],
              },
              {
                icon: Salad,
                name: 'Fresh Meals',
                description:
                  'Convenient, ready-to-eat meals for busy professionals.',
                color: 'bg-emerald-500',
                items: [
                  'Fresh salads',
                  'Sandwiches & wraps',
                  'Fruit cups',
                  'Yogurt parfaits',
                  'Protein bowls',
                  'Meal kits',
                ],
              },
              {
                icon: Candy,
                name: 'Traditional Favorites',
                description:
                  'Classic snacks and treats everyone loves.',
                color: 'bg-pink-500',
                items: [
                  'Chips & pretzels',
                  'Cookies',
                  'Candy bars',
                  'Crackers',
                  'Popcorn',
                  'Gum & mints',
                ],
              },
            ].map((category, index) => {
              const Icon = category.icon;
              const image = productCategoryImages.success && productCategoryImages.data?.[index];
              return (
                <Card key={index} variant="elevated" className="h-full overflow-hidden">
                  {image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={image.urls.small}
                        alt={image.alt_description || category.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div
                        className={`absolute bottom-3 left-3 w-14 h-14 ${category.color} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-center">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm text-slate-600 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Specialty Options */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Specialty Options Available
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Leaf,
                  title: 'Organic Products',
                  description: 'USDA certified organic snacks and beverages',
                },
                {
                  icon: Heart,
                  title: 'Gluten-Free',
                  description: 'Wide selection of gluten-free options',
                },
                {
                  icon: Sparkles,
                  title: 'Vegan Friendly',
                  description: 'Plant-based snacks and meals',
                },
                {
                  icon: ShieldCheck,
                  title: 'Low-Sugar',
                  description: 'Options for diabetic and health-conscious individuals',
                },
              ].map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card key={index} variant="bordered">
                    <CardContent className="p-6 text-center">
                      <Icon className="text-primary mx-auto mb-3" size={32} />
                      <h4 className="font-bold mb-2">{option.title}</h4>
                      <p className="text-sm text-slate-600">{option.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Our Products Stand Out
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We carefully select each product to ensure quality, freshness, and
                variety for your workplace.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: 'Premium Quality',
                  description:
                    'We partner with leading brands known for quality ingredients and great taste. Every product is carefully vetted before being added to our selection.',
                },
                {
                  icon: Sparkles,
                  title: 'Always Fresh',
                  description:
                    'Our regular restocking schedule and strict rotation policy ensure products are always fresh. We monitor expiration dates closely.',
                },
                {
                  icon: Sandwich,
                  title: 'Customizable Selection',
                  description:
                    'Work with us to create a product mix tailored to your workplace. We can accommodate dietary restrictions, preferences, and budget.',
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} variant="elevated">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Trusted Brands We Carry
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
              We stock products from nationally recognized brands as well as local
              favorites to give your employees the best selection.
            </p>

            <div className="bg-slate-50 rounded-2xl p-12 border-2 border-slate-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
                {[
                  'Kind',
                  'Clif Bar',
                  'Vita Coco',
                  'LaCroix',
                  'Nature Valley',
                  'Quest',
                  'RXBAR',
                  'Honest Tea',
                ].map((brand, index) => (
                  <div
                    key={index}
                    className="text-2xl font-bold text-slate-700"
                  >
                    {brand}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-8">
                And many more! Contact us for our complete product catalog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Information */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Nutrition Matters
              </h2>
              <p className="text-lg text-white/90">
                We believe in transparency. All our products include clear
                nutritional information to help your employees make informed
                choices.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-white/90">Product Options</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">60%</div>
                <div className="text-white/90">Healthy Choices</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-white/90">Fresh Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Want to See Our Full Product List?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Contact us today to receive our complete product catalog and discuss
              customizing a selection for your workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request Product Catalog
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  Learn About Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
