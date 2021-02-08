function validCombination(input){

    let counter = 0;

    for(var i = 0; i <= Number(input[0]); i++){
        for(var j = 0; j <= Number(input[0]); j++){
            for(var k = 0; k <= Number(input[0]); k++){
                if(i + j + k == Number(input[0])){
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
validCombination(["25"]);