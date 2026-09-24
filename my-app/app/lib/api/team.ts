import type { TeamMember } from "../../type/team";
import { STRAPI_URL } from "./config";

export async function fetchTeam(): Promise<TeamMember[]> {
  const response = await fetch(
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