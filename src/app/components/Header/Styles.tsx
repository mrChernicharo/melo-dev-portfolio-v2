import styled, { keyframes } from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

const bounce = keyframes`
0% {
  height: 3.6rem;
}
20% {
  height:2.2rem;
}
40% {
  height: 3rem;
}
60% {
  height:2.4rem;
}
80% {
  height: 2.65rem;
}
100% {
  height: 2.5rem;
}
`;

export const Styles = styled.header<{ theme: IAppTheme }>`
  background: ${({ theme }) => AppColors(theme).secondBg};
  width: 100%;

  position: fixed;
  top: 0;

  display: grid;
  grid-template-columns: 54px 170px 1fr;
  align-items: center;

  color: #fff;
  z-index: 10;

  transform-origin: top;
  transition: all 0.5s ease-in-out;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6), 0px 1px 6px rgba(0, 0, 0, 0.7);

  &.whitdrawn {
    animation: 0.8s ${bounce};
    height: 2.5rem;
  }
  &.expanded {
    height: 4rem;
  }

  .react-switch-bg > div {
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    display: flex;

    /* border: 1px solid #fff; */

    flex-direction: row;
    align-items: center;
    justify-content: end;

    > div {
      z-index: 12;
    }
  }
`;
