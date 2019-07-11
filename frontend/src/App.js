import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Recaptcha from './component/Re-Captcha';
import Home from './component/Home';
import Navbar from './component/Nav-bar';
import TableReport from './component/Table';
import Block from './component/Block';
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
        <Route path="/block" component={Block} />
        <Route path="/textlist" component={TextList} />

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
