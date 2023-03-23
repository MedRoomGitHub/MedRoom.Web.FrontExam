import styled from "styled-components";
import LOCALE from "../config/locale";

const Error = () => {
  return (
    <ErrorWrapper>
      <MessageError>{LOCALE.errorMessage.sorry}</MessageError>
      <MessageError>{LOCALE.errorMessage.information}</MessageError>
    </ErrorWrapper>
  );
};

export default Error;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  width: 450px;
  background-color: #fffbd7;
`;

const MessageError = styled.p`
  all: unset;
  padding: 10px;
`;
