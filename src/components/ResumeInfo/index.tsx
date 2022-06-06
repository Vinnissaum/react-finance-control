import { Container, Title, Value } from './styles';

interface Props {
  title: 'Incomes' | 'Expenses' | 'Balance'; 
  value: number;
  color?: string;
}

export const ResumeInfo = ({ title, value, color }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value color={color}>$ {value}</Value>
    </Container>
  ); 
}