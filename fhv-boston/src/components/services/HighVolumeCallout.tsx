import { TrendingUp, Clock, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

interface HighVolumeCalloutProps {
  variant?: 'default' | 'emphasized';
  customText?: string;
}

export default function HighVolumeCallout({
  variant = 'default',
  customText
}: HighVolumeCalloutProps) {
  const defaultText = "We specialize in high-volume locations with real-time inventory tracking. From once a week to multiple times per day—we're equipped to handle your volume.";

  return (
    <Card
      variant={variant === 'emphasized' ? 'elevated' : 'default'}
      className={variant === 'emphasized' ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-primary/5 border-primary/20'}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
            variant === 'emphasized' ? 'bg-white/20' : 'bg-primary/10'
          }`}>
            <TrendingUp
              className={variant === 'emphasized' ? 'text-white' : 'text-primary'}
              size={24}
            />
          </div>
          <div className="flex-1">
            <h3 className={`text-xl font-bold mb-2 ${
              variant === 'emphasized' ? 'text-white' : 'text-foreground'
            }`}>
              High-Volume Specialization
            </h3>
            <p className={`leading-relaxed ${
              variant === 'emphasized' ? 'text-white/90' : 'text-slate-600'
            }`}>
              {customText || defaultText}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <BarChart3
                  className={variant === 'emphasized' ? 'text-white/80' : 'text-primary'}
                  size={18}
                />
                <span className={`text-sm ${
                  variant === 'emphasized' ? 'text-white/90' : 'text-slate-700'
                }`}>
                  Real-time tracking
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock
                  className={variant === 'emphasized' ? 'text-white/80' : 'text-primary'}
                  size={18}
                />
                <span className={`text-sm ${
                  variant === 'emphasized' ? 'text-white/90' : 'text-slate-700'
                }`}>
                  Data-driven restocking
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
