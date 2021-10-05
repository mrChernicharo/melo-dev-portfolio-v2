import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import mailAnim from '../../assets/lottie/mail.json';

import CurrentPageIndicator from '../../components/CurrentPageIndicator/CurrentPageIndicator';
import ContactForm from '../../components/ContactForm/ContactForm';
import { waves } from '../../utils/helpers';

export default function Contact(): JSX.Element {
	const animOptions: LottieOptions = {
		animationData: mailAnim,
	};

	return (
		<Styles>
			<CurrentPageIndicator text="Contact" />
			<h1>Send me a message</h1>

			<Lottie options={animOptions} width={400} height={400} />

			<ContactForm />

			<img src={waves} className="waves" />
		</Styles>
	);
}
