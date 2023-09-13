import React, { useReducer } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 150px;
	padding: 20px;
	margin: 0 auto;
	text-align: center;
	border: 1px solid #000;
`;

const Count = styled.h2`
	font-size: 30px;
	margin-bottom: 40px;
`;

const Button = styled.button`
	padding: 15px;
	font-weight: 600;
	cursor: pointer;
`;
const BtnPlus = styled(Button)`
	margin-right: 5px;
`;
const BtnMinus = styled(Button)`
	margin-left: 4px;
`;

//상태관리 로직 리듀서 함수
//function reducer(이전상태에 정한 변수, 이벤트를통해 받은데이터를 저장한함수) {}

const cntReducer = (state, action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'plus':
			return state + 1;

		case 'minus':
			return state - 1;

		default:
			return state;
	}
};

const Counter = () => {
	//const [ num, setNum ] = useState(777);

	//아래 disfatch() 함수는 데이터를 CntReducer함수로 보내는 역할
	const [num, dispatch] = useReducer(cntReducer, 77);

	const plusFn = () => {
		//setNum((prev) => prev + 1);
		dispatch({
			type: 'plus',
		});
	};
	const minusFn = () => {
		dispatch({
			type: 'minus',
		});
		//setNum((prev) => prev - 1);
	};

	return (
		<Container>
			<Count>{num}</Count>
			<BtnMinus onClick={minusFn}>-</BtnMinus>
			<BtnPlus onClick={plusFn}>+</BtnPlus>
		</Container>
	);
};

export default Counter;
