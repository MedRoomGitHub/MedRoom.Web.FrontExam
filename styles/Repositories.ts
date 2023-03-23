import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  width: 100%;
  
  padding: 2rem 1rem;
  
  background-color: #1E2A47;
  color: #fff;

  border: none;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.9);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  position: relative;

  h2 {
    max-width: 75%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  
  }

  p {
    word-break: break-all;
  }

  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
` 