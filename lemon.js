module.exports.value = function(n,v){
    return 'var ' + n + '='+v+';\n';
}
module.exports.bracket = function(n,v){
    return n+'('+v+')';
}