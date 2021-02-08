function convert(input){
    var degree = (Number(input) * 180) / Math.PI;
    console.log(degree.toFixed(0));
}
convert(["3.1416"]);