import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import MediumIcon from '../components/Icon/MediumIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mohamed Eltaher - ios Engineer  🧙🏻‍♂️',
  description: "I'm Mohamed Eltaher, a Berlin based Software Architect, currently working at SAP SE.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mohamed Eltaher.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm <strong className="text-stone-100">iOS Engineer 🧙🏻‍♂️ </strong>with more than 1 year experience 
         <strong className="text-stone-100"></strong> helping build a modern Applications 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I believe I can do anything. <strong className="text-stone-100">making a coffee ☕ or making a rocket 🚀</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time , you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: "https://drive.google.com/file/d/1KS8T-AuPDLcv4wu47Zz9DIhtN2d766oZ/view",
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced iOS Engineer with 1 years in Swift, SwiftUI. Skilled at building user-focused, high-performance mobile apps that drive business value. Strong problem solver and team player, dedicated to delivering seamless user experiences.`,
  aboutItems: [
    {label: 'Location', text: 'Cairo, Egypt', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Egyptian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'Higher Technological Institute ', Icon: AcademicCapIcon},
    
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Tools ',
    skills: [
      {
        name: 'Development & IDE: Xcode, Swift, Instruments',
        level: 8,
      },
      {
        name: 'Version Control & Collaboration: Git, GitHub, GitLab, Bitbucket',
        level: 8,
      },
      {
        name: 'UI/UX Design: Figma, Sketch',
        level: 8,
      },
      {
        name: 'Testing & Debugging: XCTest, TestFlight, Postman, Charles Proxy',
        level: 8,
      },
      {
        name: 'Project Management & APIs: Jira, Trello, Firebase, CocoaPods',
        level: 8,
      }
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Swift',
        level: 9,
      } ,
      {
        name: 'Python',
        level: 6,
      },
    ],
  },
  {
    name: 'ios development',
    skills: [
      {
        name: 'UIKit',
        level: 8,
      },
      {
        name: 'alamofire',
        level: 8,
      },
      {
        name: 'SwiftUI',
        level: 7,
      },
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'CoreData, SQlite',
        level: 6,
      }
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      
      {
        name: 'Arabic',
        level: 10,
      },
    ],
  },
  
  

  
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MeinProspekt: Einkauf Planen',
    description: 's a feature designed by equipifi, a platform specializing in Buy Now, Pay Later (BNPL) solutions. This particular solution empowers banks and credit unions to provide pre-qualified installment loans for their customers directly through their digital banking apps. The app enables users to access flexible financing options before making a purchase, allowing loans typically between $500 and $2,000, with approval processes that are quick and do not require credit checks or additional applications.',
    url: 'https://apps.apple.com/de/app/sap-ariba-shopping/id1593253867https://apps.apple.com/de/app/meinprospekt-einkauf-planen/id1031838771?l=en-GB',
    image: porfolioImage2,
  },
  {
    title: 'LinkOut',
    description: 'Linkout app is an integrated system that makes it easy to hire individuals It also provides companies with many advantages Which saves them time and effort to follow up and choose the right individuals in a sophisticated manner And professional through iPhone applications.',
    url: 'https://apps.apple.com/eg/app/linkout/id6444288176',
    image: porfolioImage4,
   }
//   {
//     title: 'momox: Selling second hand',
//     description: "Selling on momox is now even easier! Whether it's books & media or clothing & accessories, from now on you can sell everything in just one app!MOMOX MAKES YOU SPACE! Grab your used items and give them a new home! The nicest, easiest and most sustainable way to get rid of your things - sell now with momox.",
//     url: 'https://apps.apple.com/de/app/momox-second-hand-verkaufen/id414543719',
//     image: porfolioImage3,
//   },
//   {
//     title: 'AUTO1.com',
//     description: "AUTO1.com is the leading online marketplace for the efficient purchase and sale of tested vehicles. As an independent and cross-brand automotive wholesaler, AUTO1.com is aimed exclusively at commercial retailers.With a verified vehicle inventory of over 40,000 vehicles and over 3,000 new arrivals every day, you as a dealer can find the right vehicle for your individual used car program - always at market-based purchasing conditions. More than 45,000 partner dealers from over 30 countries already use AUTO1.com as a reliable purchasing source for their used car business. With the free AUTO1.com app, partner dealers have the opportunity to purchase comprehensively documented vehicles at attractive conditions directly from AUTO1.com throughout Europe with just a few clicks: 24 hours a day, 7 days a week - with no hidden fees, brokerage commissions or minimum purchase quantities. Partner dealers can use the AUTO1.com app to participate in all ongoing auctions and place bids in real time. As a dealer, you can also conveniently purchase vehicles directly at a fixed price via our Buy It Now section.",
//     url: 'https://apps.apple.com/de/app/auto1-com/id1064015230',
//     image: porfolioImage4,
//   },
//   {
//     title: 'AUTO1 EVA App',
//     description: "AUTO1 EVA enables you to offer vehicles to over 60,000 dealers in more than 30 countries. Benefit from competitive prices across Europe while we remain your sole contract, service, and contact partner. AUTO1.com handles the entire marketing and processing, including payment, transportation, and export handling. Evaluate a vehicle in under 15 minutes with our intuitive app and list it for sale in a 24-hour auction to our extensive network of partner dealers.",
//     url: 'https://apps.apple.com/de/app/auto1-eva-app/id1504637176',
//     image: porfolioImage5,
//  },
//   {
//     title: 'MeinVodafone / AnaVodafone (10+ million installations)',
//     description: "MeinVodafone is self-care mobile application, I participated in developing the REST APIs using Java Springboot and worked on the mobile app.",
//     url: 'https://apps.apple.com/de/app/meinvodafone/id398195347',
//     image: porfolioImage6,
//   },
//   {
//     title: 'mySTC KSA (5+ million installations)',
//     description: 'mySTC app is Self-care mobile application, I participated in developing the REST APIs using Java Springboot and worked on the Android app.',
//     url: 'https://apps.apple.com/de/app/mystc-ksa/id808807355',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Kotobi',
//     description: 'Kotobi is considered the first Arabic E-reader App. I participated in the Android app and the Rest APIs using Java Springboot.',
//     url: 'https://play.google.com/store/apps/details?id=com.vis.kotob&hl=en&pli=1',
//     image: porfolioImage8,
//   },
//   {
//     title: 'BLE Electrometer Charging SDK',
//     description: "BLE Electrometer Charging SDK aims to recharge the smart electrometers via mobile phones, I developed the Android app in Kotlin & The Rest APIs in Java Spring Boot.",
//     url: 'https://apps.apple.com/de/app/ecg-powerapp/id1398352884',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Makan SDK (RTLS SDK)',
//     description: "A Real-time Locating Systems SDK, which enables companies to develop their indoor maps mobile apps, I developed the Android app in Kotlin & The Rest APIs in Python Django.",
//     url: 'https://play.google.com/store/apps/details?id=place.where.atmalls',
//     image: porfolioImage10,
//   },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2019- June 2024',
    location: 'Cairo, Egypt',
    title: 'BEng. in Computers & Communications, Higher Technological Institute.',
    content: <p>I've studied my bachelor in Faculty of Engineering in Electonics & comunication in Higher Technological Institute of 10th of Ramadan City.<br />
    I have studied a lot of topics such as:<br />
    •Calculus<br />
    •Statistic <br />
    •Comunication <br />
    •Artificial intelligence<br />
    •Machine learning<br />
    •Data mining<br />
    •Natural language processing<br />
    •Robotics<br />
    •Analysis of algorithms <br />
    •Algorithms <br />
    •Data structures <br />
    •Combinatorial optimization <br />
    •Computational geometry<br />
    •Digital logic<br />
    •Microarchitecture<br />
    •Multiprocessing<br />
    •Systems architecture <br />
    •Operating systems<br />
    •Computational physics <br />
    •Computational chemistry <br />
    •Bioinformatics.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2023 - August 2024',
    location: 'XApps Solutions, Cairo',
    title: 'iOS Developer',
    content: (
      <p>
• Assessing, identifying, and developing iOS solutions for mobile applications<br />
• Leading iOS development projects, ensuring timely delivery and quality<br />
• Documenting every aspect of iOS app development, including code, features, and processes<br />
• Training and mentoring development team members to maintain high standards in iOS development<br />
• Planning, tracking, and managing timelines for iOS application deliverables<br />
• Addressing challenges related to software and hardware integration for iOS apps<br />
• Troubleshooting and resolving issues within iOS applications and systems<br />
• Fostering collaborative relationships with teams like Marketing, Product Management, Designers, and Backend Engineers<br />
</p>
    ),
  },
  {
    date: 'August 2023 - October 2023',
    location: 'Banque Misr, Cairo',
    title: 'iOS Developer',
    content: (
      <p>
      • Analyzing, identifying, and creating solutions for iOS applications<br />
      • Managing and overseeing iOS app development projects<br />
      • Maintaining detailed documentation for all aspects of iOS app development<br />
      • Guiding and mentoring team members in iOS development practices<br />
      • Organizing, tracking, and coordinating deadlines for iOS app deliverables<br />
      • Resolving technical challenges involving iOS software and hardware interactions<br />
      • Identifying and troubleshooting issues within iOS applications<br />
      • Building strong working relationships with cross-functional teams, including Marketing, Product, Design, and Engineering<br />
      </p>
    ),
  },
  {
    date: 'March 2022 - May 2023',
    location: 'Toll Collect GmbH, remote',
    title: 'iOS Developer',
    content: (
      <p>
      • Analyzing, identifying, and creating solutions for iOS applications<br />
      • Managing and overseeing iOS app development projects<br />
      • Maintaining detailed documentation for all aspects of iOS app development<br />
      • Guiding and mentoring team members in iOS development practices<br />
      • Organizing, tracking, and coordinating deadlines for iOS app deliverables<br />
      • Resolving technical challenges involving iOS software and hardware interactions<br />
      • Identifying and troubleshooting issues within iOS applications<br />
      • Building strong working relationships with cross-functional teams, including Marketing, Product, Design, and Engineering<br />
      </p>
    ),
  },

];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Asem Ayman',
      text: 'Mohamed is a high professional, friendly and very good team player. It was a pleasure to work with him! He has amazing skills and passionate about sharing his knowlege with his team.',
      image: '',
    },
    {
      name: 'Mohamed Elmaazy',
      text: "I had the pleasure of studying android track under instructing Mohamed Eltaher , He is hard worker , patient , Confident ,Positive thinker , innovator , have excellent technical knowledge ,learn me how to think in my own business",
      image: '',
    },
    {
      name: 'Abdrahman ashour',
      text: 'Mohamed is very active person, really a hard worker, very ambitious and he like what he is doing ',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you’d like to discuss tech, security, or software solutions—or even just want to chat about the latest innovations—feel free to reach out!',
  items: [
    {
      type: ContactType.Email,
      text: 'mohamed.ahmedeltaher@gmail.com',
      href: 'mailto:mohamed.ahmedeltaher@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'cairo, Egypt',
      href: 'https://maps.app.goo.gl/bHNWS4GJf4BuhH5T9',
    },
    {
      type: ContactType.Phone,
      text: '01016721456',
      href: ' https://wa.me/01016721456',
    },
    {
      type: ContactType.LinkedIn,
      text: 'mohamed-el-taher',
      href: 'https://www.linkedin.com/in/mohamed-el-taher/',
    },
    {
      type: ContactType.Github,
      text: 'mohamedeltaher',
      href: 'https://github.com/mohamedeltaher',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mohamed-el-taher/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mohamedeltaher'},
  {label: 'Medium', Icon: MediumIcon, href: 'https://medium.com/@mohamed.ahmedeltaher'},
];
