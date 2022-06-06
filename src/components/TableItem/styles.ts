import styled from "styled-components";

export const TRow = styled.tr``;

export const TColumn = styled.td`
  padding: 1rem 0;
  font-size: 1.4rem;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #FFFFFF;
  background-color: ${props => props.color}
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color}
`;