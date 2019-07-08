import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div className="nav">
				<Link to="/">
					<div className="top">
						<h1 className="title">web scrapper testing ground</h1>
						<div className="img"></div>
					</div>
				</Link>
			</div>
		);
	}
}

export default Navbar;
