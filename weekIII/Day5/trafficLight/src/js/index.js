//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: ""
		};
	}

	render() {
		return (
			<div id="light">
				<div
					className={
						this.state.selected === "yellow" ? "selected" : ""
					}>
					<button
						onClick={() => this.setState({ selected: "yellow" })}>
						YELLOW
					</button>
				</div>
			</div>
		);
	}
}

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
