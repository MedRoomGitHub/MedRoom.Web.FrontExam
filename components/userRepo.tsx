import styled from "styled-components";
import Image from "next/image";

import star from "../assets/star.png";

import LOCALE from "../config/locale";

const UserReposComponent = ({ userRepos, userData }) => {
  const formatedDate = (date: string) => {
    let createdDate = new Date(date);
    let formatDate =
      createdDate.getDate() +
      "/" +
      (createdDate.getMonth() + 1) +
      "/" +
      createdDate.getFullYear();
    return formatDate;
  };
  if (userRepos && userRepos.length === 0 && userData) {
    return (
      <NullWrapper>
        <Info>{LOCALE.nullRepository}</Info>
      </NullWrapper>
    );
  }
  return userRepos.map((repo) => {
    return (
      <ReposWrapper>
        <Name>{repo.name}</Name>
        <Url>
          <a href={repo.html_url}>{LOCALE.clickForAccessRepository}</a>
        </Url>
        <Created>
          {LOCALE.created} {formatedDate(repo.created_at)}
        </Created>
        <Stars>
          <Image src={star} width={16} height={16}></Image>
          {repo.stargazers_count}
        </Stars>
      </ReposWrapper>
    );
  });
};

const ReposWrapper = styled.div`
  display: grid;
  justify-items: initial;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0 1.5rem;
  padding-top: 0;
  border-radius: 10px;
  width: 400px;

  margin: 0.5rem 0.5rem 1.5rem 0.5rem;

  background-color: #f8f8ff;

  grid-template-areas:
    "name stars"
    "url url"
    "created created";

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Name = styled.p`
  grid-area: name;
`;

const Created = styled.p`
  grid-area: created;
`;

const Url = styled.p`
  justify-items: center;
  grid-area: url;

  a {
    text-decoration: none;
    cursor: pointer;
    color: #666;

    &:hover {
      text-decoration: underline;
      color: #bb5489;
    }
  }
`;

const Stars = styled.div`
  grid-area: stars;
  justify-self: end;

  gap: 1rem;
  line-height: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #b22222;
  color: white;
  clip-path: polygon(0 0, 100% 0%, 100% 75%, 50% 100%, 0 75%);
  padding-bottom: 0.2rem;
`;

const NullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  border-radius: 10px;
  width: 450px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 10px;

  background-color: #fffbd7;
  cursor: not-allowed;
`;

const Info = styled.p`
  justify-items: center;
`;

export default UserReposComponent;
