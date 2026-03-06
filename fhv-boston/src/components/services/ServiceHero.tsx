import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
}

export default function ServiceHero({
  title,
  description,
  icon: Icon,
  gradient = 'from-slate-900 to-slate-800'
}: ServiceHeroProps) {
  return (
    <section className={`py-20 bg-gradient-to-br ${gradient} text-white`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon size={40} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
