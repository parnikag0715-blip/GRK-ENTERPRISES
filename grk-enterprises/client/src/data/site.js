import {
  FlaskConical,
  Droplets,
  Waves,
  TestTubes,
  Brush,
  Wrench,
  Ruler,
  Leaf,
  Filter,
  Sparkles,
  SprayCan,
  Beaker,
  Calendar,
  Settings,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Activity,
  PartyPopper,
  Zap,
  Repeat
} from 'lucide-react';

export const BIZ = {
  name: 'GRK ENTERPRISES',
  tagline: 'Swimming Pool Cleaning, Maintenance & Technical Services',
  location: 'Venkatapur, Moinabad, Rangareddy',
  phones: ['9390630785', '9704666048'],
  waNumber: '919390630785', // +91 country code, no plus sign for wa.me
  address: [
    'Opposite BSNL Office',
    'Village: Venkatapur, Mandal: Moinabad',
    'Rangareddy District, Telangana – 501504, India'
  ],
  mapQuery: 'Venkatapur, Moinabad, Rangareddy, Telangana 501504'
};

export const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');
export const API_URL = import.meta.env.VITE_API_URL || '';

export const waLink = (msg = 'Hello GRK ENTERPRISES, I would like to enquire about your swimming pool services.') =>
  `https://wa.me/${BIZ.waNumber}?text=${encodeURIComponent(msg)}`;

export const serviceWa = (serviceName) =>
  waLink(`Hello GRK ENTERPRISES, I would like to book the "${serviceName}" service for my swimming pool.`);

export const telLink = (n) => `tel:+91${n}`;
export const FREE_MSG = 'Hello GRK ENTERPRISES, I would like to request the free pool consultation and inspection.';

// 3 Glassmorphism Features on Hero
export const HERO_FEATURES = [
  {
    id: 'pool-cleaning',
    title: 'Pool Cleaning',
    icon: Sparkles,
    image: '/images/pool-cleaning.jpg',
    description:
      'Our expert technicians provide comprehensive cleaning, removing debris, scrubbing tiles, and vacuuming your pool to perfection. We ensure every corner is spotless for a pristine swim.',
    tag: 'Deep Sanitation',
    linkText: 'Learn More'
  },
  {
    id: 'chemical-balancing',
    title: 'Chemical Balancing',
    icon: FlaskConical,
    image: '/images/chemical-testing.jpg',
    description:
      'Maintain perfect water chemistry for a safe and enjoyable swim. We test, adjust, and balance all chemicals to prevent algae growth and skin irritation.',
    tag: 'Safe Water Chemistry',
    linkText: 'Learn More'
  },
  {
    id: 'equipment-maintenance',
    title: 'Equipment Maintenance',
    icon: Settings,
    image: '/images/pool-equipment.jpg',
    description:
      'Keep your pool system running efficiently. We inspect, clean, and repair filters, pumps, and heaters to extend the life of your equipment.',
    tag: 'Pump & Filter Care',
    linkText: 'Learn More'
  }
];

// Complete Pool Care Solutions (6 grid items from reference mockup)
export const CARE_SOLUTIONS = [
  {
    id: 'weekly-maintenance',
    title: 'Weekly Maintenance',
    icon: Calendar,
    color: '#0284c7',
    description: 'Scheduled visits for skimming, vacuuming, brushing, water chemistry checks, and basket emptying.'
  },
  {
    id: 'pool-vacuuming',
    title: 'Pool Vacuuming',
    icon: Waves,
    color: '#0d9488',
    description: 'Thorough bottom sediment removal using heavy-duty manual and automatic vacuuming systems.'
  },
  {
    id: 'filter-cleaning',
    title: 'Filter Cleaning',
    icon: Filter,
    color: '#0891b2',
    description: 'Sand filter backwashing, cartridge degreasing, and multiport valve inspection for maximum flow rate.'
  },
  {
    id: 'algae-removal',
    title: 'Algae Removal',
    icon: Leaf,
    color: '#16a34a',
    description: 'Targeted shock treatments, copper-based algaecides, and tile scrubbing to eradicate green, yellow, or black algae.'
  },
  {
    id: 'pool-repairs',
    title: 'Pool Repairs',
    icon: Wrench,
    color: '#2563eb',
    description: 'Pump seal replacement, motor repairs, suction leak fixes, plumbing maintenance, and LED light replacements.'
  },
  {
    id: 'water-testing',
    title: 'Water Testing',
    icon: TestTubes,
    color: '#7c3aed',
    description: 'Accurate multi-parameter testing for free chlorine, combined chlorine, pH levels, total alkalinity, and calcium hardness.'
  }
];

