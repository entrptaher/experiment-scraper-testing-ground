import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {
	state = {
		user: '',
		password: '',
		isLoggedIn: ''
	};

	onChangeHandler = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		const { user, password } = this.state;
		localStorage.setItem('user', user);
		localStorage.setItem('password', password);
		console.log('Login Information saved in localstorage');
	};

	logout = () => {
		localStorage.clear();
		this.setState({
			isLoggedIn: false
		});
	};

	componentDidMount() {
		const user = localStorage.getItem('user');
		const password = localStorage.getItem('password');

		user === 'admin' &&
			password === '12345' &&
			this.setState({ isLoggedIn: true });
	}
	render() {
		return (
			<div className="wrapper">
				<div className="login">
					<h1 className="title mb-16">LOGIN</h1>
					<p className="mb-16">
						Often in order to reach the desired information you need to be
						logged in to the website. Most of today's websites use so-called
						form-based authentication which implies sending user credentials
						using POST method, authenticating it on the server and storing
						user's session in a cookie.
					</p>

					<p className="mb-16">This simple test shows scraper's ability to:</p>

					<ol className="list mb-16">
						<li>Send user credentials via POST method</li>
						<li>Receive, Keep and Return a session cookie</li>
						<li>Process HTTP redirect (302)</li>
					</ol>

					<div className="mb-16">How to test:</div>

					<ol className="list">
						<li>
							Enter <b>admin</b> and <b>12345</b> in the form below and press
							<b>Login</b>
						</li>
						<li>
							If you see <span class="success">WELCOME</span> then the user
							credentials were sent, the cookie was passed and HTTP redirect was
							processed
						</li>
						<li>
							If you see <span class="danger">ACCESS DENIED!</span> then either
							you entered wrong credentials or they were not sent to the server
							properly
						</li>
						<li>
							If you see
							<span className="danger">
								THE SESSION COOKIE IS MISSING OR HAS A WRONG VALUE!
							</span>
							then the user credentials were properly sent but the session
							cookie was not properly stored or passed
						</li>
						<li>
							If you see <span className="success">REDIRECTING...</span> then
							the user credentials were properly sent but HTTP redirection was
							not processed
						</li>
						<li>
							Click <b>GO BACK</b> to start again
						</li>
					</ol>

					<hr className="line" />

					<div className="login-form mb-48">
						<form onSubmit={this.handleSubmit}>
							<label>
								User
								<input
									className="input"
									type="text"
									name="user"
									placeholder="Enter 'admin' here"
									value={this.state.user}
									onChange={this.onChangeHandler}
									required
								/>
							</label>
							<br />
							<br />
							<label>
								Password
								<input
									className="input"
									name="password"
									placeholder="Enter '12345' here"
									value={this.state.password}
									onChange={this.onChangeHandler}
									type="password"
									required
								/>
							</label>
							<br />
							<br />
							<button className="submit" type="submit">
								Sign In
							</button>
						</form>

						{this.state.isLoggedIn ? (
							<div>
								<h1 className="success">Welcome</h1>
								<button className="submit" onClick={this.logout}>
									Log Out
								</button>
							</div>
						) : (
							<h1>Sign in correct information</h1>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
