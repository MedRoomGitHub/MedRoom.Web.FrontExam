import GitHubApi from "./GitHubApi";

export default function useGitHubApi() {
  const api = new GitHubApi({
    baseURL: "https://api.github.com",
    headers: {
      Authorization: `Bearer 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`
    }
  });

  return api
}