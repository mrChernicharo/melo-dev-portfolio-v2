import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { IBreakpoint } from '../../hooks/useWindowSize';
import { AppColors } from '../../utils/appColors';

export const ProjectCardStyles = styled.div<{
  breakpoint: IBreakpoint;
  theme: IAppTheme;
}>`
  width: calc(100% - 12vmin);
  max-width: 750px;

  position: relative;
  margin: 1rem auto;

  background-color: ${({ theme }) => AppColors(theme).thirdBg};
  border-radius: 0.25rem;
  padding: 1rem;

  box-shadow: 2px 3px 6px rgba(00, 00, 40, 0.3), 3px 4px 4px rgba(00, 00, 20, 0.2);

  h1 {
    font-size: ${({ breakpoint }) => {
      switch (breakpoint) {
        case 'mobile':
          return '26px';
        case 'tablet':
          return '28px';
        case 'desktop':
          return '32px';
        case 'wide':
          return '36px';
      }
    }};
  }

  div.techs {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid; */

    li {
      margin-inline: 0.1rem;
      list-style: none;

      img {
        width: ${({ breakpoint }) => {
          switch (breakpoint) {
            case 'mobile':
              return '24px';
            case 'tablet':
              return '28px';
            case 'desktop':
            case 'wide':
              return '32px';
          }
        }};
      }
    }
  }

  p {
    padding-inline: 2rem;
    font-size: ${({ breakpoint }) => {
      switch (breakpoint) {
        case 'mobile':
          return '11px';
        case 'tablet':
          return '14px';
        case 'desktop':
        case 'wide':
          return '16px';
      }
    }};
  }

  div.img-gallery {
    /* border: 1px solid; */

    display: grid;
    align-items: center;
    grid-gap: 1rem;

    grid-template-columns: ${({ breakpoint }) => {
      switch (breakpoint) {
        case 'mobile':
          return 'repeat(2, 1fr)';
        case 'tablet':
          return 'repeat(4, 1fr)';
        case 'desktop':
        case 'wide':
          return 'repeat(6, 1fr)';
      }
    }};

    div {
      height: 100%;
      background-color: #000;
      img {
        width: 100%;
        max-width: 200px;
        max-height: 120px;
      }
    }
  }
`;
