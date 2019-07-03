import React from 'react';
import './App.css';
import Player from './components/Player.js'
import Controls from './components/Controls.js'

//Comienza la pagina principal:

export class App extends React.Component {
  
  //Constructor con una referencia y un state con tres keys
  constructor() {
    super();
    this.mySong = React.createRef();
    this.state = {
      player: [],
      selection: 0,
      reproducir: false
    }

    //Estos son binders para poder usar las referencias creadas arriba.
    this.PlayMusic = this.PlayMusic.bind(this);
    this.PlayMusicBack = this.PlayMusicBack.bind(this);
    this.PlayMusicNext = this.PlayMusicNext.bind(this);
  }

  //Ciclo de vida; le dice al fetch que se active cuando todo este montado
  componentDidMount() {
    fetch('https://assets.breatheco.de/apis/sound/songs')
      .then(respon => respon.json())
      .then(data => {
        this.setState({
          player: data
        });

        


        //console.log(data);
      })
    //console.log('texto cualquiera');
  }

//primera funcion para el boton NEXT
  PlayMusicNext() {
    
    this.setState({ selection: this.state.selection + 1, reproducir:true })
    this.mySong.current.load()
    this.mySong.current.play()
    //this.PlayMusic(); 
  }

  //Segunda funcion para el boton PLAY
  PlayMusic() {

    console.log(this.mySong.current);
    if(this.state.reproducir===false){
      this.mySong.current.play()
    }else{this.mySong.current.pause()

    }
    
    this.setState({ reproducir: !this.state.reproducir})
  }

  //Tercera funcion para el boton BACK
  PlayMusicBack() {
    this.setState({ selection: this.state.selection - 1 })
  }

  //comienza el render principal
  render() {
    return (

      <div>
        <div className="App container">
          <div>
            
            {
              this.state.player.length > 0
                ? <audio ref={this.mySong} src={"https://assets.breatheco.de/apis/sound/" + this.state.player[this.state.selection].url} />
                : null
            }

          </div>

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
              <Player players={this.state.player} selected={this.state.selection} />
            </tbody>
          </table>
        </div>

      <p className="peo"><Controls played={this.PlayMusic} backed={this.PlayMusicBack} nexted={this.PlayMusicNext} /></p>
      </div>
    );
  }
}
//El render (arriba) no soporta comentarios;
/*
Pero primero es un tag <audio> que no se muestra. En ese tag se le pasa la acction de la funcion PlayMusic() cuando el boton 'PLAY' is clicked.
Luego esta la tabla con un row vacio, un tbody donde se llama al archivo Player.js usando un tag (<Player>),
y luego un <p> donde se llama a los controles.
*/
export default App;




