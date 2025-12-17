export interface Project {
  name: string;
  order: number;
  url?: string;
  description: string;
  image: string;
  technologies: string[];
  appstore?: string;
  playstore?: string;
  inactive?: boolean;
  featured?: boolean;
  slug: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
  cover_image: string;
}

export interface SocialLinks {
  github: string;
  twitter: string;
  devto: string;
}