//섭씨온도로 변환
export function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

//화씨온도로 변환
export function toFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

export function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

/*
	사용예시
 
	tryConvert(온도, 섭씨또는화씨변환함수)
 
	tryConvert(temperature, toCelsius)
	tryConvert(temperature, toFahrenheit)
 */
