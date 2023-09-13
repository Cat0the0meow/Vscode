import React from 'react';
import styled from 'styled-components';

// const cssDiv = {
// 	padding: '1em',
// 	backgroundColor: 'gray',
// };
// const cssH1 = {
// 	coler: 'white',
// 	fontSize: '1.5em',
// 	textAlign: 'center',
// };

const Wrapper = styled.div`
	padding: 1em;
	background-color: gray;
`;

const Title = styled.h1`
	color: white;
	font-size: 1.5em;
	text-align: center;
`;
const MainPage = () => {
	return (
		// <div style={cssDiv}>
		// 	<h1 style={cssH1}>Hi, React</h1>
		// </div>
		<>
			<Wrapper>
				<Title>Hi, React</Title>
			</Wrapper>
		</>
	);
};
export default MainPage;
// return MainPage;
