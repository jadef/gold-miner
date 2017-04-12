import React from 'react';

class ControlsTags extends React.Component {
	render() {
		return <section className="tags controls">
			<ul className="list">
				<li>Abstraction</li>
				<li>Automated</li>
				<li>Command Line</li>
				<li>CSS</li>
				<li>Framework</li>
				<li>Grid</li>
				<li className="active">JavaScript</li>
				<li className="active">Node</li>
				<li>PHP</li>
				<li>Preprocessor</li>
				<li>Ruby</li>
				<li>Single Page</li>
				<li>Template</li>
				<li>Testing</li>
				<li>Another </li>
				<li>Another </li>
				<li>Another </li>
				<li>Another </li>
				<li>Another </li>
				<li>Another </li>
				<li>Another </li>
			</ul>
			<div className="trigger">Tags Filter</div>
		</section>;
	}
}

export default ControlsTags;
