import React from 'react';
import { css, styled } from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 80vw;
	height: 150px;
	margin: 50px auto;
	border: 1px solid black;
`;

const Box = styled.p`
	width: 100px;
	height: 100px;
	border-radius: 10px;

	/* props로 넣어준 값을 활용 - 조건부 렌더링 */
	background-color: ${(props) => props.bgc || 'blue'};

	${(props) =>
		props.special &&
		css`
			border-radius: 50%;
			&:hover {
				background-color: #ff0;
				border: 1px solid black;
				box-sizing: border-box;
			}
		`}
`;

// const Button = styled.button``;

const Styled04_props = () => {
	return (
		<Container>
			<Box bgc="orange" />
			<Box bgc="skyblue" />
			<Box bgc="tomato" />
			<Box special={true} />
			<Box bgc="pink" />
			<Box bgc="yellowgreen" />
		</Container>
	);
};

export default Styled04_props;
