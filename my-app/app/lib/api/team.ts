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

export async function fetchTeamMember(id: string): Promise<TeamMember | null> {
  const response = await fetch(
    `http://localhost:1337/api/team-members/${id}?populate=photo`
  );

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  return result.data;
}