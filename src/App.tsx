import { useState, useEffect } from 'react';
import { Container, Header, HeaderText, Body } from './App.styles';
import { categories } from './data/categories';
import { CategoryType } from './types/Category';
import { items } from './data/items';
import { ItemType } from './types/Item';  
import { filterListByMonth, getCurrentMonth } from './utils/dateFilter';
import { TableArea } from './components/tableArea';
import { Info } from './components/Info';

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<ItemType[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() =>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [currentMonth, list]); 

  return(
    <Container>
      <Header>
        <HeaderText>
          Finance control system
        </HeaderText>
      </Header>
      <Body>
        <Info currentDate={currentMonth}/>
        <TableArea list={filteredList}/>
      </Body>
    </Container>
  );
}

export default App;