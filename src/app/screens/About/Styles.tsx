import styled from 'styled-components';
import { IBreakpoint } from '../../hooks/useWindowSize';
import { AppColors } from '../../utils/appColors';

interface AboutProps {
	breakpoint: IBreakpoint;
	width: number;
}

export const Styles = styled.div<AboutProps>`
	h1 {
		padding-top: 3rem;
	}

	section.avatar-container {
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

		div.links-list {
			span.highlight {
				font-weight: bold;
				color: ${({ theme }) => AppColors(theme).secondary};
			}
		}
	}

	main {
		/* border: 1px solid; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 3rem;
		margin: 0 auto;
		max-width: 800px;

		flex-direction: ${({ breakpoint }) => {
			switch (breakpoint) {
				case 'mobile':
				case 'tablet':
					return 'column-reverse';
				case 'desktop':
				case 'wide':
					return 'row';
			}
		}};

		div.links-container {
			a {
				color: ${({ theme }) => AppColors(theme).primary};
			}

			svg {
				vertical-align: bottom;
			}
		}

		div.lottie-container {
			max-width: 400px;
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
			justify-content: end;
			align-items: center;
			font-size: 0.75rem;
			padding-top: 1.5rem;

			img {
				max-width: 40px;
				max-height: 40px;
			}

			span {
				font-weight: bold;
			}
		}
	}
`;
