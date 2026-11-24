export type Language = 'en' | 'ar';

export interface Project {
  id: string;
  name: string; // Will show verified placeholder or client text
  city: string;
  category: 'residential' | 'commercial' | 'industrial' | 'all';
  scope: string;
  description: string;
  imageUrl: string;
  technicalDetails?: string[];
}

export interface SolutionItem {
  title: string;
  items: string[];
  imageUrl: string;
}

export interface SolutionCategory {
  id: 'aluminum' | 'glass' | 'steel';
  title: string;
  description: string;
  imageUrl: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  isVerified: boolean;
}
