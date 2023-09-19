import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const ArticleItem = ({ id }) => {
	const on = {
		color: 'green',
		fontSize: 21,
	};
	return (
		/*
		<li>
			<NavLink
				style={({ isActive }) => {
					return isActive ? on : undefined;
				}}
				to={`/articles/${id}`}
			>
				게시글-{id}
			</NavLink>
		</li>
		*/
		<li>
			<NavLink
				className={({ isActive }) => {
					return isActive ? 'on' : undefined;
				}}
				to={`/articles/${id}`}
			>
				게시글-{id}
			</NavLink>
		</li>
	);
};

// 게시글 목록 컴포넌트
const Articles = () => {
	return (
		<>
			<Outlet />
			<ul>
				<ArticleItem id={1} />
				<ArticleItem id={2} />
				<ArticleItem id={3} />
				{/* 
				<li>
					<Link to={`/articles/1`}>게시글1</Link>
				</li>
				<li>
					<Link to={`/articles/2`}>게시글2</Link>
				</li>
				<li>
					<Link to={`/articles/3`}>게시글3</Link>
				</li>
				*/}
			</ul>
		</>
	);
};

export default Articles;
