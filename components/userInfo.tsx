import styled from "styled-components";
import LOCALE from "../config/locale";
import Image from "next/image";
import InitialOrientation from "../components/orientation";

const UserInfoComponent = ({ userData }) => {
  const Avatar = ({ src }) => {
    return `${src}`;
  };
  return userData ? (
    <UserPersonalInfo>
      <UserAvatar
        loader={Avatar}
        src={userData.avatar_url}
        width={50}
        height={50}
        alt="Avatar"
      />
      <Info>{userData.name ?? LOCALE.nullName}</Info>
      <Location>{userData.location ?? LOCALE.nullLocation}</Location>
    </UserPersonalInfo>
  ) : (
    <InitialOrientation />
  );
};

const UserPersonalInfo = styled.div`
  display: grid;
  width: 400px;
  grid-template-columns: 50px 1fr auto;
  align-items: center;
  justify-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1.5rem;
  margin: 1.5rem;
  border-radius: 10px;
  grid-gap: 1rem;
  background-color: #f6f6f6;

  @media (max-width: 600px) {
    width: 80%;
  }
`;
const Location = styled.p`
  text-align: right;
`;

const Info = styled.p`
  justify-items: center;

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

const UserAvatar = styled(Image)`
  border-radius: 50%;
`;

export default UserInfoComponent;
