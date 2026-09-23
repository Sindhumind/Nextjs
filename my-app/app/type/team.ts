export type TeamMember = {
  id: number;
  name: string;
  designation: string;
  bio: string;
  photo?: {
    url: string;
  } | null;
};