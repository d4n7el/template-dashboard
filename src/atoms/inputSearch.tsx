import { Input } from '@nextui-org/react';

export interface Props {
  icon: string;
}

export const InputSearchAtom = ({ icon }: Props) => {
  return (
    <Input
      placeholder='Buscar Video'
      startContent={
        <span
          className={`${icon} text-2xl text-default-400 pointer-events-none flex-shrink-0 `}
        ></span>
      }
      classNames={{
        input: [
          'border-l-2',
          'ml-3',
          'border-l-cl-gray-light',
          'px-2',
          'data-[has-start-content=true]:ps-6',
        ],
        mainWrapper: ['group-data-[focus=true]:bg-transparent'],
        inputWrapper: [
          'bg-transparent',
          'border',
          'border-cl-gray-light',
          'rounded-md',
          '!cursor-text',
          'data-[hover=true]:bg-transparent',
          'group-data-[focus=true]:bg-transparent',
          'h-[55px]',
          'py-2',
        ],
        innerWrapper: [
          'bg-transparent',
          'data-[hover=true]:bg-transparent',
          'group-data-[focus=true]:bg-transparent',
        ],
      }}
    />
  );
};
