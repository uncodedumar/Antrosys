// --- Type Definitions ---
export interface BlogPost {
  slug: string;
  image: string;
  title: string;
  authors: {
    name: string;
    link: string;
  }[];
  abstractHeading: string;
  abstractContent: string;
  introductionHeading: string;
  introductionContent: string;
  readAllLink: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  paragraph: string;
  images: string[]; // 7 placeholder URLs
  externalLink: string;
  testimonial: {
    stars: 5,
    text: string,
    author: string,
    position: string,
    image: string,
  }
}
export interface ServicePageData {
  slug: string;
  hero: {
    title: string;
    subHero: string;
    description: string;
    imageUrl: string;
  };
  logoLoop: {
    logos: string[]; // Array of image URLs
  };
  serviceSuite: {
    title: string;
    subHero: string;
    description: string;
    cards: Array<{
      icon: string;
      heading: string;
      text: string;
    }>; // Precisely 9 cards
  };
  techStack: {
    title: string;
    description: string;
    asideText: string;
    items: Array<{
      logoUrl: string;
      heading: string;
      text: string;
    }>; // Precisely 12 items
  };
  industries: {
    title: string;
    description: string;
    items: Array<{
      icon: string;
      heading: string;
      text: string;
    }>; // Precisely 12 items
  };
  finalSection: {
    title: string;
    description: string;
    cards: Array<{
      icon: string;
      countHeading: string; // e.g., "500+"
      textHeading: string;  // e.g., "Projects Completed"
      description: string;
    }>; // Precisely 9 cards
  }
}

