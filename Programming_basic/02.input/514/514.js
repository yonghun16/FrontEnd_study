const readline = require('readline'); 
const r1 = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

var input = []; 

process.stdout.write("height = ");

r1.on("line", function(line) { 
    input.push(line); 
    r1.close(); 
}).on("close", function() { 
    console.log("Your height is " + input[0] + "cm."); 
    process.exit(); 
}); 

