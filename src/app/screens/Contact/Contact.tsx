import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Styles } from './Styles';

import Lottie, { Options as LottieOptions } from 'react-lottie';
import mailAnim from '../../assets/lottie/mail.json';

// import { waves } from '../../utils/helpers';
// @ts-ignore
import waves from '/images/svg-waves.svg';

import CurrentPageIndicator from '../../components/CurrentPageIndicator/CurrentPageIndicator';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact(): JSX.Element {
	const [serverMessage, setServerMessage] = useState('');

	const animOptions: LottieOptions = {
		animationData: mailAnim,
	};

	useEffect(() => {
		fetch('/api/hello')
			.then(response => response.json())
			.then(data => setServerMessage(data.message));
	}, []);
	return (
		<Styles>
			<CurrentPageIndicator text="Contact" />
			<h1>Send me a message</h1>

			<p>{serverMessage}</p>

			<Lottie options={animOptions} width={400} height={280} />

			<ContactForm />

			<img src={waves} className="waves" />
		</Styles>
	);
}
