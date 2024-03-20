import { ButtonAtom } from '@atoms/button';

export const HeaderOptions = () => {
  return (
    <div className='w-full min-h-2 flex justify-between'>
      <section className='flex gap-2'>
        <ButtonAtom
          text='Biblioteca'
          icon='icon-[codicon--library]'
          type='flat'
          iconSize='w-5 h-5'
        />
        <ButtonAtom
          text='Papelera'
          icon='icon-[ion--trash-outline]'
          type='flat-secondary'
          iconSize='w-5 h-5'
        />
      </section>
      <section className='flex gap-2'>
        <ButtonAtom
          text='Nueva carpeta'
          icon='icon-[material-symbols--folder-outline-rounded]'
          type='secondary'
          iconSize='w-5 h-5'
        />
        <ButtonAtom
          text='Nuevo video'
          icon='icon-[material-symbols--play-circle-outline]'
          type='primary'
          iconSize='w-5 h-5'
        />
      </section>
    </div>
  );
};
