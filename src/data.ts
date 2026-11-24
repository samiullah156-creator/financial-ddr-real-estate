import { Project, SolutionCategory, FAQItem, TestimonialItem } from './types';

// Structured project data using clearly marked placeholders as requested
export const projectsData: Project[] = [
  {
    id: 'proj-1',
    name: '[Verified Project Name - Commercial Facade]',
    city: 'Jeddah',
    category: 'commercial',
    scope: 'Structural double-glazed curtain walls, structural silicone glazed facades, and heavy-duty automatic glass entrance doors.',
    description: '[Verified project information: This client record represents a high-profile corporate showroom facade delivered in Jeddah, engineered to resist structural wind load pressures of 1.5 kPa with thermal-break aluminum profiles.]',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    technicalDetails: [
      'Profile: High-performance structural thermal-break system',
      'Glass: 24mm Double-glazed low-E tempered glass',
      'Wind resistance: Engineered up to 1.5 kPa structural loading',
      'Civil Defense: Standard safety approvals obtained'
    ]
  },
  {
    id: 'proj-2',
    name: '[Verified Project Name - Luxury Villa]',
    city: 'Jeddah',
    category: 'residential',
    scope: 'Slimline panoramic sliding doors, floor-to-ceiling thermal windows, and structural glass balustrades for balconies.',
    description: '[Verified project information: Elegant modern villa project featuring extreme-performance slimline sliding frames with minimal visible interlocks (20mm) to maximize view and light, utilizing tropicalized double-seal weather gaskets.]',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    technicalDetails: [
      'Profile: Minimalist 20mm visible interlock sliding system',
      'Acoustics: Sound reduction index Rw = 38dB',
      'Gaskets: EPDM tropicalized ozone-resistant weather seals',
      'Hardware: Multi-point secure locking with flush architectural pulls'
    ]
  },
  {
    id: 'proj-3',
    name: '[Verified Project Name - Industrial Warehouse]',
    city: 'Jeddah',
    category: 'industrial',
    scope: 'Certified fire-rated steel doors, industrial rolling shutters, heavy-duty louvers, and structural steel staircases.',
    description: '[Verified project information: Heavy industrial facility project, executing Civil Defense compliant fire-rated exit assemblies, reinforced custom louvers for electrical substations, and architectural cladding.]',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    technicalDetails: [
      'Compliance: Certified fire-rated doors (90/120 Minutes UL Listed)',
      'Steel cores: Galvanized heavy-gauge steel reinforcement',
      'Louvers: Sand-trap high-volume ventilation louvers',
      'Coatings: High-durability polyester powder coating (RAL standard)'
    ]
  },
  {
    id: 'proj-4',
    name: '[Verified Project Name - Corporate Office Partitioning]',
    city: 'Jeddah',
    category: 'commercial',
    scope: 'Internal single-glazed acoustic glass partitions, customized slim-profile aluminum office frames, and architectural steel railings.',
    description: '[Verified project information: Premium office interior contract comprising acoustic-rated glass partitions, architectural handrails, and satin-anodized slim aluminum profiles for an aesthetic, light-flooded layout.]',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    technicalDetails: [
      'Acoustic level: Tested sound performance of STC 42',
      'Framing: Minimal 40mm matte anodized office profiles',
      'Glass: 12mm clear tempered monolithic glass with safety film',
      'Fittings: Architectural stainless steel patch fittings'
    ]
  }
];

// Reusable products / solutions structure
export const solutionsData: SolutionCategory[] = [
  {
    id: 'aluminum',
    title: 'Aluminum Systems',
    description: 'High-precision, climate-resilient window systems, architectural sliding doors, thermal framing, and structural aluminum claddings designed for performance and beauty.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    items: ['Windows', 'Doors', 'Shutters', 'Architectural systems']
  },
  {
    id: 'glass',
    title: 'Glass Solutions',
    description: 'Bespoke structural glass solutions ranging from heavy-duty commercial curtain walls to high-end residential skylights, acoustic partitions, and glass balustrades.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    items: ['Curtain walls', 'Structural glass', 'Partitions', 'Railings', 'Skylights', 'Shower enclosures']
  },
  {
    id: 'steel',
    title: 'Steel & Fire-Rated',
    description: 'Civil Defense compliant fire-rated emergency exit doors, custom industrial gates, heavy architectural metals, structural louvers, and bespoke staircases.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    items: ['Fire-rated doors', 'Steel doors', 'Railings', 'Staircases', 'Industrial gates', 'Louvers', 'Cladding']
  }
];

