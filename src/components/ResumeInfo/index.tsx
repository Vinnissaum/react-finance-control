import { Container, Title, Value } from './styles';

interface Props {
  title: 'Incomes' | 'Expenses' | 'Balance'; 
  value: number;
}

export const ResumeInfo = ({ title, value }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>$ {value}</Value>
    </Container>
  ); 
}