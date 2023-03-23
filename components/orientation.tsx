import styled from "styled-components";
import LOCALE from "../config/locale";

const InitialOrientation = () => {
  return (
    <InitialWrapper>
      <Info>{LOCALE.searchUser}</Info>
    </InitialWrapper>
  );
};

export default InitialOrientation;

const InitialWrapper = styled.div`
  display: grid;
  width: 400px;
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

const Info = styled.p`
  justify-items: center;
  color: #c0c0c0;
`;
