import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

export const VideoStyles = styled.div<{ theme: IAppTheme }>`
  /* border: 1px solid red; */
  /* background: ${({ theme }) => AppColors(theme).thirdBg}; */
  width: 100%;
  /* margin: 1rem 0 3rem; */
  padding-top: 1rem;
  padding-bottom: 0.8rem;

  position: relative;
  z-index: 4;

  video {
    height: 100%;
    width: 100%;
    max-height: 480px;
  }
`;
