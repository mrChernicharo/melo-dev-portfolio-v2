import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import workingAnim from '../../assets/lottie/working.json';

// import { waves, topWaves } from '../../utils/helpers';
// @ts-ignore
import waves from '/images/svg-waves.svg';
// @ts-ignore
import topWaves from '/images/svg-waves-top.svg';

import { useWindowSize } from '../../hooks/useWindowSize';
import { useThemeContext } from '../../hooks/ThemeContext';
import { HomeStyles } from './Styles';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { getProject, projects } from '../../utils/projects';
import Button from '../../components/Button/Button';
import AboutLinks from '../../components/AboutLinks/AboutLinks';

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
							I'm a Software Engineer living in Washington DC. My
							job is to create business solutions and compelling
							experiences, through creativity and coding skills,
							always following the best practices and using the
							most modern technologies.
						</p>
					</div>
				</div>

				<Lottie
					options={animOptions}
					isStopped={false}
					isPaused={false}
				/>
			</section>

			<section className="img-frame">
				<img src={waves} alt="waves" className="waves" />
			</section>

			<section className="projects">
				<div className="heading">
					<h1>Check some of my work</h1>
				</div>

				<div className="description">
					<p>
						<strong>Learning </strong>equals{' '}
						<strong>Discovery</strong> that equals{' '}
						<strong>Fun!</strong> Practicing is the best way to
						master a skill, and there's no way to get good at
						something if you don't get your hands dirty. That's why
						I consider myself to be very lucky: I just love to
						practice! For me, nothing is more exciting than to start
						a new project and to tinker around with new technologies
						and tools.
					</p>
				</div>

				<div className="video-gallery">
					<VideoPlayer src={getProject('gordinho').videoUrl} />
					<VideoPlayer src={getProject('lacos').videoUrl} />
				</div>

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

			<img src={waves} className="bottom-waves" />
		</HomeStyles>
	);
}
