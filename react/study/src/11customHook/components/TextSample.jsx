import React from 'react';
import { styled } from 'styled-components';
import useInputHook from '../Hooks/useInputHook';

const Title = styled.h2`
	font-size: 20px;
	height: 50px;
	color: #0088ff;
	text-align: center;
`;
const List = styled.ul`
	width: 400px;
	margin: 30px auto;
`;
const ListItem = styled.li`
	height: 40px;
	margin-bottom: 15px;
	font-size: 20px;
	> input {
		width: 280px;
		height: 30px;
		margin-right: 15px;
		text-indent: 5px;
		font-size: 20px;
		border: none;
		border-bottom: 1px solid #777;
	}
	> button {
		width: 100px;
		height: 30px;
	}
`;

const TextSample = () => {
	const [text, changeFn, emptyFn, $input] = useInputHook('둘리');

	return (
		<>
			<Title>text sample</Title>
			<List>
				<ListItem>
					<input ref={$input} type="text" value={text} onChange={changeFn} />
					<button onClick={emptyFn}>비우기</button>
				</ListItem>
				<ListItem>입력된값 : {text}</ListItem>
			</List>
		</>
	);
};

export default TextSample;
