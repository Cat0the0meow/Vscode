import React from 'react';
import { styled } from 'styled-components';

const Section = styled.section`
	width: 400px;
	height: 600px;
	border: 1px solid black;
	margin: 30px auto;
`;

const Body = ({ children }) => {
	return <Section>{children}</Section>;
};

export default Body;
