
let validator = require('validator');


let PaySubmitfunc = function(){
    let hackeableCreditCardNums = document.getElementById('cCardBoxId').value;
    let mahMoney = document.getElementById('AmountBoxId').value;
    let CvCBoxId = document.getElementById('AmountBoxId').value;
    let xnombrex = document.getElementById('nombrex').value;
    let xapellidox = document.getElementById('apellidox').value;
    let cityx = document.getElementById('xCityx').value;
    let postmanx = document.getElementById('postman').value;
    let xtextBoxx = document.getElementById('textBoxx').value;
    
    
    if(      
    validator.isCreditCard(hackeableCreditCardNums) ===  true 
    && 
    validator.isCurrency(mahMoney) === true
    &&
    validator.isFloat(CvCBoxId) === true
    &&
    validator.isEmpty(xnombrex) === false
    &&
    validator.isEmpty(xapellidox) === false    
    &&
    validator.isEmpty(cityx) === false
    &&
    validator.isEmpty(postmanx) === false)
    { 
        alert('Payment Sent')
    } else {
        alert('Please fill the form correctly!!');
    }

    
        
};

document.getElementById('sendmit').addEventListener("click",PaySubmitfunc);




