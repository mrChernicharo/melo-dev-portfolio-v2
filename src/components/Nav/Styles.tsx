import styled, { keyframes } from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

const slideIn = keyframes`
  0% {
    opacity: 0;
    right: -300px;
  }
  100% {
    opacity: 1;
    right: 0;
  }
`;
const slideAway = keyframes`
  0% {
    opacity: 1;
    right: 0;
  }
  100% {
    opacity: 0;
    right: -300px;
  }
`;

export const NavStyles = styled.nav<{ theme: IAppTheme }>`
  display: flex;
  justify-content: end;

  div.dropdown {
    background-color: ${({ theme }) => AppColors(theme).secondBg};

    position: absolute;
    z-index: 2;
    padding: 2rem;

    animation: 0.4s ${slideIn};
    transition: top;

    box-shadow: 0px -100px #41424d, 0px 2px 6px rgba(0, 0, 0, 0.4),
      1px 2px 4px rgba(0, 0, 0, 0.3);

    &.fading {
      animation: 0.6s ${slideAway};
    }

    &.withdrawn {
      top: 2.5rem;
    }

    &.expanded {
      top: 4rem;
    }

    > section {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }
  }

  .overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const NavLinksStyles = styled.section<{ responsive: boolean }>`
  a {
    text-decoration: none;
    color: #fff;
    padding-block: ${({ responsive }) => (responsive ? '0.5rem' : 0)};

    &:first-child {
      margin-left: ${({ responsive }) => (responsive ? 0 : '1.5rem')};
    }

    &:last-child {
      margin-right: 0.5rem;
      margin-right: ${({ responsive }) => (responsive ? 0 : '0.5rem')};
    }
  }

  span {
    margin-right: ${({ responsive }) => (responsive ? 0 : '0.65rem')};
    font-variant: small-caps;

    &.active {
      color: #ff9900;
    }
  }
`;

export const DropdownButtonStyles = styled.button`
  margin-inline: 0.5rem;
  border: none;
  z-index: 12;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
