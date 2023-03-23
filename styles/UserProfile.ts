import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;

  padding: 1rem;
  display: flex;
  gap: 2rem;
  position: relative;

  background-color: #1E2A47;
  color: #fff;

  border: none;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.9);

  h2 {
    font-weight: normal;
  }
  
  img  {
    width: 30%;

    border-radius: 999999%;

    @media (min-width: 576px) {
      width: 10%;
    }

    @media (min-width: 1620px) {
      width: 5%;
    }
  }

  .location {
    position: absolute;
    right: 1rem;
    bottom: 2rem;
  }
` 