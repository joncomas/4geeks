//numArray = []; first attemp.
for(i=1;i<100;i++){
    if(i%3===0){
        console.log("Tic");
    }else if(i%5===0){
        console.log("Toc"); 
    }else if(i%3===0 && i%5===0){
        console.log("TicToc");
    }else{
        console.log(i);
    }
}



//numArray = []; second attemp.
for(i=1;i<=100;i++){
    const isMT = i%3===0;
    const isMF = i%5===0;
    if(isMT && isMF){
      console.log("TicToc");
    }
    
    if(isMF){
        console.log("Tic");
    }else if(isMT){
        console.log("Toc"); 
      
    }else{
        console.log(i);
    }
}