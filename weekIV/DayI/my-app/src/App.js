import React from "react";
import './index.css';
import Announcement from './Announcement'
import ReseButton from './ReseButton'
import Tile from './Tile'
//create your first component

export class App extends React.Component {
	constructor(){
		super();
		this.state = {
			gameBoard: ["","","","","","","","","",],
			turn	
		}
	}	
	
	updateBoard(loc, player){


	}
	render() {		
		return (
			<div className="container">
				<div ClassName="Menu">
					<h1>Tic Tac Toe</h1>
					<Announcement/>
					<ReseButton/>
				</div>
					{this.state.gameBoard.map(function(value, i){
						return(
						<Tile 
						key={i}
						loc={i}
						value={value}
						updateBoard={this.updateBoard.bind(this)} 
						turn={this.state.turn} />
						)	
					}.bind(this))}
			</div>
			
		); 
	}
}

export default App;
