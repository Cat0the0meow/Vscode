import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
	text-align: center;
`;

const Layout = () => {
	return (
		<Container>
			<section>
				<Outlet />
			</section>
		</Container>
	);
};

export default Layout;
