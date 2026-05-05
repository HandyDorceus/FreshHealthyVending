const clientGroups = [
  {
    category: 'Education',
    clients: [
      { name: 'Beaver Country Day School, Chestnut Hill' },
      { name: 'Cristo Rey High School, Savin Hill' },
      { name: 'Trinity Catholic High School, Newton' },
      { name: 'Harvard University, Cambridge' },
      { name: 'Lasell University, Auburndale' },
    ],
  },
  {
    category: 'Fitness & Recreation',
    clients: [
      { name: 'Cambridge YMCA, Cambridge' },
      { name: 'HealthWorks, Dorchester' },
      { name: 'Rock Spot Climbing, Dedham' },
      { name: 'Sports Club LA, Boston' },
      { name: 'Solid Body Fitness, Dedham' },
      { name: 'Gymit, Brookline/Watertown' },
      { name: "Women's Fitness of Boston, Downtown Crossing" },
    ],
  },
  {
    category: 'MBTA & Transit',
    clients: [
      { name: 'MBTA Transit Police Headquarters, Boston' },
      { name: 'Back Bay MBTA Station, Boston' },
      { name: 'Aquarium MBTA Station, Boston' },
      { name: 'Downtown Crossing MBTA Station, Boston' },
      { name: 'Stonybrook MBTA Station, Jamaica Plain' },
      { name: 'Arborway Bus Drivers Lounge, Jamaica Plain' },
      { name: 'Charlestown Bus Yard (Bldg 2, 4 & 14), Charlestown' },
      { name: 'MBTA Quincy Bus Maintenance Facility, Quincy', comingSoon: '2027' },
    ],
  },
  {
    category: 'Community & Nonprofits',
    clients: [
      { name: 'Boys and Girls Club, Dorchester' },
      { name: 'Boys and Girls Club, South Boston' },
      { name: 'Action for Boston Community Development (ABCD), Boston' },
      { name: 'SEIU 32BJ Funds Union Office, Downtown Crossing' },
      { name: 'Artists for Humanity, South Boston' },
      { name: 'MassChallenge, Fan Pier Boston' },
    ],
  },
  {
    category: 'Arts & Culture',
    clients: [
      { name: 'Boston Ballet, Boston & Newton Studios' },
      { name: 'Apple Store — Boylston St, Chestnut Hill & Cambridge Side Galleria' },
    ],
  },
  {
    category: 'Government & Municipal',
    clients: [
      { name: 'Hingham Town Hall, Hingham' },
      { name: 'Hingham DPW, Hingham' },
      { name: 'Editas Medicine, Cambridge' },
    ],
  },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Trusted Across Greater Boston
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From universities and fitness centers to transit hubs and community
            organizations, FHV Boston serves a diverse range of high-traffic
            locations across the region.
          </p>
        </div>

        {/* Client grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientGroups.map((group) => (
            <div key={group.category} className="bg-muted rounded-xl p-6">
              <h3 className="text-base font-bold text-primary mb-4 pl-3 border-l-4 border-secondary">
                {group.category}
              </h3>
              <ul className="space-y-1">
                {group.clients.map((client) => (
                  <li key={client.name} className="flex items-center gap-2 flex-wrap">
                    {client.comingSoon ? (
                      <>
                        <span className="text-sm text-gray-400">{client.name}</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-warning text-white whitespace-nowrap">
                          Coming {client.comingSoon}
                        </span>
                      </>
                    ) : (
                      <span className="text-sm text-slate-600">{client.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
