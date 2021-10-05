import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { IBreakpoint } from '../../hooks/useWindowSize';
import { AppColors } from '../../utils/appColors';
// import waves from '../../assets/svg/waves.svg';

interface HomeProps {
  theme: IAppTheme;
  responsive: boolean;
  breakpoint: IBreakpoint;
}

export const HomeStyles = styled.div<HomeProps>`
  section.top {
    margin: ${({ responsive }) => (responsive ? '0 1rem' : '0 5vmax')};

    display: grid;
    grid-template-columns: ${({ responsive }) => (responsive ? '1fr' : '1fr 1fr')};

    margin-bottom: -100px;

    .heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 7vmin;
        margin-block: 2rem;
      }

      h2 {
        font-size: 4vmin;

        div.code {
          display: inline-block;
          color: ${({ theme }) => AppColors(theme).tertiary};
        }
      }

      div.description {
        z-index: 8;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        max-width: 400px;
      }
    }
    .waves {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 0;
    }
  }

  section.projects {
    /* margin-top: -100px; */
  }
  section.about {
    margin-top: -100px;
  }
  section.contact {
  }
`;

/* .hero-container {
    width: 100vw;
    background-color: #000;
    img {
      max-height: 600px;
    }
  } */
