import React from 'react';
import { styled } from 'styled-components';

import { Title } from './Styled01_Title';

const Emoji = styled.button`
	display: block;
	width: 100px;
	height: 40px;
	margin: 50px auto;
	background-color: #fff;
	border-radius: 10px;
`;

// 타이틀 컴포넌트를 승계 - css와 태그명을 같이 승계한다.
const RoundBox = styled(Title)`
	width: 500px;
	height: 300px;
	margin: 0 auto;
	border-radius: 25px;
	> p {
		padding: 20px;
		color: #222;
		background-color: #ccc;
		border-radius: 25px;
		box-sizing: border-box;
		> button:hover {
			background-color: #ff0;
		}
		${Emoji} {
			box-shadow: 3px 3px 3px blue;
			&:hover {
				padding-left: 10px;
				text-align: left;
			}
		}
		${Emoji}:hover {
			background-color: skyblue;
		}
	}
`;

const Styled02_as = () => {
	return (
		<>
			<Title>제목</Title>
			{/* as = "" 키워드를사용해 태그명 변경가능 */}
			<RoundBox as="div">
				<p>
					1. styled() 함수로 기존 컴포넌트의 css속성 가져오기 <br />
					2. as 키워드를이용하여 렌더링시에 태그명변경. <br />
					3. 스타일내부에 다른 컴포넌트를 삽입하려면 ${}&#123; &#125; 구문을 활용한다.
					<Emoji>😎</Emoji>
				</p>
			</RoundBox>
			<Emoji>😎</Emoji>
		</>
	);
};

export default Styled02_as;
