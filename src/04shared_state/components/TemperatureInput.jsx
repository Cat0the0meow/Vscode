import React, { useState } from 'react';

const scaleNames = {
	c: '섭씨',
	f: '화씨',
};

const TemperatureInput = ({ onTrmperatureChange, scale, temperature }) => {
	// const [temperature, setTemperature] = useState('');

	const handleChange = (evt) => {
		// setTemperature(evt.target.value);
		onTrmperatureChange((prev) => evt.target.value);
	};

	return (
		<form action="#">
			<fieldset>
				<legend>온도를 입력하세요. (단위 : {scaleNames[scale]}) </legend>
				<input type="number" value={temperature} onChange={handleChange} />
			</fieldset>
		</form>
	);
};

export default TemperatureInput;
