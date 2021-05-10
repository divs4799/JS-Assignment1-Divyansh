// a JavaScript program to pass a 'JavaScript function' as parameter
function today(){
    var date = new Date;
    console.log(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
    
}

function printdate(day){
    day();
    console.log("Have A Good Day");
}

printdate(today);