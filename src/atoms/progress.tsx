import { Progress } from '@nextui-org/react';

export interface Props {
  label: string;
  size: 'sm' | 'md' | 'lg';
  valueLabel: string;
  value: number;
  maxValue: number;
}

export const ProgressAtom = ({
  label,
  size,
  valueLabel,
  value,
  maxValue,
}: Props) => {
  return (
    <Progress
      color={undefined}
      label={label}
      valueLabel={valueLabel}
      size={size}
      value={value}
      maxValue={maxValue}
      showValueLabel={true}
      classNames={{
        indicator: 'bg-cl-primary-progress',
        track: 'bg-cl-primary',
        value: 'text-foreground/60 text-xs mt-[3px]',
      }}
    />
  );
};
