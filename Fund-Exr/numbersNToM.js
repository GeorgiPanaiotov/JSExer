function solve(input){
    if(Number(input[0]) > Number(input[1])){
        let current = input[1];
        input[1] = input[0];
        input[0] = current;
    }

    for(let i = Number(input[0]); i <= Number(input[1]); i++){
        console.log(i);
    }
}
solve(["10", "20"]);