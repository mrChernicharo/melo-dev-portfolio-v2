import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import workingAnim from '../../assets/lottie/77409-working.json';

import { useWindowSize } from '../../hooks/useWindowSize';
import { useThemeContext } from '../../hooks/ThemeContext';
import { HomeStyles } from './Styles';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { getProject } from '../../utils/projects';
import Button from '../../components/Button/Button';
import AboutLinks from '../../components/AboutLinks/AboutLinks';
import { waves, topWaves } from '../../utils/helpers';

export default function Home(): JSX.Element {
	const [responsive, setResponsive] = useState(false);
	const melRef = useRef<HTMLVideoElement>(null);
	const capoeiraRef = useRef<HTMLVideoElement>(null);

	const animOptions: LottieOptions = {
		animationData: workingAnim,
	};

	const { theme } = useThemeContext();
	const { width, breakpoint } = useWindowSize();

	useEffect(() => {
		setResponsive(v => breakpoint === 'mobile' || breakpoint === 'tablet');
	}, [width]);

	useEffect(() => {
		melRef.current?.play();
		capoeiraRef.current?.play();
	}, []);

	return (
		<HomeStyles
			responsive={responsive}
			theme={theme}
			breakpoint={breakpoint}
		>
			<section className="top">
				<div className="heading">
					<h1>Hi, I'm Felipe</h1>
					<h2>
						My life is to build things with{' '}
						<div className="code">{`{ code }`}</div>
					</h2>

					<div className="description">
						<p>
							I'm a Brazilian Software Engineer living in
							Washington DC. My job is to create business
							solutions and compelling experiences, through
							creativity and coding skills, always following the
							best practices and using the most modern tools.
						</p>
					</div>
				</div>

				<Lottie
					options={animOptions}
					isStopped={false}
					isPaused={false}
				/>
			</section>
			<img src={waves} alt="waves" className="waves" />

			<section className="projects">
				<h1>Check some of my work</h1>
				<VideoPlayer src={getProject('gordinho').videoUrl} />
				<VideoPlayer src={getProject('lacos').videoUrl} />

				<Link to={'/projects'}>
					<Button title="Check more projects" align="center" />
				</Link>
			</section>
			<img src={topWaves} alt="waves" className="waves" />

			<section className="about">
				<h1>Get to know me better</h1>

				<AboutLinks />

				<Link to={'/about'}>
					<Button title="More about me" align="center" />
				</Link>
			</section>

			<section className="contact">
				<h1>And maybe leave me a message</h1>

				<Link to={'/about'}>
					<Button title="Go to contact page" align="center" />
				</Link>
			</section>
		</HomeStyles>
	);
}
