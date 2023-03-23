import GitHubApi from "./GitHubApi";

export default function useGitHubApi() {
  const api = new GitHubApi({
    baseURL: "https://api.github.com",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN}`
    }
  });

  return api
}