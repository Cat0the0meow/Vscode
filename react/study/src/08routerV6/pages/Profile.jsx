import React from 'react';
import { useParams } from 'react-router-dom';

//데이터베이스 역할
const data = {
	duly: {
		name: '둘리',
		age: 7,
	},
	hani: {
		name: '하니',
		age: 15,
	},
};

const Profile = () => {
	const params = useParams(); //{userid:'duly'}
	const { userid } = params;

	const info = data[userid];

	/* 방법1
        return (
            <>
                {info ? (
                    <div>
                    <h1>{info.name}</h1>
                    <h2>{info.age}</h2>
                    </div>
                ) : (
                    <h1>존재하지 않는 사용자 입니다.</h1>
                )}
            </>
        );
    */

	//방법2 - 고전적인 방법
	if (!info) {
		return <h1>존재하지 않는 사용자 입니다.</h1>;
	}

	return (
		<div>
			<h1>{info.name}</h1>
			<h2>{info.age}</h2>
		</div>
	);
};

export default Profile;
