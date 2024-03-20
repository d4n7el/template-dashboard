import { ButtonAtom } from '@atoms/button';
import { columns, data } from '@const/setting-grid-library-detail';
import { TableMolecule } from '@molecules/table';
import { settingCellGridDetail } from '@const/setting-grid-library-detail';
import { BreadcrumbsAtom } from '@atoms/breadcrumbs';
import { useNavigate } from 'react-router-dom';

export const LibraryDetailView = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate('/library');
  };
  return (
    <div>
      <section className='flex items-center gap-5'>
        <ButtonAtom
          iconSize='w-8 h-8'
          onlyIcon={true}
          icon='icon-[material-symbols--arrow-back-rounded]'
          type='primary'
          classNames='px-unit-2'
          action={back}
        />
        <BreadcrumbsAtom />
      </section>
      <section className='mt-10 table-checkbox w'>
        <TableMolecule
          data={data}
          columns={columns}
          settingGrid={settingCellGridDetail}
        />
      </section>
    </div>
  );
};
