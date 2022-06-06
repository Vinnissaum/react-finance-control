import { Container, Month, MonthTitle, Resume } from "./styles";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { formatCurrentMonth } from "../../utils/dateFilter";

interface Props {
  currentDate: string;
}

export const Info = ({currentDate}: Props) => {
  const handlePrevMonth = () => {

  }

  const handleNextMonth = () => {
    
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
          {formatCurrentMonth(currentDate)}
        </MonthTitle>
        <CaretCircleRight 
        size={32} 
        cursor='pointer'
        onClick={handleNextMonth}
        />
      </Month>
      <Resume>

      </Resume>
    </Container>
  );
}