// --- Data Arrays ---
export const blogPosts: BlogPost[] = [
  {
    slug: 'boost-rankings-ai',
    image: '/a.webp',
    title: 'Boost Your Rankings with AI',
    authors: [
      {
        name: 'Jane Doe',
        link: 'https://example.com/authors/jane-doe'
      },
      {
        name: 'John Smith',
        link: 'https://example.com/authors/john-smith'
      },
      {
        name: 'Alex Rivera',
        link: 'https://example.com/authors/alex-rivera'
      }
    ],
    abstractHeading: 'Abstract',
    abstractContent: 'Leverage machine learning to dominate search engine results effortlessly.',
    introductionHeading: 'Introduction',
    introductionContent: 'Artificial Intelligence is revolutionizing the way we approach SEO. In this comprehensive guide, we explore how machine learning algorithms can help you achieve top rankings with minimal manual intervention.',
    readAllLink: 'https://example.com/boost-rankings-ai'
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-platform',
    title: 'Lorem Ipsum', // Matches your reference header
    description: 'His Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn’t Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.',
    paragraph: 'hello Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn’t Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200', // Full
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',  // 45%
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',  // 45%
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200', // Full
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',  // 45%
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',  // 45%
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200'  // Full
    ],
    externalLink: 'https://example.com/case-study/ecommerce-platform',
    testimonial: {
      stars: 5,
      text: "If You Want A Partner Who Actually Cares About Outcomes, This Is Your Team. We've Worked With Agencies Before — None Come Close. If You're Serious About Building Something That Lasts, This Is The Team You Want Beside You.",
      author: "Cooper Williams",
      position: "CEO At Bricklix",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
];

export const ServicePageData: ServicePageData[] = [
  {
    slug: "custom-software-development",
    hero: {
      title: "Architecting Next-Gen Software Solutions",
      subHero: "Innovation at Scale",
      description: "We help global enterprises and fast-growing startups build robust, scalable, and user-centric software that drives business impact.",
      imageUrl: "/a.webp"
    },
    logoLoop: {
      logos: Array(12).fill("/a.webp") // Replace with 12 unique partner logos
    },
    serviceSuite: {
      title: "Our Specialized Services",
      subHero: "End-to-End Excellence",
      description: "From strategy to deployment, we cover every aspect of the software lifecycle.",
      cards: [
        { icon: "/a.webp", heading: "Web Development", text: "Building responsive and performant web applications using modern frameworks." },
        { icon: "mobile-app", heading: "Mobile Solutions", text: "Native and cross-platform mobile apps designed for seamless user engagement." },
        { icon: "cloud-server", heading: "Cloud Integration", text: "Migrating and managing infrastructure on AWS, Azure, and Google Cloud." },
        { icon: "shield-check", heading: "Cybersecurity", text: "Protecting your digital assets with enterprise-grade security protocols." },
        { icon: "cpu-charge", heading: "AI & ML", text: "Implementing machine learning models to automate and optimize workflows." },
        { icon: "database", heading: "Big Data", text: "Processing and visualizing massive datasets for actionable insights." },
        { icon: "layers-group", heading: "UI/UX Design", text: "Human-centered design that focuses on conversion and usability." },
        { icon: "settings-gear", heading: "DevOps", text: "Streamlining CI/CD pipelines for faster, more reliable deployments." },
        { icon: "message-circle", heading: "Consulting", text: "Strategic technology roadmapping to align with your business goals." }
      ]
    },
    techStack: {
      title: "Our Technology Arsenal",
      description: "We use the best tools for the job to ensure long-term maintainability.",
      asideText: "Voted Top 10 Tech Partner 2024",
      items: [
        { logoUrl: "/tech/react.svg", heading: "React", text: "Frontend library for dynamic UIs." },
        { logoUrl: "/tech/nodejs.svg", heading: "Node.js", text: "Scalable backend environments." },
        { logoUrl: "/tech/python.svg", heading: "Python", text: "The gold standard for AI and Data." },
        { logoUrl: "/tech/typescript.svg", heading: "TypeScript", text: "Type-safe JavaScript development." },
        { logoUrl: "/tech/aws.svg", heading: "AWS", text: "Global cloud infrastructure." },
        { logoUrl: "/tech/docker.svg", heading: "Docker", text: "Containerization for portability." },
        { logoUrl: "/tech/kubernetes.svg", heading: "Kubernetes", text: "Orchestration at enterprise scale." },
        { logoUrl: "/tech/postgresql.svg", heading: "PostgreSQL", text: "Reliable relational data storage." },
        { logoUrl: "/tech/redis.svg", heading: "Redis", text: "In-memory data structure store." },
        { logoUrl: "/tech/graphql.svg", heading: "GraphQL", text: "Efficient API data fetching." },
        { logoUrl: "/tech/swift.svg", heading: "Swift", text: "Native iOS app development." },
        { logoUrl: "/tech/kotlin.svg", heading: "Kotlin", text: "Modern Android development." }
      ]
    },
    industries: {
      title: "Tailored for Your Industry",
      description: "We bring domain-specific expertise to every partnership.",
      items: [
        { icon: "/a.webp", heading: "FinTech", text: "Secure banking and payment gateways." },
        { icon: "heart", heading: "Healthcare", text: "HIPAA-compliant medical platforms." },
        { icon: "shopping-cart", heading: "E-Commerce", text: "High-traffic retail experiences." },
        { icon: "truck", heading: "Logistics", text: "Supply chain tracking and management." },
        { icon: "book-open", heading: "EdTech", text: "Learning management and virtual classrooms." },
        { icon: "building", heading: "Real Estate", text: "Property listing and virtual tour apps." },
        { icon: "monitor", heading: "Media", text: "Streaming and content delivery networks." },
        { icon: "zap", heading: "Energy", text: "Smart grid monitoring and analytics." },
        { icon: "briefcase", heading: "Legal", text: "Document automation and secure portals." },
        { icon: "airplane", heading: "Travel", text: "Booking engines and itinerary managers." },
        { icon: "activity", heading: "Fitness", text: "Wearable integration and health tracking." },
        { icon: "users", heading: "Non-Profit", text: "Donation platforms and community tools." }
      ]
    },
    finalSection: {
      title: "Proven Excellence in Delivery",
      description: "Numbers that define our commitment to quality and client success.",
      cards: [
        { icon: "trophy", countHeading: "250+", textHeading: "Awards Won", description: "Recognized globally for design and tech innovation." },
        { icon: "check-circle", countHeading: "1,200+", textHeading: "Projects Done", description: "Successful deliveries across 45 countries." },
        { icon: "users-group", countHeading: "500+", textHeading: "Experts", description: "On-staff engineers and domain specialists." },
        { icon: "clock", countHeading: "15Y+", textHeading: "Experience", description: "A decade and a half of industry leadership." },
        { icon: "globe", countHeading: "24/7", textHeading: "Support", description: "Round-the-clock maintenance for global apps." },
        { icon: "star", countHeading: "98%", textHeading: "Retention", description: "Clients who return for their next big project." },
        { icon: "trending-up", countHeading: "$2B+", textHeading: "Revenue", description: "Generated for our clients through digital products." },
        { icon: "lock", countHeading: "100%", textHeading: "Secure", description: "Zero data breaches across all client platforms." },
        { icon: "rocket", countHeading: "30+", textHeading: "Unicorns", description: "Startups we helped reach billion-dollar valuations." }
      ]
    }
  },
];

  
export const homePageData = [
  {
    industries: {
      title: "Tailored for Your Industry",
      description: "We bring domain-specific expertise to every partnership.",
      items: [
        { icon: "/a.webp", heading: "FinTech", text: "Secure banking and payment gateways." },
        { icon: "heart", heading: "Healthcare", text: "HIPAA-compliant medical platforms." },
        { icon: "shopping-cart", heading: "E-Commerce", text: "High-traffic retail experiences." },
        { icon: "truck", heading: "Logistics", text: "Supply chain tracking and management." },
        { icon: "book-open", heading: "EdTech", text: "Learning management and virtual classrooms." },
        { icon: "building", heading: "Real Estate", text: "Property listing and virtual tour apps." },
        { icon: "monitor", heading: "Media", text: "Streaming and content delivery networks." },
        { icon: "zap", heading: "Energy", text: "Smart grid monitoring and analytics." },
        { icon: "briefcase", heading: "Legal", text: "Document automation and secure portals." },
        { icon: "airplane", heading: "Travel", text: "Booking engines and itinerary managers." },
        { icon: "activity", heading: "Fitness", text: "Wearable integration and health tracking." },
        { icon: "users", heading: "Non-Profit", text: "Donation platforms and community tools." }
      ]
    },
    finalSection: {
      title: "Proven Excellence in Delivery",
      description: "Numbers that define our commitment to quality and client success.",
      cards: [
        { icon: "trophy", countHeading: "250+", textHeading: "Awards Won", description: "Recognized globally for design and tech innovation." },
        { icon: "check-circle", countHeading: "1,200+", textHeading: "Projects Done", description: "Successful deliveries across 45 countries." },
        { icon: "users-group", countHeading: "500+", textHeading: "Experts", description: "On-staff engineers and domain specialists." },
        { icon: "clock", countHeading: "15Y+", textHeading: "Experience", description: "A decade and a half of industry leadership." },
        { icon: "globe", countHeading: "24/7", textHeading: "Support", description: "Round-the-clock maintenance for global apps." },
        { icon: "star", countHeading: "98%", textHeading: "Retention", description: "Clients who return for their next big project." },
        { icon: "trending-up", countHeading: "$2B+", textHeading: "Revenue", description: "Generated for our clients through digital products." },
        { icon: "lock", countHeading: "100%", textHeading: "Secure", description: "Zero data breaches across all client platforms." },
        { icon: "rocket", countHeading: "30+", textHeading: "Unicorns", description: "Startups we helped reach billion-dollar valuations." }
      ]
    }
  }
];