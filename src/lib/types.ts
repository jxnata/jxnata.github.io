export interface Project {
  name: string;
  url?: string;
  description: string;
  image: string;
  tags: string[];
  appstore?: string;
  playstore?: string;
  inactive?: boolean;
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