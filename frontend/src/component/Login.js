import React, { Component } from 'react';

class Login extends Component {
  state = {
    user: '',
    password: '',
    isLoggedIn: false,
    error: false
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user, password } = this.state;
    const userPreSaved = localStorage.getItem('user');
    const passwordPreSaved = localStorage.getItem('password');
    if (user === userPreSaved && password === passwordPreSaved) {
      this.setState({ isLoggedIn: true, error: false });
    } else {
      this.setState({ isLoggedIn: false, error: true });
    }
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
      error: false
    });
  };

  componentDidMount() {
    localStorage.getItem('user');
    localStorage.getItem('password');
  }
  render() {
    const { user, password, isLoggedIn, error } = this.state;
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
              If you see <span className="success">WELCOME</span> then the user
              credentials were sent, the cookie was passed and HTTP redirect was
              processed
            </li>
            <li>
              If you see <span className="danger">ACCESS DENIED!</span> then
              either you entered wrong credentials or they were not sent to the
              server properly
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
                User name:
                <input
                  className="input mb-32"
                  type="text"
                  name="user"
                  placeholder="Enter 'admin' here"
                  value={user}
                  onChange={this.onChangeHandler}
                  required
                />
              </label>

              <label>
                Password:
                <input
                  className="input mb-32"
                  name="password"
                  placeholder="Enter '12345' here"
                  value={password}
                  onChange={this.onChangeHandler}
                  type="password"
                  required
                />
              </label>

              <button className="submit" type="submit">
                Sign In
              </button>
            </form>

            {isLoggedIn && (
              <div>
                <h1 className="success">{'Welcome :)'}</h1>
                <button className="submit" onClick={this.logout}>
                  Log Out
                </button>
              </div>
            )}
            {error && (
              <div>
                <h1 className="danger">ACCESS DENIED!</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
