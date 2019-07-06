import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Recaptcha from './component/Re-Captcha';
import Home from './component/Home';
import Navbar from './component/Nav-bar';
import TableReport from './component/Table-Report';
import Ajax from './component/Ajax';

import './css/style.css';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

				<Route exact path="/" component={Home} />
				<Route path="/table" component={TableReport} />
				<Route path="/recaptcha" component={Recaptcha} />
				<Route path="/ajax" component={Ajax} />
			</div>
		</BrowserRouter>
	);
}

export default App;