// Comprehensive Services Details for the Dedicated Services Page
export const SERVICES_DETAILS = [
  {
    id: 'weekly-pool-maintenance',
    title: 'Weekly Maintenance Contracts',
    tagline: 'Worry-free, scheduled maintenance for farmhouses, villas & clubs',
    icon: Calendar,
    image: '/images/hero.jpg',
    badge: 'Most Popular',
    overview:
      'Keep your swimming pool pristine all 365 days of the year. Our routine weekly service plans are specifically engineered for farmhouses and private villas in Moinabad, Gandipet, Chevella, and Hyderabad.',
    features: [
      'Weekly scheduled on-site maintenance visits by trained technicians',
      'Surface debris skimming, tile line brushing, and deep bottom vacuuming',
      'Skimmer basket and pump strainer basket clearing',
      'Filter backwashing and pressure valve inspection',
      'Complete water chemical balancing included (pH, Chlorine, Alkalinity)',
      'Water health check report provided after each visit'
    ]
  },
  {
    id: 'deep-pool-cleaning-vacuuming',
    title: 'Deep Pool Cleaning & Vacuuming',
    tagline: 'Intensive restoration for cloudy, silted, or dusty pool floors',
    icon: Waves,
    image: '/images/pool-cleaning.jpg',
    badge: 'Essential Care',
    overview:
      'Farmhouse pools naturally accumulate outdoor windblown dirt, tree leaves, and fine soil particles. We deploy heavy-duty manual and automatic suction systems to extract every grain of sediment.',
    features: [
      'Comprehensive vacuuming of floors, slopes, steps, and corners',
      'Algae and biofilm scrubbing along grout lines and perimeter tiles',
      'Skimmer weir door inspection and deep surface skimming',
      'Flocculant and coagulant application to clarify dull water',
      'Safe vacuuming directly to waste without dirtying sand filters'
    ]
  },
  {
    id: 'chemical-balancing-water-testing',
    title: 'Chemical Balancing & Water Testing',
    tagline: 'Scientific water testing for safe, skin-friendly, crystal clear water',
    icon: FlaskConical,
    image: '/images/chemical-testing.jpg',
    badge: 'Swimmer Safety',
    overview:
      'Unbalanced pool water causes burning eyes, dry skin, cloudy water, and expensive equipment corrosion. We perform rigorous lab-standard on-site water testing and precisely balance every parameter.',
    features: [
      'Multi-parameter testing: Free Chlorine, Total Chlorine, pH, Alkalinity & Hardness',
      'High-grade TCCA 90 stabilization for long-lasting bacterial disinfection',
      'Safe pH stabilization (balancing between 7.2 - 7.6) preventing eye sting',
      'Shock oxidation treatments to burn out organic contaminants and sweat oils',
      'Clarifier & algaecide dosing preventing recurring algae blooms'
    ]
  },
  {
    id: 'pump-filter-equipment-repairs',
    title: 'Pump & Sand Filter Repairs',
    tagline: 'Complete mechanical and electrical servicing for your pool plant room',
    icon: Settings,
    image: '/images/pool-equipment.jpg',
    badge: 'Equipment Care',
    overview:
      'A swimming pool is only as healthy as its circulation system. We service, diagnose, and repair high-pressure pumps, commercial sand filters, multiport valves, and underwater LED lights.',
    features: [
      'Motor noise diagnostics, bearing replacements, and mechanical seal repairs',
      'Sand filter backwash valve servicing and silica sand media replacement',
      'Suction line leak detection and air bubble prevention',
      'Pressure gauge testing and multiport gasket replacements',
      'Underwater LED light replacements, junction box waterproofing and timers'
    ]
  },
  {
    id: 'algae-removal-green-pool-recovery',
    title: 'Green Pool Recovery & Algae Shock',
    tagline: 'Turn murky green water into sparkling crystal blue in 24-48 hours',
    icon: Leaf,
    image: '/images/chemical-supplies.jpg',
    badge: 'Rapid Turnaround',
    overview:
      'Neglected pool turned into a green pond? Do not drain your pool and risk hydrostatic shell damage! Our high-potency shock treatment and flocculation process clears green pools fast.',
    features: [
      'Massive chlorine shock treatment eliminating active green, yellow, or black algae',
      'High-strength copper-free algaecide infusion to kill embedded algae spores',
      'Polymer flocculant dosing to bind micro-particles into heavy bottom sediment',
      'Deep waste extraction vacuuming without recirculating debris',
      'Final sanitization balance making the pool 100% safe to swim again'
    ]
  },
  {
    id: 'party-event-pre-cleaning',
    title: 'Weekend & Party Pre-Cleaning',
    tagline: 'Priority same-day pool preparation for farmhouses and private events',
    icon: Sparkles,
    image: '/images/hero.jpg',
    badge: 'Fast Response',
    overview:
      'Hosting family, guests, or a weekend party at your farmhouse or club? Our rapid response crew ensures your pool is sparkling clean, heated if needed, and chemically pristine before your guests arrive.',
    features: [
      'Priority express scheduling in Moinabad, Gandipet & Chevella',
      'Complete leaf skimming, surface polishing, and tile brushing',
      'Pre-event water safety inspection and odor-free sanitizing',
      'Lighting check for evening and nighttime pool illumination',
      'Post-event recovery cleaning packages also available'
    ]
  }
];

