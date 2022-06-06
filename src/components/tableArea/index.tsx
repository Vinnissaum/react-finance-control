import { ItemType } from '../../types/Item';
import { TableItem } from '../TableItem';
import { Table, TableHead } from './styles';

interface Props {
  list: ItemType[];
}

export const TableArea = ({list}: Props) => {
  return(
    <Table>
       <thead>
         <tr>
          <TableHead width={10}>Date</TableHead>
          <TableHead width={13}>Category</TableHead>
          <TableHead >Title</TableHead>
          <TableHead width={15}>Cost</TableHead>
         </tr>
       </thead>
       <tbody>
          {list.map((item, index) =>(
            <TableItem item={item} key={index}/>
          ))}
       </tbody>
    </Table>
  );
}