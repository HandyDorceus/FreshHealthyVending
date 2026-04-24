import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
  backgroundImage?: string;
  imageAlt?: string;
}

export default function ServiceHero({
  title,
  description,
  icon: Icon,
  gradient = 'from-primary to-primary-dark',
  backgroundImage,
  imageAlt
}: ServiceHeroProps) {
  return (
    <section className={`relative py-20 bg-gradient-to-br ${gradient} text-white overflow-hidden`}>
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt={imageAlt || title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-65`}></div>
        </>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Icon size={40} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
