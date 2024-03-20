import { InputSearchAtom } from '@atoms/inputSearch';
import { HeaderOptions } from '@molecules/headerOptions';
import { TableMolecule } from '@molecules/table';
import { Library } from '@interface/library.interface';
import libraryDataMock from '@mock/library.mock.json';
import { ColumnDef } from '@tanstack/react-table';

export const LibraryView = () => {
  const data: Library[] = libraryDataMock;
  const columns: ColumnDef<Library>[] = [
    {
      header: 'Nombre',
      accessorKey: 'name',
      size: 800,
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

  return (
    <div className=''>
      <HeaderOptions />
      <section className='mt-10 w-80'>
        <InputSearchAtom icon='icon-[teenyicons--search-outline]' />
      </section>
      <section className='mt-10'>
        <TableMolecule data={data} columns={columns} />
      </section>
    </div>
  );
};
