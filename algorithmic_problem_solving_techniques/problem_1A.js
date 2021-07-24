const readline =require("readline");    
const r1 = readline.createInterface({   
    input: process.stdin,               
    output: process.stdout              
})                                      

r1.on("line", function(line) {          
    let strArray = line.split(' ');     
    let a = Number(strArray[0]);        
    let b = Number(strArray[1]);        

    if(a>b){                            
            console.log(a);                 
        }                                   
    else {                              
            console.log(b);                 
        }                                   

    r1.close();                         
}).on("close", function() {             
    process.exit();                     
})
