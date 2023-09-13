import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import App from './input_state_1/App';
// import App from './components_2/App';
// import App from './array_data_3/App';
// import App from './shared_state_4/App';
// import App from './styled_component_5/App';
// import App from './context_7/App';
// import App from './counter_8/App';
// import App from './routerV6_9/App';
//import App from './routerEx/App';
//import App from './reducer_10/App';
import App from './customHook_11/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
