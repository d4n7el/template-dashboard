import { ButtonAtom } from '@atoms/button';
import { CardGrayAtom } from '@atoms/cardGray';
import { Plan } from '@molecules/plan';

export const Nav = () => {
  return (
    <div className='flex flex-wrap items-baseline h-full'>
      <section className='w-full flex justify-center items-center h-40'>
        <div className='w-20 h-20 bg-cl-primary rounded-[20px] flex justify-center items-center'>
          <span className='icon-[solar--playback-speed-broken] text-cl-white w-16 h-16'></span>
        </div>
      </section>
      <section className='px-5 flex flex-wrap gap-5'>
        <section className='w-full flex justify-start items-center'>
          <ButtonAtom
            text='Dashboard'
            type='flat-secondary'
            icon='icon-[material-symbols--dashboard-outline-rounded]'
            iconSize='w-6 h-6'
            classNames='w-full flex justify-start font-bold'
          ></ButtonAtom>
        </section>
        <section className='w-full flex justify-start items-center'>
          <ButtonAtom
            text='Videos'
            type='primary'
            icon='icon-[material-symbols--folder-outline-rounded]'
            iconSize='w-6 h-6'
            classNames='w-full flex justify-start'
          ></ButtonAtom>
        </section>
        <section className='w-full flex justify-start items-center'>
          <ButtonAtom
            text='Player'
            type='flat-secondary'
            icon='icon-[ph--play-circle]'
            iconSize='w-6 h-6'
            classNames='w-full flex justify-start'
          ></ButtonAtom>
        </section>
        <section className='w-full flex justify-start items-center'>
          <ButtonAtom
            text='Analytics'
            type='flat-secondary'
            icon='icon-[ion--bar-chart-outline]'
            iconSize='w-6 h-6'
            classNames='w-full flex justify-start'
          ></ButtonAtom>
        </section>
        <section className='w-full flex justify-start items-center'>
          <ButtonAtom
            text='Configuraciones'
            type='flat-secondary'
            icon='icon-[ion--settings-outline]'
            iconSize='w-6 h-6'
            classNames='w-full flex justify-start'
          ></ButtonAtom>
        </section>
      </section>
      <section className='px-5 w-full'>
        <CardGrayAtom content={<Plan />} />
      </section>
    </div>
  );
};
