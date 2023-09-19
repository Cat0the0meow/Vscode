import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { FirstContext } from '../App';

const Msg = styled.p`
	height: 100px;
	line-height: 100px;
	text-align: center;
	background-color: ${(props) => props.bgc};
`;

const Korea = () => {
	const ctxValue = useContext(FirstContext);

	return (
		<>
			<Msg bgc={'yellow'}>context를이용하여 전달받은 데이터는</Msg>
			<Msg>{ctxValue}</Msg>
		</>
	);
};

export default Korea;
