import { 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiSwift, 
  SiKotlin, 
  SiNodedotjs, 
  SiGraphql, 
  SiAmazonwebservices, 
  SiGooglecloud, 
  SiDocker, 
  SiKubernetes, 
  SiPostgresql, 
  SiRedis, 
  SiMysql, 
  SiFigma, 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobeindesign, 
  SiAdobexd, 
  SiAdobe, // Firefly doesn't have a specific icon yet, usually represented by Adobe
  SiSketch, 
  SiAffinitydesigner, 
  SiCoreldraw, 
  SiFramer, 
  SiWebflow, 
  SiNotion, 
  SiMiro,
  SiVisa,
  SiShopify,
  SiAmazon,
  SiFedex,
  SiUps,
  SiCoursera,
  SiUdemy,
  SiZillow,
  SiNetflix,
  SiYoutube,
  SiTesla,
  SiStrava,
  SiRocketdotchat,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiDjango,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiTailwindcss,
  SiCanva,
  SiDevexpress,
  SiWoocommerce,
  SiElementor,
  SiGutenberg,
  SiWix,
  SiSquarespace,
  SiWordpress,
  SiGodaddy,
  SiOdoo,
  SiElectron,
  SiTauri,
  SiDotnet,
  SiQt,
  SiOpenai,
  SiDialogflow,
  SiRasa,
  SiWhatsapp,
  SiSelenium,
  SiJest,
  SiPostman,
  SiFlutter,
  SiVercel,
  SiGithub,
  SiCplusplus,
  SiSharp

} from "react-icons/si";

import { 
  FaReact, 
  FaHandHoldingHeart, 
  FaGlobeAmericas, 
  FaHeartbeat, 
  FaTruck, 
  FaGraduationCap, 
  FaBuilding, 
  FaFilm, 
  FaBolt, 
  FaGavel, 
  FaPlane, 
  FaDumbbell,
  FaSpa,
  FaTrophy,
  FaCheckCircle,
  FaUsers,
  FaClock,
  FaGlobe,
  FaStar,
  FaChartLine,
  FaLock,
  FaRocket,
  FaUserFriends,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaBrain,
  FaDatabase,
  FaLayerGroup,
  FaCog,
  FaComments,
  FaPalette,
  FaPencilAlt,
  FaMagic,
  FaFont,
  FaSwatchbook,
  FaTools,
  FaPaintBrush,
  FaPrint,
  FaBox,
  FaShoppingBag,
  FaBullhorn,
  FaChartBar,
  FaServer,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaAndroid,
  FaApple,
  FaEye,
  FaBug,
  FaFlask,
  FaCloudUploadAlt,
  FaRobot,
  FaVial,
  FaQuestionCircle,
  FaBook,
  FaTag,
  FaLeaf,
  FaSearch,
  FaShareAlt,
  FaEnvelope,
  FaTasks,
  FaHashtag,
  FaImages,
  FaCalendar,
  FaUniversalAccess,
  FaCube,
  FaWrench,
  FaCreditCard
} from "react-icons/fa";

