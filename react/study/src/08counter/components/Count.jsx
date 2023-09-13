import React, { useState } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
	width: 400px;
	height: 600px;
	border: 1px solid black;
	margin: 30px auto;
	text-align: center;
`;
const Button = styled.button`
	/* display: block; */
	padding: 10px 20px;
	font-size: 24px;
	&:nth-of-type(1) {
		margin-left: 10px;
	}
`;
const Title = styled.h1``;

const Counter = styled.p`
	margin-bottom: 50px;
	text-align: center;
	font-size: 48px;
`;

// const Count = ({ num, Plus, Minus }) => {
const Count = () => {
	let [num, setNum] = useState(0);

	const plusFn = () => {
		setNum((prev) => prev + 1);
	};

	const calFn = (evt) => {
		// alert(evt.target.title);
		const op = evt.target.title;
		if (op === 'P') {
			setNum((prev) => prev + 1);
		} else {
			setNum((prev) => prev - 1);
		}
	};

	return (
		<Container>
			<Title>1씩 증가/감소하는 카운터</Title>
			{/* 
            <Counter>{num}</Counter>
			<Button onClick={Minus}>minus</Button>
			<Button onClick={Plus}>plus</Button>
             */}
			<Counter>{num}</Counter>
			<Button
				onClick={() => {
					setNum((prev) => prev - 1);
				}}
			>
				minus
			</Button>
			<Button onClick={plusFn}>plus</Button>
			<Button onClick={calFn} title={'M'}>
				M
			</Button>
			<Button onClick={calFn} title={'P'}>
				P
			</Button>
		</Container>
	);
};

export default Count;
