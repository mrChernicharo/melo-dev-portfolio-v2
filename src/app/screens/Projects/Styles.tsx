import styled from 'styled-components';
import { IBreakpoint } from '../../hooks/useWindowSize';

export const Styles = styled.div<{ breakpoint: IBreakpoint }>`
	h1 {
		font-size: ${({ breakpoint }) =>
			breakpoint === 'mobile' ? '2.4rem' : '2.8rem'};
		padding-top: 2.5rem;
	}

	h2 {
		font-size: 2rem;
	}

	.illustration {
		margin-bottom: -72px;
	}

	img.bottom-waves {
		width: 100%;
		height: 100%;
	}
`;
