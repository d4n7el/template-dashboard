import { Button } from '@nextui-org/react';
import { ReactElement } from 'react';

export interface Props {
  text?: string;
  type: 'primary' | 'secondary' | 'flat' | 'flat-secondary';
  icon?: string;
  onlyIcon?: boolean;
}

export const ButtonComponent = ({
  text,
  type,
  onlyIcon = false,
  icon = 'icon-[icon-park-solid--dark-mode]',
}: Props) => {
  const setStyles = () => {
    if (type === 'primary') return setPrimaryStyles();
    if (type === 'secondary') return setSecondaryStyles();
    if (type === 'flat') return setFlatStyles();
    if (type === 'flat-secondary') return setFlatSecondStyles();
  };

  const setPrimaryStyles = () => {
    return 'bg-cl-primary text-cl-white';
  };

  const setSecondaryStyles = () => {
    return 'bg-cl-gray-light/40 text-cl-black';
  };

  const setFlatStyles = () => {
    return 'bg-transparent text-cl-primary';
  };

  const setFlatSecondStyles = () => {
    return 'bg-transparent text-cl-black';
  };

  const setOnlyIconStyles = () => {
    if (onlyIcon) return 'min-w-1 mr-0 w-5 h-5';
    return '';
  };

  return (
    <Button
      startContent={
        <span className={`${icon} mr-2 ${setOnlyIconStyles()} `}></span>
      }
      className={` ${setStyles()} text-sm rounded-md tracking-wide min-w-1`}
    >
      {onlyIcon ? '' : text}
    </Button>
  );
};
