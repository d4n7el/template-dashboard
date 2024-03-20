import { ButtonAtom } from '@atoms/button';
import { ProgressAtom } from '@atoms/progress';
import { TitleCardAtom } from '@atoms/tiltleCard';

export const Plan = () => {
  return (
    <div>
      <TitleCardAtom
        title='Mi Plan - Plus'
        subTitle='El uso se renueva el: 3-may-23'
      />
      <section className='mt-5'>
        <ProgressAtom
          value={29375}
          maxValue={1000000}
          label='Almacenamiento'
          valueLabel='23.5 GB / 1 TB'
          size='sm'
        ></ProgressAtom>
      </section>
      <section className='mt-5'>
        <ProgressAtom
          value={3400000}
          maxValue={5000000}
          label='Banda Mensual'
          valueLabel='3.4 TB / 5 TB'
          size='sm'
        ></ProgressAtom>
      </section>
      <section className='mt-5'>
        <ButtonAtom text='Administrar Plan' type='rounded' />
      </section>
    </div>
  );
};
