import { Library, settingGrid } from '@interface/library.interface';
import { ColumnDef } from '@tanstack/react-table';
import libraryDataMock from '@mock/library.mock.json';

export const settingCellGrid: settingGrid[] = [
  {
    id: 'name',
    className: 'justify-start',
    icon: (
      <span className='icon-[material-symbols--folder-outline-rounded] text-cl-primary w-5 h-5 mr-2'></span>
    ),
    headerClassName: 'text-left',
    redirectPath: '/library/',
  },
  {
    id: 'update',
    className: ' justify-center',
    headerClassName: 'text-center',
  },
  {
    id: 'count_videos',
    className: ' justify-end',
    headerClassName: 'text-center',
  },
  {
    id: 'video_size',
    className: ' justify-center',
    headerClassName: 'text-center',
  },
];

export const data: Library[] = libraryDataMock;
export const columns: ColumnDef<Library>[] = [
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  {
    header: 'Videos',
    accessorKey: 'count_videos',
  },
  {
    header: 'Tamaño',
    accessorKey: 'video_size',
  },
  {
    header: 'Última modificación',
    accessorKey: 'update',
  },
];
