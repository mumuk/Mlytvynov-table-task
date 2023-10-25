import styles from "./Table.module.css";
import React from "react";

export const columns = (onEditClick,onDeleteClick) => [
  {
    Header: 'Name',
    accessor: 'name' as const,

    Cell: ({ cell, row }: any) => (
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
    Cell: ({ cell, row  }: any) => (
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

    Cell: ({cell, row  }: any) => (
      <div>
        {cell.value}
        <button className={styles.editButton} onClick={() => onEditClick(cell.column.id, cell.value, row.original.id)}>🖊️</button>
      </div>
    ),
    className: styles.birthdayColumn,
  },
  {
    Header: 'Phone Number',
    accessor: 'phone_number' as const,
    Cell: ({ cell, row }: any) => (
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
    Cell: ({ cell, row }: any) => (
      <div>
        {cell.value}
        <button onClick={() => onEditClick(cell.column.id, cell.value, row.original.id)}>🖊️</button>
      </div>
    ),
    className: styles.addressColumn,
  },
  {
    Header: 'Actions',
    accessor: 'actions' as const,
    Cell: ({ row }: any) => (
      <div>
        <button onClick={() => onDeleteClick(row.original.id)} className={styles.deleteButton}>✖️️</button>
      </div>
    ),
    className: styles.actionColumn,
  },
];