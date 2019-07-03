import React from 'react';

// Este es un function component que le pasa los controles a App.js cuando exporta.

export function Controls (props) {
    
    return (

    <div> 
    <button onClick={()=>{props.backed()}} type="button">BACK</button>    
    <button onClick={()=>{props.played()}} type="button">PLAY</button> 
    <button onClick={()=>{props.nexted()}} type="button">NEXT</button>     
    </div>


    );
}
/*Cada uno de los botones se le pasan a Controls como un atributo en el App.js y se crean alla y luego se
luego se incluyen aqui en cada uno de los eventos onClick como props. Por eso vez algo como props.backed etc...

*/
export default Controls;

