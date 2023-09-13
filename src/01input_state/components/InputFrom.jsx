import React, { useState } from 'react';

const InputFrom = () => {
	// alert(document.querySelector('input').value);
	// let text = '도우너';

	const [text, setText] = useState(' ');

	const typingFn = (evt) => {
		// console.log(evt.target.value);
		setText((prev) => evt.target.value);
	};

	const emptyFn = () => {
		setText('');
	};

	return (
		<div>
			<h2>1. 하나의 input요소 상태관리</h2>
			<ul>
				<li>
					<input type="text" value={text} onChange={typingFn} />
					<button onClick={emptyFn}>비우기</button>
				</li>
				<li>{text}</li>
			</ul>
		</div>
	);
};

export default InputFrom;
