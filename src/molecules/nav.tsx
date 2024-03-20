import { ButtonAtom } from '@atoms/button';
import { CardGrayAtom } from '@atoms/cardGray';
import { Plan } from '@molecules/plan';
import { useEffect, useState } from 'react';

export const Nav = () => {
  const [isOpenNav, setIsOpenNav] = useState(true);
  const [widthNav, setWidthNav] = useState('w-[30%] 2xl:w-[20%]');

  useEffect(() => {
    setWidthNav(isOpenNav ? 'w-[30%] 2xl:w-[20%]' : 'w-[74px]');
  }, [isOpenNav]);
  return (
    <section
      className={`${widthNav} bg-cl-white min-h-screen rounded-md relative overflow-hidden`}
    >
      <div
        className={`flex flex-wrap items-start ${
          isOpenNav ? 'h-full' : 'h-fit'
        }`}
      >
        <div
          className={`${
            isOpenNav ? 'right-4' : 'right-6'
          } absolute top-4 cursor-pointer`}
          onClick={() => setIsOpenNav(!isOpenNav)}
        >
          {isOpenNav ? (
            <span className='icon-[material-symbols--close-fullscreen-rounded] text-xl animate-flip-y' />
          ) : (
            <span className='icon-[mingcute--fullscreen-2-line] text-xl animate-flip-x' />
          )}
        </div>

        <section className='w-full flex justify-center items-center h-40'>
          <div
            className={`${
              isOpenNav
                ? 'w-16 h-16 animate-slide-in-left'
                : 'w-10 h-10 animate-slide-in-right'
            } bg-cl-primary rounded-[50%] flex justify-center items-center`}
          >
            <span className='icon-[solar--playback-speed-broken] text-cl-white w-16 h-16'></span>
          </div>
        </section>
        <section
          className={`${isOpenNav ? 'px-5' : 'px-2'} flex flex-wrap gap-5`}
        >
          <section className='w-full flex justify-start items-center'>
            <ButtonAtom
              onlyIcon={!isOpenNav}
              text='Dashboard'
              type='flat-secondary'
              icon='icon-[material-symbols--dashboard-outline-rounded]'
              iconSize='w-6 h-6'
              classNames={`w-full flex justify-start ${
                isOpenNav ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            ></ButtonAtom>
          </section>
          <section className='w-full flex justify-start items-center'>
            <ButtonAtom
              onlyIcon={!isOpenNav}
              text='Videos'
              type='primary'
              icon='icon-[material-symbols--folder-outline-rounded]'
              iconSize='w-6 h-6'
              classNames={`w-full flex justify-start ${
                isOpenNav ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            ></ButtonAtom>
          </section>
          <section className='w-full flex justify-start items-center'>
            <ButtonAtom
              onlyIcon={!isOpenNav}
              text='Player'
              type='flat-secondary'
              icon='icon-[material-symbols--play-circle-outline]'
              iconSize='w-6 h-6'
              classNames={`w-full flex justify-start ${
                isOpenNav ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            ></ButtonAtom>
          </section>
          <section className='w-full flex justify-start items-center'>
            <ButtonAtom
              onlyIcon={!isOpenNav}
              text='Analytics'
              type='flat-secondary'
              icon='icon-[ion--bar-chart-outline]'
              iconSize='w-6 h-6'
              classNames={`w-full flex justify-start ${
                isOpenNav ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            ></ButtonAtom>
          </section>
          <section className='w-full flex justify-start items-center'>
            <ButtonAtom
              onlyIcon={!isOpenNav}
              text='Configuraciones'
              type='flat-secondary'
              icon='icon-[ion--settings-outline]'
              iconSize='w-6 h-6'
              classNames={`w-full flex justify-start ${
                isOpenNav ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            ></ButtonAtom>
          </section>
        </section>
        {isOpenNav && (
          <section className='px-5 w-full'>
            <CardGrayAtom content={<Plan />} />
          </section>
        )}
      </div>
    </section>
  );
};
