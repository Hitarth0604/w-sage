export interface CaseStudyData {
  brief: string;
  idea: string;
  execution: {
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    label: string;
  }[];
  deliverables: string[];
  galleryImages: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  categorySlug: 'video-motion' | 'branding-graphic' | 'social-thumbnails';
  year: string;
  image: string;
  featured?: boolean;
  aspect?: string;
  tagline: string;
  caseStudy: CaseStudyData;
}

export interface Service {
  number: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  previewImage: string;
  tags: string[];
}

export interface Principle {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  headline: string;
  description: string;
  turnaround: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  projectTag: string;
}

export const AGENCY_INFO = {
  name: "WSAGE",
  tagline: "Wise design for the modern world.",
  subTagline: "Video · Design · Motion · Branding. One creative studio for everything visual.",
  foundedYear: "2024",
  location: "Based in India · Working Worldwide",
  email: "weeesage@gmail.com",
  backupEmail: "hello@wsage.studio",
  phone: "+91 78599 80539",
  instagram: "@wesage.in",
  instagramUrl: "https://instagram.com/wesage.in",
  founders: [
    { name: "Hitarth Parekh", role: "Creative Director & Co-Founder" },
    { name: "Karan Soni", role: "Head of Production & Co-Founder" }
  ]
};

export const HERO_OPTIONS = [
  {
    id: "move",
    part1: "WE MAKE",
    part2: "IDEAS",
    part3: "MOVE.",
    serifPart: "part3",
    label: "Option A"
  },
  {
    id: "brands",
    part1: "WE MAKE",
    part2: "BRANDS",
    part3: "LOOK GOOD.",
    serifPart: "part3",
    label: "Option B"
  },
  {
    id: "craft",
    part1: "YOUR BRAND.",
    part2: "OUR",
    part3: "CRAFT.",
    serifPart: "part3",
    label: "Option C"
  }
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "VIDEO EDITING",
    slug: "video-editing",
    shortDesc: "Turning raw footage into stories people don't skip.",
    fullDesc: "Long-form narratives, high-octane YouTube edits, commercials, branded documentaries, and product showcases engineered for maximum watch time.",
    previewImage: "/assets/hero-composition.jpg",
    tags: ["Long-form", "Commercials", "YouTube", "Color Grading", "Sound Design"]
  },
  {
    number: "02",
    title: "MOTION DESIGN",
    slug: "motion-design",
    shortDesc: "Giving kinetic energy and visual weight to every frame.",
    fullDesc: "Custom 2D/3D motion graphics, kinetic typography, cinematic title sequences, seamless video transitions, and visual identity animations.",
    previewImage: "/assets/project-auralize.jpg",
    tags: ["Kinetic Typography", "3D Renders", "Title Sequences", "Micro-animations"]
  },
  {
    number: "03",
    title: "GRAPHIC DESIGN",
    slug: "graphic-design",
    shortDesc: "Editorial clarity and high-contrast digital craftsmanship.",
    fullDesc: "Art-directed campaign visuals, pitch decks, marketing collateral, digital posters, social asset systems, and high-impact editorial layouts.",
    previewImage: "/assets/auralize-mark.jpg",
    tags: ["Campaign Visuals", "Presentations", "Key Visuals", "Digital Art"]
  },
  {
    number: "04",
    title: "BRANDING",
    slug: "branding",
    shortDesc: "Distilling brand essence into an unmistakable visual language.",
    fullDesc: "Complete visual identities, logotypes, brand design systems, typography hierarchies, packaging, and comprehensive guidelines.",
    previewImage: "/assets/project-packaging.jpg",
    tags: ["Visual Identity", "Logo Systems", "Packaging", "Guidelines"]
  },
  {
    number: "05",
    title: "SOCIAL CONTENT",
    slug: "social-content",
    shortDesc: "Thumb-stopping assets built for the fast scroll economy.",
    fullDesc: "Dynamic vertical video (Reels, TikToks, YouTube Shorts), multi-slide carousels, launch teasers, and cohesive content engines for creators & brands.",
    previewImage: "/assets/project-streetwear.jpg",
    tags: ["Short-form 9:16", "Carousels", "Viral Hooks", "Launch Teasers"]
  },
  {
    number: "06",
    title: "THUMBNAIL DESIGN",
    slug: "thumbnail-design",
    shortDesc: "High-CTR visual packaging for competitive platforms.",
    fullDesc: "Psychology-backed YouTube thumbnails, A/B test packaging, facial expression retouching, and cinematic color contrast designed to convert impressions into views.",
    previewImage: "/assets/project-thumbnail.jpg",
    tags: ["YouTube CTR", "A/B Testing", "Visual Packaging", "Story Hooks"]
  },
  {
    number: "07",
    title: "CREATIVE CAMPAIGNS",
    slug: "creative-campaigns",
    shortDesc: "Concept development and complete visual rollout.",
    fullDesc: "360-degree art direction from seed idea to final broadcast assets, cross-platform rollout strategy, digital stunts, and experiential installation visuals.",
    previewImage: "/assets/project-installation.jpg",
    tags: ["Concepting", "Art Direction", "Rollout Strategy", "Broadcast"]
  },
  {
    number: "08",
    title: "CUSTOM CREATIVE",
    slug: "custom-creative",
    shortDesc: "If it involves making something look better, think WSAGE.",
    fullDesc: "Experimental 3D installations, album artwork, festival identities, interactive web visual assets, and bespoke creative experiments.",
    previewImage: "/assets/project-chrono.jpg",
    tags: ["3D Experiments", "Album Art", "Interactive Assets", "Special Projects"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "chrono",
    title: "CHRONO — TIMELESS CRAFT",
    client: "Karm Panjwani, Ahmedabad",
    category: "Brand Film · Commercial",
    categorySlug: "video-motion",
    year: "2025",
    image: "/assets/project-chrono.jpg",
    featured: true,
    aspect: "wide",
    tagline: "A cinematic macro study of precision engineering and mechanical soul.",
    caseStudy: {
      brief: "Kala Horology required an evocative launch film for their heritage chronograph that diverged from sterile luxury tropes and celebrated tactile mechanical poetry.",
      idea: "We conceptualized 'Suspended Resonance' — framing the timepiece not as jewelry, but as a kinetic sculpture defying time itself through high-speed macro optics and suspended liquid tension.",
      execution: [
        {
          title: "Cinematography & Color Grading",
          description: "Engineered high-contrast Kodak 5219 film emulation with deep obsidian blacks, golden brass warmth, and razor-sharp 4K macro captures."
        },
        {
          title: "Sound Design & Rhythm Cut",
          description: "Composed an organic rhythm score utilizing authentic mechanical escapement clicks, gear hums, and low-frequency sub-bass drops."
        },
        {
          title: "Motion VFX & Typographic Framing",
          description: "Embedded subtle technical telemetry overlays and anamorphic lens light leaks that accentuate the horological craftsmanship."
        }
      ],
      results: [
        { metric: "3.4M+", label: "Organic Film Impressions" },
        { metric: "84%", label: "Average Retention Rate" },
        { metric: "Sold Out", label: "Initial 500-Piece Run" }
      ],
      deliverables: ["60s Cinema Cut", "15s Social Cutdowns", "Key Campaign Visuals", "Color Grading Suite"],
      galleryImages: ["/assets/project-chrono.jpg", "/assets/hero-composition.jpg"]
    }
  },
  {
    id: "auralize",
    title: "AURALIZE — SPATIAL AUDIO SYSTEM",
    client: "Auralize Audio Labs, Bengaluru",
    category: "Motion Design · Identity",
    categorySlug: "video-motion",
    year: "2025",
    image: "/assets/project-auralize.jpg",
    tagline: "Translating multi-channel spatial acoustics into kinetic visual energy.",
    caseStudy: {
      brief: "Auralize needed a future-forward motion identity to demonstrate their proprietary 360-degree spatial audio compression algorithm to global audio engineers and audiophiles.",
      idea: "We engineered a visual grammar rooted in 'Orbital Harmonics' — rendering real-time sound frequencies as iridescent energy ribbons revolving around dark matter spheres.",
      execution: [
        {
          title: "Kinetic Typography & 3D Form",
          description: "Built custom procedural ribbons in Cinema 4D that react dynamically to frequency bands from 20Hz to 20kHz."
        },
        {
          title: "Digital Design System",
          description: "Developed comprehensive motion guidelines for software UI loaders, splash screens, and hardware packaging."
        }
      ],
      results: [
        { metric: "120K+", label: "Software Beta Signups" },
        { metric: "Design Award", label: "Motion Identity Excellence" }
      ],
      deliverables: ["Motion Brand Kit", "UI Screen Loaders", "Product Reveal Video", "3D Stills"],
      galleryImages: ["/assets/project-auralize.jpg", "/assets/auralize-mark.jpg"]
    }
  },
  {
    id: "hyperbeast",
    title: "HYPERBEAST // DROP 09",
    client: "Nightflow Systems",
    category: "Social Content · Creative Campaign",
    categorySlug: "social-thumbnails",
    year: "2025",
    image: "/assets/project-streetwear.jpg",
    tagline: "High-octane Mumbai night editorial capturing technical apparel in motion.",
    caseStudy: {
      brief: "Launch a limited-edition technical streetwear drop with a digital campaign engineered specifically for Instagram Reels, TikTok, and street billboards.",
      idea: "We staged an after-midnight guerrilla campaign through neon-drenched Mumbai alleys, contrasting wet asphalt reflection with sharp technical typography and rapid glitch pacing.",
      execution: [
        {
          title: "Speed Ramping & Vertical Framing",
          description: "Created 9:16 vertical edits with hyper-fast jump cuts, rhythmic match cuts on footsteps, and motion-tracked technical specs."
        },
        {
          title: "Multi-slide Lookbook Carousels",
          description: "Designed 10-slide seamless panorama swipe carousels driving 3x higher comment engagement than standard posts."
        }
      ],
      results: [
        { metric: "4.8M", label: "Reels & TikTok Views" },
        { metric: "11 Mins", label: "Collection Sellout Time" }
      ],
      deliverables: ["5x 9:16 Hero Edits", "Instagram Panoramic Carousels", "Digital Billboard Loop"],
      galleryImages: ["/assets/project-streetwear.jpg"]
    }
  },
  {
    id: "obsidian",
    title: "OBSIDIAN — COLD BREW IDENTITY",
    client: "Obsidian Estate Roasters, Chikmagalur",
    category: "Branding · Packaging",
    categorySlug: "branding-graphic",
    year: "2024",
    image: "/assets/project-packaging.jpg",
    featured: true,
    aspect: "wide",
    tagline: "Minimalist luxury packaging design crafted for Indian single-origin small batch cold brew.",
    caseStudy: {
      brief: "Position an artisanal cold brew from Chikmagalur estates as a collector-grade luxury lifestyle beverage rather than a conventional canned drink.",
      idea: "Black-on-black tactile minimalism. Matte ceramic bottle with micro-embossed gloss typography and gold foil numbering inspired by vintage apothecaries.",
      execution: [
        {
          title: "Brand Identity & Typography System",
          description: "Created a bespoke editorial serif wordmark paired with sterile monospace batch coordinates and tasting notes."
        },
        {
          title: "Packaging & Slate Still Life Art Direction",
          description: "Art-directed photorealistic studio still life captures on dark slate stone to convey the rich soil origin."
        }
      ],
      results: [
        { metric: "240%", label: "Retail Wholesale Growth" },
        { metric: "Featured", label: "Packaging Design Annual" }
      ],
      deliverables: ["Complete Brand Identity", "Bottle Packaging Suite", "Art-directed Photography", "Wholesale Lookbook"],
      galleryImages: ["/assets/project-packaging.jpg", "/assets/awaken-mark.jpg"]
    }
  },
  {
    id: "veritas",
    title: "THE SILENCED DOSSIER — VIRAL CAMPAIGN",
    client: "Veritas Media Network, New Delhi",
    category: "Thumbnail Design · Social Content",
    categorySlug: "social-thumbnails",
    year: "2024",
    image: "/assets/project-thumbnail.jpg",
    tagline: "High-stakes documentary visual packaging and investigative title card.",
    caseStudy: {
      brief: "A full visual packaging overhaul for an investigative documentary YouTube series suffering from high impression volume but low click-through conversion.",
      idea: "We developed a 'Classified Forensics' visual archetype: glowing holographic dossier folders, forensic evidence lighting, and provocative headline hierarchy.",
      execution: [
        {
          title: "CTR Optimization & Eyetracking Heatmaps",
          description: "Engineered focal point balance ensuring thumbnail readability at 120px mobile viewport size."
        },
        {
          title: "Video Title Sequences & Motion Graphics",
          description: "Created intro motion graphics and lower-third typography echoing government declassification files."
        }
      ],
      results: [
        { metric: "14.2%", label: "Average Click-Through Rate" },
        { metric: "+380%", label: "Subscriber Growth in 90 Days" }
      ],
      deliverables: ["Thumbnail Architecture", "A/B Variants", "Intro Motion Graphics", "Episode Cards"],
      galleryImages: ["/assets/project-thumbnail.jpg"]
    }
  },
  {
    id: "installation",
    title: "NEO NOIR // DIGITAL RUNWAY",
    client: "Mumbai Digital Fashion Week",
    category: "Creative Campaign · Custom 3D",
    categorySlug: "branding-graphic",
    year: "2024",
    image: "/assets/project-installation.jpg",
    tagline: "Experimental chrome sculpture and laser volumetric visuals for live runway.",
    caseStudy: {
      brief: "Design the centerpiece holographic projection and digital stage visuals for an avant-garde runway show celebrating dark cybernetic tailoring.",
      idea: "A morphing chrome fluid topology suspended in mid-air, slicing through green volumetric laser wireframes synchronized with the models' cadence.",
      execution: [
        {
          title: "Real-time Generative Visuals",
          description: "Programmed responsive liquid metal shaders that morph dynamically in response to live electronic musical cues."
        },
        {
          title: "Social Recap Direction",
          description: "Edited the global digital recap film and short-form cutdowns distributed to 40+ international fashion publications."
        }
      ],
      results: [
        { metric: "18M+", label: "Social Reach Across Media" },
        { metric: "Cover", label: "Vogue Digital Feature" }
      ],
      deliverables: ["Stage Visual Loops", "Global Recap Film", "Press Asset Pack"],
      galleryImages: ["/assets/project-installation.jpg"]
    }
  }
];

