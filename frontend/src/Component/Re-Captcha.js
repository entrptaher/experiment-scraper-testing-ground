import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../css/style.css';
import '../css/recaptcha.css';

class ReCaptcha extends Component {
	state = {
		captcha: ''
	};

	onChange = value => {
		// console.log('Captcha value:', value);
		this.setState({
			captcha: value
		});
	};

	sendRequest = e => {
		const { captcha } = this.state;
		// console.log('Ei mithu ami ekhane', captcha);
		fetch('http://localhost:7777/subscribe', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ captcha: captcha })
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				alert(data.msg);
			});
	};

	render() {
		return (
			<div className="container">
				<div className="recaptcha">
					<h1 className="title">ReCAPTCHA</h1>
					<hr className="line" />
				</div>

				<ReCAPTCHA
					sitekey="6LeLQKsUAAAAAD7qCv52JzpJcpoLPbPe13uuuXuI"
					onChange={this.onChange}
				/>

				{this.state.captcha && (
					<textarea
						className="area"
						name=""
						id=""
						cols="30"
						rows="5"
						readOnly
						value={this.state.captcha}
					></textarea>
				)}

				<button onClick={this.sendRequest} className="button">
					Submit
				</button>
			</div>
		);
	}
}

export default ReCaptcha;
