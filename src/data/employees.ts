export interface Employee {
  id: string;
  name: string;
  department: string;
  designation: string;
  email: string;
  phone: string;
  location: string;
  joiningDate: string;
  about: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  avatarUrl: string;
}

export const employees: Employee[] = [
  {
    id: "EMP-8821",
    name: "Rohan Sharma",
    department: "IT",
    designation: "Senior Solutions Architect",
    email: "r.sharma@techredy.com",
    phone: "+91 98765 43210",
    location: "Mumbai, MH",
    joiningDate: "March 12, 2021",
    about: "Rohan is a seasoned full-stack engineer with over 8 years of experience building scalable enterprise applications. He joined Techredy IT Solution in 2021 and has since led the modernization of our core recruitment module. He is passionate about clean code, mentoring junior developers, and exploring the intersection of AI and human resources.",
    skills: ["React.js", "Node.js", "AWS Architecture", "TypeScript", "PostgreSQL", "Docker"],
    experience: [
      {
        title: "Lead Developer",
        company: "Techredy IT Solution",
        duration: "2023 - Present",
        description: "Spearheaded the integration of cloud-native microservices architecture."
      },
      {
        title: "Senior Software Engineer",
        company: "Techredy IT Solution",
        duration: "2021 - 2023",
        description: "Developed automated testing pipelines reducing deployment errors by 40%."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: "EMP-9042",
    name: "Priya Patel",
    department: "HR",
    designation: "Talent Acquisition Manager",
    email: "p.patel@techredy.com",
    phone: "+91 98765 43211",
    location: "Ahmedabad, GJ",
    joiningDate: "August 5, 2019",
    about: "Priya is a strategic HR professional specializing in technical recruiting. She has built high-performing teams across multiple continents.",
    skills: ["Technical Recruiting", "Employer Branding", "Negotiation", "Workday"],
    experience: [
      {
        title: "Talent Acquisition Manager",
        company: "Techredy IT Solution",
        duration: "2021 - Present",
        description: "Led global recruitment strategy, reducing time-to-hire by 15%."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: "EMP-7719",
    name: "Amit Verma",
    department: "Finance",
    designation: "Chief Financial Officer",
    email: "a.verma@techredy.com",
    phone: "+91 98765 43212",
    location: "New Delhi, DL",
    joiningDate: "January 15, 2018",
    about: "Amit brings 15 years of corporate finance experience, focusing on sustainable growth and strategic investments.",
    skills: ["Financial Forecasting", "M&A", "Risk Management", "Strategic Planning"],
    experience: [
      {
        title: "CFO",
        company: "Techredy IT Solution",
        duration: "2020 - Present",
        description: "Managed global financial operations and drove profitable growth."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: "EMP-8334",
    name: "Anjali Rao",
    department: "Marketing",
    designation: "Lead Content Strategist",
    email: "a.rao@techredy.com",
    phone: "+91 98765 43213",
    location: "Bengaluru, KA",
    joiningDate: "June 22, 2022",
    about: "Anjali is a creative storyteller who loves shaping brand narratives that resonate with global audiences.",
    skills: ["Content Strategy", "SEO", "Copywriting", "Digital Marketing"],
    experience: [
      {
        title: "Lead Content Strategist",
        company: "Techredy IT Solution",
        duration: "2022 - Present",
        description: "Redesigned content framework, increasing organic traffic by 50%."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=4"
  },
  {
    id: "EMP-6551",
    name: "Vikram Singh",
    department: "Engineering",
    designation: "Backend Developer",
    email: "v.singh@techredy.com",
    phone: "+91 98765 43214",
    location: "Noida, UP",
    joiningDate: "November 10, 2023",
    about: "Vikram is an enthusiastic backend developer specializing in Python and Go microservices.",
    skills: ["Python", "Go", "Kubernetes", "MongoDB"],
    experience: [
      {
        title: "Backend Developer",
        company: "Techredy IT Solution",
        duration: "2023 - Present",
        description: "Optimized database queries, reducing response times significantly."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=5"
  },
  {
    id: "EMP-4992",
    name: "Sneha Reddy",
    department: "Legal",
    designation: "Senior Legal Counsel",
    email: "s.reddy@techredy.com",
    phone: "+91 98765 43215",
    location: "Hyderabad, TS",
    joiningDate: "February 1, 2020",
    about: "Sneha ensures Techredy IT Solution complies with international employment laws and manages corporate risk.",
    skills: ["Corporate Law", "Contract Negotiation", "Compliance", "Employment Law"],
    experience: [
      {
        title: "Senior Legal Counsel",
        company: "Techredy IT Solution",
        duration: "2020 - Present",
        description: "Advises executive team on legal risks and global expansion strategies."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=6"
  },
  {
    id: "EMP-1029",
    name: "Divya Iyer",
    department: "IT",
    designation: "Senior Frontend Architect",
    email: "d.iyer@techredy.com",
    phone: "+91 98765 43216",
    location: "Chennai, TN",
    joiningDate: "May 18, 2019",
    about: "Divya is a UX-focused engineer passionate about accessibility and performant web interfaces.",
    skills: ["React.js", "Vue.js", "CSS Architecture", "Web Accessibility"],
    experience: [
      {
        title: "Senior Frontend Architect",
        company: "Techredy IT Solution",
        duration: "2021 - Present",
        description: "Created company-wide UI component library used across 10+ projects."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=7"
  },
  {
    id: "EMP-2341",
    name: "Rahul Nair",
    department: "HR",
    designation: "Head of Talent Acquisition",
    email: "r.nair@techredy.com",
    phone: "+91 98765 43217",
    location: "Kochi, KL",
    joiningDate: "September 1, 2017",
    about: "Rahul oversees all recruitment activities and focuses on diversity and inclusion initiatives.",
    skills: ["Talent Strategy", "Leadership", "D&I", "HR Analytics"],
    experience: [
      {
        title: "Head of Talent Acquisition",
        company: "Techredy IT Solution",
        duration: "2019 - Present",
        description: "Implemented new inclusive hiring practices globally."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=8"
  },
  {
    id: "EMP-5678",
    name: "Abhinav Joshi",
    department: "Finance",
    designation: "Lead Financial Analyst",
    email: "a.joshi@techredy.com",
    phone: "+91 98765 43218",
    location: "Pune, MH",
    joiningDate: "October 10, 2021",
    about: "Abhinav uses data to drive financial strategies and identify cost-saving opportunities.",
    skills: ["Financial Modeling", "Data Analysis", "Tableau", "Excel"],
    experience: [
      {
        title: "Lead Financial Analyst",
        company: "Techredy IT Solution",
        duration: "2021 - Present",
        description: "Built automated financial dashboards for executive leadership."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=9"
  },
  {
    id: "EMP-9876",
    name: "Kavita Deshmukh",
    department: "IT",
    designation: "UI/UX Design Lead",
    email: "k.deshmukh@techredy.com",
    phone: "+91 98765 43219",
    location: "Nagpur, MH",
    joiningDate: "December 5, 2022",
    about: "Kavita blends aesthetics with usability to create delightful product experiences.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    experience: [
      {
        title: "UI/UX Design Lead",
        company: "Techredy IT Solution",
        duration: "2022 - Present",
        description: "Redesigned the core employee portal improving user satisfaction by 30%."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=10"
  },
  {
    id: "EMP-3456",
    name: "Riya Kapoor",
    department: "Marketing",
    designation: "Social Media Manager",
    email: "r.kapoor@techredy.com",
    phone: "+91 98765 43220",
    location: "Kolkata, WB",
    joiningDate: "July 14, 2023",
    about: "Riya manages digital presence and engages with the community across various platforms.",
    skills: ["Social Media Strategy", "Content Creation", "Analytics", "Hootsuite"],
    experience: [
      {
        title: "Social Media Manager",
        company: "Techredy IT Solution",
        duration: "2023 - Present",
        description: "Grew social media following by 150% in the first year."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=11"
  },
  {
    id: "EMP-7654",
    name: "Sandeep Mehta",
    department: "Engineering",
    designation: "DevOps Engineer",
    email: "s.mehta@techredy.com",
    phone: "+91 98765 43221",
    location: "Gurugram, HR",
    joiningDate: "April 20, 2020",
    about: "Sandeep focuses on infrastructure automation and reliable deployment strategies.",
    skills: ["AWS", "Terraform", "CI/CD", "Linux"],
    experience: [
      {
        title: "DevOps Engineer",
        company: "Techredy IT Solution",
        duration: "2020 - Present",
        description: "Migrated legacy systems to a fully automated cloud infrastructure."
      }
    ],
    avatarUrl: "https://i.pravatar.cc/150?u=12"
  }
];
