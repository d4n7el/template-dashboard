export interface Props {
  title: string;
  subTitle?: string;
}

export const TitleCardAtom = ({ title, subTitle }: Props) => {
  return (
    <div>
      <p className=' font-bold text-lg'>{title}</p>
      <p className='text-xs text-cl-black/60'>{subTitle}</p>
    </div>
  );
};
