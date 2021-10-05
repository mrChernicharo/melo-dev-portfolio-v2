import styled from 'styled-components';
import { IAppTheme } from './hooks/ThemeContext';
import { AppColors, darkColors } from './utils/appColors';

export const PageStyles = styled.main<{ theme: IAppTheme }>`
  min-height: 100vh;

  box-sizing: border-box;
  padding-top: 4rem;

  /* border: 1px solid #fff; */
  color: ${({ theme }) => AppColors(theme).text};
  background-color: ${({ theme }) => AppColors(theme).mainBg};

  text-align: center;
  font-size: 1rem;

  button {
    color: #fff;
    background: transparent;
    cursor: pointer;
  }

  a {
    transition: 0.3s;
    cursor: pointer;
    color: ${darkColors.heading};
    text-decoration: none;

    &:hover {
      text-shadow: 0 0 10px #fff;
    }
  }
`;
