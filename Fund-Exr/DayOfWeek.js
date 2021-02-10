function day(number){
    let days = ["Empty", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if(number > 0 && number < 8){
        console.log(days[number]);
    }
    else{
        console.log('Invalid day!');
    }
}
day(5);