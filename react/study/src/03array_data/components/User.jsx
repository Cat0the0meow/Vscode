import React from 'react';

const User = ({ user, deleteFn }) => {
	const { id, username, email, acitve } = user;

	return (
		<li>
			{id}. <b>{username}</b>({email}){' '}
			<button
				onClick={() => {
					deleteFn(id);
				}}
			>
				삭제
			</button>
		</li>
	);
};

export default User;
