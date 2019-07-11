import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Recaptcha from './component/Re-Captcha';
import Home from './component/Home';
import Navbar from './component/Nav-bar';
import TableReport from './component/Table';
import Block from './component/Block';
import Block1 from './component/Block/Block1';
import Block2 from './component/Block/Block2';
import Block3 from './component/Block/Block3';
import Block4 from './component/Block/Block4';
import Block5 from './component/Block/Block5';
import TextList from './component/Text-List';
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

        <Route exact path="/" component={Home} />
        <Route path="/table/:tableNo?" component={TableReport} />

        <Route exact path="/block" component={Block} />
        <Route path="/block/block1" component={Block1} />
        <Route path="/block/block2" component={Block2} />
        <Route path="/block/block3" component={Block3} />
        <Route path="/block/block4" component={Block4} />
        <Route path="/block/block5" component={Block5} />

        <Route path="/textlist/:textListNo?" component={TextList} />

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
