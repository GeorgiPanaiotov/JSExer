function hoursNeeded(input){
    let name = input[0];
    let projects = Number(input[1]);

    console.log(`The architect ${name} will need ${projects * 3} hours to complete ${projects} project/s`);
}
hoursNeeded(["George", "4"]);