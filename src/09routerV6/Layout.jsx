import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Navigation from './components/Navigation';
import './Style.css';
const CC = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 1000px;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Header = styled(CC)`
	height: 100px;
	background-color: skyblue;
`;

const Footer = styled(CC)`
	height: 60px;
	color: white;
	background-color: #222;
`;

const Layout = () => {
	return (
		<Container>
			<Header as="header">
				<Navigation />
			</Header>
			<section>
				<Outlet />
			</section>
			<Footer as="footer">푸터영역</Footer>
		</Container>
	);
};

export default Layout;
