function reverseArr(number, arr){
    let newArr = new Array(number);

    for(var i = 0; i < number; i++){
        newArr[i] = arr[i];
    }
    console.log(newArr.reverse());
}
reverseArr(3, [10, 20, 30, 40, 50])