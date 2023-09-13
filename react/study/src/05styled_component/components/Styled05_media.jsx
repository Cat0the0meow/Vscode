import React from 'react';
import { styled } from 'styled-components';

// 중단점 문자열 변수
const tablet = 'screen and (min-width:992px;)';
const mobile = 'screen and (min-width:768px;)';

const RwdBox = styled.div`
	width: 1200px;
	height: 100px;
	margin: 0 auto;
	font-size: 32px;
	line-height: 100px;
	text-align: center;
	background-color: #ff0;

	@media ${tablet} {
		width: 100%;
		background-color: pink;
	}
	@media ${mobile} {
		width: 80vw;
		color: white;
		background-color: magenta;
	}
`;

const Styled05_media = () => {
	return <RwdBox>미디어쿼리 박스</RwdBox>;
};

export default Styled05_media;
