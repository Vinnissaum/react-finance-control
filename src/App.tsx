import { useState, useEffect } from 'react';
import { Container, Header, HeaderText, Body } from './App.styles';
import { categories } from './data/categories';
import { CategoryType } from './types/Category';
import { items } from './data/items';
import { ItemType } from './types/Item';  
import { filterListByMonth, getCurrentMonth } from './utils/dateFilter';
import { TableArea } from './components/tableArea';
import { Info } from './components/Info';
import { AddInfo } from './components/AddInfo';

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<ItemType[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [currentMonth, list]); 

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddNewItem = (item: ItemType) => {
    let newList = [...list];
    newList.push(item);

    setList(newList);
  }

  return(
    <Container>
      <Header>
        <HeaderText>
          Finance control system
        </HeaderText>
      </Header>
      <Body>
        <Info 
          currentDate={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <AddInfo onAddNewItem={handleAddNewItem}/>
        <TableArea list={filteredList}/>
      </Body>
    </Container>
  );
}

export default App;