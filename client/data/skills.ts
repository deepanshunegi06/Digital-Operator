import {
  Code2,
  Zap,
  Palette,
  Film,
  PenTool,
  Megaphone,
  Share2,
  ShoppingCart,
  Briefcase,
  Mic,
  Video,
  TrendingUp,
} from "lucide-react";

export interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

export const skills: Skill[] = [
  {
    id: "developer",
    name: "Programmer/Developer",
    icon: Code2,
    description: "Full-stack development and technical architecture",
  },
  {
    id: "ai",
    name: "AI Automation",
    icon: Zap,
    description: "AI integration and automation workflows",
  },
  {
    id: "designer",
    name: "Designer",
    icon: Palette,
    description: "UI/UX and visual design",
  },
  {
    id: "motion",
    name: "Motion/Animation",
    icon: Film,
    description: "Animation and motion graphics",
  },
  {
    id: "copy",
    name: "Copywriting",
    icon: PenTool,
    description: "Compelling written content",
  },
  {
    id: "marketing",
    name: "Marketer/Ads",
    icon: Megaphone,
    description: "Marketing strategy and paid advertising",
  },
  {
    id: "social",
    name: "Social Media",
    icon: Share2,
    description: "Social media strategy and content",
  },
  {
    id: "ecommerce",
    name: "E-Commerce/Dropshipping",
    icon: ShoppingCart,
    description: "E-commerce operations and management",
  },
  {
    id: "operations",
    name: "Business/Operations",
    icon: Briefcase,
    description: "Business strategy and operations",
  },
  {
    id: "speaker",
    name: "Voice/Speaker",
    icon: Mic,
    description: "Voice talent and public speaking",
  },
  {
    id: "video",
    name: "Video Editor",
    icon: Video,
    description: "Video editing and production",
  },
  {
    id: "trader",
    name: "Crypto Trader",
    icon: TrendingUp,
    description: "Cryptocurrency trading and analysis",
  },
];
