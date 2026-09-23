import type { TeamMember } from "../../type/team";

export async function fetchTeam(): Promise<TeamMember[]> {
  const response = await fetch(
    "http://localhost:1337/api/team-members?populate=photo"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch team members");
  }

  const result = await response.json();

  return result.data;
}