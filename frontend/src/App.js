import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Recaptcha from './Component/Re-Captcha';
import Home from './Component/Home';
import Navbar from './Component/Nav-bar';
import TableReport from './Component/Table-Report';
import Login from './Component/Login';
import WhoAmI from './Component/Who-I-Am';
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
				<Route path="/login" component={Login} />
				<Route path="/whoami" component={WhoAmI} />
			</div>
		</BrowserRouter>
	);
}

export default App;
