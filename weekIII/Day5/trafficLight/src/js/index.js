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
					className={this.state.selected === "red" ? "selected" : ""}>
					<div onClick={() => this.setState({ selected: "red" })}>
						RED
					</div>
				</div>
				<div
					className={
						this.state.selected === "yellow" ? "selected" : ""
					}>
					<div onClick={() => this.setState({ selected: "yellow" })}>
						YELLOW
					</div>
				</div>
				<div
					className={
						this.state.selected === "green" ? "selected" : ""
					}>
					<div onClick={() => this.setState({ selected: "green" })}>
						GREEN
					</div>
				</div>
			</div>
		);
	}
}

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
