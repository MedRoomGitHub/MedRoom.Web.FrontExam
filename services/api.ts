import Error from "../components/error";

const getRepos = async (username) => {
  const response = await fetch(
    "https://api.github.com/users/" + username + "/repos"
  );
  const data = await response.json();
  return data ?? [];
};

export const getUser = async (username) => {
  const response = await fetch("https://api.github.com/users/" + username);
  const json = await response.json();
  if (response.status === 200) {
    return {
      userInfo: json,
      reposInfo: await getRepos(username),
    };
  } else {
    return {
      isError: true,
      reposInfo: [],
    };
  }
};
