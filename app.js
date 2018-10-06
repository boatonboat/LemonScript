const fs = require("fs");
const bufer = require("./bufer.js");
const lemon = require("./lemon.js");
var code = fs.readFileSync('app.lr','utf-8');

var LastCode="";

code = bufer.deleteString(code);
code = code.split("\n");
for(var i=0;i<code.length;i++){
    var data = code[i].split(";");
    console.log(data)
    for(var j=0;j<data.length;j++){
        if(data[j].match(/(.*?)=(.*$)/g)){
            var ex = /(.*?)=(.*$)/g.exec(data[j]);
            LastCode = LastCode +  lemon.value(ex[1],ex[2]);
        }else if(data[j].match(/(.*?)>(.*?)/g)) 
        {   
            var ex = /(.*?)>(.*$)/g.exec(data[j]);
            console.log(ex)
            LastCode = LastCode + lemon.bracket(ex[1],ex[2]);
        }else{
            LastCode = LastCode + data[j]+"\n";
        }  
    }

}
code = bufer.returnString(LastCode);


console.log(code);




