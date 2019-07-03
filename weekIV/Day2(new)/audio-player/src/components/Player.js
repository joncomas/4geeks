import React from 'react';

//Aqui una clase que: 
/**
 *Toma la props de nombre playerS del App.js y lo mapea con una function que toma dos parametros
 uno se llama player que es lo que se trae con el fetch y el otro es i que me guarda un numero por vuelta.

 *Cada vuelta que el map hace a los componentes del json en data el crea un tr con unos td's dentro,
 esos td's tiene cada uno una propiedad asignada como name, category y url que se le pasa en el tag <audio>
 lo cual crea en mi App.js una fila con columnas por cada uno de los elementos del json.
 */

export class Player extends React.Component {
    render() {
        return this.props.players.map((player,i) => (
            
            
                <tr className={(this.props.selected===i?'selected':"")} key={i} >
                    <td>{i}</td>
                    <td>{player.name}</td>
                    <td>{player.category}</td>
                    <td>
                    <audio id="myAudio" >
                        <source src={"https://assets.breatheco.de/apis/sound/"+player.url} type="audio/mpeg"></source>
                        
                    </audio>
                    </td>
                </tr>
              
        ));
    }
}
//Aqui se exporta la clase para que el App.js pueda importarlo y usarlo
export default Player;