export async function getLatestVersion(): Promise<string> {
  const versionRes = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versions = await versionRes.json();
  return versions[0];
}
