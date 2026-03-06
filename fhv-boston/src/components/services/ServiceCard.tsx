import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  link,
  image
}: ServiceCardProps) {
  return (
    <Card variant="elevated" className="h-full flex flex-col group hover:shadow-xl transition-all duration-300">
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Icon className="text-white opacity-20" size={80} />
          </div>
        </div>
      )}
      <CardHeader>
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="text-primary" size={28} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-base mb-4 flex-1">
          {description}
        </CardDescription>
        <Link href={link} className="inline-block">
          <Button variant="outline" size="sm" className="group/btn">
            Learn More
            <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
