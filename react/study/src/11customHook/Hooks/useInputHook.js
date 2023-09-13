import { useRef } from 'react';
import { useState } from 'react';

/*
커스텀훅은 커포넌트를 리턴하지않는다.
커스텀훅은 상태,상태를 관리하는 함수 등을 리턴한다.
*/
const useInputHook = (initialText) => {
	const [input, setInput] = useState(initialText);
	const $input = useRef(null);

	const changeFn = (evt) => {
		setInput((prev) => evt.target.value);
	};

	const emftyFn = () => {
		setInput('');
		$input.current.focus();
	};

	return [input, changeFn, emftyFn, $input];
};

export default useInputHook;
