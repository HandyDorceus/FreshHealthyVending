import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '15–35%', label: 'Reduction in labor' },
  { value: '2–10%', label: 'Increase in revenues' },
  { value: '50–100%', label: 'Longer time between visits' },
];

export default function TechnologySection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left column: text content */}
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              How We Operate
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Powered by Smart Technology
            </h2>
            <p className="text-lg font-medium text-foreground mb-4 leading-relaxed">
              We use Vagabond, a real-time vending management platform, to run a
              more precise operation — so your machines stay stocked and your
              locations stay satisfied.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-10">
              Unlike operators who run fixed routes on a schedule, we monitor
              every machine&apos;s fill level in real time. When a machine needs
              attention, we know exactly what to bring before we leave the
              warehouse — reducing wasted trips and keeping products fresher.
            </p>

            {/* Stat callouts */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-border mb-10">
              {stats.map((stat) => (
                <div key={stat.value} className="sm:px-6 first:pl-0 last:pr-0">
                  <div className="text-3xl font-bold text-secondary leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/technology"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              See How Our Technology Works
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Right column: device image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/vagabond-device-quad.jpeg"
              alt="Vagabond vending management software shown across phone, tablet, and laptop"
              width={840}
              height={630}
              className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
