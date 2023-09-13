import React from 'react';
import Counter from './components/Counter';
import { createGlobalStyle, styled } from 'styled-components';
const GlobalStyle = createGlobalStyle`
margin: 0;padding: 0;
`;
const Title = styled.h1`
	height: 100px;
	line-height: 100px;
	text-align: center;
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Title>Reduser</Title>
			<Counter />
		</>
	);
};

export default App;
