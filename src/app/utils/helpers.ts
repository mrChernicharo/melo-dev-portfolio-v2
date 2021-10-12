import { intervalToDuration, Duration } from 'date-fns';

const baseURL = 'https://melo-dev-portfolio.s3.us-west-2.amazonaws.com';

export const videoURLs = {
	capoeira: `${baseURL}/hello-capoeira.mp4`,
	d3Charts: `${baseURL}/D3-charts.mp4`,
	gordinho: `${baseURL}/gordinho_3D.mp4`,
	happyPlants: `${baseURL}/happy-plants.mp4`,
	lacos: `${baseURL}/Lacos-portfolio.mp4`,
	mel: `${baseURL}/mel-portfolio.mp4`,
	melMobile: `${baseURL}/Mel-mobile.mp4`,
	oldPortfolio: `${baseURL}/old-portfolio.mp4`,
};

export function getXPTime(startDate: Date): string {
	const duration: globalThis.Duration = intervalToDuration({
		start: new Date(startDate),
		end: new Date(),
	});

	let [years, months, days] = ['', '', ''];

	// @ts-ignore
	if (duration?.years > 0) {
		years = duration.years === 1 ? '1 year' : `${duration.years} years`;
	}
	// @ts-ignore
	if (duration?.months > 0) {
		months =
			duration.months === 1 ? '1 month' : `${duration.months} months`;
	}
	// @ts-ignore
	if (duration?.days > 0) {
		days = duration.days === 1 ? '1 day' : `${duration.days} days`;
	}

	const response = [years, months, days].filter(Boolean);

	switch (response.length) {
		case 3:
			response[1] += ' and';
			response[0] += ',';
			break;
		case 2:
			response[0] += ' and';
			break;
	}
	return response.join(' ');
}

export const gordinhoPix = [
	'/images/gordimPix/00.png',
	'/images/gordimPix/01.png',
	'/images/gordimPix/02.png',
	'/images/gordimPix/03.png',
	'/images/gordimPix/04.png',
	'/images/gordimPix/05.png',
];

// export const waves = '../../assets/svg/svg-waves.svg';
// export const topWaves = '../../assets/svg/svg-waves-top.svg';
// export const avatar = '/images/new-avatar.jpeg';
