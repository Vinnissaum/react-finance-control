import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  font-size: 1.4rem;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #2A363B;
  margin-bottom: 0.5rem;
`;

export const Value = styled.div<{color?: string}>`
  font-weight: 500;
  text-align: center;
  color: ${props => props.color ?? '#000'};
`;