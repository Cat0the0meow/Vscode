import React from 'react';
import './App.css';
import InputFrom from './components/InputFrom';
import RegistForm from './components/RegistForm';

const App = () => {
	return (
		<>
			<div>
				<h1 className="text-center">inputy 요소의 상태관리</h1>
				<InputFrom />
				<RegistForm />
			</div>
		</>
	);
};

export default App;
