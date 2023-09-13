import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>메인 페이지</h1>
			<ul>
				<li>
					<Link to={`/about`}>About</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
