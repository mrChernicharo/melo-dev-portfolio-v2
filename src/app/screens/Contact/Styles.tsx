import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

export const Styles = styled.div`
  h1 {
    padding-top: 3rem;
  }
  img.waves {
    position: relative;
    left: 0;
    bottom: -4px;
    z-index: 1;
  }
`;
