import React from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import TextSample from './components/TextSample';

const GlobalStyled = createGlobalStyle`
*{margin: 0;
padding: 0;}
ul,ol,li{list-style:none;}
`;

const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
`;
const App = () => {
	return (
		<>
			<GlobalStyled />
			<Title>커스텀훅 이용하기</Title>
			<TextSample />
		</>
	);
};

export default App;
