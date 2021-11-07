import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiFileText, FiMapPin } from 'react-icons/fi';
import Lottie, { Options as LottieOptions } from 'react-lottie';

// @ts-ignore
import waves from '/images/svg-waves.svg';
// @ts-ignore
import avatar from '/images/new-avatar.jpeg';
import computersAnimation from '../../assets/lottie/tech-reviews.json';

import { skillsList } from '../../utils/skills';
import { useWindowSize } from '../../hooks/useWindowSize';

import Button from '../../components/Button/Button';
import CurrentPageIndicator from '../../components/CurrentPageIndicator/CurrentPageIndicator';
import AboutLinks from '../../components/AboutLinks/AboutLinks';

import { Styles } from './Styles';

export default function About(): JSX.Element {
	const { breakpoint, width } = useWindowSize();

	const animOptions: LottieOptions = {
		animationData: computersAnimation,
	};

	const btnFont = () => {
		let fontsize = 14;
		switch (breakpoint) {
			case 'mobile':
				fontsize = 18;
				break;
			case 'tablet':
				fontsize = 24;
				break;
			case 'desktop':
			case 'wide':
				fontsize = 28;
				break;
		}
		return fontsize;
	};

	return (
		<Styles breakpoint={breakpoint} width={width}>
			<CurrentPageIndicator text="About" />

			<h1>Felipe who?</h1>

			<section className="avatar-container">
				<img src={avatar} alt="avatar" className="avatar" />
				<div className="links-list">
					<p>Yeah, that's me!</p>
					<p style={{ fontSize: '1.5rem' }}>
						I am a Web <span className="highlight">&amp;&amp;</span>{' '}
						Solutions <span className="highlight">&amp;&amp;</span>{' '}
						Systems Developer
					</p>
					<p>
						Coding since 2018, I consider myself to be a Fullstack
						engineer with strong focus on frontend development. I
						have 3 years of professional experience dealing with
						various web and mobile technologies, most of them
						related to the JavaScript ecosystem.
					</p>
					<br />

					<p>
						In addition, I'm also a Problem solver, quick learner
						and an extremely dedicated professional. Deeply
						committed to bringing value to its employers.
					</p>
				</div>

				<div className="cv-button-container">
					<a
						href="https://mrchernicharo.github.io/curriculum/"
						target="_blank"
					>
						<Button
							title="Check my CV"
							font={btnFont()}
							rightIcon={<FiFileText />}
						/>
					</a>
				</div>
			</section>

			<main>
				<div className="links-container">
					<h2>
						Reach out to me <FaCheck color="forestgreen" />
					</h2>
					<span>
						<strong>
							<FiMapPin size={20} /> Current Location:&nbsp;
						</strong>
						Washington DC
					</span>
					<AboutLinks />
				</div>
				<div className="lottie-container">
					<Lottie options={animOptions} isClickToPauseDisabled />
				</div>
			</main>

			<h2>
				...And check some of the techs that I've worked with in the past
				few years
			</h2>
			<br />

			<div className="skillList">
				{skillsList.map(skill => (
					<div className="skill-div" key={skill.name}>
						<img src={skill.logo} className="tech-logo" />
						<span>{skill.name}</span>
					</div>
				))}
			</div>

			<img src={waves} className="bottom-waves" />
		</Styles>
	);
}
