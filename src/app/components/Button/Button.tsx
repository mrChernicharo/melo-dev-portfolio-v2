import React, { ReactNode, SyntheticEvent } from 'react';
import { useThemeContext } from '../../hooks/ThemeContext';
import { ButtonContainer } from './Styles';

type IAlignment = 'start' | 'center' | 'end';

interface IButtonProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  align?: IAlignment;
  font?: number;
  disabled?: boolean;
  onPress?: (e: SyntheticEvent) => void;
}

export default function Button({
  title,
  leftIcon,
  rightIcon,
  align,
  font,
  disabled,
  onPress,
}: IButtonProps): JSX.Element {
  const { theme } = useThemeContext();

  return (
    <ButtonContainer theme={theme} align={align} font={font}>
      <button onClick={onPress} disabled={disabled}>
        {leftIcon && leftIcon}
        <span>{title}</span>
        {rightIcon && rightIcon}
      </button>
    </ButtonContainer>
  );
}
