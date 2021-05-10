//JavaScript program to reverse a given string and also check if string is palindrome or not.
function Stringreverse(str){
 var array1 =Array.from(str);
 var revarray = array1.reverse();
 var reverseStr="";
 for(i=0;i<str.length;i++){
     reverseStr+=revarray[i];
 }
 if(reverseStr==str){
     console.log("It is a Palindrome");
 }else console.log("it isn't a Palindrome ");
}

Stringreverse("1212121");