import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import workingAnim from '../../assets/lottie/working.json';

// @ts-ignore
import waves from '/images/svg-waves.svg';
// @ts-ignore
import topWaves from '/images/svg-waves-top.svg';

import { useWindowSize } from '../../hooks/useWindowSize';
import { useThemeContext } from '../../hooks/ThemeContext';
import { getProject } from '../../utils/projects';
import {
	checkBrowser,
	d3Pix,
	gordinhoPix,
	lacosPix,
	oldPortPix,
	otherPix,
} from '../../utils/helpers';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Button from '../../components/Button/Button';
import AboutLinks from '../../components/AboutLinks/AboutLinks';

import { HomeStyles } from './Styles';
import { MdDoubleArrow } from 'react-icons/md';

export default function Home(): JSX.Element {
	const [responsive, setResponsive] = useState(false);
	const [browser, setBrowser] = useState('');

	const melRef = useRef<HTMLVideoElement>(null);
	const capoeiraRef = useRef<HTMLVideoElement>(null);

	const animOptions: LottieOptions = {
		animationData: workingAnim,
	};

	const { theme } = useThemeContext();
	const { width, breakpoint } = useWindowSize();

	const btnFont = () => {
		const fontsize = responsive ? (breakpoint === 'mobile' ? 14 : 18) : 24;
		return fontsize;
	};

	useEffect(() => {
		setResponsive(v => breakpoint === 'mobile' || breakpoint === 'tablet');
	}, [width]);

	useEffect(() => {
		console.log(browser);
	}, [browser]);

	useEffect(() => {
		melRef.current?.play();
		capoeiraRef.current?.play();
		setBrowser(checkBrowser());
	}, []);

	return (
		<HomeStyles
			responsive={responsive}
			theme={theme}
			breakpoint={breakpoint}
			width={width}
			browser={browser}
		>
			{/* TOP */}
			<section className="top">
				<div className="heading">
					<h1>Hi, I'm Felipe</h1>
					<h2>
						My life is to build things with{' '}
						<div className="code">{`{ code }`}</div>
					</h2>

					<p className="description">
						I'm a Software Engineer living in Washington DC. My job
						is to create business solutions and compelling
						experiences, through creativity and coding skills,
						always following the best practices and using the most
						modern technologies.
					</p>
				</div>

				<Lottie
					options={animOptions}
					isStopped={false}
					isPaused={false}
					isClickToPauseDisabled
					height={
						responsive
							? '65vmin'
							: breakpoint === 'wide'
							? '32vmax'
							: '40vmax'
					}
				/>
			</section>

			<section className="img-frame with-margin">
				<img src={waves} alt="waves" className="waves" />
			</section>

			{/* PROJECTS */}
			<section className="projects">
				<div className="heading">
					<h2>Check out some of my work</h2>
				</div>

				<div className="under-title">
					<div className="pix-grid">
						<img src={oldPortPix[2]} alt="" />
						<img src={lacosPix[4]} alt="" />
						<img src={d3Pix[2]} alt="" />
						<img src={lacosPix[0]} alt="" />
						<img src={d3Pix[1]} alt="" />
						<img src={gordinhoPix[3]} alt="" />
						{width > 1300 && (
							<>
								<img src={otherPix[1]} alt="" />
								<img src={otherPix[0]} alt="" />
							</>
						)}
					</div>
					<div className="grid-side-text">
						<p className="top-p">
							Learning
							<span className="code">&nbsp;==&nbsp;</span>
							Discovery
							<span className="code">&nbsp;&amp;&amp;&nbsp;</span>
							Fun!
						</p>
						<p className="description">
							Practicing is the best way to master a skill, and
							there's no way to get good at something if you don't
							get your hands dirty. That's why I consider myself
							lucky: I just love to practice! For me, nothing is
							more exciting than to start a new project and to
							tinker around with new technologies and tools.
						</p>
					</div>
				</div>

				<div className="video-gallery">
					<VideoPlayer src={getProject('gordinho').videoUrl} />
				</div>

				<div className="video-bottom-text">
					<p>
						As mentioned above, I just{' '}
						<span className="code">LOVE</span> to build things with
						code! That's why my github has over 130 repositories! In
						each of them I explore new tools and ideas, always with
						the goal of pushing my limits even further. I want to be
						able to code my ideas, no matter what they are. So
						whenever a new challenge comes up, I simply create a new
						project and tackle the problem through a practical
						approach.
					</p>
				</div>

				<div className="goto-projects-button-container">
					<Link to={'/projects'} onClick={() => scrollTo({ top: 0 })}>
						<Button
							title="Check more projects"
							align="center"
							font={btnFont()}
							rightIcon={<MdDoubleArrow />}
						/>
					</Link>
				</div>
			</section>

			<section className="img-frame">
				<img src={topWaves} alt="" className="waves" />
			</section>

			{/* ABOUT */}
			<section className="about">
				<h2>Want to know me better?</h2>

				<p className="description">
					<p>
						Yeah, I am a coder alright, but more than that, I'm also
						a father, a husband, a musician, and sometimes a runner.
						You can also find out more about things that I do and
						the techs that I've been working with on the links
						below.
					</p>
				</p>
				<br />

				<Link to={'/about'} onClick={() => scrollTo({ top: 0 })}>
					<Button
						title="More about me"
						align="center"
						font={btnFont()}
						rightIcon={<MdDoubleArrow />}
					/>
				</Link>

				<AboutLinks />

				<p className="description">
					<p>
						Or simply go to the contacts page and send me a message.
						Please don't hesitate, just write me whatever you have
						in mind! I'll be pleased to respond :)
					</p>
				</p>
				<br />

				<Link to={'/contact'} onClick={() => scrollTo({ top: 0 })}>
					<Button
						title="Go to contact page"
						align="center"
						font={btnFont()}
						rightIcon={<MdDoubleArrow />}
					/>
				</Link>
			</section>

			<section className="img-frame with-margin">
				<img src={waves} className="bottom-waves" />
			</section>
		</HomeStyles>
	);
}
