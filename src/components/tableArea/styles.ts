import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #FFFFFF;
  padding: 2rem;
  box-shadow: 0 0 0.5rem #CCCC;
  margin-top: 2rem;
`;

export const TableHead = styled.th<{ width?: number }>`
  font-size: 1.5rem;
  width: ${props => props.width ? `${props.width}rem` : 'auto'};
  padding: 1rem 0;
  text-align: left;
`;