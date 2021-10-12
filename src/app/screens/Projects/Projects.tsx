import React, { useEffect, useRef } from 'react';
import Lottie, { Options as LottieOptions } from 'react-lottie';
import { Styles } from './Styles';
import ideaAnimation from '../../assets/lottie/business-idea-animation.json';

import { techCategories, skillsList } from '../../utils/skills';

import { videoURLs } from '../../utils/helpers';
import { projects } from '../../utils/projects';

// @ts-ignore
import waves from '/images/svg-waves.svg';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CurrentPageIndicator from '../../components/CurrentPageIndicator/CurrentPageIndicator';

export interface VideoCard {
	videoUrl: string;
	videoRef: React.RefObject<HTMLVideoElement>;
	videoDelay: number;
	title: string;
	description: string;
	techs: string[];
}

export default function Projects(): JSX.Element {
	const animOptions: LottieOptions = { animationData: ideaAnimation };

	console.log({ skillsList, techCategories });

	return (
		<Styles>
			<CurrentPageIndicator text="projects" />
			<h1>Some of the stuff I built</h1>

			<div className="illustration">
				<Lottie options={animOptions} width={400} height={400} />
			</div>

			{projects.map((project, i) => (
				<ProjectCard project={project} delay={i * 1000} />
			))}

			<img src={waves} className="bottom-waves" />
		</Styles>
	);
}
