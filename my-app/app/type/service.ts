export type Service = {
  id: number;
  title: string;
  Description: string;
  Price: number;
  image?: {
    url: string;
  } | null;
};