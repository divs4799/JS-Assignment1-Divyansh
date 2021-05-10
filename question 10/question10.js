// find out the number of vowels from a user input string.
function vowels(str){
    var A=0, E=0,I=0,O=0,U=0;
    for(let i=0;i<str.length;i++){
        var res = str.charAt(i);
        switch (res) {
            case 'a': A++;
                   break;
            case 'e': E++; 
                   break;
            case 'i': I++; 
                    break;
            case 'o': O++; 
                    break;
            case 'u': U++; 
                        break;
            default:
                break;
        }
    }
    
    console.log(`A : ${A} `);
    console.log(`E : ${E} `);
    console.log(`I : ${I} `);
    console.log(`O : ${O} `);
    console.log(`U : ${U} `);
}
console.log(vowels("Hey This is Skillsanta JS Training"));