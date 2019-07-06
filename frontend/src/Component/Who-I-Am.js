import React, { Component } from 'react';
import '../css/who.css';

class WhoIAm extends Component {
	state = {
		ip: '',
		host: '',
		referer: '',
		agent: '',
		cookie: ''
	};

	componentDidMount() {
		fetch('http://localhost:7777/ip')
			.then(res => res.json())
			.then(res => this.setState({ ip: res.msg }));

		fetch('http://localhost:7777/host')
			.then(res => res.json())
			.then(res => this.setState({ host: res.msg }));

		fetch('http://localhost:7777/referer')
			.then(res => res.json())
			.then(res => this.setState({ referer: res.msg }));

		fetch('http://localhost:7777/agent')
			.then(res => res.json())
			.then(res => this.setState({ agent: res.msg }));

		fetch('http://localhost:7777/cookies')
			.then(res => res.json())
			.then(res => this.setState({ cookie: res.msg }));
	}
	render() {
		return (
			<div className="wrapper">
				<div className="who">
					<h1 className="title">WHO AM I</h1>
					<p className="mb-16">
						This page displays web client information and can be used for web
						scraper tuning.
					</p>

					<p className="mb-16">
						It also sets TestingGround=WebScraperTest cookie that you can check
						whether your web scrapes keeps cookies or not.
					</p>

					<div className="ip">
						<p className="small">IP</p>
						<p className="black mb-16">{this.state.ip}</p>
					</div>

					<div className="host">
						<p className="small">HOST</p>
						<p className="black mb-16">{this.state.host}</p>
					</div>

					<div className="ref">
						<p className="small">REFERER</p>
						<p className="black mb-16">{this.state.referer}</p>
					</div>

					<div className="agent">
						<p className="small">USER AGENT</p>
						<p className="black mb-16">{this.state.agent}</p>
					</div>

					<div className="cookies">
						<p className="small">COOKIES</p>
						<ul className="list black mb-16">
							<li>{this.state.cookie}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default WhoIAm;
