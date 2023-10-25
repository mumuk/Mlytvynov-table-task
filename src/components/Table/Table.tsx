import React from 'react';
import {useTable, usePagination} from 'react-table';
import styles from './Table.module.css';
import {columns} from './TableColumns';
import {ITable} from "../../interfaces/Itable.ts";

interface Props {
  data: ITable;
  onEditClick: (fieldType: string, value: any, personId: number) => void;
  onDeleteClick: (personId: number) => void;
}

const Table: React.FC<Props> = ({data, onEditClick, onDeleteClick}) => {

  const tableColumns = React.useMemo(
    () => columns(onEditClick,onDeleteClick),
    [onEditClick]
  );

  const tableInstance = useTable({
      columns: tableColumns,
      data: data.results,
      initialState: {pageIndex: 0, pageSize: 10}
    },
    usePagination
  );

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;


  return (
    <table {...getTableProps()} className={styles.table}>
      <thead className={styles.thead}>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()} className={styles.header}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => (
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
