import React, { useState } from 'react';

const RegistForm = () => {
	let [name, setName] = useState('');
	let [mail, setMail] = useState('');

	const nameFn = (evt) => {
		setName((prev) => evt.target.value);
	};
	const mailFn = (evt) => {
		setMail((prev) => evt.target.value);
	};
	const emptyFn = () => {
		setName('');
		setMail('');
	};

	return (
		<div>
			<h2>여러개의 input요소 상태관리</h2>
			<ul>
				<li>
					<label htmlFor="">이름</label>
					<input type="text" value={name} onChange={nameFn} />
				</li>
				<li>
					<label htmlFor="">이메일</label>
					<input type="text" value={mail} onChange={mailFn} />
				</li>
				<li>
					<button onClick={emptyFn}>비우기</button>
				</li>
			</ul>
		</div>
	);
};

export default RegistForm;
