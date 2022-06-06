import { ItemType } from '../../types/Item';
import { Container } from './styles';

interface Props {
  onAddNewItem: (item: ItemType) => void;
}

export const AddInfo = ({ onAddNewItem }: Props) => {
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
      <button onClick={handleAddNewItemEvent}>Add new item</button>
    </Container>
  );
}