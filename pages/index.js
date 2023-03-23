import Error from "../components/error";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Form from "../components/form";
import UserInfoComponent from "../components/userInfo";
import UserReposComponent from "../components/userRepo";
import Image from "next/image";
import github from "../assets/github.svg";
import InitialOrientation from "../components/orientation";

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
        <Img src={github} width={150} height={150} alt="logo" />
        <Form
          setData={({ userInfo, reposInfo, isError }) => {
            setUserData(userInfo);
            setUserRepos(reposInfo);
            setError(isError);
          }}
        />
        <UserInfoComponent userData={userData} />
        <Div>
          <UserReposComponent userData={userData} userRepos={userRepos} />
        </Div>
        {error && !userData ? (
          <Error />
        ) : !userData ? (
          <InitialOrientation />
        ) : null}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  min-height: 96vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f2f2fc;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  min-width: 50%;
  min-height: 50vh;
  padding: 1rem;
  padding-bottom: 3rem;
`;

const Div = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 350px;
  min-width: 400px;
`;

const Img = styled(Image)`
  opacity: 1;
  transition: opacity 1s ease 0s;

  &:hover {
    opacity: 0.6;
  }
`;
