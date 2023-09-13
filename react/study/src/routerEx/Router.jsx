import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Layout';
import About from './pages/About';

const Router = () => {
	return (
		<Routes>
			<Route path={`/`} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path={`/about`} element={<About />} />
			</Route>
		</Routes>
	);
};

export default Router;
