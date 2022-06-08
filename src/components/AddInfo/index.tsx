import { Plus } from 'phosphor-react';
import { useState } from 'react';
import { ItemType } from '../../types/Item';
import { Container, DateInput, CategorySelector, TitleInput, ValueInput } from './styles';

interface Props {
  onAddNewItem: (item: ItemType) => void;
}

export const AddInfo = ({ onAddNewItem }: Props) => {
  const [newDate, setNewDate] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleAddNewItemEvent = () => {
    if (newDate !== '' && 
    newCategory !== '' && 
    newTitle !== '' && 
    newValue !== '') {
      const date = new Date(newDate);
      let newItem: ItemType = {
        date,
        category: newCategory,
        title: newTitle,
        value: parseFloat(newValue),
      }
      onAddNewItem(newItem);
      setNewCategory('');
      setNewTitle('');
      setNewValue('');

    } else {
      alert('Please complete all required fields!');
    }
  }
  
  return (
    <Container>
      <DateInput>
        <label>Date</label>
        <input 
          type="date" 
          id="date"
          onChange={e => setNewDate(e.target.value)} 
        />
      </DateInput>
      <CategorySelector>
        <label>Category</label>
        <select value={newCategory} onChange={e => setNewCategory(e.target.value)}>
          <option value="" data-default disabled selected></option>
          <option value="food">Feeding</option>
          <option value="rent">Rent</option>
          <option value="salary">Salary</option>
        </select>
      </CategorySelector>
      <TitleInput>
        <label>Title</label>
        <input 
          type="text"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
      </TitleInput>
      <ValueInput>
        <label>Value</label>
        <input 
          type="text"
          value={newValue}
          onChange={e => setNewValue(e.target.value)}
        />
      </ValueInput>

      <button
        onClick={handleAddNewItemEvent}
      >
        <Plus 
          size={14}
          weight={'bold'}
        />
        Add
      </button>
    </Container>
  );
}