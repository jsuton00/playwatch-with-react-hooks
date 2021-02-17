import moment from 'moment';

export const formatDateToString = (value) => {
	let dateValue = String(value);
	let formattedDate;

	if (dateValue) {
		formattedDate = new Date(dateValue).getFullYear();
	}

	return formattedDate;
};

export const formatDate = (value) => {
	let dateValue = String(value);
	let formattedDate;

	if (dateValue) {
		formattedDate = moment(dateValue).format('DD MMM YYYY');
	}

	return formattedDate;
};

export const decodeCharCodes = (value) => {
	return value.replace(/(&#(\d+);)/g, (match, capture, charCode) => {
		return String.fromCharCode(charCode);
	});
};

export const formatThousandstoString = (value) => {
	return Number(value).toLocaleString();
};

export const formatNumbersToK = (value) => {
	let inputNum = Number(value);
	let formattedNumber = '';

	if (inputNum >= 1000 && inputNum < 10000) {
		formattedNumber = `${(Math.abs(inputNum) / 1000).toFixed(1)}k`;
		return formattedNumber;
	} else if (inputNum >= 10000 && inputNum < 100000) {
		formattedNumber = `${(Math.abs(inputNum) / 10000).toFixed(1)}k`;
		return formattedNumber;
	} else if (inputNum >= 100000 && inputNum < 1000000) {
		formattedNumber = `${(Math.abs(inputNum) / 100000).toFixed(1)}k`;
		return formattedNumber;
	} else if (inputNum >= 1000000) {
		formattedNumber = `${(Math.abs(inputNum) / 1000000).toFixed(1)}m`;
		return formattedNumber;
	} else {
		formattedNumber = inputNum;
		return formattedNumber;
	}
};
