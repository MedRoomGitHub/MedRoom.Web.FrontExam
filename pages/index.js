import Error from "../components/error";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Form from "../components/form";
import UserInfoComponent from "../components/userInfo";
import UserReposComponent from "../components/userRepo";
import Image from "next/image";
import github from "../assets/github.svg";

export default function Home() {
  const [userData, setUserData] = useState();
  const [userRepos, setUserRepos] = useState([]);
  const [error, setError] = useState();

  return (
    <Container>
      <Head>
        <title>Marianna Abreu - MedRoom Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card>
        <Image src={github} width={150} height={150} />
        <Form
          setData={({ userInfo, reposInfo, isError }) => {
            setUserData(userInfo);
            setUserRepos(reposInfo);
            setError(isError);
          }}
        />
        <UserInfoComponent userData={userData} />
        <UserReposComponent userData={userData} userRepos={userRepos} />
        {error && <Error />}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  align-items: center;
  min-height: 96vh;
`;

const Card = styled.div`
  background-color: #f2f2fc;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  min-width: 50%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-bottom: 3rem;
`;
