import React, { useRef, useEffect, useMemo } from 'react';
import { useTable, defaultColumn } from 'react-table';
import ReactTable from 'react-table';
/* import { Link } from 'gatsby'; */
import styles from './Table.module.scss';
import headlineData from '../../Map/data/headlines/headlines.json';

const Table = () => {
  console.log('headlineData', headlineData);

  const data = useMemo(() => headlineData);
  const columns = useMemo(() => [
    {
      Header: 'Country',
      accessor: 'country_name',
      Cell: ({ row: { original } }) => (
        <div style={{ color: '#8b0000', fontWeight: 'bold' }}>
          {original.country_name}
        </div>
      )
    },
    {
      Header: 'Headline',
      accessor: 'headline'
    },
/*     {
      Header: 'timestamp',
      accessor: 'timestamp'
    }, */
    {
      Header: 'URL',
      accessor: 'url',
      Cell: ({ row: { original } }) => (
        <div>
          <a href={original.url}>{original.url}</a>
        </div>
      )
    }
  ], []);

  console.log(columns);

  const tableInstance = useTable({ columns, data });
  console.log('tableInstance', tableInstance);


  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
  } = tableInstance;

  return (
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr className={styles['tableHead']} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th className={styles['th']}
              {...column.getHeaderProps()}
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr
          className={styles['tbody-tr']}
          {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td className={styles['td']}
                  {...cell.getCellProps()}
                >
                  {cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  );
};

export default Table;