import { ItemType } from '../../types/Item';
import { formatDate } from '../../utils/dateFilter';
import { TRow, TColumn, Category, Value } from './styles';
import { categories } from '../../data/categories';

interface Props {
  item: ItemType;
}

export const TableItem = ({item}: Props) => {
  return(
    <TRow>
      <TColumn>{formatDate(item.date)}</TColumn>
      <TColumn>
        <Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </TColumn>
      <TColumn>{item.title}</TColumn>
      <TColumn>
        <Value color={categories[item.category].expense ? '#E84A5F' : '#048600'}>
          $ {item.value}
        </Value>
      </TColumn>
    </TRow>
  );
}