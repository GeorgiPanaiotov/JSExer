function solve(input1, input2, input3){
    let first = input1.length;
    let second = input2.length;
    let third = input3.length;

    let sum = first + second + third;
    let avg = Math.floor((first + second + third) / 3);

    console.log(sum);
    console.log(avg);
}
solve('chocolate', 'ice cream', 'cake');