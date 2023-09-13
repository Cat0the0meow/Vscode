import React from 'react';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
	// 만약 로그인상태가아니라면 '/login'으로 강제이동 => 리다이렉트 리다이렉션
	const isLogginIn = false;
	if (!isLogginIn) {
		return <Navigate to={`/login`} replace={true} />;
	}
	return (
		<div>
			<h1>마이페이지</h1>
		</div>
	);
};

export default MyPage;
