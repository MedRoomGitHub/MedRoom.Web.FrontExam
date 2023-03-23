import styled from "styled-components";

export const HomeContainer = styled.main`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  min-height: 100vh;
  width: 100vw;
  padding: 1.5rem;
  margin: auto;

  .notFoundIcon {
    font-size: 1.5rem;
    color: #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    max-width: 60%;
  }
`

export const Form = styled.form`
  width: 100%;
  
  .formItens{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .75rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

  }

  #notFound {
    color: red;
    position: absolute;
    padding-left: .75rem;
    padding-top: .25rem;
    display: none;
  }

  #notFound.active {
    display: flex;
  }
`

export const InputCustom = styled.input`
  background-color: #1E2A47;
  color: #fff;
  box-shadow: unset;

  border: none;
  border-radius: 12px;
  width: 100%;

  font-size: 1rem;

  padding: 1rem;
  font-weight: normal;

  ::placeholder {
    color: #fff;
  }

`

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 12px;
  width: 100%;

  background-color: #0079FF;
  color: #fff;
  font-size: 1rem;

  @media (min-width: 768px) {
    width: 30%;
  }
`

export const UserInfos = styled.div`
  width: 100%;
` 

export const UserRepositories = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  
  gap: 1.25rem;
  margin-top: 2rem;
`