export const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "CRAFT OVER CLUTTER",
    description: "We obsess over micro-details that most people never notice, but everyone feels. Pacing, kerning, color harmony, and seamless audio-visual alignment."
  },
  {
    number: "02",
    title: "FAST WITHOUT BEING RUSHED",
    description: "We run lean, asynchronous, and high-velocity workflows. No 8-layer approval committees. Direct collaboration with senior creative directors."
  },
  {
    number: "03",
    title: "BUILT FOR ATTENTION",
    description: "In the infinite scroll world, beauty without hook is invisible. Every frame, transition, and typographic cut is engineered to command focus."
  },
  {
    number: "04",
    title: "ONE CREATIVE PARTNER",
    description: "Design, video editing, 3D motion graphics, branding, and social collateral under one roof. No fragmented handoffs or fractured brand voices."
  },
  {
    number: "05",
    title: "NO COOKIE-CUTTER WORK",
    description: "Zero templates. Zero recycled agency formulas. Every brand gets an intentional, custom-built visual language tailored to its cultural DNA."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    name: "DISCOVER",
    headline: "Unpacking the Ambition",
    description: "We dissect your brand narrative, audience psychology, competitive landscape, and the core emotional hook of the project.",
    turnaround: "Days 1–3"
  },
  {
    number: "02",
    name: "DEFINE",
    headline: "The Creative Direction",
    description: "We formulate moodboards, typography locks, storyboard beats, and sample frames before moving a single production needle.",
    turnaround: "Days 4–6"
  },
  {
    number: "03",
    name: "CREATE",
    headline: "Production & Craft",
    description: "Our core sprint: precision video cutting, color timing, 3D/2D motion design, graphic systems, sound engineering, and Polish.",
    turnaround: "Sprint Phase"
  },
  {
    number: "04",
    name: "REVIEW",
    headline: "Collaborative Sharpening",
    description: "Frictionless asynchronous review using timestamped feedback. We refine until every frame snaps into place with authority.",
    turnaround: "24h Turnaround"
  },
  {
    number: "05",
    name: "DELIVER",
    headline: "Master Launch Assets",
    description: "Delivery of pristine broadcast masters, responsive social aspect ratios (16:9, 9:16, 1:1, 4:5), and organized source archives.",
    turnaround: "Launch Day"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "WSAGE didn't just execute the brief. They elevated the conceptual soul of our launch film so far beyond what we imagined that it redefined our global brand standard.",
    author: "Arjun Mehta",
    role: "Creative Director",
    company: "Kala Horology",
    projectTag: "Brand Film · Commercial"
  },
  {
    quote: "Their velocity and precision are uncanny. In 3 weeks they rebuilt our entire YouTube visual architecture — retention shot up 80% and CTR broke double digits immediately.",
    author: "Priya Sharma",
    role: "Executive Producer",
    company: "Veritas Media",
    projectTag: "Docuseries Visuals"
  },
  {
    quote: "Working with WSAGE feels like having an in-house boutique design director who happens to be a wizard at motion graphics and video editing.",
    author: "Kabir Menon",
    role: "Founder & CEO",
    company: "Auralize Labs",
    projectTag: "Brand System & Motion"
  }
];

export const SERVICE_OPTIONS = [
  "Video Editing",
  "Motion Design",
  "Graphic Design",
  "Branding",
  "Social Content",
  "Thumbnail Design",
  "Creative Campaigns",
  "Other / Full Retainer"
];

export const BUDGET_OPTIONS = [
  "< ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "₹10,00,000+"
];

export const TIMELINE_OPTIONS = [
  "Urgent (< 2 weeks)",
  "2 – 4 weeks",
  "1 – 2 months",
  "Flexible"
];
