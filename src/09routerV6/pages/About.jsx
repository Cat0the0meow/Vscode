import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const About = () => {
	// f리액트에서 쿼리스트링 처리방식
	const [searchParams, setSearchParams] = useSearchParams();

	// 무조건 문자열로 가져온다.
	const detail = searchParams.get('detail');
	const mode = searchParams.get('mode');

	const onIcreaseMode = () => {
		setSearchParams({
			detail,
			mode: mode === null ? 1 : parseInt(mode) + 1,
		});
	};
	return (
		<div>
			<h1>About 소개페이지</h1>
			<h2>detail : {detail}</h2>
			<h2>mode : {mode} </h2>

			<button
				onClick={() => {
					setSearchParams({
						mode,
						detail: detail === 'true' ? false : true,
					});
				}}
			>
				detail toggl
			</button>
			<button onClick={onIcreaseMode}>mode값 1 증가</button>
			<br />
			<Link to={`/`}>Home으로 이동</Link>
		</div>
	);
};

export default About;
