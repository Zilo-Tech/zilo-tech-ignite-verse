export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  reactions: {
    likes: number;
    loves: number;
    insights: number;
  };
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  publishDate: string;
  replies?: Comment[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why You Should Invest in ZiloTech",
    excerpt: "Discover the innovative solutions, strong market potential, and experienced team that makes ZiloTech a smart investment choice.",
    content: `
      <p>ZiloTech represents a unique opportunity in the rapidly evolving technology landscape. Our company stands at the intersection of innovation and practical application, delivering solutions that address real-world challenges.</p>
      
      <h3>Innovative Solutions</h3>
      <p>We don't just follow trends – we create them. Our portfolio includes groundbreaking applications like Z-Learn, which revolutionizes education in Cameroon, and Yamo, which transforms food delivery experiences.</p>
      
      <h3>Strong Market Potential</h3>
      <p>The African tech market is experiencing unprecedented growth, with a projected CAGR of 15% over the next five years. ZiloTech is positioned to capture significant market share in this expanding ecosystem.</p>
      
      <h3>Experienced Team</h3>
      <p>Our founders bring decades of combined experience in software development, business strategy, and market expansion. We understand both the technical and commercial aspects of building successful tech products.</p>
      
      <h3>Focus on Sustainable Growth</h3>
      <p>We prioritize sustainable growth over rapid scaling, ensuring that our solutions remain robust and our company maintains its innovative edge in the long term.</p>
    `,
    author: "Nyuydine Bill",
    authorRole: "CEO & Founder",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    category: "Investment",
    tags: ["Investment", "Technology", "Innovation"],
    image: "/assets/images/ZiloTech Official Logo.png",
    reactions: {
      likes: 45,
      loves: 23,
      insights: 12
    },
    comments: [
      {
        id: "c1",
        author: "Sarah Johnson",
        content: "This is exactly what the African tech scene needs. ZiloTech's approach to solving local problems is inspiring.",
        publishDate: "2024-01-16"
      },
      {
        id: "c2",
        author: "Michael Chen",
        content: "The focus on sustainable growth is refreshing. Too many startups focus on scaling without proper foundations.",
        publishDate: "2024-01-17"
      }
    ]
  },
  {
    id: "2",
    title: "Why Choose Z-Learn for Your Educational Journey",
    excerpt: "Explore how Z-Learn's innovative features including AI-powered Z-Bot, comprehensive past questions, and interactive forums revolutionize exam preparation.",
    content: `
      <p>Z-Learn represents a paradigm shift in how students prepare for examinations in Cameroon. Our comprehensive platform combines cutting-edge technology with proven educational methodologies.</p>
      
      <h3>Comprehensive Past Questions Database</h3>
      <p>With over 500+ carefully curated past questions from various Cameroonian educational institutions, Z-Learn provides students with the most comprehensive exam preparation resource available.</p>
      
      <h3>AI-Powered Z-Bot Assistant</h3>
      <p>Our revolutionary Z-Bot uses advanced AI algorithms to provide personalized learning recommendations, instant question explanations, and adaptive study plans tailored to each student's learning style.</p>
      
      <h3>Interactive Chat Forums</h3>
      <p>Connect with fellow students, share insights, and collaborate on challenging problems through our vibrant community forums. Learning is always better when shared.</p>
      
      <h3>Real-Time Announcements</h3>
      <p>Stay updated with the latest exam schedules, changes in curriculum, and important educational news through our real-time notification system.</p>
      
      <h3>User-Friendly Interface</h3>
      <p>Our intuitive design ensures that students can focus on learning rather than navigating complex interfaces. Every feature is designed with the user experience in mind.</p>
    `,
    author: "Kongyuy Livingston",
    authorRole: "CTO & Founder",
    publishDate: "2024-01-20",
    readTime: "7 min read",
    category: "Education",
    tags: ["Education", "AI", "Mobile App", "Z-Learn"],
    image: "/assets/images/z-learn.jpeg",
    reactions: {
      likes: 67,
      loves: 34,
      insights: 18
    },
    comments: [
      {
        id: "c3",
        author: "Grace Mbua",
        content: "Z-Learn helped me pass my GCE with flying colors! The AI assistant is incredibly helpful.",
        publishDate: "2024-01-21"
      }
    ]
  },
  {
    id: "3",
    title: "The Future of Food Delivery: Why Invest in YAMO",
    excerpt: "Discover how YAMO's AI-powered recommendations and innovative features are transforming the food delivery landscape in Cameroon.",
    content: `
      <p>The food delivery industry in Africa is experiencing explosive growth, and YAMO is positioned to capture a significant share of this expanding market.</p>
      
      <h3>AI-Powered Recommendations</h3>
      <p>YAMO's sophisticated AI algorithms analyze user preferences, order history, and local trends to provide personalized food recommendations that enhance user satisfaction and increase order frequency.</p>
      
      <h3>Multiple Revenue Streams</h3>
      <p>Our platform generates revenue through multiple channels: delivery fees, restaurant partnerships, premium subscriptions, and advertising opportunities, ensuring sustainable growth and profitability.</p>
      
      <h3>Strategic Partnerships</h3>
      <p>We've established strong partnerships with local restaurants, delivery services, and payment providers, creating a robust ecosystem that benefits all stakeholders.</p>
      
      <h3>Market Growth Potential</h3>
      <p>The African food delivery market is projected to grow by 25% annually over the next five years, with increasing smartphone penetration and changing consumer behaviors driving this growth.</p>
    `,
    author: "Maite Lorella",
    authorRole: "Backend Developer",
    publishDate: "2024-01-25",
    readTime: "6 min read",
    category: "Food Tech",
    tags: ["Food Delivery", "AI", "Investment", "YAMO"],
    image: "/assets/images/yamo.png",
    reactions: {
      likes: 52,
      loves: 28,
      insights: 15
    },
    comments: []
  }
];
