import React from 'react';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import { IProject } from '../../utils/projects';
import Button from '../Button/Button';
import { Container } from './Styles';

interface IButtonRowProps {
	links: {
		github?: string | null;
		www?: string | null;
	};
}

export default function ButtonRow({ links }: IButtonRowProps): JSX.Element {
	return (
		<Container>
			{links.github && (
				<a href={links.github} target="_blank">
					<Button
						title="Github Repo"
						onPress={() => {}}
						leftIcon={<FiGithub />}
						font={16}
					/>
				</a>
			)}

			{links.www && (
				<a href={links.www} target="_blank">
					<Button
						title="Visit me Online"
						onPress={() => {}}
						rightIcon={<FiGlobe />}
						color="tertiary"
						font={16}
					/>
				</a>
			)}
		</Container>
	);
}
