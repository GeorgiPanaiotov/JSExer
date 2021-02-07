function greening(input){
    let number = Number(input);

    let finalPrice = number * 7.61;
    let discount = finalPrice * 0.18;
    finalPrice -= discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
greening(["550"]);