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
		min-height: 200px;
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
		padding-bottom: 2rem;
		h2 {
			margin: 3rem 0;
		}
		p.description {
			max-width: 540px;

			p.top-p {
				font-size: calc(1.6vmin + 8px);
			}
		}
		div.under-title {
			/* border: 1px solid red; */
			display: grid;
			grid-template-columns: ${({ breakpoint }) => {
				switch (breakpoint) {
					case 'mobile':
					case 'tablet':
						return '1fr';
					case 'desktop':
						return '500px 1fr';
					case 'wide':
						return '1fr 1fr';
				}
			}};
			justify-items: center;

			div.pix-grid {
				/* border: 1px solid blue; */
				max-width: 520px;
				min-width: 300px;
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 0.4rem;

				justify-items: center;
				align-items: center;

				img {
					height: auto;
					width: ${({ responsive }) =>
						responsive ? '100%' : 'auto'};
					max-width: 260px;
					max-height: 160px;
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
			font-size: calc(3vmin + 6px);

			div.code {
				display: inline-block;
				color: ${({ theme }) => AppColors(theme).tertiary};
				animation: ${({ theme }) => flashing(AppColors(theme).tertiary)}
					3s infinite ease-in-out;
			}
		}
	}

	p.description {
		font-size: calc(1.4vmin + 6px);
		z-index: 8;
		padding: 0.5rem 1rem;
		border-radius: 6px;
	}

	h1 {
		font-size: calc(4vmin + 16px);
		margin-top: calc(5vmin + 4px);
	}
`;

/* grid-template-columns: ${({ responsive }) =>
				responsive ? '1fr' : '1fr 1fr'}; */
