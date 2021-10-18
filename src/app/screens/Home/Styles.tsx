import styled, { keyframes } from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { IBreakpoint } from '../../hooks/useWindowSize';
import { AppColors } from '../../utils/appColors';
// import waves from '../../assets/svg/waves.svg';

interface HomeProps {
	theme: IAppTheme;
	responsive: boolean;
	breakpoint: IBreakpoint;
	width: number;
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

const gradColors = (theme: IAppTheme) => {
	return theme === 'light' ? ['#1f56e4', '#55e1de'] : ['#102cb8', '#2eb8b2'];
};

export const HomeStyles = styled.div<HomeProps>`
	section.top {
		display: grid;
		grid-template-columns: ${({ responsive }) =>
			responsive ? '1fr' : '1fr 1fr'};

		margin: ${({ responsive }) => (responsive ? '0 1rem' : '0 5vmax')};
		margin-bottom: -100px;

		p.description {
			max-width: 440px;
		}
	}

	section.img-frame {
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		justify-content: end;

		&.with-margin {
			min-height: 200px;
		}

		.waves {
			position: relative;
			bottom: 0;
			left: 0;
		}
	}

	section.projects {
		padding-bottom: 2rem;
		color: #fff;
		background-image: ${({ theme }) => `linear-gradient(90deg, ${
			gradColors(theme)[0]
		}, ${gradColors(theme)[1]}),
			linear-gradient(to bottom, transparent, ${gradColors(theme)[0]}),
			linear-gradient(to top, transparent, ${gradColors(theme)[1]})`};

		h2 {
			margin: 3rem 0;
		}

		div.under-title {
			display: grid;

			margin-left: ${({ responsive }) => (responsive ? 'unset' : '2rem')};
			grid-template-columns: ${({ breakpoint }) => {
				switch (breakpoint) {
					case 'mobile':
					case 'tablet':
						return '1fr';
					case 'desktop':
						return 'auto 1fr';
					case 'wide':
						return 'auto 1fr';
				}
			}};
			justify-items: center;

			div.pix-grid {
				/* border: 1px solid blue; */

				display: grid;
				grid-gap: 0.5rem;
				grid-template-columns: ${({ breakpoint, width }) => {
					switch (breakpoint) {
						case 'mobile':
							return '1fr 1fr';
						case 'tablet':
							return '1fr 1fr';
						case 'desktop':
							return '1fr 1fr';
						case 'wide':
							return width <= 1300
								? '1fr 1fr 1fr'
								: '1fr 1fr 1fr 1fr';
					}
				}};

				padding: ${({ breakpoint }) => {
					switch (breakpoint) {
						case 'mobile':
							return '0 2rem 0 2rem';
						case 'tablet':
							return '0 3rem 0 3rem';
						case 'desktop':
						case 'wide':
							return '0';
					}
				}};

				justify-items: center;
				align-items: center;

				img {
					aspect-ratio: 16/10;
					height: auto;
					width: ${({ responsive }) =>
						responsive ? '100%' : 'auto'};
					max-width: 210px;
				}
			}

			div.grid-side-text {
				/* border: 1px solid; */
				padding: 0 1.5rem 0 1rem;
				max-height: ${({ responsive }) =>
					responsive ? '400px' : '270px'};
				min-height: ${({ responsive }) =>
					responsive ? 'auto' : '160px'};

				p.description {
					max-width: 540px;
					font-weight: bold;
				}
				p.top-p {
					margin-top: ${({ responsive }) =>
						responsive ? '2rem' : '0'};
					font-size: 1.5rem;
					font-weight: bold;
				}
			}
		}
		.video-gallery {
			margin-block: 2rem;
		}
	}

	section.about {
		/* margin-top: -100px; */
		p.description {
			max-width: 440px;
			margin: 0 auto;
		}
	}

	.heading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			margin-bottom: 0;
		}

		h2 {
			font-size: 2rem;
		}
	}
	.code {
		display: inline-block;
		color: ${({ theme }) => AppColors(theme).tertiary};
		animation: ${({ theme }) => flashing(AppColors(theme).tertiary)} 3s
			infinite ease-in-out;
	}

	h1 {
		font-size: 3rem;
		margin-top: calc(5vmin + 4px);
	}

	p.description {
		font-size: 1rem;
		z-index: 8;
		padding: 0.5rem 1rem;
		border-radius: 6px;
	}
`;
