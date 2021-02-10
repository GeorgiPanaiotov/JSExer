function solve(input){
    let firstSum = 0;
    for(let i = 0; i < Array(input).length; i++){
        firstSum += input[i];
    }

    let array = new Array(Array(input).length);

    for(let i = Array(input).length - 1; i >= 0; i--){
        if(i % 2 == 0){
            let curr = Array(input).pop();
            array[i] = curr + i;
        }
        else{
            let curr = Array(input).pop();
            array[i] = curr - i;
        }
    }
    let secondSum = 0;
    for(let i = 0; i < Array(input).length; i++){
        secondSum += input[i];
    }

    console.log(array);
}
solve([5, 15, 23, 56, 35]);