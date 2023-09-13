import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import App from './01input_state/App';
// import App from './02components/App';
// import App from './03array_data/App';
// import App from './04shared_state/App';
// import App from './05styled_component/App';
// import App from './06context/App';
// import App from './07counter/App';
// import App from './08routerV6/App';
//import App from './09routerEx/App';
//import App from './10reducer/App';
import App from './11customHook/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
