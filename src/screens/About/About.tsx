import React from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';

import AboutLinks from '../../components/AboutLinks/AboutLinks';
import avatar from '/images/new-avatar.jpeg';
import computersAnimation from '../../assets/lottie/48786-tech-reviews.json';

import { techCategories, skillsList } from '../../utils/skills';
import { useWindowSize } from '../../hooks/useWindowSize';
import Button from '../../components/Button/Button';
import { FiFileText } from 'react-icons/fi';
import CurrentPageIndicator from '../../components/CurrentPageIndicator/CurrentPageIndicator';

export default function About(): JSX.Element {
  const { breakpoint } = useWindowSize();
  const animOptions: LottieOptions = {
    animationData: computersAnimation,
  };
  return (
    <Styles breakpoint={breakpoint}>
      <CurrentPageIndicator text="About" />
      <h1>Felipe who?</h1>
      <main>
        <div className="avatar-container">
          <img src={avatar} alt="avatar" className="avatar" />
          <div className="links-list">
            <p>{'Web && Systems && Solutions Developer'}</p>
            <p>Coding since 2018</p>
          </div>
        </div>

        <Lottie options={animOptions} />
      </main>

      <AboutLinks />

      <a href="https://mrchernicharo.github.io/curriculum/" target="_blank">
        <Button title="Get CV" font={18} rightIcon={<FiFileText />} />
      </a>

      <h2>Stuff that I like to work with</h2>
      <div className="skillList">
        {skillsList.map(skill => (
          <div className="skill-div" key={skill.name}>
            <img src={skill.logo} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </Styles>
  );
}
