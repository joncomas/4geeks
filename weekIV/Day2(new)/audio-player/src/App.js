import React from 'react';
import './App.css';
import Player from './components/Player.js'

export class App extends React.Component {
  state = {
    player: []
  }
  componentDidMount(){
    fetch('https://assets.breatheco.de/apis/sound/songs')
    .then(respon => respon.json())
    .then(data=>{
      this.setState({
        player: data
      });

     //console.log(data); 
    })
    //console.log('texto cualquiera');
  }
  render() {
    //console.log('safdsds')
    return (
      <div className="App container">
        <table className="table table-dark">
        <thead className="tHead">
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            <Player players={this.state.player} />
          </tbody>
          <tfoot className="tFooter">
            <tr>
              <td><button type="button">Fetch</button></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default App;




