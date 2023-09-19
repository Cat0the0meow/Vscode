import React, { useState } from 'react';
import Count from './components/Count';

// 스타일드 컴포넌트로 오룬쪽위 카운터만들기

const App = () => {
	/*
	const [num, setNum] = useState(0);
    
	const Plus = () => {
        setNum((prev) => prev + 1);
	};
	const Minus = () => {
        setNum((prev) => prev - 1);
	};
    */

	// return <Count num={num} Plus={Plus} Minus={Minus} />;
	return <Count />;
};

export default App;
