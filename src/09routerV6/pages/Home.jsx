import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>홈입니다.</h1>
			<p>가장먼저 보여질 페이지</p>

			<ul>
				<li>
					<Link to={`/about?detail=true&mode=1`}>About</Link>
				</li>
				<li>
					<Link to={`/profile/duly`}>둘리의 프로필</Link>
				</li>
				<li>
					<Link to={`/profile/hani`}>하니의 프로필</Link>
				</li>
				<li>
					<Link to={`/profile/micol`}>마이콜의 프로필</Link>
				</li>
				<li>
					<Link to={`/articles/`}>아티클</Link>
				</li>
				<li>
					<Link to={`/login`}>로그인</Link>
				</li>
				<li>
					<Link to={`/mypage`}>마이페이지</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
