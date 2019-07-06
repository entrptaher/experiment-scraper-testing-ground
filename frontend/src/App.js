import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Recaptcha from './Component/Re-Captcha';
import Home from './Component/Home';
import Navbar from './Component/Nav-bar';
import TableReport from './Component/Table-Report';
import Table1 from './Component/Table/Table1';
import Table2 from './Component/Table/Table2';
import Table3 from './Component/Table/Table3';
import Block from './Component/block';
import Block1 from './Component/Block/block1';
import Block2 from './Component/Block/block2';
import Block3 from './Component/Block/block3';
import Block4 from './Component/Block/block4';
import Block5 from './Component/Block/block5';
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
				<Route exact path="/table" component={TableReport} />
				<Route path="/table/table1" component={Table1} />
				<Route path="/table/table2" component={Table2} />
				<Route path="/table/table2" component={Table2} />
				<Route path="/table/table3" component={Table3} />

				<Route exact path="/block" component={Block} />
				<Route path="/block/block1" component={Block1} />
				<Route path="/block/block2" component={Block2} />
				<Route path="/block/block3" component={Block3} />
				<Route path="/block/block4" component={Block4} />
				<Route path="/block/block5" component={Block5} />

				<Route path="/recaptcha" component={Recaptcha} />
				<Route path="/login" component={Login} />
				<Route path="/whoami" component={WhoAmI} />
			</div>
		</BrowserRouter>
	);
}

export default App;
