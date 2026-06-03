import React from 'react';
import { 
  SiGo, SiRedis, SiNextdotjs, SiReact, SiTailwindcss, SiDocker, 
  SiPostgresql, SiPrisma, SiTypescript, SiNodedotjs, SiSocketdotio, 
  SiWebrtc, SiJsonwebtokens, SiMongodb, SiRabbitmq, SiExpress,
  SiOpenai
} from 'react-icons/si';
import { Database, FileJson, Server, Activity, Lock, Cpu, Globe, ArrowRightLeft, GitPullRequest } from 'lucide-react';

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  let Icon: React.ElementType = Cpu;
  let color = "#9CA3AF"; // default subtle color

  const t = tech.toLowerCase();

  if (t.includes('go')) {
    Icon = SiGo; color = "#00ADD8";
  } else if (t.includes('redis')) {
    Icon = SiRedis; color = "#DC382D";
  } else if (t.includes('next.js')) {
    Icon = SiNextdotjs; color = "#E4E4E7"; // zinc-200
  } else if (t.includes('react')) {
    Icon = SiReact; color = "#61DAFB";
  } else if (t.includes('tailwind')) {
    Icon = SiTailwindcss; color = "#06B6D4";
  } else if (t.includes('docker')) {
    Icon = SiDocker; color = "#2496ED";
  } else if (t.includes('postgres') || t.includes('sql')) {
    Icon = SiPostgresql; color = "#4169E1";
  } else if (t.includes('prisma')) {
    Icon = SiPrisma; color = "#2D3748";
  } else if (t.includes('typescript')) {
    Icon = SiTypescript; color = "#3178C6";
  } else if (t.includes('node.js')) {
    Icon = SiNodedotjs; color = "#339933";
  } else if (t.includes('socket.io')) {
    Icon = SiSocketdotio; color = "#E4E4E7";
  } else if (t.includes('webrtc')) {
    Icon = SiWebrtc; color = "#E4E4E7";
  } else if (t.includes('jwt')) {
    Icon = SiJsonwebtokens; color = "#FB015B";
  } else if (t.includes('mongodb') || t.includes('mongoose')) {
    Icon = SiMongodb; color = "#47A248";
  } else if (t.includes('rabbitmq')) {
    Icon = SiRabbitmq; color = "#FF6600";
  } else if (t.includes('express')) {
    Icon = SiExpress; color = "#E4E4E7";
  } else if (t.includes('openai') || t.includes('gemini')) {
    Icon = SiOpenai; color = "#10B981"; // emerald for AI
  } else if (t.includes('database') || t.includes('storage') || t.includes('pinecone') || t.includes('hash index') || t.includes('b-tree')) {
    Icon = Database; color = "#F59E0B";
  } else if (t.includes('concurrency')) {
    Icon = Activity; color = "#8B5CF6";
  } else if (t.includes('log')) {
    Icon = FileJson; color = "#10B981";
  } else if (t.includes('query')) {
    Icon = ArrowRightLeft; color = "#EC4899";
  } else if (t.includes('webhook')) {
    Icon = GitPullRequest; color = "#F97316";
  } else if (t.includes('auth')) {
    Icon = Lock; color = "#EAB308";
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed rounded-lg transition-all duration-500 hover:bg-accent/80 hover:shadow-[0_0_12px_var(--badge-color)] hover:border-solid hover:-translate-y-0.5 group-hover:border-opacity-100"
      style={{ 
        borderColor: `${color}50`,
        "--badge-color": `${color}30`
      } as React.CSSProperties}
    >
      <Icon className="w-3.5 h-3.5" style={{ color }} />
      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{tech}</span>
    </span>
  );
}
