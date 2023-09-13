import React from 'react';

const Count = ({ num, plusFn, minusFn }) => {
	return (
		<>
			<h1>{num}</h1>

			<button onClick={plusFn}>click 할시 1씩증가</button>
			<button onClick={minusFn}>click 할시 1씩감소</button>
		</>
	);
};

export default Count;
