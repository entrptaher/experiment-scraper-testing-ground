import React, { Component } from 'react';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Block5 from './Block5';

class Block extends Component {
	render() {
		const { blockNum } = this.props.match.params;
		return (
			<div>
				{blockNum === 'block1' ? (
					<Block1 />
				) : blockNum === 'block2' ? (
					<Block2 />
				) : blockNum === 'block3' ? (
					<Block3 />
				) : blockNum === 'block4' ? (
					<Block4 />
				) : blockNum === 'block5' ? (
					<Block5 />
				) : (
					''
				)}
			</div>
		);
	}
}

export default Block;
