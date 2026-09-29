import type { TeamMember } from "../../types/team";
import { STRAPI_URL } from "./config";
import { fetchFromStrapi } from "./fetcher";

export async function fetchTeam(): Promise<TeamMember[]> {
   const response = await fetchFromStrapi(
    `${STRAPI_URL}/api/team-members?populate=photo`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch team members");
  }

  const result = await response.json();

  return result.data;
}

export async function fetchTeamMember(
  documentId: string
): Promise<TeamMember | null> {
  const response = await fetch(
    `${STRAPI_URL}/api/team-members/${documentId}?populate=photo`
  );

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  return result.data;
}