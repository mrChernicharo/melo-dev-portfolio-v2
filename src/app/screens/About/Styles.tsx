import styled from 'styled-components';
import { IBreakpoint } from '../../hooks/useWindowSize';

export const Styles = styled.div<{ breakpoint: IBreakpoint }>`
  h1 {
    padding-top: 3rem;
  }

  main {
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ breakpoint }) => {
      switch (breakpoint) {
        case 'mobile':
        case 'tablet':
          return 'column';
        case 'desktop':
        case 'wide':
          return 'row';
      }
    }};

    height: ${({ breakpoint }) => {
      switch (breakpoint) {
        case 'mobile':
          return '550px';
        case 'tablet':
          return '600px';
        case 'desktop':
          return '300px';
        case 'wide':
          return '360px';
      }
    }};
    div.avatar-container {
      /* border: 1px solid; */
      width: ${({ breakpoint }) => {
        switch (breakpoint) {
          case 'mobile':
          case 'tablet':
            return '100%';
          case 'desktop':
          case 'wide':
            return '100%';
        }
      }};
      img.avatar {
        border-radius: 50%;
        transform: rotate(-20deg);
        height: ${({ breakpoint }) => {
          switch (breakpoint) {
            case 'mobile':
              return '150px';
            case 'tablet':
              return '180px';
            case 'desktop':
              return '200px';
            case 'wide':
              return '260px';
          }
        }};
      }
    }
  }
  .skillList {
    display: grid;
    grid-template-columns: ${({ breakpoint }) => {
      switch (breakpoint) {
        case 'mobile':
          return 'repeat(4, 1fr)';
        case 'tablet':
          return 'repeat(6, 1fr)';
        case 'desktop':
          return 'repeat(10, 1fr)';
        case 'wide':
          return 'repeat(12, 1fr)';
      }
    }};

    .skill-div {
      /* border: 1px solid; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.75rem;

      img {
        max-width: 40px;
        max-height: 40px;
      }
    }
  }
`;
