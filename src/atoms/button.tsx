import { Button } from '@nextui-org/react';

export interface Props {
  text?: string;
  type: 'primary' | 'secondary' | 'flat' | 'flat-secondary' | 'rounded';
  icon?: string;
  onlyIcon?: boolean;
  iconSize?: string;
  classNames?: string;
}

export const ButtonAtom = ({
  text,
  type,
  onlyIcon = false,
  iconSize,
  classNames,
  icon,
}: Props) => {
  const setStyles = () => {
    if (type === 'primary') return setPrimaryStyles();
    if (type === 'secondary') return setSecondaryStyles();
    if (type === 'flat') return setFlatStyles();
    if (type === 'flat-secondary') return setFlatSecondStyles();
    if (type === 'rounded') return setRoundedStyles();
  };

  const setPrimaryStyles = () => {
    return 'bg-cl-primary text-cl-white rounded-md';
  };

  const setSecondaryStyles = () => {
    return 'bg-cl-gray-light/40 text-cl-black rounded-md';
  };

  const setFlatStyles = () => {
    return 'bg-transparent text-cl-primary rounded-md';
  };

  const setFlatSecondStyles = () => {
    return 'bg-transparent text-cl-black rounded-md';
  };

  const setRoundedStyles = () => {
    return 'bg-cl-primary text-cl-white rounded-full';
  };

  const setOnlyIconStyles = () => {
    if (onlyIcon) return 'min-w-1 mr-0 w-5 h-5';
    return '';
  };

  return (
    <Button
      startContent={
        icon ? (
          <span
            className={`${icon} mr-2 ${setOnlyIconStyles()} ${iconSize} `}
          ></span>
        ) : null
      }
      className={` ${setStyles()} ${classNames} text-sm  tracking-wide min-w-1`}
    >
      {onlyIcon ? '' : text}
    </Button>
  );
};
