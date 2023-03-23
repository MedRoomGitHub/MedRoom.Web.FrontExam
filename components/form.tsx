import styled from "styled-components";
import Image from "next/image";
import Searchbar from "../components/searchbar";
import { getUser } from "../services/api";
import search from "../assets/search.png";
import reset from "../assets/undo-arrow.png";

const Form = ({ setData }) => {
  return (
    <FormWrapper
      onSubmit={async (event) => {
        event.preventDefault();

        const { userInfo, reposInfo, isError } = await getUser(
          event.target.elements.username.value
        );

        setData({ userInfo, reposInfo, isError });

        event.target.elements.username.value = "";
      }}
    >
      <Searchbar />
      <SearchButton>
        <Image src={search} width={20} height={20} alt="search-icon" />
      </SearchButton>
      <ResetButton
        onClick={async (event) => {
          event.preventDefault();

          setData({ reposInfo: [], isError: false });
        }}
      >
        <Image src={reset} width={20} height={20} alt="reset-icon" />
      </ResetButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
`;

const SearchButton = styled.button`
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 50px;
  width: 50px;
  background-color: white;
  cursor: pointer;
  margin-top: 2px;
  padding-top: 2px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const ResetButton = styled.button`
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 50px;
  width: 50px;
  background-color: white;
  cursor: pointer;
  margin-top: 2px;
  padding-top: 4px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export default Form;
