export type Blog = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  description: string;
  content?: unknown;
};