import { 
  GiLipstick 
} from "react-icons/gi";

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
  
  testimonial: {
    stars: 5;
    text: string;
    author: string;
    position: string;
    image: string;
  };
}
export interface ServicePageData {
  slug: string;
  hero: {
    title: string;
    subHero: string;
    description: string;
    imageUrl: string;
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
}

// --- Data Arrays ---
export const blogPosts: BlogPost[] = [
  {
    slug: "boost-rankings-ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    title: "Boost Your Rankings with AI",
    authors: [
      {
        name: "Jane Doe",
        link: "https://example.com/authors/jane-doe",
      },
      {
        name: "John Smith",
        link: "https://example.com/authors/john-smith",
      },
      {
        name: "Alex Rivera",
        link: "https://example.com/authors/alex-rivera",
      },
    ],
    abstractHeading: "Abstract",
    abstractContent:
      "Leverage machine learning to dominate search engine results effortlessly.",
    introductionHeading: "Introduction",
    introductionContent:
      "Artificial Intelligence is revolutionizing the way we approach SEO. In this comprehensive guide, we explore how machine learning algorithms can help you achieve top rankings with minimal manual intervention.",
    readAllLink: "https://example.com/boost-rankings-ai",
  },
  {
    slug: "iomt-smart-healthcare-elderly-monitoring",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
    title: "An IoMT-Enabled Smart Healthcare Model to Monitor Elderly People Using Machine Learning Technique",
    authors: [
      {
        name: "Research Team",
        link: "https://onlinelibrary.wiley.com/share/RQT5RH8YTHDM5MUDPBJM?target=10.1155/2021/2487759",
      },
    ],
    abstractHeading: "Abstract",
    abstractContent:
      "This research presents an Internet of Medical Things (IoMT)-enabled smart healthcare model designed to monitor elderly people using advanced machine learning techniques. The system integrates wearable sensors, IoT devices, and ML algorithms to provide real-time health monitoring and early detection of potential health issues.",
    introductionHeading: "Introduction",
    introductionContent:
      "As the global population ages, there is an increasing need for innovative healthcare solutions that can provide continuous monitoring and early intervention. This study explores how IoMT technologies combined with machine learning can revolutionize elderly care by enabling proactive health management and reducing the burden on healthcare systems.",
    readAllLink: "https://onlinelibrary.wiley.com/share/RQT5RH8YTHDM5MUDPBJM?target=10.1155/2021/2487759",
  },
  {
    slug: "cloud-based-breast-cancer-prediction",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800",
    title: "Cloud-Based Breast Cancer Prediction Empowered with Soft Computing Approaches",
    authors: [
      {
        name: "Research Team",
        link: "https://onlinelibrary.wiley.com/share/MKAHJWAXWF7VFKRI76V5?target=10.1155/2020/8017496",
      },
    ],
    abstractHeading: "Abstract",
    abstractContent:
      "This study introduces a cloud-based system for breast cancer prediction utilizing soft computing approaches. The model leverages cloud infrastructure to process medical imaging data and employs advanced machine learning algorithms to achieve accurate early detection and diagnosis.",
    introductionHeading: "Introduction",
    introductionContent:
      "Early detection of breast cancer significantly improves treatment outcomes and survival rates. This research demonstrates how cloud computing and soft computing techniques can be integrated to create scalable, accessible, and accurate breast cancer prediction systems that can assist healthcare professionals in making informed diagnostic decisions.",
    readAllLink: "https://onlinelibrary.wiley.com/share/MKAHJWAXWF7VFKRI76V5?target=10.1155/2020/8017496",
  },
  {
    slug: "smart-parking-occupancy-detection",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    title: "Smart Occupancy Detection for Road Traffic Parking Using Deep Extreme Learning Machine",
    authors: [
      {
        name: "Research Team",
        link: "https://www.sciencedirect.com/science/article/pii/S1319157819313928",
      },
    ],
    abstractHeading: "Abstract",
    abstractContent:
      "This paper presents an intelligent system for detecting parking space occupancy in road traffic scenarios using deep extreme learning machine (DELM) techniques. The proposed solution addresses urban parking challenges by providing real-time, accurate occupancy detection.",
    introductionHeading: "Introduction",
    introductionContent:
      "Urban parking management is a critical challenge in modern cities, affecting traffic flow, environmental pollution, and user experience. This research explores how deep learning and extreme learning machine algorithms can be combined to create efficient parking occupancy detection systems that help optimize urban traffic management and reduce congestion.",
    readAllLink: "https://www.sciencedirect.com/science/article/pii/S1319157819313928",
  },
  {
    slug: "brain-tumor-identification-deep-learning",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
    title: "Intelligent Model for Brain Tumor Identification Using Deep Learning",
    authors: [
      {
        name: "Research Team",
        link: "https://onlinelibrary.wiley.com/share/KP6KVDYSX6ZFCBTQ7HJE?target=10.1155/2022/8104054",
      },
    ],
    abstractHeading: "Abstract",
    abstractContent:
      "This research introduces an intelligent deep learning model for brain tumor identification and classification. The proposed hierarchical deep learning approach achieves high precision in classifying brain tumors into glioma, meningioma, pituitary, and no-tumor categories, demonstrating superior performance compared to traditional methods.",
    introductionHeading: "Introduction",
    introductionContent:
      "Accurate and timely brain tumor identification is crucial for effective treatment planning and patient outcomes. This study presents a comprehensive deep learning framework that assists medical professionals in quickly and accurately identifying brain tumors from medical imaging data, potentially reducing diagnostic time and improving treatment efficiency.",
    readAllLink: "https://onlinelibrary.wiley.com/share/KP6KVDYSX6ZFCBTQ7HJE?target=10.1155/2022/8104054",
  },
];

// Helper function to get images from a folder (returns 7 images, cycling if needed)
const getImagesFromFolder = (folderName: string, imageFiles: string[]): string[] => {
  const basePath = `/Mockups/${folderName}`;
  const images: string[] = [];
  
  // If we have 7 or more images, use first 7
  if (imageFiles.length >= 7) {
    for (let i = 0; i < 7; i++) {
      images.push(`${basePath}/${imageFiles[i]}`);
    }
  } else {
    // If fewer than 7, cycle through available images
    for (let i = 0; i < 7; i++) {
      images.push(`${basePath}/${imageFiles[i % imageFiles.length]}`);
    }
  }
  
  return images;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "Antrosys",
    title: "Antrosys : Wellness Studio Platform",
    description:
      "This project was architected with a singular focus: Systemic Excellence. We bypassed the conventional to build a high-performance ecosystem where design intelligence meets raw engineering power. From the initial logic mapping to the final pixel optimization, we’ve developed a solution that doesn’t just run—it dominates. This isn't just a website; it’s a scalable, future-proof framework engineered for those who demand clarity, speed, and undeniable impact.",
    paragraph:
      "This Antrosys is a technology company focused on engineering digital experiences and building profit engines for businesses.",
    images: getImagesFromFolder("www.antrosys.com", ["1.avif", "2.avif", "3.avif", "4.jpeg", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform perfectly captures our brand's essence while making operations so much easier. Class bookings are up, and our members love the seamless experience. It's exactly what we needed.",
      author: "Mr. Ryaz",
      position: "CEO @Antrosys",
      image: "/AboutImages/Team/CEO.webp",
    },
  },
  {
    slug: "living-barre-yoga",
    title: "Living Barre & Yoga: Wellness Studio Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Living Barre & Yoga required a platform that could manage class schedules, bookings, and member accounts while reflecting their brand's wellness-focused aesthetic. We developed a beautiful, calming interface that makes booking classes effortless. The platform includes membership management, payment processing, and automated reminders. Integration with calendar systems ensures members never miss a class, while the admin dashboard provides comprehensive insights into attendance and revenue.",
    images: getImagesFromFolder("httpslivingbarreandyoga.com.au", ["1.avif", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "The platform perfectly captures our brand's essence while making operations so much easier. Class bookings are up, and our members love the seamless experience. It's exactly what we needed.",
      author: "Rachel Green",
      position: "Office Manager @Living Barre & Yoga",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    },
  },

  {
    slug: "brickstech",
    title: "BricksTech: Enterprise Software Solutions",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "BricksTech required a complete digital transformation of their enterprise software ecosystem. We architected a microservices-based platform that integrates seamlessly with existing legacy systems while providing modern, responsive interfaces. The solution reduced operational costs by 40% and improved system reliability to 99.9% uptime. Our approach combined cutting-edge technology with deep understanding of enterprise workflows, resulting in a platform that employees actually enjoy using.",
    images: getImagesFromFolder("httpsbrickstech.io", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "Working with them completely transformed our technology infrastructure. The attention to detail and understanding of enterprise needs is unmatched. They delivered exactly what we needed, on time and beyond expectations.",
      author: "Michael Chen",
      position: "CTO @BricksTech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "curvy-swimwear",
    title: "Curvy Swimwear: Inclusive Fashion E-Commerce",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Curvy Swimwear needed an e-commerce platform that could celebrate body diversity while providing an exceptional shopping experience. We created a beautiful, inclusive storefront with diverse model imagery, detailed size guides, and fit recommendations. The platform emphasizes body positivity and confidence, with features like virtual try-on tools and style consultations. Advanced filtering helps customers find products that fit their style and body type, while the checkout process is streamlined for maximum conversion.",
    images: getImagesFromFolder("httpswww.curvyswimwear.com.au", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform perfectly embodies our mission of inclusivity and body positivity. Sales have increased dramatically, and customer feedback has been overwhelmingly positive. It's exactly what we envisioned.",
      author: "Amanda Taylor",
      position: "Founder @Curvy Swimwear",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "deltacapital",
    title: "Delta Capital Group: Financial Services Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Delta Capital Group needed a secure, compliant financial services platform that could handle complex transactions while maintaining regulatory compliance. We built a robust system with bank-grade security, real-time transaction processing, and comprehensive audit trails. The platform integrates with multiple payment gateways and financial institutions, providing a seamless experience for both internal teams and clients. Security was paramount, with end-to-end encryption and multi-factor authentication at every touchpoint.",
    images: getImagesFromFolder("httpsdeltacapitalgroup.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.jpg", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "Their expertise in financial technology and security protocols gave us complete confidence. The platform has transformed how we serve our clients, and the security measures exceed industry standards.",
      author: "David Rodriguez",
      position: "Managing Director @Delta Capital",
      image: "/People/d.avif",
    },
  },
  {
    slug: "fellowship",
    title: "Fellowship: Community Engagement Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Fellowship required a community-driven platform that could facilitate meaningful connections and engagement. We created an intuitive social networking solution with real-time messaging, event management, and content sharing capabilities. The platform's design emphasizes user experience, making it easy for communities to organize, communicate, and grow. Advanced moderation tools and privacy controls ensure a safe environment for all users while maintaining the open, welcoming atmosphere that defines Fellowship.",
    images: getImagesFromFolder("httpsfellowshipco.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.jpg", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "They understood our vision from day one. The platform they built has become the backbone of our community, enabling connections we never thought possible. The user experience is exceptional.",
      author: "Jake Thompson",
      position: "Founder @Fellowship",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "gomotive",
    title: "GoMotive: Fleet Management Solutions",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "GoMotive needed a comprehensive fleet management platform that could track vehicles in real-time, optimize routes, and provide actionable insights. We developed a solution that integrates GPS tracking, telematics data, and predictive analytics to help businesses reduce costs and improve efficiency. The platform's dashboard provides at-a-glance insights while deep analytics tools allow for detailed performance analysis. Mobile apps for drivers ensure seamless data collection and communication.",
    images: getImagesFromFolder("httpsgomotive.com", ["1.jpeg", "2.jpeg", "3.avif", "4.avif", "5.jpeg", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform has revolutionized our fleet operations. Route optimization alone has saved us thousands in fuel costs, and the real-time tracking gives us complete visibility. Outstanding work.",
      author: "James Wilson",
      position: "Operations Director @GoMotive",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "jot",
    title: "Jot: Collaborative Note-Taking Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Jot required a modern note-taking platform that could compete with established players while offering unique collaboration features. We built a real-time collaborative editor with rich text formatting, media embedding, and seamless synchronization across devices. The platform's architecture ensures that changes sync instantly, even with hundreds of simultaneous users. Advanced search capabilities and intelligent organization features help users find and manage their notes effortlessly.",
    images: getImagesFromFolder("httpsjot.co", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "Jot has become essential to our workflow. The real-time collaboration is flawless, and the interface is so intuitive that our team adopted it immediately. This is how note-taking should work.",
      author: "Lisa Anderson",
      position: "Product Manager @Jot",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "kerfcase",
    title: "KerfCase: Premium Phone Case E-Commerce",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "KerfCase needed an e-commerce platform that could showcase their premium products while handling high traffic and complex customization options. We created a visually stunning storefront with 360-degree product views, customization tools, and seamless checkout flow. The platform integrates with inventory management systems and shipping providers to automate order fulfillment. Advanced analytics track customer behavior, helping optimize product presentation and improve conversion rates.",
    images: getImagesFromFolder("httpskerfcase.com", ["1.avif", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "Our online sales have tripled since launching the new platform. The customization tools and product visualization have been game-changers. Customers love the experience, and so do we.",
      author: "Kevin Martinez",
      position: "Founder @KerfCase",
      image: "/People/i.jpg",
    },
  },
  {
    slug: "bricklix",
    title: "Bricklix: Software Solutions",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Bricklix required a comprehensive fintech platform that could handle complex financial transactions, regulatory compliance, and user management. We developed a secure, scalable system with bank-grade security, real-time processing, and comprehensive audit trails. The platform integrates with multiple payment gateways and financial institutions, providing seamless experiences for both businesses and end users. Advanced security features ensure the highest levels of protection, while the intuitive interface makes complex financial operations accessible to all users.",
    images: getImagesFromFolder("www.bricklix.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif", "8.avif"]),
    testimonial: {
      stars: 5,
      text: "If You Want A Partner Who Actually Cares About Outcomes, This Is Your Team. We've Worked With Agencies Before — None Come Close. If You're Serious About Building Something That Lasts, This Is The Team You Want Beside You.",
      author: "Anas Shahid",
      position: "Managing Director @Bricklix",
      image: "/People/a.avif",
    },
  },
  {
    slug: "luxurialife",
    title: "Luxuria Life: Luxury Lifestyle Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Luxuria Life demanded a platform that exudes luxury and sophistication while providing exceptional functionality. We created an elegant, high-end experience with premium visuals, smooth animations, and intuitive navigation. The platform showcases luxury products and services with stunning photography and detailed descriptions. Advanced filtering and search capabilities help users discover exactly what they're looking for, while personalized recommendations enhance the shopping experience.",
    images: getImagesFromFolder("httpsluxurialife.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "They understood our brand completely. The platform feels luxurious and premium, exactly matching our brand identity. The attention to detail in both design and functionality is remarkable.",
      author: "Olivia Sterling",
      position: "Brand Director @Luxuria Life",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "nogood",
    title: "NoGood: Creative Agency Portfolio",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "NoGood needed a portfolio platform that could showcase their creative work in a way that matches their innovative approach. We built a visually striking site with immersive project presentations, smooth transitions, and interactive elements. The platform allows visitors to explore projects in depth, with detailed case studies, behind-the-scenes content, and client testimonials. The design itself serves as a testament to NoGood's capabilities, demonstrating their creative vision through every interaction.",
    images: getImagesFromFolder("httpsnogood.io", ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform perfectly represents who we are as an agency. It's not just a portfolio—it's a statement. Clients are consistently impressed, and it's become our best sales tool.",
      author: "Noah Parker",
      position: "Creative Director @NoGood",
      image: "/People/f.jpg",
    },
  },
  {
    slug: "onewheel",
    title: "Onewheel: Electric Vehicle Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Onewheel required a platform that could showcase their innovative electric vehicles while providing comprehensive product information and support resources. We developed a dynamic site with interactive product configurators, detailed specifications, and immersive video content. The platform includes community features, allowing riders to share experiences and tips. Integration with dealer networks and service centers ensures customers can easily find support and make purchases.",
    images: getImagesFromFolder("httpsonewheel.com", ["1.webp", "2.webp", "3.avif", "4.webp", "5.webp", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "The platform captures the excitement and innovation of our products perfectly. The interactive features and community integration have strengthened our brand connection with customers.",
      author: "Paul Chen",
      position: "Marketing Director @Onewheel",
      image: "/People/p.jpg",
    },
  },
  {
    slug: "tenex-blog",
    title: "Tenex Resources: Knowledge Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Tenex Resources needed a knowledge platform that could organize and present complex information in an accessible way. We built a content management system with advanced search, categorization, and recommendation features. The platform makes it easy for users to discover relevant content through intelligent filtering and personalized suggestions. Rich media support allows for engaging presentations of technical information, while the responsive design ensures accessibility across all devices.",
    images: getImagesFromFolder("httpsresources.tenex.ioblog", ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "The platform has transformed how we share knowledge with our community. The search functionality and content organization make it easy for users to find exactly what they need. Excellent work.",
      author: "Thomas Wright",
      position: "Content Director @Tenex",
      image: "/People/t.jpg",
    },
  },
  {
    slug: "sijohome",
    title: "Sijo Home: Modern Furniture E-Commerce",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Sijo Home required an e-commerce platform that could showcase their modern furniture designs while handling complex product variations and room visualization. We created an immersive shopping experience with room planning tools, 3D product views, and style recommendations. The platform integrates with inventory systems to provide real-time availability, while the checkout process is streamlined for maximum conversion. Advanced filtering helps customers find products that match their style and space requirements.",
    images: getImagesFromFolder("httpssijohome.com", ["1.avif", "2.jpg", "3.avif", "4.avif", "5.avif", "6.jpg", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "Our online sales have increased dramatically since launching the new platform. The room visualization tools help customers make confident purchasing decisions, and the overall experience is exceptional.",
      author: "Isabella Garcia",
      position: "E-Commerce Director @Sijo Home",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "skobels",
    title: "Skobels: Fashion Retail Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Skobels needed a fashion retail platform that could handle seasonal collections, size variations, and international shipping. We developed a visually stunning storefront with high-quality product imagery, size guides, and style recommendations. The platform includes wishlist functionality, size alerts, and personalized shopping experiences. Integration with multiple payment providers and shipping carriers ensures smooth transactions worldwide, while the mobile-first design caters to the fashion-savvy audience.",
    images: getImagesFromFolder("httpsskobels.com", ["1.avif", "2.webp", "3.avif", "4.webp", "5.webp", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "The platform perfectly captures our brand's aesthetic while providing all the functionality we need. International sales have grown significantly, and customer feedback has been overwhelmingly positive.",
      author: "Sophie Laurent",
      position: "Brand Manager @Skobels",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop&crop=faces",
    },
  },

  {
    slug: "tolva",
    title: "Tolva Social: Social Networking Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Tolva Social needed a modern social networking platform that could facilitate meaningful connections while maintaining user privacy and safety. We developed a real-time messaging system, content sharing features, and community building tools. The platform's algorithm promotes quality content and meaningful interactions over viral engagement. Advanced privacy controls give users complete control over their data and visibility, while moderation tools ensure a positive community experience.",
    images: getImagesFromFolder("httpstolva.social", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "Tolva has become a thriving community thanks to the platform they built. The focus on meaningful connections over metrics has created something special. The technology is rock-solid.",
      author: "Victoria Kim",
      position: "Community Director @Tolva",
      image: "/People/u.jpg",
    },
  },

  {
    slug: "asimov",
    title: "Asimov: Scientific Research Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Asimov needed a platform for scientific research collaboration that could handle complex data visualization, research paper management, and team collaboration. We developed a comprehensive research management system with data analysis tools, publication tracking, and collaborative workspaces. The platform supports various data formats and provides powerful visualization tools for research findings. Integration with academic databases and citation management ensures researchers have everything they need in one place.",
    images: getImagesFromFolder("httpswww.asimov.com", ["1.avif", "2.jpg", "3.avif", "4.avif", "5.jpg", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform has transformed how our research team collaborates and shares findings. The data visualization tools are exceptional, and the overall system has significantly improved our workflow efficiency.",
      author: "Dr. Elena Vasquez",
      position: "Research Director @Asimov",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "arcatar",
    title: "Arcatar: AI-Powered Avatar Generation Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Arcatar represents a breakthrough in AI-driven avatar creation technology. Our team developed a scalable platform that processes millions of avatar generations daily while maintaining sub-second response times. Through advanced machine learning integration and optimized cloud infrastructure, we delivered a solution that handles peak traffic seamlessly. The platform's intuitive interface masks the complex AI processing happening behind the scenes, creating a user experience that feels both magical and reliable.",
    images: getImagesFromFolder("httpsarcatar.com", ["1.avif", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "If You Want A Partner Who Actually Cares About Outcomes, This Is Your Team. We've Worked With Agencies Before — None Come Close. If You're Serious About Building Something That Lasts, This Is The Team You Want Beside You.",
      author: "Sarah Mitchell",
      position: "CEO @Arcatar",
      image: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=100&h=100&fit=crop&crop=faces",
    },
  },

  {
    slug: "bigcat-creative",
    title: "Big Cat Creative: Creative Agency Showcase",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Big Cat Creative needed a portfolio platform that could showcase their diverse creative work in an engaging, interactive way. We built a visually stunning site with immersive project presentations, case studies, and client testimonials. The platform allows visitors to explore projects through interactive galleries and detailed breakdowns. Smooth animations and transitions create a premium experience that reflects the agency's creative capabilities. The design itself demonstrates Big Cat's expertise in visual storytelling.",
    images: getImagesFromFolder("httpswww.bigcatcreative.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform perfectly represents our creative vision and capabilities. It's not just a portfolio—it's a work of art that showcases what we do best. Clients are consistently impressed.",
      author: "Marcus Johnson",
      position: "Creative Director @Big Cat Creative",
      image: "/People/q.jpg",
    },
  },
  {
    slug: "codesmith",
    title: "CodeSmith: Coding Bootcamp Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "CodeSmith required an educational platform that could support their intensive coding bootcamp programs with course management, student progress tracking, and interactive learning tools. We developed a comprehensive learning management system with video lessons, coding challenges, and peer collaboration features. The platform tracks student progress in real-time, providing instructors with insights to personalize instruction. Integration with coding environments allows students to practice directly within the platform, creating a seamless learning experience.",
    images: getImagesFromFolder("httpswww.codesmith.io", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.jpg", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform has transformed how we deliver our bootcamp programs. The interactive learning tools and progress tracking have improved student outcomes significantly. It's exactly what we needed.",
      author: "Jennifer Park",
      position: "Program Director @CodeSmith",
      image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "jenni-kayne",
    title: "Jenni Kayne: Luxury Lifestyle Brand",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Jenni Kayne required a luxury e-commerce platform that could showcase their lifestyle brand across fashion, home, and lifestyle categories. We created an elegant, cohesive experience that reflects the brand's sophisticated aesthetic. The platform includes style guides, lookbooks, and editorial content that inspire customers beyond just shopping. Advanced filtering and search help customers discover products across categories, while personalized recommendations enhance the shopping experience. The design emphasizes quality and attention to detail, matching the brand's premium positioning.",
    images: getImagesFromFolder("httpswww.jennikayne.com", ["1.avif", "2.jpg", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif", "8.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform beautifully represents our brand across all categories. The editorial content and style guides have enhanced the shopping experience, and sales have increased across all product lines.",
      author: "Jenni Kayne",
      position: "Founder @Jenni Kayne",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "noah-demeuldre",
    title: "Noah Demeuldre: Creative Portfolio",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Noah Demeuldre needed a portfolio platform that could showcase their creative work in photography, design, and visual arts. We built a visually stunning site with immersive galleries, project presentations, and behind-the-scenes content. The platform allows visitors to explore work through interactive galleries and detailed project breakdowns. Smooth animations and transitions create a premium experience that reflects the artist's creative vision. The design itself serves as a canvas for the work, with minimal distractions and maximum focus on the visual content.",
    images: getImagesFromFolder("httpswww.noahdemeuldre.com", ["1.avif", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "The platform perfectly showcases my work in a way that feels true to my artistic vision. It's not just a portfolio—it's an experience that draws visitors into my creative world. Clients love it.",
      author: "Noah Demeuldre",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "david-energy",
    title: "David Energy: Energy Management Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "David Energy required a platform for energy management and sustainability tracking that could handle complex data visualization and reporting. We built a comprehensive energy management system with real-time monitoring, predictive analytics, and sustainability reporting. The platform integrates with smart meters and IoT devices to collect energy data, providing users with actionable insights to reduce consumption and costs. Advanced analytics identify patterns and opportunities for optimization, while reporting tools help track progress toward sustainability goals.",
    images: getImagesFromFolder("httpswww.davidenergy.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform has helped us reduce energy costs by 30% while improving our sustainability metrics. The data visualization and insights are incredibly valuable, and the system is easy to use.",
      author: "David Chen",
      position: "Sustainability Director @David Energy",
      image: "/People/z.jpg",
    },
  },
  {
    slug: "eikon",
    title: "Eikon Therapeutics: Biotech Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Eikon Therapeutics needed a platform for managing complex biotech research and development processes. We developed a specialized system for protocol management, data tracking, and regulatory compliance. The platform ensures data integrity and traceability throughout the research lifecycle, with features for experiment documentation, results analysis, and collaboration. Integration with laboratory equipment and data analysis tools streamlines workflows while maintaining the strict compliance requirements of biotech research.",
    images: getImagesFromFolder("httpswww.eikontx.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.jpg"]),
    testimonial: {
      stars: 5,
      text: "The platform has become essential to our research operations. The compliance features and data tracking capabilities have improved our efficiency and regulatory readiness significantly.",
      author: "Dr. Sarah Kim",
      position: "Research Director @Eikon",
      image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "firebelly-tea",
    title: "Firebelly Tea: Artisan Tea E-Commerce",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Firebelly Tea required an e-commerce platform that could showcase their artisan tea products with rich storytelling and educational content. We created a beautiful storefront that emphasizes the craft and quality of their products, with detailed descriptions, brewing guides, and flavor profiles. The platform includes subscription management for regular customers, while the checkout process is streamlined for one-time purchases. Integration with inventory systems ensures accurate availability, and the mobile-first design caters to tea enthusiasts browsing on any device.",
    images: getImagesFromFolder("httpswww.firebellytea.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform beautifully tells our story and showcases our products. Online sales have increased significantly, and customers love the educational content and subscription features.",
      author: "Grace Liu",
      position: "Founder @Firebelly Tea",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "holtz-leather",
    title: "Holtz Leather: Premium Leather Goods",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Holtz Leather needed an e-commerce platform that could showcase their premium leather craftsmanship while handling custom orders and international shipping. We developed a sophisticated storefront with high-quality product imagery, customization tools, and detailed craftsmanship stories. The platform emphasizes the artisanal quality and heritage of the brand, with features for custom engraving, leather selection, and personalization. Integration with shipping providers ensures reliable delivery worldwide, while the elegant design reflects the premium nature of the products.",
    images: getImagesFromFolder("httpswww.holtzleather.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.jpg", "7.avif", "8.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform perfectly captures the craftsmanship and quality of our products. Custom orders have increased significantly, and the international reach has opened new markets for us.",
      author: "Hans Holtz",
      position: "Master Craftsman @Holtz Leather",
      image: "/People/l.jpg",
    },
  },
 
  {
    slug: "nuvo-cargo",
    title: "Nuvo Cargo: Logistics Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Nuvo Cargo required a logistics platform that could handle complex shipping operations, tracking, and customer communication. We developed a comprehensive system with real-time tracking, route optimization, and automated notifications. The platform integrates with shipping carriers and warehouse systems to provide end-to-end visibility. Advanced analytics help optimize operations and reduce costs, while customer-facing features provide transparency and peace of mind. The system handles high transaction volumes while maintaining fast response times.",
    images: getImagesFromFolder("httpswww.nuvocargo.com", ["1.webp", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif", "8.webp"]),
    testimonial: {
      stars: 5,
      text: "The platform has revolutionized our logistics operations. Real-time tracking and route optimization have improved efficiency significantly, and customer satisfaction has increased dramatically.",
      author: "Nathan Brooks",
      position: "Operations Director @Nuvo Cargo",
      image: "/People/s.jpg",
    },
  },
  {
    slug: "salt-stone",
    title: "Salt & Stone: Wellness Brand Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Salt & Stone needed a platform that could showcase their wellness products while providing educational content and community features. We created a beautiful, calming storefront that emphasizes the brand's wellness philosophy, with product information, usage guides, and wellness tips. The platform includes subscription management for regular customers, while community features allow customers to share experiences and tips. Integration with inventory systems ensures accurate availability, and the mobile-first design caters to wellness enthusiasts on the go.",
    images: getImagesFromFolder("httpswww.saltandstone.com", ["1.webp", "2.avif", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "The platform beautifully represents our brand and mission. The educational content and community features have strengthened our connection with customers, and sales have increased significantly.",
      author: "Demetrius Reeves",
      position: "Founder @Salt & Stone",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "shapertools",
    title: "Shaper Tools: Power Tools E-Commerce",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Shaper Tools required an e-commerce platform that could showcase their innovative power tools with detailed specifications, video demonstrations, and customer reviews. We developed a comprehensive storefront with high-quality product imagery, interactive features, and comprehensive product information. The platform includes video integration for product demonstrations, detailed specifications, and customer reviews. Advanced filtering helps customers find the right tools for their projects, while the checkout process is streamlined for maximum conversion.",
    images: getImagesFromFolder("httpswww.shapertools.comen-us", ["2.avif", "3.avif", "4.jpg", "5.avif", "6.avif", "7.avif", "1.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform has significantly improved our online sales. The product demonstrations and detailed information help customers make informed decisions, and the overall experience is excellent.",
      author: "Ryan Mitchell",
      position: "E-Commerce Director @Shaper Tools",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "soundstripe",
    title: "Soundstripe: Music Licensing Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Soundstripe needed a music licensing platform that could handle extensive music libraries, search functionality, and licensing management. We developed a comprehensive system with advanced search, audio previews, and streamlined licensing workflows. The platform makes it easy for creators to discover and license music for their projects, with features for playlists, favorites, and license management. Integration with payment systems handles subscription and one-time purchases, while the search functionality helps users find the perfect track quickly.",
    images: getImagesFromFolder("httpswww.soundstripe.com", ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform has made music licensing so much easier for our users. The search functionality and audio previews are excellent, and the licensing workflow is seamless. User satisfaction has increased significantly.",
      author: "Trevor Thompson",
      position: "Product Director @Soundstripe",
      image: "/People/t.jpg",
    },
  },
  {
    slug: "span",
    title: "Span: Financial Services Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Span required a financial services platform that could handle complex transactions, account management, and regulatory compliance. We built a secure, compliant system with bank-grade security, real-time transaction processing, and comprehensive audit trails. The platform integrates with multiple financial institutions and payment providers, providing a seamless experience for both internal teams and clients. Advanced security features include end-to-end encryption, multi-factor authentication, and fraud detection, ensuring the highest levels of protection.",
    images: getImagesFromFolder("httpswww.span.io", ["1.avif", "2.avif", "3.avif", "4.jpg", "5.avif", "6.avif", "7.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform has transformed how we serve our clients. The security measures and compliance features give us complete confidence, and the user experience is exceptional. Outstanding work.",
      author: "Patrick Lee",
      position: "Chief Technology Officer @Span",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "sylvera",
    title: "Sylvera: Carbon Credit Platform",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Sylvera needed a platform for carbon credit verification and trading that could handle complex data analysis and regulatory compliance. We developed a comprehensive system with satellite data integration, verification tools, and trading capabilities. The platform uses advanced analytics to verify carbon credits, providing transparency and trust in the carbon market. Integration with trading platforms and regulatory systems ensures compliance while making it easy for organizations to participate in carbon markets.",
    images: getImagesFromFolder("httpswww.sylvera.com", ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif", "7.avif", "8.jpg"]),
    testimonial: {
      stars: 5,
      text: "The platform has become essential to the carbon credit market. The verification tools and data integration provide the transparency needed for trust, and the trading features are seamless.",
      author: "Autro Furey",
      position: "Co-Founder @Sylvera",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "soap-kitchen",
    title: "The Soap Kitchen: Artisan Soap E-Commerce",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "The Soap Kitchen required an e-commerce platform that could showcase their artisan soap products with rich storytelling and educational content. We created a beautiful storefront that emphasizes the craft and natural ingredients, with detailed descriptions, usage guides, and ingredient information. The platform includes subscription management for regular customers, while the checkout process is streamlined for one-time purchases. Integration with inventory systems ensures accurate availability, and the mobile-first design caters to customers browsing on any device.",
    images: getImagesFromFolder("httpswww.thesoapkitchen.co.uk", ["1.webp", "2.webp", "3.avif", "4.webp", "5.webp", "6.webp", "7.webp", "8.avif"]),
    testimonial: {
      stars: 5,
      text: "The platform beautifully tells our story and showcases our products. Online sales have increased significantly, and customers love the educational content about our natural ingredients and processes.",
      author: "Daniel Brown",
      position: "Founder @The Soap Kitchen",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=faces",
    },
  },
  {
    slug: "zooplus",
    title: "Zooplus: Pet Supplies E-Commerce",
    description:
      "This Project Was Built To Do One Thing Exceptionally Well — Perform. From Strategy And Design To Development And Optimization, Every Detail Was Crafted To Deliver Speed, Clarity, And Conversion. We Didn't Just Ship A Product; We Engineered An Experience That Feels Effortless To Use And Powerful In Impact. The Result Is A System That Scales, Adapts, And Drives Real Business Outcomes.",
    paragraph:
      "Zooplus required an e-commerce platform that could handle a vast product catalog, multiple pet categories, and international shipping. We developed a comprehensive storefront with advanced filtering, product recommendations, and subscription management. The platform makes it easy for pet owners to find products for their specific pets, with features for multiple pet profiles, auto-reorder, and personalized recommendations. Integration with inventory systems and shipping providers ensures reliable delivery, while the mobile-first design caters to pet owners shopping on any device.",
    images: getImagesFromFolder("httpswww.zooplus.com", ["1.webp", "2.webp", "3.webp", "4.webp", "5.avif", "6.webp", "7.webp"]),
    testimonial: {
      stars: 5,
      text: "The platform has transformed our online business. The product recommendations and subscription features have increased customer loyalty significantly, and sales have grown across all categories.",
      author: "Zoe Anderson",
      position: "E-Commerce Director @Zooplus",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=faces",
    },
  },

];


export const homePageData = [
  {
    industries: {
      title: "Tailored for Your Industry",
      description: "We bring domain-specific expertise to every partnership.",
      items: [
        {
          icon: "SiVisa",
          heading: "FinTech",
          text: "Secure banking and payment gateways.",
        },
        {
          icon: "FaHeartbeat",
          heading: "Healthcare",
          text: "HIPAA-compliant medical platforms.",
        },
        {
          icon: "SiShopify",
          heading: "E-Commerce",
          text: "High-traffic retail experiences.",
        },
        {
          icon: "FaTruck",
          heading: "Logistics",
          text: "Supply chain tracking and management.",
        },
        {
          icon: "FaGraduationCap",
          heading: "EdTech",
          text: "Learning management and virtual classrooms.",
        },
        {
          icon: "FaBuilding",
          heading: "Real Estate",
          text: "Property listing and virtual tour apps.",
        },
        {
          icon: "FaFilm",
          heading: "Media",
          text: "Streaming and content delivery networks.",
        },
        {
          icon: "FaBolt",
          heading: "Energy",
          text: "Smart grid monitoring and analytics.",
        },
        {
          icon: "FaGavel",
          heading: "Legal",
          text: "Document automation and secure portals.",
        },
        {
          icon: "FaPlane",
          heading: "Travel",
          text: "Booking engines and itinerary managers.",
        },
        {
          icon: "FaDumbbell",
          heading: "Fitness",
          text: "Wearable integration and health tracking.",
        },
        {
          icon: "FaSpa",
          heading: "Beauty & Spa",
          text: "Luxury booking and wellness management.",
        },
        {
          icon: "FaGlobeAmericas",
          heading: "NGOs",
          text: "Scalable tech for social impact and outreach.",
        },
        {
          icon: "GiLipstick",
          heading: "Fashion",
          text: "Cutting-edge digital storefronts and lookbooks.",
        },
        {
          icon: "SiRocketdotchat",
          heading: "Startups",
          text: "Rapid MVP development and scaling solutions.",
        },
        {
          icon: "FaHandHoldingHeart",
          heading: "Non-Profit",
          text: "Donation platforms and community tools.",
        },
      ],
    },
    finalSection: {
      title: "Proven Excellence in Delivery",
      description:
        "Numbers that define our commitment to quality and client success.",
      cards: [
        {
          icon: "FaUserFriends",
          countHeading: "400+",
          textHeading: "Customers Served",
          description: "Delivering excellence to every customer served.",
        },
        {
          icon: "FaCheckCircle",
          countHeading: "1200+",
          textHeading: "Projects Done",
          description: "Successful deliveries across 45 countries.",
        },
        {
          icon: "FaUsers",
          countHeading: "500+",
          textHeading: "Experts",
          description: "On-staff engineers and domain specialists.",
        },
        {
          icon: "FaClock",
          countHeading: "12Y+",
          textHeading: "Experience",
          description: "A decade and a half of industry leadership.",
        },
        {
          icon: "FaGlobe",
          countHeading: "24/7",
          textHeading: "Support",
          description: "Round-the-clock maintenance for global apps.",
        },
        {
          icon: "FaStar",
          countHeading: "95%",
          textHeading: "Retention",
          description: "Clients who return for their next big project.",
        },
        {
          icon: "FaChartLine",
          countHeading: "600M+",
          textHeading: "Revenue",
          description: "Generated for our clients through digital products.",
        },
        {
          icon: "FaLock",
          countHeading: "100%",
          textHeading: "Secure",
          description: "Zero data breaches across all client platforms.",
        },
        {
          icon: "FaRocket",
          countHeading: "30+",
          textHeading: "Unicorns",
          description: "Startups we helped reach billion-dollar valuations.",
        },
      ],
    },
  },
];
export const ServicePageData: ServicePageData[] = [
  {
    slug: "custom-software-development",
    hero: {
      title: "Next-Gen Software Solutions",
      subHero: "Innovation at Scale",
      description:
        "We help global enterprises and fast-growing startups build robust, scalable, and user-centric software that drives business impact.",
      imageUrl: "/services/software.avif",
    },

    serviceSuite: {
      title: "Our Specialized Services",
      subHero: "End-to-End Excellence",
      description:
        "From strategy to deployment, we cover every aspect of the software lifecycle.",
      cards: [
        {
          icon: "FaCode",
          heading: "Web Development",
          text: "Building responsive and performant web applications using modern frameworks.",
        },
        {
          icon: "FaMobileAlt",
          heading: "Mobile Solutions",
          text: "Native and cross-platform mobile apps designed for seamless user engagement.",
        },
        {
          icon: "FaCloud",
          heading: "Cloud Integration",
          text: "Migrating and managing infrastructure on AWS, Azure, and Google Cloud.",
        },
        {
          icon: "FaShieldAlt",
          heading: "Cybersecurity",
          text: "Protecting your digital assets with enterprise-grade security protocols.",
        },
        {
          icon: "FaBrain",
          heading: "AI & ML",
          text: "Implementing machine learning models to automate and optimize workflows.",
        },
        {
          icon: "FaDatabase",
          heading: "Big Data",
          text: "Processing and visualizing massive datasets for actionable insights.",
        },
        {
          icon: "FaLayerGroup",
          heading: "UI/UX Design",
          text: "Human-centered design that focuses on conversion and usability.",
        },
        {
          icon: "FaCog",
          heading: "DevOps",
          text: "Streamlining CI/CD pipelines for faster, more reliable deployments.",
        },
        {
          icon: "FaComments",
          heading: "Consulting",
          text: "Strategic technology roadmapping to align with your business goals.",
        },
      ],
    },
    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We use the best tools for the job to ensure long-term maintainability.",
      asideText: "Voted Top 10 Tech Partner 2024",
      items: [
        {
          logoUrl: "SiReact",
          heading: "React",
          text: "Frontend library for dynamic UIs.",
        },
        {
          logoUrl: "SiNodedotjs",
          heading: "Node.js",
          text: "Scalable backend environments.",
        },
        {
          logoUrl: "SiPython",
          heading: "Python",
          text: "The gold standard for AI and Data.",
        },
        {
          logoUrl: "SiCplusplus",
          heading: "C++",
          text: "High-performance systems and engine development.",
        },
        {
          logoUrl: "SiDotnet",
          heading: ".NET",
          text: "A versatile framework for modern enterprise apps.",
        },
        {
          logoUrl: "SiSharp",
          heading: "C#",
          text: "Elegant, type-safe code for Windows and Games.",
        },
        {
          logoUrl: "SiQt",
          heading: "Qt",
          text: "Powerful cross-platform GUI and embedded systems.",
        },
        {
          logoUrl: "SiTypescript",
          heading: "TypeScript",
          text: "Type-safe JavaScript development.",
        },
        {
          logoUrl: "SiAmazonwebservices",
          heading: "AWS",
          text: "Global cloud infrastructure.",
        },
        {
          logoUrl: "SiDocker",
          heading: "Docker",
          text: "Containerization for portability.",
        },
        {
          logoUrl: "SiKubernetes",
          heading: "Kubernetes",
          text: "Orchestration at enterprise scale.",
        },
        {
          logoUrl: "SiPostgresql",
          heading: "PostgreSQL",
          text: "Reliable relational data storage.",
        },
        {
          logoUrl: "SiRedis",
          heading: "Redis",
          text: "In-memory data structure store.",
        },
        {
          logoUrl: "SiGraphql",
          heading: "GraphQL",
          text: "Efficient API data fetching.",
        },
        {
          logoUrl: "SiSwift",
          heading: "Swift",
          text: "Native iOS app development.",
        },
        {
          logoUrl: "SiKotlin",
          heading: "Kotlin",
          text: "Modern Android development.",
        },
      ],
    },
   
  },
  {
    slug: "Logo-n-Brand-Identity",
    hero: {
      title: "Brand Identities That Stick and Sell",
      subHero: "Clarity. Consistency. Confidence.",
      description:
        "We craft logos, typography, and style guides that build a strong, consistent visual presence—so your brand is instantly recognizable everywhere it appears.",
      imageUrl: "/services/emirates.avif",
    },

    serviceSuite: {
      title: "Brand Identity That Feels Alive",
      subHero:
        "We engineer visual systems that people trust, remember, and feel.",
      description:
        "At Antrosys, brand identity is treated as a living system—not decoration. We fuse strategic psychology, modern aesthetics, and cutting-edge tools to craft identities that command attention, build instant credibility, and scale effortlessly across every platform.",
      cards: [
        {
          icon: "FaBrain",
          heading: "Strategic Brand DNA",
          text: "Before a single pixel is designed, we decode your brand's core: purpose, personality, audience psychology, and competitive position. This becomes your immutable Brand DNA—the decision-making engine behind every visual choice.",
        },

        {
          icon: "FaPalette",
          heading: "Logo Engineering System",
          text: "We design logos as modular systems—responsive, scalable, and timeless. From micro-icons to billboard dominance, your logo maintains clarity, balance, and authority everywhere it lives.",
        },

        {
          icon: "FaMagic",
          heading: "Dopamine-Driven Visual Psychology",
          text: "Color theory, contrast dynamics, visual rhythm, and cognitive load are intentionally engineered to spark trust and excitement. The result is subtle dopamine—designs that feel addictive without screaming for attention.People don't just see your brand. They feel it.",
        },

        {
          icon: "FaFont",
          heading: "Typography Architecture",
          text: "We craft or curate typographic systems that carry tone, hierarchy, and personality with surgical precision. Every letter reinforces credibility, intelligence, and modernity—whether on a landing page, app UI, or pitch deck.",
        },

        {
          icon: "FaSwatchbook",
          heading: "Future-Proof Color Systems",
          text: "Your color palette is designed for accessibility, scalability, dark/light modes, and emotional consistency. We test across screens, platforms, and cultural contexts to ensure longevity—not trend fatigue.",
        },

        {
          icon: "FaLayerGroup",
          heading: "Dynamic Brand Systems",
          text: "We create flexible brand systems that adapt without breaking—perfect for startups, SaaS, AI products, and evolving companies. Your identity grows as you grow, without rebranding every year.",
        },

        {
          icon: "FaRocket",
          heading: "AI & Tech-Ready Branding",
          text: "Your brand is optimized for today's realities: AI-generated content, motion systems, responsive layouts, avatars, and automation-friendly assets.",
        },

        {
          icon: "FaCog",
          heading: "Motion & Micro-Interaction Identity",
          text: "We define motion principles—how your brand moves, reacts, and breathes. Micro-animations, transitions, and visual feedback add sophistication and premium feel without visual noise.",
        },

        {
          icon: "FaEye",
          heading: "Trust-Building Visual Assets",
          text: "From pitch decks to social visuals and UI-ready assets, everything is crafted to signal seriousness, competence, and momentum. Your brand looks like it belongs in rooms where decisions are made.",
        },

        {
          icon: "FaBook",
          heading: "Complete Brand Style Guide",
          text: "You receive a clean, beautifully structured style guide that removes ambiguity. Logos, spacing, colors, typography, motion, tone—all documented so your brand stays consistent no matter who touches it.",
        },

        {
          icon: "FaRocket",
          heading: "Brand Launch & Reveal Experience",
          text: "We help orchestrate how your brand enters the world—sequence, narrative, visuals, and emotional pacing. This isn't a drop. It's a moment. And people remember moments.",
        },
        {
          icon: "FaChartLine",
          heading: "Ongoing Brand Evolution",
          text: "We offer continuous refinement—subtle upgrades, expansions, and adaptations—so your brand stays sharp, relevant, and dominant without losing its identity.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "At Antrosys, brand identity isn’t guesswork or “creative vibes.” It’s engineered. We combine design science, behavioral psychology, and bleeding-edge creative technology to craft logos and brand systems that feel inevitable, memorable, and powerful. Every pixel is intentional.",
      asideText: "Where neuroscience meets design precision.",
      items: [
        {
          logoUrl: "SiAdobephotoshop",
          heading: "Adobe Photoshop",
          text: "Hyper-Real Visual Engineering",
        },

        {
          logoUrl: "SiAdobeillustrator",
          heading: "Adobe Illustrator",
          text: "Scalable Identity Architecture",
        },

        {
          logoUrl: "SiAdobeindesign",
          heading: "Adobe InDesign",
          text: "Brand System Orchestration",
        },

        {
          logoUrl: "SiFigma",
          heading: "Figma",
          text: "Real-Time Brand Collaboration.",
        },

        {
          logoUrl: "SiFramer",
          heading: "Spline 3D",
          text: "Interactive Brand Dimension",
        },

        {
          logoUrl: "SiAdobe",
          heading: "Midjourney v7",
          text: "Concept Acceleration Engine",
        },

        {
          logoUrl: "SiAdobe",
          heading: "Adobe Firefly Studio",
          text: "Ethical AI Brand Augmentation",
        },

        {
          logoUrl: "FaFont",
          heading: "FontLab 8",
          text: "Custom Typography Creation",
        },

        {
          logoUrl: "SiNotion",
          heading: "Notion",
          text: "Brand Intelligence & Process Trust",
        },

        {
          logoUrl: "SiCoreldraw",
          heading: "CorelDRAW",
          text: "Precision Vector Craft & Production Power",
        },
        {
          logoUrl: "SiAffinitydesigner",
          heading: "Affinity Designer",
          text: "Ultra-Fast Identity Prototyping",
        },
      ],
    },

  },
  {
    slug: "Web-n-Application-Design",
    hero: {
      title: "Web & App Experiences That Flow (UI/UX)",
      subHero: "Where Function Meets Feeling",
      description:
        "We create thoughtful interfaces and visual elements for websites and apps—balancing usability, aesthetics, and performance to elevate user experience.",
      imageUrl: "/Mockups/httpslivingbarreandyoga.com.au/1.avif",
    },

    serviceSuite: {
      title: "Web & App Experiences That Feel Effortless",
      subHero:
        "Interfaces engineered for clarity, flow, and obsession-level engagement.",
      description:
        "We architect digital experiences that remove friction, guide behavior, and quietly build trust at every interaction.Every layout, transition, and interaction is intentional—grounded in user psychology, modern UI systems, and scalable design logic. The result is products that feel intuitive on first use and powerful over time.",
      cards: [
        {
          icon: "FaChartBar",
          heading: "Experience Strategy & UX Mapping",
          text: "We begin by understanding users, goals, constraints, and success metrics. User journeys, flows, and decision paths are mapped to eliminate confusion and maximize momentum.",
        },

        {
          icon: "FaPencilAlt",
          heading: "Wireframing & Interaction Blueprints",
          text: "Low- and high-fidelity wireframes define layout logic, hierarchy, and behavior before visuals are applied. This ensures clarity, scalability, and zero wasted motion in the final product.",
        },

        {
          icon: "FaPalette",
          heading: "Dopamine-Calibrated UI Design",
          text: "We design interfaces that feel smooth, responsive, and rewarding—using spacing, rhythm, contrast, and feedback to subtly trigger satisfaction without overstimulation.",
        },

        {
          icon: "FaLayerGroup",
          heading: "Design Systems & UI Kits",
          text: "Reusable components, tokens, and rulesets are created so your product stays visually and functionally consistent as it grows. Faster development. Cleaner updates. Zero design drift.",
        },

        {
          icon: "FaMobileAlt",
          heading: "Mobile-First & Responsive Design",
          text: "Every experience is designed mobile-first, then expanded intelligently for tablets, desktops, and ultra-wide displays. Touch, gesture, and responsiveness are treated as first-class citizens.",
        },

        {
          icon: "FaEye",
          heading: "Accessibility & Usability Engineering",
          text: "We build interfaces that are readable, navigable, and usable for real humans—across abilities, devices, and environments. Accessibility isn't a checkbox; it's part of quality.",
        },

        {
          icon: "FaMagic",
          heading: "Motion UI & Micro-Interactions",
          text: "Subtle animations and micro-interactions provide feedback, guide attention, and add polish. Movement is purposeful—never distracting, always reinforcing clarity.",
        },

        {
          icon: "FaBrain",
          heading: "AI & SaaS-Ready Interfaces",
          text: "We specialize in interfaces for SaaS platforms, AI tools, dashboards, and data-heavy systems—making complex functionality feel approachable and intuitive.",
        },

        {
          icon: "FaChartLine",
          heading: "Conversion-Focused Web Design",
          text: "Landing pages and websites are designed with clear narrative flow, trust signals, and conversion psychology—turning visitors into users, and users into customers.",
        },

        {
          icon: "FaFlask",
          heading: "Prototype & Usability Testing",
          text: "Interactive prototypes allow early validation of flows, interactions, and assumptions. Problems are solved before development—saving time, money, and credibility.",
        },

        {
          icon: "FaCode",
          heading: "Developer-Ready Handoff",
          text: "Clean specs, component logic, spacing rules, and asset exports ensure seamless handoff to development teams. What we design can actually be built—properly.",
        },
        {
          icon: "FaChartLine",
          heading: "Continuous UX Evolution",
          text: "As users grow and behavior changes, we refine flows, improve clarity, and optimize engagement—without ripping apart your product every six months.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We don't just design screens — we craft experiences. Every interface, wireframe, and visual element is meticulously engineered to maximize engagement, usability, and trust. Using 2026's latest tools, we bring ideas to life faster, smarter, and with an unmistakable Antrosys touch.",
      asideText:
        "Digital experiences are remembered for how they feel, not just how they look.",
      items: [
        {
          logoUrl: "SiFigma",
          heading: "Figma",
          text: "Collaborative Interface Mastery",
        },

        {
          logoUrl: "SiAdobexd",
          heading: "Adobe XD",
          text: "Experience Prototyping Engine",
        },

        {
          logoUrl: "SiMiro",
          heading: "Miro",
          text: "UX Ideation & Flow Mapping",
        },

        {
          logoUrl: "SiSketch",
          heading: "Sketch",
          text: "Pixel-Perfect UI Crafting",
        },

        {
          logoUrl: "SiFramer",
          heading: "Framer",
          text: "Dynamic Prototypes & Micro-Interactions",
        },

        {
          logoUrl: "SiWebflow",
          heading: "Webflow",
          text: "Code-Free Front-End Delivery",
        },
      ],
    },

  },

  {
    slug: "Art-n-Illustration",
    hero: {
      title: "Illustrations That Spark Imagination",
      subHero: "Every Vision, Illustrated",
      description:
        "We craft custom digital and traditional artwork—from portraits to children’s books and comics—bringing your ideas to life with creativity and style.",
      imageUrl: "/services/art.avif",
    },

    serviceSuite: {
      title: "Art & Illustration That Speaks Without Words",
      subHero:
        "Custom artwork that tells your story, sparks imagination, and makes ideas unforgettable.",
      description:
        "At Antrosys, illustration isn't decoration—it's communication with soul. From digital to traditional, comics to children's books, we create visuals that capture attention, convey meaning, and stick in the mind. Every stroke is intentional, designed to resonate emotionally and make your brand or project feel alive.",
      cards: [
        {
          icon: "FaPaintBrush",
          heading: "Pixels That Speak",
          text: "Tailored digital artwork for branding, social media, editorial, and storytelling. Every illustration is crafted to match your tone, narrative, and audience psychology, making your content instantly captivating.",
        },

        {
          icon: "FaPalette",
          heading: "Tangible Emotion",
          text: "Watercolor, ink, pencil, or mixed media—handcrafted art that conveys warmth, authenticity, and uniqueness. Perfect for projects where human touch matters.",
        },

        {
          icon: "FaUserFriends",
          heading: "Personalities That Stick",
          text: "From playful mascots to sophisticated characters, we bring entities to life that people instantly remember, relate to, and fall in love with.",
        },

        {
          icon: "FaEye",
          heading: "Caricatures & Portraiture",
          text: "Custom portraits or caricatures that capture personality, humor, and emotion. Ideal for gifts, campaigns, and memorable personal branding.",
        },

        {
          icon: "FaMagic",
          heading: "Imagination in Motion",
          text: "Whimsical, expressive, and narratively-driven illustrations that pull children (and adults) into the story world. Every page crafted to spark wonder and retention.",
        },

        {
          icon: "FaBook",
          heading: "Comic & Sequential Art",
          text: "Dynamic layouts, expressive characters, and cinematic flow. Perfect for graphic novels, comics, or educational storytelling that keeps readers hooked.",
        },

        {
          icon: "FaBullhorn",
          heading: "Visual Storytelling for Marketing",
          text: "Illustrations designed to support campaigns, social content, and narratives that resonate deeply with audiences. We turn attention into emotional investment.",
        },

        {
          icon: "FaRocket",
          heading: "NFT & Digital Collectibles Design",
          text: "Custom digital artwork optimized for blockchain, collectibles, and interactive digital assets. Your creations become shareable, collectible, and instantly recognizable.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We don't just design screens — we craft experiences. Every interface, wireframe, and visual element is meticulously engineered to maximize engagement, usability, and trust. Using 2026's latest tools, we bring ideas to life faster, smarter, and with an unmistakable Antrosys touch.",
      asideText:
        "Digital experiences are remembered for how they feel, not just how they look.",
      items: [
        {
          logoUrl: "SiAdobephotoshop",
          heading: "Adobe Photoshop",
          text: "Digital Canvas Mastery",
        },

        {
          logoUrl: "SiAdobeillustrator",
          heading: "Adobe Illustrator",
          text: "Vector Art Excellence",
        },

        {
          logoUrl: "SiCoreldraw",
          heading: "CorelDRAW Graphics Suite",
          text: "Precision & Production-Ready Art",
        },

        {
          logoUrl: "FaPaintBrush",
          heading: "Inkscape",
          text: "Open-Source Vector Freedom",
        },

        {
          logoUrl: "SiFigma",
          heading: "Figma",
          text: "Collaborative Illustration & Concepting",
        },

        {
          logoUrl: "FaPalette",
          heading: "Procreate",
          text: "Intuitive Hand-Drawn Art",
        },
      ],
    },

  },
  {
    slug: "Print-Design",
    hero: {
      title: "Print Design",
      subHero: "Design That Speaks Loudly",
      description:
        "We turn brochures, flyers, business cards, and posters into high-quality prints that capture attention and leave a lasting impression.",
      imageUrl: "/services/print.avif",
    },

    serviceSuite: {
      title: "Print Design That Commands Attention",
      subHero:
        "Tactile, visually-striking layouts that make your brand impossible to ignore.",
      description:
        "At Antrosys, print design transforms paper into a trust-building, experience-enhancing medium. Every brochure, flyer, business card, and poster is crafted to look premium, feel intentional, and create lasting impressions. From high-resolution layouts to carefully chosen finishes and typographic precision, your print materials will speak credibility and sophistication before a single word is read.",
      cards: [
        {
          icon: "FaBook",
          heading: "Brochures & Booklets",
          text: "Design multi-page layouts that are visually engaging and logically structured to guide readers effortlessly. Every fold, margin, and typography choice is engineered for clarity and impact.",
        },

        {
          icon: "FaBullhorn",
          heading: "Flyers & Posters",
          text: "Bold, clean, and strategic layouts for events, campaigns, and promotions. Optimized for readability and emotional resonance—designed to capture eyes and spark action.",
        },

        {
          icon: "FaUsers",
          heading: "Business Cards & Stationery",
          text: "High-end business card design, letterheads, and stationery that communicate professionalism and brand personality. Every detail—from typography to paper choice—is designed to convey credibility instantly.",
        },

        {
          icon: "FaChartBar",
          heading: "Marketing Collateral Design",
          text: "From event handouts to sales sheets, we create collateral that aligns with your digital presence while standing out in the physical world. Consistency, clarity, and polish guaranteed.",
        },

        {
          icon: "FaBox",
          heading: "Packaging & Product Labels",
          text: "Packaging and label design optimized for visibility, usability, and emotional appeal. We make your product pop and persuade, even before it's touched.",
        },

        {
          icon: "FaPrint",
          heading: "Print-Ready Production Files",
          text: "We deliver files optimized for high-quality printing: color-calibrated, bleed-aware, and preflighted. No surprises, no mistakes—your materials always print as intended.",
        },

        {
          icon: "FaFont",
          heading: "Typography & Layout Engineering",
          text: "Every layout is constructed with typographic precision: hierarchy, readability, and flow are optimized for maximum comprehension and visual satisfaction.",
        },

        {
          icon: "FaEye",
          heading: "Make an Impression They Can't Forget",
          text: "Banners, stands, brochures, and handouts designed to maximize impact at events, ensuring your brand looks authoritative and memorable.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We transform ideas into tangible, high-impact printed materials. From brochures to business cards, posters to flyers, every layout is crafted for visual appeal, readability, and brand consistency. Using 2026's top print design tools, we ensure your print assets look luxurious, professional, and irresistible — leaving a lasting impression in the hands of your audience.",
      asideText: "Print isn't dead — it's a powerful tactile experience.",
      items: [
        {
          logoUrl: "SiAdobeindesign",
          heading: "Adobe InDesign",
          text: "Layouts That Speak Volumes",
        },

        {
          logoUrl: "SiAdobeillustrator",
          heading: "Adobe Illustrator",
          text: "Vector Excellence for Print",
        },

        {
          logoUrl: "SiCoreldraw",
          heading: "CorelDRAW Graphics Suite",
          text: "Print-Ready Precision",
        },

        {
          logoUrl: "SiAffinitydesigner",
          heading: "Affinity Publisher",
          text: "Modern Publishing Power",
        },
      ],
    },

  },
  {
    slug: "Packaging-n-Label-Design",
    hero: {
      title: "Packaging That Sells Before It’s Opened",
      subHero: "Design That Sells",
      description:
        "From concept to final design, we create packaging and labels that captivate customers and communicate your brand story clearly.",
      imageUrl: "/services/pkg.avif",
    },

    serviceSuite: {
      title: "Packaging & Labels That Sell Themselves",
      subHero:
        "Eye-catching, strategic designs that make your product irresistible on shelves.",
      description:
        "At Antrosys, packaging is more than just a container—it's a brand experience in miniature. We design product packaging and labels that grab attention, communicate value, and tell your story at a glance. From structural layout to typography, color, and material choices, every element is crafted to trigger desire, trust, and recognition. Your product won't just sit on the shelf—it will dominate it.",

      cards: [
        {
          icon: "FaBox",
          heading: "Shelf-Ready Packaging Design",
          text: "Designs that command attention in crowded retail environments. Strategic use of color, hierarchy, and visuals ensures your product is the one people reach for first.",
        },

        {
          icon: "FaTag",
          heading: "Label Design",
          text: "Labels crafted to convey your brand story, values, and key messaging instantly. Clear, legible, and visually appealing—designed for maximum impact in minimal space.",
        },

        {
          icon: "FaTools",
          heading: "Structural & Die-Line Design",
          text: "We create packaging structures that are both practical and visually striking, ensuring durability, usability, and shelf appeal.",
        },

        {
          icon: "FaSwatchbook",
          heading: "Material & Finish Consultation",
          text: "We guide you through paper stocks, textures, coatings, and finishes that enhance tactile experience and reinforce brand value.",
        },

        {
          icon: "FaLayerGroup",
          heading: "Branding Cohesion Across Products",
          text: "All packaging and labels are aligned with your visual identity, creating a cohesive brand ecosystem that's instantly recognizable.",
        },

        {
          icon: "FaShoppingBag",
          heading: "Retail & E-commerce Optimization",
          text: "Packaging optimized for both physical shelves and online display. Colors, typography, and visuals are calibrated to look perfect in every environment.",
        },

        {
          icon: "FaStar",
          heading: "Limited Edition & Seasonal Designs",
          text: "Custom packaging for special campaigns, launches, or seasonal releases—designed to spark desire and collectible appeal.",
        },

        {
          icon: "FaLeaf",
          heading: "Sustainable & Ethical Packaging Solutions",
          text: "Eco-conscious packaging options that maintain premium look and feel while reflecting your brand's commitment to sustainability.",
        },

        {
          icon: "FaPrint",
          heading: "Prototype & Production-Ready Files",
          text: "We deliver files ready for manufacturing, preflighted and optimized for print, labeling, and packaging production—no guesswork, no errors.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We craft packaging and labels that pop on shelves, tell your brand story, and convert customers instantly. From conceptual mockups to production-ready files, every design is engineered for visual impact, brand consistency, and tactile delight. Our 2026 tech stack ensures your products not only look amazing but feel premium and memorable.",
      asideText: "Packaging is the first handshake with your customer.",
      items: [
        {
          logoUrl: "SiAdobeillustrator",
          heading: "Adobe Illustrator",
          text: "Vector Precision for Every Surface",
        },

        {
          logoUrl: "SiAdobephotoshop",
          heading: "Adobe Photoshop",
          text: "Product Mockups & Realistic Previews"},

        {
          logoUrl: "FaBox",
          heading: "Substance 3D",
          text: "Immersive 3D Packaging Visualization",
        },

        {
          logoUrl: "SiCoreldraw",
          heading: "CorelDRAW Graphics Suite",
          text: "Production-Ready Artwork",
        },

        {
          logoUrl: "FaTools",
          heading: "Esko ArtiosCAD",
          text: "Structural & Die-Line Mastery",
        },

        {
          logoUrl: "SiAffinitydesigner",
          heading: "Affinity Designer",
          text: "Rapid Concepting & Iteration",
        },
      ],
    },

  },
  {
    slug: "Social-Media-Graphics",
    hero: {
      title: "Social Media, Elevated",
      subHero: "Design That Gets Noticed",
      description:
        "From posts to stories, we design graphics that resonate, drive conversation, and elevate your online presence across all platforms.",
      imageUrl: "/services/ig.avif",
    },

    serviceSuite: {
      title: "Social Media Graphics That Stop the Scroll",
      subHero:
        "Optimized visuals for Instagram, Facebook, Twitter, and beyond—designed to grab attention and spark interaction.",
      description:
        "At Antrosys, social media graphics aren't just pretty pictures—they are strategic, dopamine-calibrated touchpoints that boost engagement, convey brand voice, and grow your online presence. Every visual is crafted to be shareable, recognizable, and impactful, creating a consistent, trustworthy identity across platforms while maximizing audience interaction.",

      cards: [
        {
          icon: "FaMobileAlt",
          heading: "Perfect Fit, Every Platform",
          text: "Graphics designed for ideal dimensions, resolution, and format—so your content looks flawless on Instagram, Facebook, X, LinkedIn, Trumble, Pintrest and more.",
        },

        {
          icon: "FaHashtag",
          heading: "Label Design",
          text: "Labels crafted to convey your brand story, values, and key messaging instantly. Clear, legible, and visually appealing—designed for maximum impact in minimal space.",
        },

        {
          icon: "FaLayerGroup",
          heading: "Branded Social Templates",
          text: "Custom templates that keep your posts visually cohesive, on-brand, and easy to deploy—maintaining recognizability and professional polish.",
        },

        {
          icon: "FaBullhorn",
          heading: "Campaign & Promotional Graphics",
          text: "Striking visuals that support marketing campaigns, product launches, and events—designed to boost clicks, likes, shares, and conversions.",
        },

        {
          icon: "FaMagic",
          heading: "Motion & Animated Graphics",
          text: "GIFs, short loops, and subtle animations that increase retention and engagement, giving your social presence a dynamic, professional edge.",
        },

        {
          icon: "FaFilm",
          heading: "Story & Reel Visuals",
          text: "Graphics optimized for Instagram/Facebook Stories and Reels or TikTok clips—designed to capture attention in seconds and drive interaction.",
        },

        {
          icon: "FaChartBar",
          heading: "Infographics & Data Visualizations",
          text: "Complex information is transformed into visually compelling, shareable infographics that educate, engage, and reinforce authority.",
        },

        {
          icon: "FaCalendar",
          heading: "Event & Announcement Graphics",
          text: "Visually striking posts for announcements, webinars, or events that instantly communicate relevance and professionalism.",
        },

        {
          icon: "FaPalette",
          heading: "Social Media Branding",
          text: "All graphics follow your brand's identity system—colors, typography, iconography, and tone—ensuring every post reinforces trust and recognizability.",
        },

        {
          icon: "FaImages",
          heading: "Carousel & Multi-Frame Design",
          text: "Optimized carousels for Instagram or LinkedIn that guide viewers through your narrative, boosting time on post and engagement.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We create highly optimized, scroll-stopping visuals for all social media platforms. Every post, story, and ad is designed to engage audiences, drive interaction, and strengthen brand recognition. Using the latest creative tools, we ensure your social media presence is consistent, visually stunning, and unforgettable.",
      asideText:
        "In the digital world, first impressions happen in milliseconds.",
      items: [
        {
          logoUrl: "SiAdobeillustrator",
          heading: "Adobe Illustrator",
          text: "Iconography & Vector Graphics",
        },

        {
          logoUrl: "SiAdobephotoshop",
          heading: "Adobe Photoshop",
          text: "Pixel-Perfect Image Creation",
        },

        {
          logoUrl: "SiCanva",
          heading: "Canva",
          text: "Rapid Social Content Production",
        },

        {
          logoUrl: "SiFigma",
          heading: "Figma",
          text: "Collaborative Social Design",
        },

        {
          logoUrl: "SiDevexpress",
          heading: "Adobe Express",
          text: "Engaging Interactive Content",
        },

        {
          logoUrl: "SiAffinitydesigner",
          heading: "Affinity Designer",
          text: "Custom Illustrations for Social Media",
        },
      ],
    },

  },
  {
    slug: "Marketing-n-Advertising",
    hero: {
      title: "Marketing & Advertising",
      subHero: "Creativity Meets Conversion",
      description:
        "We create banners, ads, and promotional graphics for digital and print campaigns that capture attention, communicate clearly, and inspire customer engagement.",
      imageUrl: "/services/mkt.avif",
    },

    serviceSuite: {
      title: "Marketing & Advertising Materials That Convert",
      subHero:
        "Banners, ads, and promotional graphics optimized for digital and print campaigns to drive customer action.",
      description:
        "At Antrosys, we don’t just make visuals—we engineer campaigns. Every banner, ad, and promotional asset is crafted to grab attention, communicate value instantly, and drive conversions. From print to digital, our designs fuse brand cohesion, clarity, and emotion, ensuring your campaigns stand out and perform. We make your marketing materials look premium, feel persuasive, and produce results.",

      cards: [
        {
          icon: "FaBullhorn",
          heading: "Scroll-Stopping Ads",
          text: "Banners, social media ads, and display graphics crafted to grab attention and drive clicks, designed with platform-specific best practices for maximum performance.",
        },

        {
          icon: "FaPrint",
          heading: "Physical Presence That Converts",
          text: "Posters, flyers, banners, and brochures designed for campaigns that resonate offline, ensuring your message is clear, persuasive, and visually compelling.",
        },

        {
          icon: "FaChartBar",
          heading: "Campaign Visual Strategy",
          text: "We create visuals aligned with campaign goals, audience psychology, and conversion objectives—every asset serves a strategic function.",
        },

        {
          icon: "FaMagic",
          heading: "Motion Graphics & Animated Ads",
          text: "Animated banners, GIFs, and video graphics optimized for social, display networks, and web campaigns—increasing engagement and retention.",
        },

        {
          icon: "FaChartLine",
          heading: "Retargeting & Conversion-Focused Assets",
          text: "Graphics designed specifically for remarketing, landing pages, and email campaigns—nudging prospects down the funnel efficiently.",
        },

        {
          icon: "FaPalette",
          heading: "Brand Cohesion Across Campaigns",
          text: "All marketing materials adhere to your brand system—ensuring trust, clarity, and instant recognition across every campaign touchpoint.",
        },

        {
          icon: "FaCalendar",
          heading: "Seasonal & Limited-Time Campaigns",
          text: "Graphics for holidays, promotions, and launches designed to drive excitement, urgency, and sales.",
        },

        {
          icon: "FaGlobe",
          heading: "Multi-Platform Advertising Assets",
          text: "From social media to display networks, email, and print, every asset is tailored to look perfect and perform optimally on its intended platform.",
        },

        {
          icon: "FaChartLine",
          heading: "Analytics-Informed Creative Iteration",
          text: "We analyze campaign metrics and refine visuals to maximize engagement, CTR, and ROI, ensuring continuous improvement.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We design high-impact banners, ads, and promotional graphics optimized for both digital and print campaigns. Every visual is crafted to catch eyes, communicate brand values, and inspire action. Using cutting-edge tools, we ensure campaigns are consistent, engaging, and conversion-focused, giving clients confidence and excitement about their marketing.",
      asideText: "Marketing is persuasion in pixels.",

      items: [
        {
          logoUrl: "SiAdobeillustrator",
          heading: "Adobe Illustrator",
          text: "Vector-Based Campaign Assets",
        },

        {
          logoUrl: "SiAdobephotoshop",
          heading: "Adobe Photoshop",
          text: "Image Manipulation & Retouching",
        },

        {
          logoUrl: "SiCanva",
          heading: "Canva",
          text: "Multi-Page & Print Campaign Layouts",
        },

        {
          logoUrl: "SiAdobeindesign",
          heading: "Adobe InDesign",
          text: "Multi-Page & Print Campaign Layouts",
        },

        {
          logoUrl: "SiDevexpress",
          heading: "Adobe Express",
          text: "Interactive & Animated Ads",
        },

        {
          logoUrl: "SiFigma",
          heading: "Figma",
          text: "Collaborative Campaign Design",
        },
      ],
    },

  },

  {
    slug: "Growth-Analytics-n-Marketing-Automation",
    hero: {
      title: "Growth, Analytics & Marketing Automation",
      subHero: "Smarter Marketing, Better Growth",
      description:
        "We combine analytics, automation, and strategic insights to optimize campaigns, increase conversions, and accelerate business growth.",
      imageUrl: "/services/ana.avif",
    },

    serviceSuite: {
      title: "Growth, Analytics & Marketing Automation That Scales",
      subHero:
        "Data-driven strategies, insights, and automated systems that grow your brand, engagement, and revenue effortlessly.",
      description:
        "At Antrosys, growth isn’t guesswork. We combine analytics, automation, and strategic marketing design to maximize ROI, optimize workflows, and accelerate business outcomes. From tracking user behavior to automating campaigns and generating actionable insights, we ensure your brand operates smarter, not harder. This is growth that’s predictable, measurable, and scalable—backed by intelligence, design, and technology.",

      cards: [
        {
          icon: "FaChartLine",
          heading: "Growth Strategy & Funnel Design",
          text: "We map customer journeys, optimize touchpoints, and design funnels that turn leads into loyal customers, combining psychology, UX, and data-driven tactics.",
        },

        {
          icon: "FaRocket",
          heading: "Scale Without Effort",
          text: "Automate emails, campaigns, social posts, and workflows so your brand engages audiences 24/7, freeing your team to focus on strategy and creativity.",
        },

        {
          icon: "FaChartBar",
          heading: "Analytics & Insights",
          text: "We track, measure, and analyze performance across all campaigns and platforms, delivering actionable insights that improve results and minimize wasted effort.",
        },

        {
          icon: "FaCheckCircle",
          heading: "Continuous Improvement, Guaranteed",
          text: "A/B testing, CRO, funnel refinement, and behavioral analysis to maximize conversions, engagement, and ROI across channels.",
        },

        {
          icon: "FaUsers",
          heading: "Speak Directly to the Right People",
          text: "Advanced segmentation and retargeting strategies ensure your campaigns reach the audience most likely to convert, improving efficiency and results.",
        },

        {
          icon: "FaServer",
          heading: "Growth Dashboard & Reporting",
          text: "Custom dashboards that give you real-time insights into campaign performance, traffic, and conversion metrics, making growth visible and actionable.",
        },

        {
          icon: "FaBrain",
          heading: "AI & Automation-Enhanced Marketing",
          text: "Integrate AI-powered tools for predictive analytics, content automation, and lead scoring—ensuring your growth efforts are fast, intelligent, and optimized.",
        },

        {
          icon: "FaStar",
          heading: "Retention & Engagement Programs",
          text: "Design loyalty campaigns, email sequences, and engagement workflows that increase lifetime value and build long-term relationships.",
        },

        {
          icon: "FaLayerGroup",
          heading: "Integrated Growth Systems",
          text: "Connect CRM, marketing, analytics, and automation tools into a cohesive growth machine that scales effortlessly while maintaining brand integrity.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We combine data-driven insights, marketing automation, and intelligent client management to maximize the impact of every campaign. Our stack ensures that every decision — from creative to conversion — is measurable, strategic, and optimized for performance. With transparency, real-time reporting, and predictive analytics, we turn creative brilliance into tangible business growth, inspiring confidence and trust.",
      asideText: "Creativity without insight is just decoration.",

      items: [
        {
          logoUrl: "FaChartLine",
          heading: "Ahrefs",
          text: "SEO Intelligence & Competitive Insights",
        },

        {
          logoUrl: "FaChartBar",
          heading: "SEMrush",
          text: "All-in-One Marketing Analytics",
        },

        {
          logoUrl: "FaSearch",
          heading: "Yoast SEO",
          text: "On-Page SEO Optimization",
        },

        {
          logoUrl: "FaShareAlt",
          heading: "Hootsuite & Buffer",
          text: "Social Media Scheduling & Analytics",
        },

        {
          logoUrl: "FaEnvelope",
          heading: "Mailchimp & HubSpot",
          text: "Email Campaigns & Marketing Automation",
        },

        {
          logoUrl: "FaChartBar",
          heading: "Google Analytics",
          text: "Insight-Driven Decision Making",
        },

        {
          logoUrl: "FaRocket",
          heading: "Marketo",
          text: "Enterprise Marketing Automation",
        },

        {
          logoUrl: "FaTasks",
          heading: "Clickup",
          text: "Collaboration & Workflow Management",
        },
      ],
    },

  },
  {
    slug: "Front-End-Development",
    hero: {
      title: "Front-End Web Development",
      subHero: "Performance You Can Feel",
      description:
        "We craft clean, maintainable front-end code that delivers speed, consistency, and a seamless user experience at every interaction.",
      imageUrl: "/Mockups/httpswww.bigcatcreative.com/2.avif",
    },

    serviceSuite: {
      title: "Front-End Development That Feels Effortless",
      subHero:
        "High-performance, scalable interfaces engineered for speed, clarity, and trust.",
      description:
        "At Antrosys, front-end development is where design intent becomes living software. We build interfaces that are fast, responsive, accessible, and rock-solid—so users feel confidence without ever thinking about the code behind it. Every component is engineered with performance, scalability, and future readiness in mind. No bloated frameworks. No fragile hacks. Just clean, modern front-end systems that work beautifully across devices and platforms.",

      cards: [
        {
          icon: "FaLayerGroup",
          heading: "Modern Front-End Architecture",
          text: "We design component-based architectures using modern frameworks and best practices—ensuring maintainability, reusability, and long-term scalability.",
        },

        {
          icon: "FaEye",
          heading: "Pixel-Perfect UI Implementation",
          text: "We translate design systems into flawless interfaces—respecting spacing, typography, motion, and hierarchy down to the smallest detail. What's designed is what ships.",
        },

        {
          icon: "FaRocket",
          heading: "Performance-Optimized Development",
          text: "Lazy loading, code splitting, optimized assets, and performance budgets ensure your product loads fast and stays fast—on every device, everywhere.",
        },

        {
          icon: "FaMobileAlt",
          heading: "Responsive & Cross-Browser Development",
          text: "Interfaces are rigorously tested across devices, screen sizes, and browsers to guarantee consistent behavior and visual integrity.",
        },

        {
          icon: "FaCog",
          heading: "Design System & Component Libraries",
          text: "We build reusable UI components and design systems in code—accelerating development while eliminating inconsistencies and technical debt.",
        },

        {
          icon: "FaUniversalAccess",
          heading: "Accessibility-First Implementation",
          text: "Semantic HTML, keyboard navigation, contrast compliance, and screen-reader support are built in—not patched later.",
        },

        {
          icon: "FaMagic",
          heading: "Animation & Motion Engineering",
          text: "Micro-interactions, transitions, and animations are implemented to enhance clarity and feedback—never to distract or slow things down.",
        },

        {
          icon: "FaSearch",
          heading: "SEO & Web Standards Optimization",
          text: "Clean markup, metadata, structured content, and performance tuning ensure your front-end is search-engine friendly and standards-compliant.",
        },

        {
          icon: "FaCheckCircle",
          heading: "QA, Testing & Reliability",
          text: "Manual and automated testing catch issues early. What we ship is reliable, resilient, and production-ready.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We build high-performance, visually refined, and conversion-focused interfaces that turn design into living products. Every line of front-end code is written with speed, scalability, accessibility, and user delight in mind. Antrosys bridges design and engineering to deliver experiences that feel smooth, modern, and rock-solid across devices.",
      asideText: "Flawless front-end earns trust. ",

      items: [
        {
          logoUrl: "FaHtml5",
          heading: "HTML5",
          text: "Semantic, Accessible Foundations",
        },

        {
          logoUrl: "SiTailwindcss",
          heading: "Tailwind CSS",
          text: "Rapid, Scalable UI Systems",
        },

        {
          logoUrl: "SiJavascript",
          heading: "JavaScript",
          text: "Interactive User Experiences",
        },

        {
          logoUrl: "SiReact",
          heading: "React",
          text: "Component-Driven Interfaces",
        },

        {
          logoUrl: "SiNextdotjs",
          heading: "Next.js",
          text: "Performance-First Web Apps",
        },

        {
          logoUrl: "SiVuedotjs",
          heading: "Vue",
          text: "Elegant & Flexible Front-End Architecture",
        },

        {
          logoUrl: "SiFramer",
          heading: "Framer Motion",
          text: "Micro-Interactions & Dopamine Design",
        },

        {
          logoUrl: "FaCube",
          heading: "Three.js",
          text: "Immersive Web Experiences",
        },
        {
          logoUrl: "FaBolt",
          heading: "Vite",
          text: "Lightning-Fast Development Workflow",
        },
        {
          logoUrl: "FaBook",
          heading: "Storybook",
          text: "UI Consistency & Trust",
        },
      ],
    },

  },
  {
    slug: "Back-End-Web-Development",
    hero: {
      title: "Back-End Web Development",
      subHero: "The Engine Behind Growth",
      description:
        "From APIs to databases and cloud services, we develop back-end architectures that are stable, scalable, and ready to grow with your business.",
      imageUrl: "/services/bed.avif",
    },

    serviceSuite: {
      title: "Backend Systems Built for Scale",
      subHero:
        "Secure, scalable, and intelligent backend architecture that powers real-world products.",
      description:
        "At Antrosys, backend development is about building the invisible backbone that makes everything else reliable. We design and implement server-side systems that are fast, secure, and designed to scale—so your product performs under pressure and grows without chaos. APIs, databases, authentication, automation, and infrastructure are built with clarity, safety, and long-term evolution in mind. This is backend engineering that earns trust from developers, founders, and users alike.",

      cards: [
        {
          icon: "FaServer",
          heading: "Backend Architecture & System Design",
          text: "We design backend architectures that scale cleanly—modular services, clear boundaries, and future-ready structures that avoid technical debt.",
        },

        {
          icon: "FaCode",
          heading: "API Design & Development",
          text: "Secure, well-documented APIs built for performance and clarity—making front-end integration smooth and third-party connections painless.",
        },

        {
          icon: "FaDatabase",
          heading: "Database Design & Optimization",
          text: "Relational and NoSQL databases structured for performance, integrity, and scalability. Clean schemas. Smart indexing. Zero chaos.",
        },

        {
          icon: "FaLock",
          heading: "Authentication & Authorization",
          text: "Robust user authentication, role-based access, and permission systems that protect data without slowing users down.",
        },

        {
          icon: "FaRocket",
          heading: "Performance & Scalability Engineering",
          text: "Caching, background jobs, async processing, and load optimization ensure your backend performs smoothly—even as traffic and data explode.",
        },

        {
          icon: "FaShieldAlt",
          heading: "Security & Data Protection",
          text: "We implement best practices for encryption, validation, rate limiting, and secure data handling—because trust is non-negotiable.",
        },

        {
          icon: "FaLayerGroup",
          heading: "CMS & Admin Panel Development",
          text: "Custom dashboards and admin systems that give teams power without overwhelming them—clean, intuitive, and purpose-built.",
        },

        {
          icon: "FaLayerGroup",
          heading: "Third-Party Integrations",
          text: "Payment gateways, email services, analytics tools, CRMs, and external APIs—integrated reliably and monitored properly.",
        },
        {
          icon: "FaCog",
          heading: "Automation & Background Processing",
          text: "Scheduled jobs, queues, and automated workflows that handle repetitive tasks, notifications, and data processing efficiently.",
        },
        {
          icon: "FaCloudUploadAlt",
          heading: "DevOps & Deployment Support",
          text: "Environment configuration, deployment pipelines, and monitoring setups that keep releases predictable and systems observable.",
        },
        {
          icon: "FaBug",
          heading: "Testing, Monitoring & Reliability",
          text: "Automated testing, logging, and performance monitoring ensure issues are caught early—before users feel them.",
        },

        {
          icon: "FaChartLine",
          heading: "Long-Term Backend Evolution",
          text: "We refactor, optimize, and evolve backend systems as products scale—keeping them clean, secure, and future-proof.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We architect secure, scalable, and high-performance back-end systems that power modern web and app experiences. Antrosys builds infrastructures that handle growth, protect data, and perform under pressure — from startups to enterprise-grade platforms. Clean architecture, modern APIs, and future-proof stacks are non-negotiable.",
      asideText: "Build a system that survives success.",

      items: [
        {
          logoUrl: "SiNodedotjs",
          heading: "Node.js",
          text: "High-Performance JavaScript Runtime",
        },

        {
          logoUrl: "SiNodedotjs",
          heading: "NestJS",
          text: "Enterprise-Grade Backend Architecture",
        },

        {
          logoUrl: "SiPython",
          heading: "Django",
          text: "Rapid, Reliable API Development",
        },

        {
          logoUrl: "SiLaravel",
          heading: "Laravel",
          text: "Battle-Tested Web Systems",
        },

        {
          logoUrl: "SiPostgresql",
          heading: "PostgreSQL",
          text: "Relational power & complex queries",
        },

        {
          logoUrl: "SiMysql",
          heading: "MySQL",
          text: "Speed & compatibility",
        },

        {
          logoUrl: "SiMongodb",
          heading: "MongoDB",
          text: "Data Integrity & Scalability",
        },

        {
          logoUrl: "SiRedis",
          heading: "Redis",
          text: "Caching & Performance Boost",
        },
        {
          logoUrl: "SiGraphql",
          heading: "GraphQL APIs",
          text: "Clean System Communication",
        },
        {
          logoUrl: "SiDocker",
          heading: "Docker",
          text: "Consistent & Scalable Deployment",
        },
        {
          logoUrl: "SiAmazonwebservices",
          heading: "Cloud Platforms",
          text: "Cloud-Native Scalability",
        },
        {
          logoUrl: "FaLock",
          heading: "JWT",
          text: "Trust & Data Protection",
        },
      ],
    },

  },
  {
    slug: "Website-Maintenance",
    hero: {
      title: "Proactive Care, Zero Stress Website Maintenance",
      subHero: "The Engine Behind Growth",
      description:
        "We manage updates, fixes, and ongoing optimization—keeping your website healthy, secure, and performing at its best.",
      imageUrl: "/services/webm.avif",
    },

    serviceSuite: {
      title: "Website Maintenance That Keeps Everything Running",
      subHero:
        "Ongoing care, protection, and optimization—so your website stays fast, secure, and reliable.",
      description:
        "At Antrosys, website maintenance isn’t an afterthought—it’s operational insurance. We proactively monitor, update, secure, and optimize your website so it performs flawlessly every day. No downtime surprises. No silent failures. No neglected systems. Just a website that stays healthy, secure, and high-performing, while you focus on growth.",

      cards: [
        {
          icon: "FaServer",
          heading: "Continuous Monitoring & Uptime Checks",
          text: "We monitor uptime, performance, and critical errors in real time—so issues are detected and resolved before they affect visitors.",
        },

        {
          icon: "FaShieldAlt",
          heading: "Security Updates & Patching",
          text: "Regular updates, dependency patches, and vulnerability fixes keep your site protected against exploits and attacks.",
        },

        {
          icon: "FaRocket",
          heading: "Performance Optimization",
          text: "We continuously optimize loading speed, assets, and code to ensure your website stays fast—even as content and traffic grow.",
        },

        {
          icon: "FaCloudUploadAlt",
          heading: "Backups & Disaster Recovery",
          text: "Automated backups and recovery plans ensure your data is protected and restorable—no panic, no data loss.",
        },

        {
          icon: "FaEdit",
          heading: "Content & Layout Updates",
          text: "Text updates, image swaps, page adjustments, and layout refinements—handled quickly without breaking design or functionality.",
        },

        {
          icon: "FaGlobe",
          heading: "Compatibility & Browser Updates",
          text: "We ensure your site remains compatible with modern browsers, devices, and operating system updates.",
        },

        {
          icon: "FaLayerGroup",
          heading: "CMS & Admin Panel Development",
          text: "Custom dashboards and admin systems that give teams power without overwhelming them—clean, intuitive, and purpose-built.",
        },

        {
          icon: "FaCog",
          heading: "CMS & Plugin Management",
          text: "We manage CMS updates, plugins, and extensions—removing conflicts and maintaining stability behind the scenes.",
        },
        {
          icon: "FaSearch",
          heading: "SEO Health & Technical Audits",
          text: "Ongoing checks for broken links, indexing issues, performance bottlenecks, and technical SEO health.",
        },
        {
          icon: "FaLock",
          heading: "Security Monitoring & Threat Response",
          text: "Active monitoring for suspicious activity, intrusion attempts, and anomalies—with fast response when needed.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We architect secure, scalable, and high-performance back-end systems that power modern web and app experiences. Antrosys builds infrastructures that handle growth, protect data, and perform under pressure — from startups to enterprise-grade platforms. Clean architecture, modern APIs, and future-proof stacks are non-negotiable.",
      asideText: "Build a system that survives success.",

      items: [
        {
          logoUrl: "SiNodedotjs",
          heading: "Node.js",
          text: "High-Performance JavaScript Runtime",
        },

        {
          logoUrl: "SiNodedotjs",
          heading: "NestJS",
          text: "Enterprise-Grade Backend Architecture",
        },

        {
          logoUrl: "SiPython",
          heading: "Django",
          text: "Rapid, Reliable API Development",
        }, {
          logoUrl: "FaHtml5",
          heading: "HTML5",
          text: "Semantic, Accessible Foundations",
        },

        {
          logoUrl: "SiTailwindcss",
          heading: "Tailwind CSS",
          text: "Rapid, Scalable UI Systems",
        },

        {
          logoUrl: "SiJavascript",
          heading: "JavaScript",
          text: "Interactive User Experiences",
        },

        {
          logoUrl: "SiReact",
          heading: "React",
          text: "Component-Driven Interfaces",
        },

        {
          logoUrl: "SiNextdotjs",
          heading: "Next.js",
          text: "Performance-First Web Apps",
        },

        {
          logoUrl: "SiVuedotjs",
          heading: "Vue",
          text: "Elegant & Flexible Front-End Architecture",
        },

        {
          logoUrl: "SiFramer",
          heading: "Framer Motion",
          text: "Micro-Interactions & Dopamine Design",
        },

        {
          logoUrl: "FaCube",
          heading: "Three.js",
          text: "Immersive Web Experiences",
        },
        {
          logoUrl: "FaBolt",
          heading: "Vite",
          text: "Lightning-Fast Development Workflow",
        },
        {
          logoUrl: "FaBook",
          heading: "Storybook",
          text: "UI Consistency & Trust",
        },

        {
          logoUrl: "SiLaravel",
          heading: "Laravel",
          text: "Battle-Tested Web Systems",
        },

        {
          logoUrl: "SiPostgresql",
          heading: "PostgreSQL",
          text: "Relational power & complex queries",
        },

        {
          logoUrl: "SiMysql",
          heading: "MySQL",
          text: "Speed & compatibility",
        },

        {
          logoUrl: "SiMongodb",
          heading: "MongoDB",
          text: "Data Integrity & Scalability",
        },

        {
          logoUrl: "SiRedis",
          heading: "Redis",
          text: "Caching & Performance Boost",
        },
        {
          logoUrl: "SiGraphql",
          heading: "GraphQL APIs",
          text: "Clean System Communication",
        },
        {
          logoUrl: "SiDocker",
          heading: "Docker",
          text: "Consistent & Scalable Deployment",
        },
        {
          logoUrl: "SiAmazonwebservices",
          heading: "Cloud Platforms",
          text: "Cloud-Native Scalability",
        },
        {
          logoUrl: "FaLock",
          heading: "JWT",
          text: "Trust & Data Protection",
        },
      ],
    },

  },
  {
    slug: "Full-Stack-Web-Development",
    hero: {
      title: "Complete Solutions, Seamlessly Delivered Full-Stack Web Development",
      subHero: "The Engine Behind Growth",
      description:
        "We build end-to-end web applications, combining front-end interfaces and back-end systems to deliver seamless, high-performance digital experiences.",
      imageUrl: "/services/fullstack.avif",
    },

    serviceSuite: {
      title: "Full-Stack Web Development That Works, Everywhere",
      subHero:
        "End-to-end web solutions—front-end, back-end, and everything in between—built to scale, perform, and impress.",
      description:
        "At Antrosys, full-stack development isn’t just coding—it’s engineering complete digital ecosystems. We design, build, and deploy web applications that are fast, secure, and fully integrated, combining beautiful interfaces with powerful backend logic. Every project is optimized for scalability, reliability, and user experience, ensuring your product is ready for growth from day one. Whether it’s a SaaS platform, e-commerce site, or complex web application, we deliver end-to-end solutions that just work.",

      cards: [
        {
          icon: "FaCode",
          heading: "Front-End Development",
          text: "Responsive, intuitive, and dopamine-calibrated interfaces that translate design into seamless user experiences.",
        },
        {
          icon: "FaServer",
          heading: "Back-End Development",
          text: "We design backend architectures that scale cleanly—modular services, clear boundaries, and future-ready structures that avoid technical debt.",
        },
        {
          icon: "FaServer",
          heading: "Backend Architecture & System Design",
          text: "APIs, databases, authentication, and server logic engineered for speed, security, and long-term growth.",
        },

        {
          icon: "FaCode",
          heading: "API Design & Development",
          text: "Secure, well-documented APIs built for performance and clarity—making front-end integration smooth and third-party connections painless.",
        },

        {
          icon: "FaDatabase",
          heading: "Database Design & Optimization",
          text: "Relational and NoSQL databases structured for performance, integrity, and scalability. Clean schemas. Smart indexing. Zero chaos.",
        },
        {
          icon: "FaLayerGroup",
          heading: "Modern Front-End Architecture",
          text: "We design component-based architectures using modern frameworks and best practices—ensuring maintainability, reusability, and long-term scalability.",
        },

        {
          icon: "FaEye",
          heading: "Pixel-Perfect UI Implementation",
          text: "We translate design systems into flawless interfaces—respecting spacing, typography, motion, and hierarchy down to the smallest detail. What's designed is what ships.",
        },

        {
          icon: "FaRocket",
          heading: "Performance-Optimized Development",
          text: "Lazy loading, code splitting, optimized assets, and performance budgets ensure your product loads fast and stays fast—on every device, everywhere.",
        },

        {
          icon: "FaMobileAlt",
          heading: "Responsive & Cross-Browser Development",
          text: "Interfaces are rigorously tested across devices, screen sizes, and browsers to guarantee consistent behavior and visual integrity.",
        },

        {
          icon: "FaCog",
          heading: "Design System & Component Libraries",
          text: "We build reusable UI components and design systems in code—accelerating development while eliminating inconsistencies and technical debt.",
        },

        {
          icon: "FaUniversalAccess",
          heading: "Accessibility-First Implementation",
          text: "Semantic HTML, keyboard navigation, contrast compliance, and screen-reader support are built in—not patched later.",
        },

        {
          icon: "FaMagic",
          heading: "Animation & Motion Engineering",
          text: "Micro-interactions, transitions, and animations are implemented to enhance clarity and feedback—never to distract or slow things down.",
        },

        {
          icon: "FaSearch",
          heading: "SEO & Web Standards Optimization",
          text: "Clean markup, metadata, structured content, and performance tuning ensure your front-end is search-engine friendly and standards-compliant.",
        },

        {
          icon: "FaLock",
          heading: "Authentication & Authorization",
          text: "Robust user authentication, role-based access, and permission systems that protect data without slowing users down.",
        },

        {
          icon: "FaRocket",
          heading: "Performance & Scalability Engineering",
          text: "Caching, background jobs, async processing, and load optimization ensure your backend performs smoothly—even as traffic and data explode.",
        },

        {
          icon: "FaShieldAlt",
          heading: "Security & Data Protection",
          text: "We implement best practices for encryption, validation, rate limiting, and secure data handling—because trust is non-negotiable.",
        },

        {
          icon: "FaLayerGroup",
          heading: "CMS & Admin Panel Development",
          text: "Custom dashboards and admin systems that give teams power without overwhelming them—clean, intuitive, and purpose-built.",
        },

        {
          icon: "FaLayerGroup",
          heading: "Third-Party Integrations",
          text: "Payment gateways, email services, analytics tools, CRMs, and external APIs—integrated reliably and monitored properly.",
        },
        {
          icon: "FaCog",
          heading: "Automation & Background Processing",
          text: "Scheduled jobs, queues, and automated workflows that handle repetitive tasks, notifications, and data processing efficiently.",
        },
        {
          icon: "FaCloudUploadAlt",
          heading: "DevOps & Deployment Support",
          text: "Environment configuration, deployment pipelines, and monitoring setups that keep releases predictable and systems observable.",
        },
        {
          icon: "FaBug",
          heading: "Testing, Monitoring & Reliability",
          text: "Automated testing, logging, and performance monitoring ensure issues are caught early—before users feel them.",
        },

        {
          icon: "FaChartLine",
          heading: "Long-Term Backend Evolution",
          text: "We refactor, optimize, and evolve backend systems as products scale—keeping them clean, secure, and future-proof.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We architect secure, scalable, and high-performance back-end systems that power modern web and app experiences. Antrosys builds infrastructures that handle growth, protect data, and perform under pressure — from startups to enterprise-grade platforms. Clean architecture, modern APIs, and future-proof stacks are non-negotiable.",
      asideText: "Build a system that survives success.",

      items: [
        {
          logoUrl: "SiNodedotjs",
          heading: "Node.js",
          text: "High-Performance JavaScript Runtime",
        },

        {
          logoUrl: "SiNodedotjs",
          heading: "NestJS",
          text: "Enterprise-Grade Backend Architecture",
        },

        {
          logoUrl: "SiPython",
          heading: "Django",
          text: "Rapid, Reliable API Development",
        }, {
          logoUrl: "FaHtml5",
          heading: "HTML5",
          text: "Semantic, Accessible Foundations",
        },

        {
          logoUrl: "SiTailwindcss",
          heading: "Tailwind CSS",
          text: "Rapid, Scalable UI Systems",
        },

        {
          logoUrl: "SiJavascript",
          heading: "JavaScript",
          text: "Interactive User Experiences",
        },

        {
          logoUrl: "SiReact",
          heading: "React",
          text: "Component-Driven Interfaces",
        },

        {
          logoUrl: "SiNextdotjs",
          heading: "Next.js",
          text: "Performance-First Web Apps",
        },

        {
          logoUrl: "SiVuedotjs",
          heading: "Vue",
          text: "Elegant & Flexible Front-End Architecture",
        },

        {
          logoUrl: "SiFramer",
          heading: "Framer Motion",
          text: "Micro-Interactions & Dopamine Design",
        },

        {
          logoUrl: "FaCube",
          heading: "Three.js",
          text: "Immersive Web Experiences",
        },
        {
          logoUrl: "FaBolt",
          heading: "Vite",
          text: "Lightning-Fast Development Workflow",
        },
        {
          logoUrl: "FaBook",
          heading: "Storybook",
          text: "UI Consistency & Trust",
        },

        {
          logoUrl: "SiLaravel",
          heading: "Laravel",
          text: "Battle-Tested Web Systems",
        },

        {
          logoUrl: "SiPostgresql",
          heading: "PostgreSQL",
          text: "Relational power & complex queries",
        },

        {
          logoUrl: "SiMysql",
          heading: "MySQL",
          text: "Speed & compatibility",
        },

        {
          logoUrl: "SiMongodb",
          heading: "MongoDB",
          text: "Data Integrity & Scalability",
        },

        {
          logoUrl: "SiRedis",
          heading: "Redis",
          text: "Caching & Performance Boost",
        },
        {
          logoUrl: "SiGraphql",
          heading: "GraphQL APIs",
          text: "Clean System Communication",
        },
        {
          logoUrl: "SiDocker",
          heading: "Docker",
          text: "Consistent & Scalable Deployment",
        },
        {
          logoUrl: "SiAmazonwebservices",
          heading: "Cloud Platforms",
          text: "Cloud-Native Scalability",
        },
        {
          logoUrl: "FaLock",
          heading: "JWT",
          text: "Trust & Data Protection",
        },
      ],
    },

  },
  {
    slug: "No-Code-Easy-to-Manage-Websites",
    hero: {
      title: "No-Code Easy-to-Manage Websites",
      subHero: "Professional Without the Hassle",
      description:
        "Our no-code/low-code solutions let you run your website effortlessly while maintaining a polished, professional look that grows with your brand.",
      imageUrl: "/services/nocode.avif",
    },

    serviceSuite: {
      title: "No-Code Websites That Are Simple, Stunning, and Scalable",
      subHero:
        "Beautiful websites you can manage yourself—fast to launch, easy to update, and always professional.",
      description:
        "At Antrosys, no-code doesn’t mean low-quality. We build websites using modern, intuitive platforms that let you update content, manage pages, and control your brand online without writing a single line of code. Your website will be fast, responsive, and visually polished, while giving you the freedom and confidence to manage it yourself. Ideal for startups, SMBs, and anyone who wants a premium website without technical dependency.",

      cards: [
        {
          icon: "FaRocket",
          heading: "Launch Quickly, Update Easily",
          text: "Custom layouts built with no-code platforms that are fast to launch and simple to manage, so you're never waiting on a developer for updates.",
        },
        {
          icon: "FaEdit",
          heading: "CMS-Driven Content Management",
          text: "Intuitive content management systems allow you to edit text, images, blogs, and pages easily—no coding experience required.",
        },
        {
          icon: "FaMobileAlt",
          heading: "Fully Responsive Design",
          text: "APIs, databases, authentication, and server logic engineered for speed, security, and long-term growth.",
        },

        {
          icon: "FaSearch",
          heading: "SEO-Friendly Foundations",
          text: "Built-in SEO optimization ensures your website is search-engine ready, helping you attract traffic and grow your presence.",
        },

        {
          icon: "FaCog",
          heading: "Integrated Forms & Automation",
          text: "Forms, workflows, and integrations with email, CRM, or marketing tools—all managed without touching code.",
        },

        {
          icon: "FaShoppingBag",
          heading: "Sell Online Effortlessly",
          text: "No-code platforms for product catalogs, payments, and order management—perfect for SMBs looking to scale online quickly.",
        },

        {
          icon: "FaPalette",
          heading: "Visual Customization & Branding",
          text: "Tailored colors, fonts, layouts, and imagery so your no-code website feels premium, cohesive, and unique.",
        },

        {
          icon: "FaChartBar",
          heading: "Analytics & Insights Integration",
          text: "Integrated analytics dashboards allow you to track traffic, engagement, and conversions, empowering informed decisions without technical complexity.",
        },

        {
          icon: "FaLock",
          heading: "Security & Maintenance Simplified",
          text: "No-code platforms include hosting, SSL, and automatic updates—keeping your website secure, stable, and worry-free.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We create beautiful, fully functional websites on top-tier no-code platforms that are easy for clients to manage, fast to deploy, and built for scalability. Antrosys ensures your brand looks premium online, while giving you full control without needing a developer. These sites are optimized for performance, SEO, mobile responsiveness, and user experience.",
      asideText: "Powerful websites shouldn't be complicated.",

      items: [
        {
          logoUrl: "SiWix",
          heading: "Wix",
          text: "Visual Website Building with Speed",
        },

        {
          logoUrl: "SiWebflow",
          heading: "Webflow",
          text: "Professional, Designer-First Websites",
        },

        {
          logoUrl: "SiGodaddy",
          heading: "GoDaddy",
          text: "Quick Deployment & Easy Management",
        },

        {
          logoUrl: "SiSquarespace",
          heading: "Squarespace",
          text: "Elegant, Template-Driven Excellence",
        },

        {
          logoUrl: "SiFramer",
          heading: "Framer",
          text: "Interactive, Motion-Rich Sites",
        },

        {
          logoUrl: "FaRocket",
          heading: "Lovaable",
          text: "Rapid, Lightweight No-Code Solutions",
        },

        {
          logoUrl: "FaGlobe",
          heading: "Duda",
          text: "Client-Friendly Multi-Site Management",
        },

        {
          logoUrl: "SiOdoo",
          heading: "Odoo",
          text: "Odoo allows websites tightly integrated with e-commerce, CRM, and automation, giving clients a unified, easy-to-manage digital ecosystem.",
        },
        {
          logoUrl: "FaServer",
          heading: "HubSpot CMS",
          text: "Integrated CMS + Business Tools",
        },
        {
          logoUrl: "FaGlobe",
          heading: "Weebly",
          text: "Marketing-Ready Websites",
        },
      ],
    },

  

    

  },
  {
    slug: "WordPress-Engineered-Websites",
    hero: {
      title: "WordPress Engineered Websites",
      subHero: "Professional. Secure. Effortless.",
      description:
        "Our engineered WordPress websites deliver reliable functionality, strong security, and intuitive management—so your digital presence performs flawlessly.",
      imageUrl: "/services/wordpress.avif",
    },

    serviceSuite: {
      title: "WordPress Engineered Websites That Perform",
      subHero:
        "Custom, scalable, and fully managed WordPress solutions—beautiful, fast, and future-ready.",
      description:
        "At Antrosys, WordPress isn’t just installed—it’s engineered. We build websites that take full advantage of WordPress’s flexibility while optimizing performance, security, and scalability. Your site will be visually stunning, easy to manage, and capable of handling growth. From custom themes to advanced plugin integration, every WordPress website is crafted to deliver premium performance and unmatched reliability.",

      cards: [
        {
          icon: "FaPaintBrush",
          heading: "Custom WordPress Theme Development",
          text: "We create custom themes tailored to your brand, ensuring your WordPress site is one-of-a-kind, responsive, and scalable.",
        },
        {
          icon: "FaCog",
          heading: "Plugin Integration & Optimization",
          text: "Smart integration of essential plugins for SEO, forms, e-commerce, and analytics—optimized for speed and stability.",
        },
        {
          icon: "FaRocket",
          heading: "Performance & Speed",
          text: "Caching, asset optimization, and database tuning ensure high-speed performance across devices and platforms.",
        },

        {
          icon: "FaShieldAlt",
          heading: "Security & Hardening",
          text: "Advanced security measures, backups, and monitoring keep your WordPress website protected against threats and vulnerabilities.",
        },

        {
          icon: "FaSearch",
          heading: "SEO & Technical Optimization",
          text: "WordPress websites configured with SEO best practices, structured data, and clean markup to boost search engine visibility.",
        },

        {
          icon: "FaShoppingBag",
          heading: "E-Commerce Solutions",
          text: "Fully engineered e-commerce setups, including product catalogs, payments, shipping, and automation—ready to scale with your business.",
        },

        {
          icon: "FaEdit",
          heading: "Custom Post Types & Dynamic Content",
          text: "Tailored content structures and dynamic templates that allow easy updates without compromising design or functionality.",
        },

        {
          icon: "FaMobileAlt",
          heading: "Responsive & Mobile-First Design",
          text: "WordPress sites built to adapt perfectly to all screen sizes, giving your users an effortless experience.",
        },

        {
          icon: "FaChartBar",
          heading: "Analytics & Marketing Integration",
          text: "Integrated tracking, analytics, and marketing tools to turn visitors into insights, leads, and conversions.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We build custom WordPress websites engineered for performance, scalability, and client control. From blogs to enterprise e-commerce platforms, every site leverages modern themes, page builders, and plugins to ensure your website looks premium, performs flawlessly, and is easy to manage.",
      asideText: "A canvas for limitless possibilities.",

      items: [
        {
          logoUrl: "SiWoocommerce",
          heading: "WooCommerce",
          text: "Scalable E-Commerce Engine",
        },

        {
          logoUrl: "SiElementor",
          heading: "Elementor",
          text: "Designer-First Page Builder",
        },

        {
          logoUrl: "SiWordpress",
          heading: "Gutenberg",
          text: "Flexible Content Management",
        },

        {
          logoUrl: "FaRocket",
          heading: "WP Rocket",
          text: "Lightning-Fast Load Times",
        },

        {
          logoUrl: "FaSearch",
          heading: "Yoast SEO",
          text: "Built-In Search Optimization",
        },
      ],
    },

  },
  {
    slug: "Shopify-Websites",
    hero: {
      title: "Shopify Websites",
      subHero: "Launch. Sell. Scale. Repeat.",
      description:
        "From setup to design and optimization, we craft Shopify websites that reflect your brand, engage shoppers, and drive consistent growth.",
      imageUrl: "/services/shopify.avif",
    },

    serviceSuite: {
      title: "Shopify Websites That Sell",
      subHero:
        "Custom, scalable, and high-converting Shopify stores built for growth and ease of management.",
      description:
        "At Antrosys, Shopify isn’t just another platform—we engineer stores that perform. From stunning storefronts to optimized checkout flows, every Shopify website is designed to maximize sales, streamline operations, and delight customers. With a mix of custom design, apps integration, and marketing-ready architecture, your Shopify store is beautiful, reliable, and fully capable of scaling with your business.",

      cards: [
        {
          icon: "FaPalette",
          heading: "Custom Shopify Theme Design",
          text: "Tailored themes that reflect your brand identity while optimizing user experience and conversion rates.",
        },
        {
          icon: "FaCog",
          heading: "Setup & Configuration",
          text: "Complete setup including product catalogs, payment gateways, shipping rules, taxes, and operational workflows—everything needed to launch immediately.",
        },
        {
          icon: "FaLayerGroup",
          heading: "App & Integration Optimization",
          text: "Integrate apps for marketing, inventory, CRM, analytics, and automation—enhancing store functionality while keeping speed and stability high.",
        },

        {
          icon: "FaChartLine",
          heading: "Conversion-Focused Store Design",
          text: "Optimized layouts, product pages, and checkout flows designed to maximize clicks, add-to-cart rates, and completed sales.",
        },

        {
          icon: "FaMobileAlt",
          heading: "Responsive & Mobile-First Design",
          text: "Shopify stores fully optimized for desktop, tablet, and mobile devices—smooth experience for every shopper.",
        },

        {
          icon: "FaSearch",
          heading: "SEO & Marketing Optimization",
          text: "Built-in SEO best practices, structured data, and marketing integrations to ensure your store gets discovered and converts effectively.",
        },

        {
          icon: "FaChartBar",
          heading: "E-Commerce Analytics & Reporting",
          text: "Track sales, traffic, conversions, and customer behavior—turn data into smarter decisions and scalable growth.",
        },

        {
          icon: "FaCreditCard",
          heading: "Payment & Checkout",
          text: "Secure, fast, and frictionless checkout flows to reduce cart abandonment and increase revenue.",
        },

        {
          icon: "FaWrench",
          heading: "Ongoing Maintenance & Support",
          text: "Continuous updates, security patches, speed optimizations, and troubleshooting—your Shopify store stays fast, secure, and sales-ready.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We build custom Shopify stores engineered for sales, user experience, and brand consistency. Every store is optimized for mobile responsiveness, conversion, and scalability, while giving clients full control over products, content, and marketing campaigns.",
      asideText: "It's your 24/7 sales engine",

      items: [
        {
          logoUrl: "SiShopify",
          heading: "Shopify CMS",
          text: "Streamlined Store Management",
        },

        {
          logoUrl: "SiShopify",
          heading: "Shopify Plus",
          text: "Enterprise-Level E-Commerce",
        },

        {
          logoUrl: "SiShopify",
          heading: "Shopify POS",
          text: "Custom Store Design & Functionality",
        },
      ],
    },

  },
  {
    slug: "Next-Gen-Desktop-Applications",
    hero: {
      title: "Next-Gen Desktop Applications",
      subHero: "High-Performance, User-Focused.",
      description:
        "We develop next-generation desktop applications that combine high performance, modern design, and seamless usability to deliver exceptional user experiences.",
      imageUrl: "/services/deskapp.avif",
    },

    serviceSuite: {
      title: "Next-Gen Desktop Applications That Perform",
      subHero:
        "High-performance, modern desktop software built for speed, reliability, and scalability.",
      description:
        "At Antrosys, we create desktop applications that combine beautiful interfaces, robust performance, and advanced functionality. Whether it’s productivity tools, enterprise software, or creative applications, every desktop app is engineered to deliver exceptional user experience while leveraging modern technologies.",

      cards: [
        {
          icon: "FaLaptopCode",
          heading: "Cross-Platform Desktop Apps",
          text: "Build applications that run seamlessly on Windows, macOS, and Linux—maximizing reach while minimizing maintenance.",
        },
        {
          icon: "FaRocket",
          heading: "Native Performance Engineering",
          text: "High-performance architecture leveraging native capabilities to ensure low-latency, responsive, and stable applications.",
        },
        {
          icon: "FaPalette",
          heading: "Modern UI/UX Design",
          text: "Intuitive interfaces, motion design, and clean workflows that delight users and improve productivity.",
        },

        {
          icon: "FaBuilding",
          heading: "Enterprise Software Solutions",
          text: "Custom desktop applications for enterprise workflows, data processing, and automation—designed to scale with organizational needs.",
        },

        {
          icon: "FaChartBar",
          heading: "Data-Driven & Analytical Apps",
          text: "Desktop applications with dashboards, analytics, and visualization tools—turning raw data into actionable insights.",
        },

        {
          icon: "FaLock",
          heading: "Security & Compliance",
          text: "Robust authentication, data encryption, and compliance standards for enterprise and sensitive applications.",
        },

        {
          icon: "FaCloud",
          heading: "Offline & Online Functionality",
          text: "Applications that work offline while seamlessly syncing with cloud services—perfect for flexible workflows and distributed teams.",
        },

        {
          icon: "FaCode",
          heading: "Integrations & API Connectivity",
          text: "Integrate with databases, APIs, and external systems—ensuring your desktop app fits perfectly into your tech stack.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We build high-performance desktop applications that combine modern UI, cross-platform functionality, and robust architecture. Whether it's productivity tools, creative software, or enterprise apps, our solutions are fast, intuitive, and reliable — giving users a seamless experience that feels futuristic.",
      asideText: "Where speed, control, and user experience converge.",

      items: [
        {
          logoUrl: "SiElectron",
          heading: "Electron 26",
          text: "Cross-Platform Desktop Excellence",
        },

        {
          logoUrl: "SiTauri",
          heading: "Tauri 2.x",
          text: "Lightweight & Secure Apps",
        },

        {
          logoUrl: "SiDotnet",
          heading: "C# / .NET 8",
          text: "Enterprise-Grade Desktop Solutions ",
        },
        {
          logoUrl: "SiSwift",
          heading: "Swift",
          text: "Native macOS Apps ",
        },
        {
          logoUrl: "SiQt",
          heading: "Qt 6",
          text: "Cross-Platform UI Toolkit",
        },
        {
          logoUrl: "SiPython",
          heading: "Python",
          text: "Rapid Development & Prototyping",
        },
      ],
    },
  },
  {
    slug: "Automated-Chat-Systems",
    hero: {
      title: "Automated Chat Systems (Chatbots)",
      subHero: "Smart Conversations, Simplified",
      description:
        "Our chat systems leverage AI and automation to handle queries efficiently, improve customer satisfaction, and free your team for higher-value tasks.",
      imageUrl: "/services/chatbot.avif",
    },

    serviceSuite: {
      title: "Automated Chat Systems That Engage & Convert",
      subHero:
        "AI-powered chatbots that handle customer interactions 24/7—enhancing engagement, support, and conversions.",
      description:
        "At Antrosys, chatbots aren’t just programmed responses—they’re strategically designed automated agents that interact naturally with users. From customer support to lead qualification, our chat systems deliver instant, personalized, and intelligent conversations.",

      cards: [
        {
          icon: "FaComments",
          heading: "Instant Help, Always On",
          text: "Automated chat systems capable of answering FAQs, handling requests, and escalating complex issues—24/7 customer service that feels human.",
        },
        {
          icon: "FaUsers",
          heading: "Capture & Convert Effortlessly",
          text: "Chatbots that collect visitor information, qualify leads, and integrate with CRM systems—turning conversations into opportunities.",
        },
        {
          icon: "FaGlobe",
          heading: "Multi-Platform Chatbot Integration",
          text: "Deploy chat systems across websites, mobile apps, Facebook Messenger, WhatsApp, and other platforms—consistent experience everywhere.",
        },

        {
          icon: "FaBrain",
          heading: "AI & NLP Integration",
          text: "Leverage Natural Language Processing and AI to understand user intent, respond intelligently, and improve over time.",
        },

        {
          icon: "FaPalette",
          heading: "Chatbot Personalization",
          text: "Bots designed to communicate with your brand's tone, style, and personality—enhancing trust and recognition.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We build smart, responsive chat systems that enhance customer support, lead generation, and user engagement. Using AI-driven natural language processing, these systems understand, respond, and guide users. Antrosys chat solutions increase satisfaction, retention, and trust, while freeing your team to focus on high-value tasks",
      asideText: "Instant answers. Intelligent engagement. Always-on trust.",

      items: [
        {
          logoUrl: "SiOpenai",
          heading: "OpenAI",
          text: "Advanced Conversational AI",
        },

        {
          logoUrl: "SiDialogflow",
          heading: "Dialogflow CX",
          text: "Enterprise-Ready Bot Framework",
        },

        {
          logoUrl: "SiRasa",
          heading: "Rasa Open Source",
          text: "Customizable, Privacy-Focused Bots",
        },
        {
          logoUrl: "FaRobot",
          heading: "Botpress",
          text: "Developer-Friendly Conversational AI",
        },
        {
          logoUrl: "FaComments",
          heading: "ManyChat",
          text: "Marketing & Sales Chat Automation",
        },
        {
          logoUrl: "SiWhatsapp",
          heading: "WhatsApp Business",
          text: "Connect, automate, and grow.",
        },
        {
          logoUrl: "FaBrain",
          heading: "Gemini AI Studio",
          text: "Rapid AI application development.",
        },
      ],
    },

  },
  {
    slug: "Cloud-Solutions",
    hero: {
      title: "Cloud Solutions Services",
      subHero: "Powering Growth in Cloud",
      description:
        "We help businesses move, build, and scale in the cloud—ensuring high availability, strong security, and long-term efficiency.",
      imageUrl: "/services/cloud.avif",
    },

    serviceSuite: {
      title: "Cloud Solutions That Scale Without Limits",
      subHero:
        "Secure, intelligent, and high-performance cloud infrastructure built for growth, resilience, and speed.",
      description:
        "At Antrosys, cloud is not “just hosting.” It’s strategic infrastructure engineering. We design, deploy, and manage cloud environments that are fast, secure, scalable, and future-proof—giving businesses confidence that their systems can grow without breaking.",

      cards: [
        {
          icon: "FaServer",
          heading: "Cloud Architecture Design",
          text: "Custom cloud architectures designed for performance, reliability, and long-term growth—no shortcuts, no bottlenecks.",
        },
        {
          icon: "FaCloudUploadAlt",
          heading: "Cloud Migration Services",
          text: "Seamless migration of websites, apps, databases, and systems to the cloud with zero data loss and minimal downtime.",
        },
        {
          icon: "FaCog",
          heading: "Managed Cloud Infrastructure",
          text: "Full cloud management including monitoring, optimization, backups, and updates—your infrastructure stays healthy 24/7.",
        },

        {
          icon: "FaRocket",
          heading: "Scalable Hosting & Deployment",
          text: "Auto-scaling environments that handle traffic spikes effortlessly—always fast, always available.",
        },
        {
          icon: "FaCog",
          heading: "DevOps & CI/CD Automation",
          text: "Automated build, test, and deployment pipelines that reduce errors and accelerate development cycles.",
        },
        {
          icon: "FaDatabase",
          heading: "Cloud Databases & Storage Solutions",
          text: "High-availability databases and intelligent storage systems designed for speed, redundancy, and scalability.",
        },
        {
          icon: "FaCloud",
          heading: "Serverless & Modern Cloud Apps",
          text: "Serverless solutions that reduce cost and complexity while delivering high performance and rapid scalability.",
        },
        {
          icon: "FaChartBar",
          heading: "Monitoring, Analytics & Cost Optimization",
          text: "Real-time monitoring, performance analytics, and cost optimization to maximize ROI and eliminate inefficiencies.",
        },

        {
          icon: "FaCloudUploadAlt",
          heading: "Disaster Recovery & Backups",
          text: "Automated backups and recovery strategies that protect your business from downtime, data loss, and disasters.",
        },
        {
          icon: "FaLock",
          heading: "Cloud Security & Compliance",
          text: "Advanced security practices including encryption, access control, firewalls, and compliance standards—protecting data at every layer.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We design, deploy, and manage secure, scalable cloud infrastructures that power modern digital products. Antrosys cloud solutions ensure high availability, performance, data protection, and cost efficiency — whether you're launching fast or scaling globally. Everything is engineered for reliability, flexibility, and long-term growth.",
      asideText: "Cloud systems that scale without fear.",

      items: [
        {
          logoUrl: "SiAmazonwebservices",
          heading: "Amazon Web Services",
          text: "Global-Scale Cloud Infrastructure",
        },

        {
          logoUrl: "SiGooglecloud",
          heading: "Google Cloud Platform",
          text: "Data & AI-Driven Cloud Solutions",
        },

        {
          logoUrl: "FaCloud",
          heading: "Microsoft Azure",
          text: "Enterprise & Hybrid Cloud Power",
        },
        {
          logoUrl: "FaCloud",
          heading: "Cloud Architecture & Migration",
          text: "From Local to Cloud, Without Pain",
        },
        {
          logoUrl: "SiKubernetes",
          heading: "Kubernetes",
          text: "Container Orchestration at Scale",
        },
        {
          logoUrl: "SiDocker",
          heading: "Docker",
          text: "Consistent & Portable Environments",
        },

        {
          logoUrl: "FaDatabase",
          heading: "Cloud Databases & Storage",
          text: "Reliable Data at Any Scale",
        },
        {
          logoUrl: "FaCode",
          heading: "CI/CD Pipelines",
          text: "Fast, Safe, Automated Delivery",
        },

        {
          logoUrl: "FaCloud",
          heading: "Serverless",
          text: "Pay-Only-for-What-You-Use Systems",
        },
      ],
    },

  },
  {
    slug: "AI-Solutions",
    hero: {
      title: "Artificial Intelligence (AI) Solutions",
      subHero: "Smart Systems, Real Impact",
      description:
        "Our AI solutions help businesses optimize operations, personalize experiences, and scale intelligently using data-driven intelligence.",
      imageUrl: "/services/aisol.avif",
    },

    serviceSuite: {
      title: "Artificial Intelligence Solutions That Think Ahead",
      subHero:
        "Human-centered AI systems that automate, predict, personalize, and accelerate business growth.",
      description:
        "At Antrosys, AI is not hype—it’s applied intelligence. We design and deploy AI systems that solve real problems: automating operations, uncovering insights, enhancing decision-making, and creating smarter user experiences.",

      cards: [
        {
          icon: "FaBrain",
          heading: "Custom AI System Development",
          text: "Tailored AI solutions designed around your business goals—not generic models, but purpose-driven intelligence.",
        },
        {
          icon: "FaBrain",
          heading: "Machine Learning Models",
          text: "Supervised and unsupervised ML models that evolve with your data—becoming smarter over time.",
        },
        {
          icon: "FaChartLine",
          heading: "Predictive Analytics & Forecasting",
          text: "AI systems that analyze patterns and predict outcomes—empowering proactive decisions instead of reactive ones.",
        },

        {
          icon: "FaComments",
          heading: "Natural Language Processing (NLP)",
          text: "AI that reads, understands, and generates text—powering chatbots, sentiment analysis, summarization, and automation.",
        },
        {
          icon: "FaEye",
          heading: "Computer Vision Solutions",
          text: "Image and video analysis systems for recognition, detection, and classification—turning visuals into actionable data.",
        },
        {
          icon: "FaUsers",
          heading: "Personalization Engines",
          text: "AI-driven recommendations that increase engagement, retention, and conversions—users feel understood instantly.",
        },
        {
          icon: "FaCog",
          heading: "AI Automation Workflows",
          text: "Automate complex tasks and workflows using AI—reducing costs while increasing accuracy and speed.",
        },
        {
          icon: "FaDatabase",
          heading: "Data Engineering for AI",
          text: "Design and optimize data pipelines, labeling, and storage—AI performance starts with data integrity.",
        },

        {
          icon: "FaCode",
          heading: "AI Integration & Deployment",
          text: "Seamless integration of AI systems into web apps, mobile apps, desktop software, and cloud environments.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We design and deploy practical, production-ready AI systems that automate work, extract insight from data, and enhance decision-making. Antrosys focuses on useful intelligence, not demos.",
      asideText: "Intelligence you can actually rely on.",

      items: [
        {
          logoUrl: "SiOpenai",
          heading: "LLMs",
          text: "We integrate state-of-the-art language models to power chatbots, copilots, knowledge bases, and automation tools.",
        },

        {
          logoUrl: "FaRobot",
          heading: "AI Agents",
          text: "AI agents designed to monitor systems, execute workflows, analyze data, and assist teams.",
        },

        {
          logoUrl: "FaBrain",
          heading: "ML",
          text: "We build ML models for recommendations, forecasting, classification, and anomaly detection, turning raw data into actionable insights that drive smarter decisions.",
        },
        {
          logoUrl: "FaEye",
          heading: "Computer Vision",
          text: "AI systems that understand images and video — from object detection and OCR to facial recognition and quality inspection for real-world and industrial use cases.",
        },
        {
          logoUrl: "FaComments",
          heading: "NLP",
          text: "We develop NLP pipelines for sentiment analysis, document processing, summarization, and intent detection, unlocking value from unstructured text data.",
        },
        {
          logoUrl: "FaDatabase",
          heading: "RAG",
          text: "Retrieval-Augmented Generation systems that combine AI with your private data, delivering accurate, traceable answers without hallucinations — ideal for enterprises and internal tools.",
        },
      ],
    },

  },
  {
    slug: "QA-QC",
    hero: {
      title: "Quality Assurance / Quality Control",
      subHero: "Precision in Every Detail",
      description:
        "We rigorously test and validate every product to ensure functionality, performance, and reliability—so your systems work exactly as intended.",
      imageUrl: "/services/qa.avif",
    },

    serviceSuite: {
      title: "Quality Assurance That Protects Your Reputation",
      subHero:
        "Relentless testing, validation, and optimization to ensure every product works flawlessly—before users ever see it.",
      description:
        "We don’t just find bugs. We prevent failures, protect user trust, and ensure your product delivers confidence at scale.",

      cards: [
        {
          icon: "FaUsers",
          heading: "User Validation",
          text: "Exploratory and scenario-based testing to catch usability issues, logic flaws, and edge cases automation can't see.",
        },
        {
          icon: "FaCog",
          heading: "Automated Testing Systems",
          text: "Automated test suites for regression, functional, and performance testing—fast feedback without sacrificing accuracy.",
        },
        {
          icon: "FaCheckCircle",
          heading: "Functional & Integration Testing",
          text: "Validate features, APIs, third-party integrations, and workflows—no broken connections, no surprises.",
        },

        {
          icon: "FaServer",
          heading: "Load Testing",
          text: "Ensure applications remain fast and stable under heavy traffic, peak usage, and stress conditions.",
        },
        {
          icon: "FaLock",
          heading: "Vulnerability Testing",
          text: "Identify security gaps, data leaks, and attack vectors—protecting systems before attackers find them.",
        },
        {
          icon: "FaGlobe",
          heading: "Cross-Platform Testing",
          text: "Testing across browsers, operating systems, devices, and screen sizes—consistent experience for every user.",
        },
        {
          icon: "FaEye",
          heading: "UI/UX Consistency",
          text: "Validate spacing, typography, animations, and interactions—your product looks and feels premium everywhere.",
        },
        {
          icon: "FaDatabase",
          heading: "Backend Validation",
          text: "Ensure backend logic, APIs, and databases perform correctly, securely, and efficiently.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We ensure every product delivered by Antrosys meets strict quality, performance, security, and usability standards.",
      asideText: "Antrosys ships calm, confident software.",

      items: [
        {
          logoUrl: "SiSelenium",
          heading: "Selenium",
          text: " robust, open-source umbrella project for tools and libraries that primarily enable the automation of web browsers. ",
        },

        {
          logoUrl: "SiJest",
          heading: "Jest/ts",
          text: "open-source JavaScript testing framework",
        },

        {
          logoUrl: "SiPostman",
          heading: "Postman",
          text: "unified environment for designing, developing, testing, and monitoring APIs. ",
        },
      ],
    },

  },

  {
    slug: "App-Dev",
    hero: {
      title: "Cross-Platform Mobile App Development",
      subHero: "Built Once, Scales Everywhere",
      description:
        "We build reliable cross-platform mobile applications that perform smoothly, look native, and scale with your product growth.",
      imageUrl: "/services/app.avif",
    },

    serviceSuite: {
      title: "Cross-Platform Mobile Apps Built to Win",
      subHero:
        "High-performance mobile applications for iOS and Android—designed once, experienced everywhere.",
      description:
        "At Antrosys, we build mobile apps that feel native, fast, and addictive, while maintaining a single, scalable codebase. Our cross-platform approach delivers speed to market without compromising quality, giving businesses powerful apps that users love and trust.",

      cards: [
        {
          icon: "FaLayerGroup",
          heading: "Cross-Platform App Architecture",
          text: "Single codebase solutions that run flawlessly on iOS and Android—lower cost, faster iteration, massive reach.",
        },
        {
          icon: "FaRocket",
          heading: "Native-Grade Performance",
          text: "Optimized rendering, smooth animations, and responsive interactions—users never know it's cross-platform.",
        },
        {
          icon: "FaPalette",
          heading: "Mobile UI/UX Design",
          text: "Human-centered interfaces, micro-interactions, and motion design that maximize engagement and retention.",
        },

        {
          icon: "FaServer",
          heading: "Backend Integration",
          text: "Seamless integration with backend systems, cloud services, AI engines, and third-party APIs.",
        },
        {
          icon: "FaCloud",
          heading: "Offline Mode",
          text: "Offline-first capabilities with intelligent syncing—reliable even without connectivity.",
        },
        {
          icon: "FaLock",
          heading: "Secure Authentication",
          text: "Biometrics, token-based auth, encryption, and secure storage—user data stays protected.",
        },
        {
          icon: "FaCloudUploadAlt",
          heading: "Deployment",
          text: "End-to-end publishing support, compliance handling, and store optimization—smooth approvals, zero stress.",
        },
      ],
    },

    techStack: {
      title: "Our Technology Arsenal",
      description:
        "We design and build high-performance mobile applications for iOS and Android that are intuitive, scalable, and secure.",
      asideText: "Apps users love to open.",

      items: [
        {
          logoUrl: "SiFlutter",
          heading: "Flutter",
          text: " High-Performance Cross-Platform Apps ",
        },

        {
          logoUrl: "SiReact",
          heading: "React Native",
          text: "Scalable Mobile Experiences",
        },

        {
          logoUrl: "SiSwift",
          heading: "Swift (iOS)",
          text: "Native iOS Excellence",
        },
        {
          logoUrl: "SiKotlin",
          heading: "Kotlin (Android)",
          text: "Modern Android Development",
        },
      ],
    },

  },
];