function reverseArr(arr){
    let current = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = current;
    console.log(arr);
}
reverseArr(['abc', 'def', 'hig', 'klm', 'nop']);