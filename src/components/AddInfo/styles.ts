import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 1.5rem;
  background-color: #FFFFFF;
  box-shadow: 0 0 0.5rem #AAA;
  border-radius: 0.5rem;
  padding: 2rem;
  margin-top: 2rem;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    align-self: flex-end;
    width: 100%;
    border: 0;
    background-color: #2A363B;
    color: #FFFFFF;
    font-weight: bold;
    border-radius: 0.7rem;
    font-size: 1.7rem;
    padding: 1rem;
    cursor: pointer;

    :hover{
      opacity: 0.85;
    }
  }
`;

export const DateInput = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 0.5rem;
  color: #2A363B;

  input {
    border-radius: 0.3rem;
    border: 1px solid #AAA;
  }
`;

export const CategorySelector = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 0.5rem;
  color: #2A363B;

  select {
    width: 18.5rem;
  }
`;

export const TitleInput = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 0.5rem;
  color: #2A363B;
`;

export const ValueInput = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 0.5rem;
  color: #2A363B;
`;