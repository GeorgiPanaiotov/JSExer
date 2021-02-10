function print(input){
    console.log(`Name: ${input[0]}, Age: ${input[1]}, Grade: ${Number(input[2]).toFixed(2)}`);
}
print(["John", 15, 5.54678]);