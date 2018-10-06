var Sbigin = []; // "''"
var Sinbig = []; // '""'
var Sbig = [];
var Ssmall = [];

module.exports.deleteString = function(code){
    var btcfind = find(code,/(".*?'.*?'.*?")/g,0)
    Sbigin = btcfind[0];
    code = btcfind[1]
    btcfind = find(code,/('.*?".*?".*?')/g,1);
    Sinbig = btcfind[0];
    code = btcfind[1];

    btcfind = find(code,/(".*?")/g,2)
    Sbig = btcfind[0];
    code = btcfind[1];
    btcfind = find(code,/('.*?')/g,3);
    Ssmall = btcfind[0];
    code = btcfind[1];
    delete btcfind;
    return code;
}
module.exports.returnString = function(code){
    code = back(code,Sbigin,0);
    code = back(code,Sinbig,1);
    code = back(code,Sbig,2);
    code = back(code,Ssmall,3);
    return code;
}
function extractVars(myRe, str){
    var missingVars = [];
    while ((results = myRe.exec(str)) !== null) {
        missingVars.push(results[1]);
    }
    return missingVars;
}
function find(data,regex,x){
    var vars = extractVars(regex, data);
    if(x==0){
        for(var i=0;i<vars.length;i++){
            data = data.replace(vars[i],"$btc["+i+"]");
        }
    }else if(x==1){
        for(var i=0;i<vars.length;i++){
            data = data.replace(vars[i],"$bts["+i+"]");
        }
    }
    else if(x==2){
        for(var i=0;i<vars.length;i++){
            data = data.replace(vars[i],"$bct["+i+"]");
        }
    }
    else if(x==3){
        for(var i=0;i<vars.length;i++){
            data = data.replace(vars[i],"$bst["+i+"]");
        }
    }

    return [vars,data];
}
function back(data,sign,x){
    if(x==0){
        sign.map(function(val,i){
            data = data.replace("$btc["+i+"]",val);
        });
    }
    if(x==1){
        sign.map(function(val,i){
            data = data.replace("$bts["+i+"]",val);
        });
    }
    if(x==2){
        sign.map(function(val,i){
            data = data.replace("$bct["+i+"]",val);
        });
    }
    if(x==3){
        sign.map(function(val,i){
            data = data.replace("$bst["+i+"]",val);
        });
    }
    return data;
    
}