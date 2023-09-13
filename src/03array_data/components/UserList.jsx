import React from 'react';
import User from './User';

const UserList = ({ users, deleteFn }) => {
	return (
		<ul>
			{/* <User user={users[0]} />
			<User user={users[1]} />
			<User user={users[2]} /> */}

			{users.map((user, idx) => {
				return <User user={user} deleteFn={deleteFn} key={user.id} />;
			})}

			{/* <li>
				{users[0].id}. <b>{users[0].username}</b>({users[0].email}) <button>삭제</button>
			</li>
			<li>
				{users[1].id}. <b>{users[1].username}</b>({users[1].email}) <button>삭제</button>
			</li>
			<li>
				{users[2].id}. <b>{users[2].username}</b>({users[2].email}) <button>삭제</button>
			</li> */}
		</ul>
	);
};

export default UserList;
