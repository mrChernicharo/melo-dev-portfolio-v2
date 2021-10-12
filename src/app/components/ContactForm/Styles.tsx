import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

export const FormStyles = styled.div<{ theme: IAppTheme }>`
  background: ${({ theme }) => AppColors(theme).thirdBg};
  width: calc(100% - 12vmin);
  max-width: 750px;

  padding: 1.5rem;
  border-radius: 8px;
  z-index: 28;

  height: 400px;

  margin: 0 auto;
  transition: 0.4s;

  box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: scaleY(1.05) scaleX(1.02);
    box-shadow: 2px 8px 12px -2px rgba(0, 0, 0, 0.4);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    .inputs {
      display: flex;
      flex-direction: column;

      label {
        padding-block: 0.5rem;
      }

      input {
        border: none;
        padding: 0.5rem;
        border-radius: 8px;
      }
      textarea {
        border: none;
        border-radius: 8px 8px 0 8px;

        padding: 0.5rem;
        min-width: 200px;
        max-width: calc(100% - 1.1rem);

        min-height: 100px;
        max-height: 220px;
      }
    }
  }
`;
