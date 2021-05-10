//Temperature converter
function convert(type, temp){
    type=type.toLowerCase();
var converted;
    if(type=="fahrenheit"){
    converted =(temp - 32.0) * 5.0/9.0;
}
else if(type=="celcius"){
converted=(temp * 9.0/5.0) + 32.0; 
}else converted ="Wrong Type";
return converted;
}

console.log(convert("celcius",0));