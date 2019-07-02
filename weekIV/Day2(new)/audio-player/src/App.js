import React from 'react';
import './App.css';
import Player from './components/Player.js'

export class App extends React.Component {
  state = {
    player: [

      {
        id: 1,
        category: "Rock",
        name: "'The Wall - Pink Floyd'",
        url: "data/mario/fx_gameover.wav"
      },
      {
        id: 2,
        category: "Rock",
        name: "The Wall - Pink Floyd",
        url: "data/mario/fx_gameover.wav"
      },
      {
        id: 3,
        category: "Rock",
        name: "'The Wall - Pink Floyd'",
        url: "data/mario/fx_gameover.wav"
      },
      {
        id: 4,
        category: "Rock",
        name: "'The Wall - Pink Floyd'",
        url: "data/mario/fx_gameover.wav"
      },
    ]
  }

  render() {
    console.log(this.state.player)
    return (
      <div className="App container">
        <table class="table table-dark">

          <Player players={this.state.player} />
          <tfoot className="tFooter">
            <tr>
              <td>Back</td>
              <td>Play</td>
              <td>Forward</td>
              <td>&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default App;




