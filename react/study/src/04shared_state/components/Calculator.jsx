import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { toCelsius, toFahrenheit, tryConvert } from '../utils/util';

const Calculator = () => {
	const [temperature, setTemperature] = useState('');
	const [scale, setScale] = useState('c'); //섭씨

	const handleCelsiusChange = (temperature) => {
		// alert('섭씨 온도변환 호출');
		setTemperature(temperature);
		setScale('c');
	};
	const handleFahrenheitChange = (temperature) => {
		// alert('화씨 온도변환 호출');
		setTemperature(temperature);
		setScale('f');
	};

	// 섭씨온도 - 사용자가 섭씨온도를 입력할경우
	const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;

	// 화씨온도 - 사용자가 화씨온도를 입력할경우
	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

	return (
		<>
			<TemperatureInput onTrmperatureChange={handleCelsiusChange} scale="c" temperature={celsius} />
			<TemperatureInput
				onTrmperatureChange={handleFahrenheitChange}
				scale="f"
				temperature={fahrenheit}
			/>

			<BoilingVerdict celsius={parseFloat(celsius)} />
		</>
	);
};

export default Calculator;
