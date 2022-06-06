import { Container, Month, MonthTitle, Resume } from "./styles";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { formatCurrentMonth } from "../../utils/dateFilter";
import { ResumeInfo } from "../ResumeInfo";

interface Props {
  currentDate: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const Info = ({currentDate, onMonthChange, income, expense}: Props) => {
  const date = new Date(currentDate);
  
  const handlePrevMonth = () => {
    date.setMonth(date.getMonth() - 1)
    onMonthChange(`${date.getFullYear()}-${date.getMonth() + 1}`);
  }

  const handleNextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    onMonthChange(`${date.getFullYear()}-${date.getMonth() + 1}`);
  }

  return (
    <Container>
      <Month>
        <CaretCircleLeft 
          size={32} 
          cursor='pointer'
          onClick={handlePrevMonth}
        />
        <MonthTitle>
          {formatCurrentMonth(date)}
        </MonthTitle>
        <CaretCircleRight 
          size={32} 
          cursor='pointer'
          onClick={handleNextMonth}
        />
      </Month>
      <Resume>
        <ResumeInfo title='Incomes' value={income}/>
        <ResumeInfo title='Expenses'value={expense}/>
        <ResumeInfo 
          color={(income - expense) < 0 ? '#E84A5F' : '#048600'}
          title='Balance' 
          value={income - expense}/>
      </Resume>
    </Container>
  );
}