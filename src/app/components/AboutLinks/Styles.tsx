import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

interface AboutLinksProps {
	theme: IAppTheme;
}

export const Styles = styled.ul<AboutLinksProps>`
	/* border: 1px solid; */
	list-style: none;
	padding: 0;
	width: fit-content;
	margin: 2rem auto;
	text-align: center;

	li {
		margin-block: 0.75rem;
	}

	a {
		color: ${({ theme }) => AppColors(theme).primary};
	}

	svg {
		vertical-align: bottom;
	}
`;
