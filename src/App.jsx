import React, { useState } from 'react';
import Count from './components/Count';

const App = () => {
	/*
	1.바닐라(제이쿼리) 자바스크립트 방식
	let num = 0;
	document.querySelector('button').addEventListener('click', function () {
		num += 1;
		document.querySelector('h1').textContent = num; //돔조작
	});
	
	// 2. 값이 변화됬을때 화면에 반영하고싶다면 리액트방식 으로 변수선언
	// 하나의 컴포넌트안에서 전역변수처럼 사용가능
	// let num = 0;
	// useState(0); //배열
	// console.log(useState(0));
	*/
	let [num, setNum] = useState(0);

	const plusFn = () => {
		// setNum((prev) => {return prev + 1;});
		setNum((prev) => prev + 1); //업데이트 합수
	};

	const minusFn = () => {
		setNum((prev) => prev - 1);
	};

	return <Count num={num} plusFn={plusFn} minusFn={minusFn} />;
};

export default App;
