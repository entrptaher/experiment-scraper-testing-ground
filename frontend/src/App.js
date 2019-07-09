import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Recaptcha from './component/Re-Captcha';
import Home from './component/Home';
import Navbar from './component/Nav-bar';
import TableReport from './component/Table';
import Table1 from './component/Table/Table1';
import Table2 from './component/Table/Table2';
import Table3 from './component/Table/Table3';
import Block from './component/Block';
import Block1 from './component/Block/Block1';
import Block2 from './component/Block/Block2';
import Block3 from './component/Block/Block3';
import Block4 from './component/Block/Block4';
import Block5 from './component/Block/Block5';
import TextList from './component/Text-List';
import TextList1 from './component/Text-List/Text-List1';
import TextList2 from './component/Text-List/Text-List2';
import TextList3 from './component/Text-List/Text-List3';
import TextList4 from './component/Text-List/Text-List4';
import TextList5 from './component/Text-List/Text-List5';
import InvalidHtml from './component/Invalid-Html';
import Login from './component/Login';
import WhoAmI from './component/Who-I-Am';
import Ajax from './component/Ajax';

import './css/style.css';

function App() {
	return (
		<BrowserRouter>
			<div>
				<ToastContainer position={toast.POSITION.TOP_CENTER} />
				<Navbar />
				{/* <br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br /> */}

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

				<Route exact path="/textlist" component={TextList} />
				<Route path="/textlist/textlist1" component={TextList1} />
				<Route path="/textlist/textlist2" component={TextList2} />
				<Route path="/textlist/textlist3" component={TextList3} />
				<Route path="/textlist/textlist4" component={TextList4} />
				<Route path="/textlist/textlist5" component={TextList5} />

				<Route path="/invalid" component={InvalidHtml} />

				<Route path="/recaptcha" component={Recaptcha} />

				<Route path="/login" component={Login} />
				<Route path="/whoami" component={WhoAmI} />

				<Route path="/ajax" component={Ajax} />
			</div>
		</BrowserRouter>
	);
}

export default App;
