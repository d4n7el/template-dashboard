import { InputSearchAtom } from '@atoms/inputSearch';
import { HeaderOptions } from '@molecules/headerOptions';

export const LibraryView = () => {
  return (
    <div className=''>
      <HeaderOptions />
      <section className='mt-10'>
        <InputSearchAtom icon='icon-[teenyicons--search-outline]' />
      </section>
    </div>
  );
};
