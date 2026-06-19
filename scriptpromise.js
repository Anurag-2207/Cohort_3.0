let myorder = new Promise (function(resolve,reject){
    console.log("order is comming");
    var orderstatus=true;
    setTimeout(() => {
            if(orderstatus){
                console.log("delivary done");
                resolve();
            }
            else{
                console.log("order cancle");
                reject();
            }
    }, 3000);
})
myorder.then(function(){
    console.log("order aa gai");
    return new Promise(function(res,rej){
        let paymentstus=false;
        setTimeout(function(){
            if(paymentstus){
                console.log("payment hogaya");
                res();
            }
            else{
                console.log("payment nahi ho gaya");
                rej();
            }
        },5000)
    })
}).then(function(){
    console.log("i am eating food");
    
}) .catch(function(){
    console.log("payment nahi hau to khana akaise kahunga");
    
})
.catch(function(){
    console.log("order nahi aai cancle ho gai");
})