function calculate(input){
    var interest = (Number(input[0]) / 100) * Number(input[2]);
    var interestPerMonth = interest / 12;
    var total = Number(input[0]) + (Number(input[1]) * interestPerMonth);

    console.log(total);

}
calculate(["200", "3", "5.7"]);