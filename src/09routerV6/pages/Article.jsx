import React from 'react';
import { useParams } from 'react-router-dom';

// 게시글 목록 컴포넌트
const Article = () => {
	const { id } = useParams();
	return (
		<div>
			<h2>게시글 {id}</h2>
		</div>
	);
};

export default Article;