export const MILESTONES = [
  {
    year: '2009',
    title: 'Foundations & Nizam Club Standards',
    desc: 'Our journey began managing institutional high-capacity swimming pools with the legendary Nizam Club, learning rigorous daily chemical logs, micro-filtration, and stringent bather safety standards.'
  },
  {
    year: '2014',
    title: 'Moinabad Farmhouse Pool Pioneer',
    desc: 'Recognized the unique challenges faced by rural and farmhouse swimming pools (windblown soil, heavy leaf fall, monsoon algae). Established scheduled weekly maintenance routes across Moinabad and Gandipet.'
  },
  {
    year: '2019',
    title: 'Mechanical & Pump Engineering Unit',
    desc: 'Expanded technical capabilities with direct diagnostic and repair tooling for high-pressure pool pumps, sand filtration systems, multiport valve rebuilds, and electrical plant rooms.'
  },
  {
    year: '2024+',
    title: '30+ Farmhouse Pools & 24hr Emergency Unit',
    desc: 'Managing over 30 active farmhouse swimming pools on contract, offering same-day chemical dispatch and rapid pre-event pool preparation across Rangareddy and Hyderabad.'
  }
];

export const CASE_STUDIES = [
  {
    id: 'nizam-club',
    title: 'Institutional Excellence: Nizam Club Pool Operations',
    category: 'Commercial Club',
    result: '100% Water Clarity & Bacterial Safety',
    image: '/images/hero.jpg',
    challenge: 'Managing high-density bather loads with zero tolerance for water cloudiness or eye/skin irritation.',
    solution: 'Implemented multi-stage chemical shock routines, daily pH/alkalinity balancing, and backwash filtration schedules.',
    takeaway: 'Instituted the commercial-grade rigor that we bring to every private farmhouse and villa pool today.'
  },
  {
    id: 'moinabad-farmhouse',
    title: 'Emergency Green Pool Recovery: 48-Hour Wedding Turnaround',
    category: 'Farmhouse Pool, Moinabad',
    result: 'Swamp to Sparkling Blue in 36 Hours',
    image: '/images/pool-cleaning.jpg',
    challenge: 'A 60,000-liter farmhouse pool left unserviced for 6 months was severely overgrown with black and green algae 3 days before a private event.',
    solution: 'Applied high-potency algaecide and chlorine shock, followed by cationic flocculant settling and direct-to-waste vacuum extraction without draining the shell.',
    takeaway: 'Saved the owner huge refilling costs and delivered crystal clear water right on schedule.'
  },
  {
    id: 'gandipet-villa',
    title: 'Sand Filter & Motor Rebuild: Restoring Flow & Pressure',
    category: 'Private Villa, Gandipet',
    result: '2.5x Water Circulation Rate & Silent Operation',
    image: '/images/pool-equipment.jpg',
    challenge: 'A noisy 2HP pump with failing shaft seals causing suction air locks and cloudy, stagnant pool water.',
    solution: 'Replaced mechanical shaft seal, calibrated impeller clearances, and replaced 250kg of calcified silica sand with virgin high-grade media.',
    takeaway: 'Restored optimal water turnover and eliminated equipment burnout risks.'
  }
];

export const TECHNICAL_PROCESS = [
  {
    step: '01',
    title: 'On-Site Diagnostic Water Testing',
    desc: 'We test 5 critical parameters: Free Chlorine, Combined Chlorine, pH, Total Alkalinity, and Calcium Hardness using dual-comparator chemistry.'
  },
  {
    step: '02',
    title: 'Plant Room & Filter Health Check',
    desc: 'We inspect pressure gauges, pump motor amperage, strainer baskets, and multiport backwash valves to ensure optimal hydraulic flow.'
  },
  {
    step: '03',
    title: 'Precision Chemical Dosage',
    desc: 'We calculate exact chemical quantities of TCCA 90, sodium bicarbonate, or algaecide specifically tailored for your pool volume.'
  },
  {
    step: '04',
    title: 'Deep Bottom Vacuuming & Polishing',
    desc: 'We vacuum every corner, scrub perimeter waterline tiles, and skim floating debris to leave the water sparkling crystal clear.'
  }
];

export const INITIAL_REVIEWS = [];
export const TESTIMONIALS = [];

export const INTERESTS = [
  'Weekly Maintenance Contract',
  'Deep Pool Cleaning & Vacuuming',
  'Chemical Balancing & Water Testing',
  'Pump & Sand Filter Repair',
  'Green Pool Recovery (Algae Shock)',
  'Weekend & Party Pre-Cleaning',
  'Free Site Consultation & Inspection'
];
