var array = [4, 3, 5, 1, 2];

for(let i = 0; i < array.length; i++){
    let min = i;
    for(let j = i + 1; j < array.length; j++){
        if(array[j] < array[min]){
            min = j;
        }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
}

console.log(array.toString());