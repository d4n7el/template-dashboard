import { InputSearchAtom } from '@atoms/inputSearch';
import { HeaderOptions } from '@molecules/headerOptions';
import { TableMolecule } from '@molecules/table';
import { columns, data } from '@const/setting-grid-library';
import { settingCellGrid } from '@const/setting-grid-library';

export const LibraryView = () => {
  return (
    <div className=''>
      <HeaderOptions />
      <section className='mt-10 w-96'>
        <InputSearchAtom icon='icon-[teenyicons--search-outline]' />
      </section>
      <section className='mt-10 table-checkbox'>
        <TableMolecule
          data={data}
          columns={columns}
          settingGrid={settingCellGrid}
        />
      </section>
    </div>
  );
};
