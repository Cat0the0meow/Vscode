import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
	/*
	아래의 navigate() 함수는 4가지기능을 하나로 합친기능을 제공한다.
    history.go(-1);
	history.back();
	location.href = 경로명; 기록을 남기면서 이동
	location.replace(경로명) -기록을 안남김
    */
	const navigate = useNavigate();
	return (
		<div>
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				뒤로가기
			</button>
			<button
				onClick={() => {
					navigate('/articles');
				}}
			>
				게시글 목록
			</button>
			<button
				onClick={() => {
					navigate('/profile/duly', { replace: true });
				}}
			>
				현제페이지의 기록을남기지 않고 둘리의 프로필로 이동
			</button>
		</div>
	);
};

export default Navigation;
