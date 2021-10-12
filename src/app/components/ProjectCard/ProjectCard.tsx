import React from 'react';
import { FiGithub, FiGlobe, FiWifi } from 'react-icons/fi';
import { useThemeContext } from '../../hooks/ThemeContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import { IProject } from '../../utils/projects';
import { Skill } from '../../utils/skills';
import Button from '../Button/Button';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { ProjectCardStyles } from './Styles';
import { Link } from 'react-router-dom';
import ButtonRow from '../ButtonRow/ButtonRow';

export interface IProjectCardProps {
	project: IProject;
	delay?: number;
}

export default function ProjectCard({
	project,
	delay,
}: IProjectCardProps): JSX.Element {
	const { breakpoint, width } = useWindowSize();
	const { theme } = useThemeContext();

	const { title, description, videoUrl, links, techs, imageUrls } = project;

	return (
		<ProjectCardStyles breakpoint={breakpoint} theme={theme} width={width}>
			<h1>{title}</h1>

			<div className="techs">
				{techs.map(tech => (
					<li>
						<img src={tech.logo} alt={tech.name} width={30} />
					</li>
				))}
			</div>

			<p>{description}</p>

			<VideoPlayer src={videoUrl} delay={delay} />

			{imageUrls && (
				<div className="img-gallery">
					{imageUrls.map(img => (
						<div key={img}>
							<img src={img} />
						</div>
					))}
				</div>
			)}

			<ButtonRow links={links} />
		</ProjectCardStyles>
	);
}
