import { LibraryDetail, settingGrid } from '@interface/library.interface';
import { ColumnDef } from '@tanstack/react-table';
import libraryDataMock from '@mock/library-detail.mock.json';

export const settingCellGridDetail: settingGrid[] = [
  {
    id: 'name',
    className: 'justify-start',
    icon: (
      <span className='icon-[material-symbols--play-circle-outline] text-cl-primary w-5 h-5 mr-2'></span>
    ),
    headerClassName: 'text-left',
  },
  {
    id: 'update',
    className: ' justify-center',
    headerClassName: 'text-center',
  },
  {
    id: 'duration',
    className: ' justify-end',
    headerClassName: 'text-center',
  },
  {
    id: 'video_size',
    className: ' justify-center',
    headerClassName: 'text-center',
  },
];

export const data: LibraryDetail[] = libraryDataMock;
export const columns: ColumnDef<LibraryDetail>[] = [
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  {
    header: 'Tamaño',
    accessorKey: 'video_size',
  },
  {
    header: 'Duración',
    accessorKey: 'duration',
  },
  {
    header: 'Última modificación',
    accessorKey: 'update',
  },
];
