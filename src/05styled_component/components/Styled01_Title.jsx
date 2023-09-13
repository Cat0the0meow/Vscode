import React from 'react';
import { styled } from 'styled-components';

// h1 으로 title이라는 이름을가진 스타일드 컴포넌트를 작성

export const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	color: #fff;
	background-color: #000;
`;

const Styled01_Title = () => {
	return (
		<>
			<Title>스타일드 컴포넌트</Title>;
		</>
	);
};

export default Styled01_Title;
