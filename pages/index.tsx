import Head from "next/head";
import Image from "next/image";
import { GlobalStyle } from "../styles/global";
import {
  Button,
  Form,
  HomeContainer,
  InputCustom,
  UserInfos,
  UserRepositories,
} from "../styles/Home";

import { ChangeEvent, useState } from "react";
import { UserProfile } from "../components/UserProfile";
import { Repositories } from "../components/Repositories";

import axios from "axios";
import LogoImg from "../assets/logo.svg";
import notFoundIcon from "../assets/notFound.svg";

interface GithubData {
  avatar_url: string | null;
  login: string | null;
  name: string | null;
  location: string | null;
}

interface GithubDataRepository {
  id: number;
  name: string;
  url: string;
  created_at: string;
  stargazers_count: number;
}

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<GithubData | null>(null);
  const [repositories, setRepositories] =
    useState<GithubDataRepository[]>(null);
  const [userExists, setUserExists] = useState("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  async function getUserData() {
    let res;

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(res.data);
      setUserExists("");
    } catch (err) {
      if (err.response.status === 404) {
        setUserExists("active");
      } else {
        setUserExists("active");
      }
      console.log(err);
    }
  }

  async function getUserRepository() {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepositories(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    getUserData();
    getUserRepository();
  };

  return (
    <>
      <Head>
        <title>GitUserFinder</title>
      </Head>

      <HomeContainer>
        <div className="logo">
          <Image src={LogoImg} alt="" />
        </div>

        <Form onSubmit={handleSubmit}>
          <div className="formItens">
            <InputCustom
              type="text"
              value={username}
              onChange={handleSearchInputChange}
              placeholder="Digite o nome do usuario..."
            />
            <Button type="submit">Buscar</Button>
          </div>
        </Form>

        {userExists === "active" ? (
          <div className="notFoundIcon">
            <Image src={notFoundIcon} alt="" width={240} height={240} />
            <p>Usuário não encontrado!</p>
          </div>
        ) : (
          <UserInfos>
            {userData !== null && (
              <UserProfile
                name={userData.name}
                location={userData.location}
                login={userData.login}
                avatar_url={userData.avatar_url}
              />
            )}

            <UserRepositories>
              {repositories !== null &&
                repositories.map((repo) => {
                  return (
                    <Repositories
                      key={repo.id}
                      name={repo.name}
                      url={repo.url}
                      created_at={repo.created_at}
                      stargazers_count={repo.stargazers_count}
                    />
                  );
                })}
            </UserRepositories>
          </UserInfos>
        )}
      </HomeContainer>
      <GlobalStyle />
    </>
  );
}
