import styled from "styled-components";
import LOCALE from "../config/locale";

const Searchbar = () => {
  return (
    <Input type="text" name="username" placeholder={LOCALE.inputMessage} />
  );
};

const Input = styled.input`
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 50px;
  padding-left: 0.5rem;
  width: 300px;

  @media (max-width: 500px) {
    width: 200px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.24);
  }
`;

export default Searchbar;
