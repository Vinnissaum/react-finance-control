import { Plus } from 'phosphor-react';
import { useState } from 'react';
import { ItemType } from '../../types/Item';
import { Container, DateInput, CategorySelector, TitleInput, ValueInput } from './styles';

interface Props {
  onAddNewItem: (item: ItemType) => void;
}

export const AddInfo = ({ onAddNewItem }: Props) => {
  const [addNewItem, setAddNewItem] = useState<ItemType>();

  const handleAddNewItemEvent = () => {
    let newItem: ItemType = {
      date: new Date(2022, 3, 23),
      category: 'food',
      title: 'test',
      value: 250.2
    }
    onAddNewItem(newItem);
  }
  
  return (
    <Container>
      <DateInput>
        <label>Date</label>
        <input 
          type="date" 
          id="date" 
        />
      </DateInput>
      <CategorySelector>
        <label>Category</label>
        <select name="" id=""></select>
      </CategorySelector>
      <TitleInput>
        <label>Title</label>
        <input 
          type="text"

        />
      </TitleInput>
      <ValueInput>
        <label>Value</label>
        <input 
          type="text"

        />
      </ValueInput>

      <button
        onClick={handleAddNewItemEvent}
      >
        <Plus 
          size={20}
          weight={'bold'}
        />
        Add
      </button>
    </Container>
  );
}