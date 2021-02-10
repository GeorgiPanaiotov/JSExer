function sumEvenNums(input){
    let result = 0;
    for(var i = 0; i < input.length; i++){
        if(Number(input[i]) % 2 == 0){
            result += Number(input[i]);
        }
    }
    console.log(result);
}
sumEvenNums(['1', '2', '3', '4', '5', '6']);