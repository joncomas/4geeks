let pronoun = ['the','our']; 
let adj = ['great', 'big' ]; 
let noun = ['jogger','racoon'];

let total ="";

for (let i=0;i<pronoun.length;i++){
    for (let j=0;j<adj.length;j++){
        for (let k=0;k<noun.length;k++){
            total += "www." + pronoun[i]+adj[j]+noun[k] + ".com" + "<br>";
        }
    }
}


let listenerFunction = function(){
    alert('Please press A');
    console.log(this);
}

function mouseOver() {
    document.getElementById("ButtonB").innerHTML = "Please press A";
}
  
function mouseOut() {
    document.getElementById("ButtonB").innerHTML = "Please press B";
}


function inicialize(){
    document.getElementById('showDomains').innerHTML = total;
    document.getElementById('ButtonA').addEventListener("click",listenerFunction);
    document.getElementById('ButtonB').addEventListener("click",listenerFunction);
    document.getElementById('ButtonB').addEventListener("click",listenerFunction);
    document.getElementById("ButtonB").addEventListener("mouseover", mouseOver);
    document.getElementById("ButtonB").addEventListener("mouseout", mouseOut);
}







