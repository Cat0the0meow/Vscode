import React from 'react';
import { styled } from 'styled-components';

const RegistForm = styled.form`
	width: 200px;
	margin: 0 auto;
	> ul {
		padding: 20px;

		> li {
			margin-bottom: 10px;
		}
	}
`;

const Input = styled.input.attrs({ required: 'required' })`
	padding: 5px 10px;
`;

const Styled03_attr = () => {
	return (
		<>
			<RegistForm>
				<fieldset>
					<legend>회원가입</legend>
					<ul>
						<li>
							<Input type="text" placeholder="이메일" /> <br />
							<Input type="text" placeholder="이름" /> <br />
							<Input type="text" placeholder="비밀번호" />
						</li>
						<li>
							<button style={{ padding: 10 }}>확인</button>
						</li>
					</ul>
				</fieldset>
			</RegistForm>
		</>
	);
};

export default Styled03_attr;
