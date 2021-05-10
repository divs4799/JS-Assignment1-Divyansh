// JavaScript function to find the unique elements from two arrays.
function difference(array1,array2){
    var unique=[];
    for(let i=0;i<array1.length;i++){
        var count =0;
        for(let j=0; j<array1.length; j++){
            if(array1[i]==array1[j]){
                count++;
                
            }
        }
        if(count==1){
            unique.push(array1[i]);
        
        }else console.log(`count after: ${count}`);
    }

    for(let i=0;i<array2.length;i++){
        var count =0;
        for(let j=0; j<array2.length; j++){
            if(array2[i]==array2[j]){
                count++;
                
            }
        }
        if(count==1){
            unique.push(array2[i]);
        
        }else console.log(`count after: ${count}`);
    }
    for(let i=0;i<unique.length;i++){
        count=0;
        for(let j=0;j<unique.length;j++){
            if(unique[i]==unique[j]){
                count++;
            }
        } if(count>1){
            unique.splice(i,1);
        }
    }
    return unique;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
