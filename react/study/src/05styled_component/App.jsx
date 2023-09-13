import React from 'react';
// import MainPage from './components/MainPage';
import Styled01_Title from './components/Styled01_Title';
import Styled02_as from './components/Styled02_as';
import Styled03_attr from './components/Styled03_attr';
import Styled04_props from './components/Styled04_props';
import Styled05_media from './components/Styled05_media';
import { createGlobalStyle } from 'styled-components';

// 최상위 컴포넌트 내의 모든 범위에 영향을 주고싶은css를 설정 -> reset.css의 개념을 활용
const GlobalStyle = createGlobalStyle`
	ul,ol,li {list-style: none;}
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<h1>스타일드 컴포넌트</h1>

			{/* 아래와같이 스네이크 표기법으로 작성할시 
			파스칼 표기법으로 작성하라고 경고가뜨지만
			여기서만 특별히 스네이크 표기법을 사용 */}

			{/* <MainPage /> */}
			<Styled01_Title />
			<Styled02_as />
			<Styled03_attr />
			<Styled04_props />
			<Styled05_media />
		</>
	);
};

export default App;
