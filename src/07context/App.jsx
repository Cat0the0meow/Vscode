import React, { createContext } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import Space from './components/Space';

// const MyContext = createContext(null)

const GlovalStyled = createGlobalStyle``;

const Title = styled.h1`
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

// 콘텍스트를 이영하여 하위컴포넌트에게 전달할 데이터
const data = {
	msg: '우주밖에서 전손된 데이터',
};

export const FirstContext = createContext(null);

const App = () => {
	return (
		<div>
			<GlovalStyled />
			<Title>Context API</Title>

			<FirstContext.Provider value={data}>
				<Space />
			</FirstContext.Provider>
		</div>
	);
};

export default App;
