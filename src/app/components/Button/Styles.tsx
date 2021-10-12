import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

interface ButtonStyleProps {
  theme: IAppTheme;
  align?: 'start' | 'center' | 'end';
  font?: number;
}

export const ButtonContainer = styled.div<ButtonStyleProps>`
  margin-left: 0.25rem;

  display: flex;
  justify-content: ${({ align }) => align || 'center'};

  button {
    display: flex;
    align-items: center;

    font-weight: bold;
    background: ${({ theme }) => AppColors(theme).primary};
    color: ${({ theme }) => AppColors(theme).buttonText};

    border: none;
    border-radius: ${({ font }) => (font && font + 'px') || '16px'};

    width: auto;
    padding-inline: ${({ font }) => (font && font + 'px') || '1rem'};
    padding-block: 0.5rem;
    opacity: 1;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      background-color: #cdcdcd;
    }

    span {
      font-size: ${({ font }) => font + 'px'};
    }

    svg {
      margin-inline: 0.2rem;
      width: ${({ font }) => font + 'px'};
      height: ${({ font }) => font + 'px'};
    }
  }
`;
