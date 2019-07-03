import React from 'react';

export class Player extends React.Component {
    render() {
        return this.props.players.map((player) => (
            
            
                <tr key={player.id} >
                    <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>{player.category}</td>
                    <td>
                    <audio controls>
                        <source src={player.url} type="audio/mpeg"></source>
                    </audio>
                    </td>
                </tr>
              
        ));
    }
}

export default Player;