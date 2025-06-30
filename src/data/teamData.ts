export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  skills: string[];
  experience: string;
  email: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  quote: string;
  joinDate: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "nyuydine-bill",
    name: "Nyuydine Bill",
    role: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with over 8 years of experience in tech entrepreneurship. Passionate about transforming ideas into reality and building innovative solutions for Africa.",
    image: "/assets/images/nyuydine.jpeg",
    skills: ["Leadership", "Strategic Planning", "Business Development", "Product Vision"],
    experience: "8+ years",
    email: "nyuydine@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/nyuydine-bill",
      twitter: "https://twitter.com/nyuydinebill",
    },
    quote: "Believe in Possibilities!",
    joinDate: "2020-01-01"
  },
  {
    id: "kongyuy-livingston",
    name: "Kongyuy Livingston",
    role: "CTO & Founder",
    department: "Leadership",
    bio: "Tech innovator with expertise in scalable architecture and modern development practices. Dedicated to building robust solutions that drive digital transformation.",
    image: "/assets/images/kongnyuy.jpeg",
    skills: ["Full-Stack Development", "System Architecture", "Cloud Computing", "DevOps"],
    experience: "7+ years",
    email: "kongyuy@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/kongyuy-livingston",
      github: "https://github.com/kongyuy",
    },
    quote: "In the midst of difficulty lies opportunity.",
    joinDate: "2020-01-01"
  },
  {
    id: "sarah-mbeng",
    name: "Sarah Mbeng",
    role: "Head of Design",
    department: "Design",
    bio: "Creative designer with a passion for user-centered design. Specializes in creating intuitive interfaces that enhance user experience across all platforms.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    skills: ["UI/UX Design", "Design Systems", "Prototyping", "User Research"],
    experience: "5+ years",
    email: "sarah@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/sarah-mbeng",
      twitter: "https://twitter.com/sarahmbeng",
    },
    quote: "Design is not just what it looks like - design is how it works.",
    joinDate: "2020-06-15"
  },
  {
    id: "james-fon",
    name: "James Fon",
    role: "Senior Full-Stack Developer",
    department: "Engineering",
    bio: "Experienced developer with expertise in React, Node.js, and cloud technologies. Passionate about writing clean, maintainable code and mentoring junior developers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Database Design"],
    experience: "6+ years",
    email: "james@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/james-fon",
      github: "https://github.com/jamesfon",
    },
    quote: "Code is poetry written in logic.",
    joinDate: "2020-09-01"
  },
  {
    id: "grace-tabi",
    name: "Grace Tabi",
    role: "Product Manager",
    department: "Product",
    bio: "Strategic product manager with a keen eye for market trends and user needs. Expert in driving product development from conception to launch.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    skills: ["Product Strategy", "Market Research", "Agile Methodology", "Data Analysis"],
    experience: "4+ years",
    email: "grace@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/grace-tabi",
      twitter: "https://twitter.com/gracetabi",
    },
    quote: "Great products solve real problems for real people.",
    joinDate: "2021-02-15"
  },
  {
    id: "paul-kum",
    name: "Paul Kum",
    role: "Mobile App Developer",
    department: "Engineering",
    bio: "Mobile development specialist with expertise in React Native and Flutter. Focused on creating seamless mobile experiences that delight users.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    skills: ["React Native", "Flutter", "iOS Development", "Android Development"],
    experience: "4+ years",
    email: "paul@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/paul-kum",
      github: "https://github.com/paulkum",
    },
    quote: "Mobile-first is not just a strategy, it's a mindset.",
    joinDate: "2021-05-10"
  },
  {
    id: "alice-ndip",
    name: "Alice Ndip",
    role: "DevOps Engineer",
    department: "Engineering",
    bio: "Infrastructure and automation expert passionate about streamlining development workflows and ensuring system reliability and scalability.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring"],
    experience: "5+ years",
    email: "alice@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/alice-ndip",
      github: "https://github.com/alicendip",
    },
    quote: "Automate everything that can be automated.",
    joinDate: "2021-08-20"
  },
  {
    id: "david-che",
    name: "David Che",
    role: "QA Engineer",
    department: "Quality Assurance",
    bio: "Quality assurance specialist dedicated to ensuring our products meet the highest standards. Expert in both manual and automated testing methodologies.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    skills: ["Test Automation", "Manual Testing", "Selenium", "API Testing"],
    experience: "3+ years",
    email: "david@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/david-che",
    },
    quote: "Quality is never an accident; it is always the result of effort.",
    joinDate: "2022-01-15"
  },
  {
    id: "mary-kong",
    name: "Mary Kong",
    role: "Marketing Manager",
    department: "Marketing",
    bio: "Creative marketing professional with expertise in digital marketing, brand management, and customer engagement strategies.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    skills: ["Digital Marketing", "Content Strategy", "Social Media", "Brand Management"],
    experience: "4+ years",
    email: "mary@zilotech.com",
    social: {
      linkedin: "https://linkedin.com/in/mary-kong",
      twitter: "https://twitter.com/marykong",
    },
    quote: "Marketing is about connecting with people at the right moment.",
    joinDate: "2022-03-01"
  }
]; 