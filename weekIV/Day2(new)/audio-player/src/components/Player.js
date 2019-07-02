import React from 'react';

export class Player extends React.Component {
    render() {
        return this.props.players.map((player) => (
            
            <tbody>
                <tr key={player.id} >
                    <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>{player.category}</td>
                    <td>
                    <audio>
                        <source src={player.url} type="audio/mpeg"></source>
                    </audio>
                    </td>
                </tr>
            </tbody>    
        ));
    }
}

export default Player;