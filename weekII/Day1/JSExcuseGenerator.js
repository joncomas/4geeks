let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];




let testingVariable = function thisIsMyFunction(){
    let randomIndex = Math.round((Math.random() * 3));
    let RandomizedIndexWho =   who[randomIndex]
    let randomIndex1 = Math.round((Math.random() * 3));
    let RandomizedIndexWhat =   what[randomIndex1]
    let randomIndex2 = Math.round((Math.random() * 4));
    let RandomizedIndexWhen =   when[randomIndex2];


    let concatenatedRandomIndex = RandomizedIndexWho+" "+RandomizedIndexWhat+" "+RandomizedIndexWhen;
    return concatenatedRandomIndex;
}

window.onload = function() {
    document.getElementById('excuse').innerHTML = testingVariable();
};

