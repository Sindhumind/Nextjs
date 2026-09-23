export type Media = {
  url: string;
};

export type SiteSettings = {
  name: string;
  description: string;
  footerText?: string;
  mission: string;
  vision: string;
  logo?: Media | null;
  heroImage?: Media | null;
};