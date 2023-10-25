
import styles from "./Table.module.css";
import { CellProps, CellValue, Row } from "react-table";
import { IPerson } from "../../interfaces/IPerson.ts";

interface ColumnCellProps {
  cell: CellProps<IPerson, CellValue>;
  row: Row<IPerson>;
}


export const columns = (
  onEditClick: (field: string, value: any, personId: number) => void,
  onDeleteClick: (personId: number) => void
) => [
  {
    Header: 'Name',
    accessor: 'name' as const,
    Cell: ({cell, row}: ColumnCellProps) => (
      <div>
        {cell.value}
        <button onClick={() => onEditClick(cell.column.id, cell.value, row.original.id)}>🖊️</button>
      </div>
    ),
    className: styles.nameColumn,
  },
  {
    Header: 'Email',
    accessor: 'email' as const,
    Cell: ({cell, row}: ColumnCellProps) => (
      <div>
        {cell.value}
        <button onClick={() => onEditClick(cell.column.id, cell.value, row.original.id)}>🖊️</button>
      </div>
    ),
    className: styles.emailColumn,
  },
  {
    Header: 'Birthday',
    accessor: 'birthday_date' as const,
    Cell: ({cell, row}: ColumnCellProps) => (
      <div>
        {cell.value}
        <button className={styles.editButton}
                onClick={() => onEditClick(cell.column.id, cell.value, row.original.id)}>🖊️
        </button>
      </div>
    ),
    className: styles.birthdayColumn,
  },
  {
    Header: 'Phone Number',
    accessor: 'phone_number' as const,
    Cell: ({cell, row}: ColumnCellProps) => (
      <div>
        {cell.value}
        <button onClick={() => onEditClick(cell.column.id, cell.value, row.original.id)}>🖊️</button>
      </div>
    ),
    className: styles.phoneNumberColumn,
  },
  {
    Header: 'Address',
    accessor: 'address' as const,
    Cell: ({cell, row}: ColumnCellProps) => (
      <div>
        {cell.value}
        <button onClick={() => onEditClick(cell.column.id, cell.value, row.original.id)}>🖊️</button>
      </div>
    ),
    className: styles.addressColumn,
  },
  {
    Header: 'Actions',

    Cell: ({row}: ColumnCellProps) => (
      <div>
        <button onClick={() => onDeleteClick(row.original.id)} className={styles.deleteButton}>✖️️</button>
      </div>
    ),
    className: styles.actionColumn,
  },
];
