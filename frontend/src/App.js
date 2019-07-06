import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Recaptcha from './Component/Re-Captcha';
import Home from './Component/Home';
import Navbar from './Component/Nav-bar';
import TableReport from './Component/Table-Report';
import Ajax from './Component/Ajax';

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
