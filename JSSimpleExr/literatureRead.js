function calculate(input){
    var totalTime = Number(input[0]) / Number(input[1]);
    var timePerDay = totalTime / Number(input[2]);
    console.log(timePerDay);
}
calculate(["212", "20", "2"]);