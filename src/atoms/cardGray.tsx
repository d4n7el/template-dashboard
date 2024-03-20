import { ReactElement } from 'react';

export interface Props {
  content: ReactElement;
}

export const CardGrayAtom = ({ content }: Props) => {
  return (
    <div className='w-full bg-cl-gray-light/35 p-5 rounded-lg'>{content}</div>
  );
};