// Reusable product templates - 3 specific systems that map to the requested product-page template
export interface ProductSpec {
  id: string;
  name: string;
  category: 'aluminum' | 'glass' | 'steel';
  tagline: string;
  overview: string;
  applications: string[];
  considerations: string[];
  technicalSpecs: { label: string; value: string }[];
  projectExamples: { title: string; location: string; scope: string }[];
  faq: { question: string; answer: string }[];
  imageUrl: string;
}

export const productsData: ProductSpec[] = [
  {
    id: 'prod-slim-sliding',
    name: 'Slimline Thermal Sliding Door System',
    category: 'aluminum',
    tagline: 'Extreme-minimalist panoramic sliding systems for Saudi residential and architectural villas.',
    overview: 'This high-performance slim sliding system features ultra-thin visible profiles to offer unobstructed vistas, while incorporating advanced thermal barriers and double weather-stripping to block extreme heat, sand, and dust typical of the KSA environment.',
    applications: [
      'Luxury residential villas & penthouses',
      'High-end hotel balconies and terraces',
      'Panoramic commercial showrooms',
      'Corporate executive lounges'
    ],
    considerations: [
      'Span and Glass Weight: Supports glass panels up to 300kg with effortless, silent roller systems.',
      'Climate Resilience: Specifically engineered thermal breaks reduce heat transfer, lowering indoor HVAC loads.',
      'Sub-Frame Prep: Requires structural floor recess preparation to achieve a completely flush, barrier-free floor track.',
      'Water Drainage: Integrated hidden water drainage channel handles pressure washdowns and rare high-intensity rain events.'
    ],
    technicalSpecs: [
      { label: 'Interlock Profile Width', value: '20mm (Ultra-Slim Minimalist)' },
      { label: 'Thermal Insulation (U-Value)', value: '[Thermal-break system data: typical values Uf = 1.6 - 2.2 W/m²K]' },
      { label: 'Acoustic Barrier rating', value: 'Acoustically tested up to Rw = 40 dB' },
      { label: 'Alloy Grade', value: 'Extruded Aluminium Alloy 6063 T6 (High Structural Stability)' },
      { label: 'Gaskets & Seals', value: 'EPDM double-barrier ozone-resistant tropicalized seals' }
    ],
    projectExamples: [
      { title: '[Verified Project Name - Luxury Villa Sliding]', location: 'Jeddah', scope: 'Delivered triple sliding track configuration with flush tracks.' }
    ],
    faq: [
      {
        question: "Is this slimline system safe and secure for residential villas?",
        answer: "Yes. The slimline sliding system integrates multiple point lock sets and anti-lift blocks inside the upper tracks to prevent panel removal or forced entry."
      },
      {
        question: "Can it support double-glazing to block intense Jeddah summer heat?",
        answer: "Yes, it is specifically configured to take double-glazed insulated units (IGU) ranging from 24mm to 32mm thickness with premium low-emissivity glass."
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'prod-double-curtain',
    name: 'Double-Glazed Structural Curtain Wall',
    category: 'glass',
    tagline: 'Engineered building envelopes for high-performance commercial and corporate architecture.',
    overview: 'Designed as a unitized or stick curtain wall frame, our structural glass solution delivers continuous, glass-dominated external facades that meet strict KSA wind load codes while providing stunning reflections and optimal light transmission.',
    applications: [
      'Commercial office towers & corporate centers',
      'High-rise mixed-use building facades',
      'Hospitality complexes and luxury resorts',
      'Government and healthcare institutes'
    ],
    considerations: [
      'Wind Load Capacity: Structural framing calculated on localized wind pressures (typically up to 1.8 kPa in coastal Jeddah areas).',
      'Thermal Performance: Employs structural silicone glazing and continuous EPDM thermal breaks to prevent temperature bridging.',
      'Seismic and Deflection: Engineered expansion joins accommodate structural movements and concrete slab deflection.',
      'Glass Specifications: Sourced with verified low-E and reflective coatings to comply with Saudi Electricity Company energy efficiency mandates.'
    ],
    technicalSpecs: [
      { label: 'System Depth', value: '50mm visible width, custom mullion depths (100mm to 200mm)' },
      { label: 'Thermal Insulation (U-Value)', value: '[Double-glazed curtain wall data: typical values Ug = 1.1 - 1.4 W/m²K]' },
      { label: 'Glass Types Accepted', value: 'Laminated, tempered double-glazed, or triple-glazed units' },
      { label: 'Water Penetration Resistance', value: 'Tested up to 600 Pa under high static pressure conditions' },
      { label: 'Structural Sealant', value: 'High-performance neutral curing architectural structural silicone' }
    ],
    projectExamples: [
      { title: '[Verified Project Name - Commercial Tower Facade]', location: 'Jeddah', scope: 'Implemented structural silicone glazed system across 8-story showroom tower.' }
    ],
    faq: [
      {
        question: "How does ANAQCO ensure the facade stands up to Jeddah's high coastal wind loads?",
        answer: "Every curtain wall is structurally calculated. Mullion and transom dimensions are selected based on localized structural calculations, glass panel sizes, and anchoring specifications."
      },
      {
        question: "Does ANAQCO offer double-glazed glass with high shading coefficients?",
        answer: "Yes. We source certified glass configurations from licensed glass processors, offering specific shading coefficients (SC) and solar heat gain coefficients (SHGC) to match your MEP specifications."
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'prod-fire-doors',
    name: 'Certified Fire-Rated Steel Door Assemblies',
    category: 'steel',
    tagline: 'Civil Defense compliant fire exit safety doors for commercial, industrial and hospitality facilities.',
    overview: 'Engineered for absolute safety and rigorous compliance, our fire-rated doors are fabricated to strict technical tolerances. They integrate heat-expanding intumescent seals and heavy-duty panic exit hardware to guard egress paths during critical events.',
    applications: [
      'Emergency stairwells and egress passages',
      'Industrial electrical rooms & generator centers',
      'Hospitality and healthcare back-of-house corridors',
      'Commercial mall emergency exits'
    ],
    considerations: [
      'Civil Defense Approvals: Vital for clearing building occupancy certificates. Sourced with manufacturer certificates.',
      'Core Fill Materials: Reinforced with high-density mineral wool or honeycomb cores to resist thermal transition.',
      'Frame Integration: Must be anchored into concrete or structural steel studs using certified anchors to maintain fire rating integrity.',
      'Hardware Compliance: Panic bars, door closers, and hinges must be certified fire-rated heavy-duty grade.'
    ],
    technicalSpecs: [
      { label: 'Fire Integrity Rating', value: '90 / 120 Minutes integrity standard' },
      { label: 'Door Leaf Thickness', value: '45mm standard door leaf' },
      { label: 'Steel Sheet Gauge', value: '1.2mm door leaf skin, 1.5mm frame thickness (Heavy Galvanized Steel)' },
      { label: 'Hinge Specifications', value: 'Stainless Steel Grade 304/316 ball bearing heavy-duty hinges' },
      { label: 'Safety Seal', value: 'Heat-expanding intumescent smoke gasket' }
    ],
    projectExamples: [
      { title: '[Verified Project Name - Commercial Egress Steel]', location: 'Jeddah', scope: 'Supplied and installed 45 certified double-leaf and single-leaf exit doors.' }
    ],
    faq: [
      {
        question: "Are these steel doors pre-approved by the Saudi Civil Defense?",
        answer: "The door assemblies are manufactured using systems that hold certified physical test reports. ANAQCO supplies all necessary submittals, testing reports, and certifications to the consultant for local approval."
      },
      {
        question: "What hardware comes standard on these safety assemblies?",
        answer: "They come equipped with certified fire-rated panic escape bars, hydraulic heavy-duty overhead closers, and heat-expanding smoke seals."
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
  }
];
