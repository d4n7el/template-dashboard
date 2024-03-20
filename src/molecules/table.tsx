import {
  Cell,
  ColumnDef,
  Header,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { useState } from 'react';
import { settingCellGrid } from '../const/setting-cell-grid';
import { useNavigate } from 'react-router-dom';

interface Props<T = any> {
  data: T[];
  columns: ColumnDef<T>[];
}

export const TableMolecule = ({ data, columns }: Props) => {
  const navigate = useNavigate();

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const redirectTo = (
    param: string,
    cell: Header<any, unknown> | Cell<any, unknown>
  ) => {
    const redirectPath = getSettingCell(cell)?.redirectPath;
    if (redirectPath) navigate(`${redirectPath}${param}`);
  };

  const getSettingCell = (cell: Header<any, unknown> | Cell<any, unknown>) => {
    return settingCellGrid.find((x) => x.id === cell.getContext().column.id);
  };

  const headers = table.getHeaderGroups()[0].headers;
  const headerElements = headers.map((header) => (
    <TableColumn
      key={header.id}
      className={`w-[${header.column.getSize()}px] ${
        getSettingCell(header)?.headerClassName
      }`}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
    </TableColumn>
  ));

  const rows = table.getRowModel().rows;
  const tableBodyElements = rows.map((row) => (
    <TableRow key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          className='cursor-pointer'
          onClick={() =>
            redirectTo(`${cell.getContext().cell.getValue()}`, cell)
          }
        >
          <p className={`${getSettingCell(cell)?.className} flex items-center`}>
            {getSettingCell(cell)?.icon}
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </p>
        </TableCell>
      ))}
    </TableRow>
  ));

  return (
    <Table
      aria-label='Controlled table example with dynamic content'
      selectionMode='multiple'
      onRowAction={() => {}}
      checkboxesProps={{
        classNames: {
          wrapper: 'after:bg-cl-primary',
        },
      }}
      classNames={{
        wrapper: ['shadow-none'],
        th: [
          'bg-transparent',
          'text-cl-black',
          'font-bold',
          'border-b',
          'border-b-cl-gray-light/40',
          'px-0',
        ],
        td: [
          'bg-transparent',
          'text-cl-black',
          'font-thin',
          'border-b',
          'border-b-cl-gray-light/40',
          'px-0',
          'data-[selected=true]:before:bg-transparent',
        ],
      }}
    >
      <TableHeader columns={headers}>{headerElements}</TableHeader>
      <TableBody>{tableBodyElements}</TableBody>
    </Table>
  );
};
