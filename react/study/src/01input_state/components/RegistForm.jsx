import React, { useRef, useState } from 'react';

const RegistForm = () => {
	// hook은 반드시 컴포넌트 내에서 사용 해야한다.
	const [info, setInfo] = useState({
		username: '',
		email: '',
	});

	const { username, email } = info;

	const typingFn = (evt) => {
		// console.log(evt.target);
		const { id, value } = evt.target;

		const newInfo = {
			...info,
			[id]: value,
		};
		setInfo(newInfo);
		// 방법1
		// setInfo((prev) => ({ ...prev, [id]: value }));

		/*
		방법2
		setInfo((prev) => {
			return {
				...prev,
				[id]: value,
			};
		});
		*/
	};

	const emptyFn = () => {
		setInfo({
			username: '',
			email: '',
		});

		// .current 속성에 현재 해당하는 DOM을 저장한다.
		$username.current.focus();
	};

	// 리액트방식으로 DOM선택
	// useRef()는 DOM을 선택하기위해 사용되는 hook이다.
	const $username = useRef(null);

	return (
		<div>
			<h2>2. 여러개의 인풋요소 상태관리</h2>

			<ul>
				<li>
					<label htmlFor="username">이름 : </label>
					<input
						ref={$username}
						onChange={typingFn}
						value={username}
						type="text"
						id="username"
						autoComplete="off"
						autoFocus
					/>
				</li>
				<li>
					<label htmlFor="email">이메일 : </label>
					<input onChange={typingFn} value={email} type="text" id="email" autoComplete="off" />
				</li>
				<li>
					<button onClick={emptyFn}>비우기</button>
				</li>
			</ul>
			<p>
				{username && '입력정보 - '}
				<span className="username">{username}</span>

				{email && '('}
				<span className="email">{email}</span>
				{email && ')'}
			</p>
		</div>
	);
};

export default RegistForm;
