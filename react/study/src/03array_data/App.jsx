import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

const initialData = [
	{
		id: 1,
		username: '둘리',
		email: 'duly@naver.com',
		active: true,
	},
	{
		id: 2,
		username: '또치',
		email: 'ddochi@naver.com',
		active: false,
	},
	{
		id: 3,
		username: '하니',
		email: 'hani@naver.com',
		active: false,
	},
	{
		id: 4,
		username: '아이유',
		email: 'iu@naver.com',
		active: true,
	},
];

const App = () => {
	const [users, setUsers] = useState(initialData);

	//일반변수에 값을 저장하면 리렌더링 됐을때 변화된 값이 다 날라가고 값이 초기화된다.
	//useRef 훅을 통해서 값을 관리할 경우 컴포넌트가 리렌더링 되더라도 변화된 현재값을 계속 유지할 수 있다.
	let nextId = useRef(4);

	const createFn = (name, email) => {
		nextId.current++; //5

		setUsers((prevUsers) => [
			...prevUsers,
			{
				id: nextId.current,
				username: name,
				email,
				active: false,
			},
		]);

		console.log(`createFn에서 1증가후 nextId.current = ${nextId.current}`);
	};

	const deleteFn = (id) => {
		// alert('삭제함수호출');
		// 원본배열을 복사후 id와일치하는 원소를 제외후 상태업데이트
		setUsers((prevUsers) =>
			prevUsers.filter((user, idx) => {
				return user.id !== id;
			})
		);
	};

	//화면에 컴포넌트가 나타난 시점, 상태가 업데이트 된시점에 호출 -> ComponentDidMount
	useEffect(() => {
		console.log(`nextId.current = ${nextId.current}`);
	}, [nextId]);

	return (
		<>
			<h1 className="text-center">배열데이터 활용</h1>

			<section>
				<CreateUser createFn={createFn} />
				<UserList users={users} deleteFn={deleteFn} />
			</section>
		</>
	);
};

export default App;
