import React from 'react';
import { useTable, HeaderGroup, ColumnInstance, Row, Cell } from 'react-table';
import styles from './Table.module.css';
import { columns } from './TableColumns';
import { ITable } from "../../interfaces/Itable.ts";
import {IPerson} from "../../interfaces/IPerson.ts";


interface Props {
  data: ITable;
  onEditClick: (fieldType: string, value: any, personId: number) => void;
  onDeleteClick: (personId: number) => void;
}

const Table: React.FC<Props> = ({ data, onEditClick, onDeleteClick }) => {
  const tableColumns = React.useMemo(
    () => columns(onEditClick, onDeleteClick),
    [onEditClick, onDeleteClick]
  );


  const tableInstance = useTable<IPerson>({
    // @ts-ignore
    columns: tableColumns,
    data: data.results,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead className={styles.thead}>
      {headerGroups.map((headerGroup: HeaderGroup<typeof data.results[0]>) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: ColumnInstance<typeof data.results[0]>) => (
            <th {...column.getHeaderProps()} className={styles.header}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row: Row<typeof data.results[0]>) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell: Cell<typeof data.results[0]>) => (
              <td {...cell.getCellProps()} className={styles.cell}>{cell.render('Cell')}</td>
            ))}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default Table;
