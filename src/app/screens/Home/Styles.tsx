import styled, { keyframes } from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { IBreakpoint } from '../../hooks/useWindowSize';
import { AppColors } from '../../utils/appColors';
// import waves from '../../assets/svg/waves.svg';

interface HomeProps {
  theme: IAppTheme;
  responsive: boolean;
  breakpoint: IBreakpoint;
}

const flashing = (color: string) => keyframes`
from {
  text-shadow: ${'0px 0px 2px ' + color};
}
50%{
  text-shadow: ${'0px 0px 12px ' + color};
}
to {
  text-shadow: ${'0px 0px 2px ' + color};
}
`;

export const HomeStyles = styled.div<HomeProps>`
  section.top {
    margin: ${({ responsive }) => (responsive ? '0 1rem' : '0 5vmax')};

    display: grid;
    grid-template-columns: ${({ responsive }) => (responsive ? '1fr' : '1fr 1fr')};

    margin-bottom: -100px;
  }

  section.img-frame {
    min-height: 200px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: end;

    .waves {
      position: relative;
      bottom: 0;
      left: 0;
    }
  }

  section.projects {
    h1 {
      font-size: calc(3.5vmin + 16px);
      margin-top: calc(5vmin + 4px);
    }
    /* margin-top: -100px; */
  }
  section.about {
    /* margin-top: -100px; */
  }
  section.contact {
  }

  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: calc(4vmin + 20px);
      margin-top: calc(5vmin + 4px);
      margin-bottom: 0;
    }

    h2 {
      font-size: calc(3vmin + 6px);

      div.code {
        display: inline-block;
        color: ${({ theme }) => AppColors(theme).tertiary};
        animation: ${({ theme }) => flashing(AppColors(theme).tertiary)} 3s infinite
          ease-in-out;
      }
    }
  }
  div.description {
    font-size: calc(1.4vmin + 6px);
    z-index: 8;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    max-width: 440px;
  }

  /* img.bottom-waves {
    position: relative;
    left: 0;
    bottom: -4px;
    z-index: 1;
  } */
`;
/* text-shadow: ${({ theme }) => '0px 0px 10px ' + AppColors(theme).tertiary}; */
