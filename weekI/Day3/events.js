
let validator = require('validator');


let PaySubmitfunc = function(){
    let hackeableCreditCardNums = document.getElementById('cCardBoxId').value;
    let mahMoney = document.getElementById('AmountBoxId').value;
    let CvCBoxId = document.getElementById('AmountBoxId').value;

    if
    (
        
        
        
    validator.isCreditCard(hackeableCreditCardNums) ===  true 
    && 
    validator.isFloat(mahMoney) === true
    &&
    validator.isFloat(CvCBoxId) === true

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ){ 
        
        
        alert('Payment Sent')

    } else {

        alert('Please fill the form correctly!!');
    }

    
        
};

document.getElementById('sendmit').addEventListener("click",PaySubmitfunc);




