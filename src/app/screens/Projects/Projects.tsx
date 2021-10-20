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
import Button from '../../components/Button/Button';
import { FiGithub } from 'react-icons/fi';
import { MdDoubleArrow } from 'react-icons/md';
import { useWindowSize } from '../../hooks/useWindowSize';

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

	const { breakpoint } = useWindowSize();

	// console.log({ skillsList, techCategories });

	return (
		<Styles breakpoint={breakpoint}>
			<CurrentPageIndicator text="projects" />
			<h1>See things that I've built</h1>

			<div className="illustration">
				<Lottie options={animOptions} width={400} height={400} />
			</div>

			{projects.map((project, i) => (
				<ProjectCard project={project} delay={i * 1000} />
			))}

			<br />
			<p>Want to see more?</p>
			<br />

			<a href="https://github.com/mrChernicharo" target="_blank">
				<Button
					title="Check my Github"
					leftIcon={<FiGithub />}
					font={20}
					rightIcon={<MdDoubleArrow />}
				/>
			</a>

			<img src={waves} className="bottom-waves" />
		</Styles>
	);
}
