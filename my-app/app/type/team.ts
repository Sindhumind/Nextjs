export type TeamMember = {
  id: number;
  documentId: string;
  name: string;
  designation: string;
  bio: string;
  photo?: {
    url: string;
  } | null;
};