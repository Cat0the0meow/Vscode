import React, { useState } from 'react';

const initialData = {
	name: '',
	email: '',
};

const CreateUser = ({ createFn }) => {
	const [member, setMember] = useState(initialData);

	const { name, email } = member;

	const changeNameFn = (evt) => {
		//입력된 값 확인
		//alert(evt.target.value);

		//상태업데이트
		//member.name = evt.target.value;// - 원본에 직접적인 수정은 불가능하다.
		//따라서 1)원본복사 - spread ..., .concat()
		// const newMember = { ...member };
		// console.log('newMember =', newMember);

		//2)복사된데이터를 수정
		// const newMember = { ...member, name: evt.target.value };
		// console.log('newMember =', newMember);

		//3)수정한 그 데이터를 setMember()함수에 넣어서 호출
		//setMember(newMember);

		// setMember({ ...member, name: evt.target.value });

		//가장권장하는 최적화 상태업데이트 방법
		setMember((prevMember) => ({
			...prevMember,
			name: evt.target.value,
		}));
	};

	const changeEmailFn = (evt) => {
		setMember((prevMember) => ({
			...prevMember,
			email: evt.target.value,
		}));
	};

	const changeFn = (evt) => {
		const { id, value } = evt.target;

		setMember((prevMember) => ({
			...prevMember,
			[id]: value,
		}));
	};

	const registFn = () => {
		if (name !== '' && email !== '') {
			//배열 업데이트
			createFn(name, email);
		} else {
			alert('이름과 이메일을 모두 작성해 주세요');
		}

		//입력된 값 초기화
		setMember(initialData);
	};

	return (
		<p className="form">
			<input
				type="text"
				placeholder="이름"
				autoComplete="off"
				id="name"
				value={name}
				onChange={changeFn}
			/>

			<input
				type="text"
				placeholder="이메일"
				autoComplete="off"
				id="email"
				value={email}
				onChange={changeFn}
			/>

			<button onClick={registFn}>등록</button>
		</p>
	);
};

export default CreateUser;
