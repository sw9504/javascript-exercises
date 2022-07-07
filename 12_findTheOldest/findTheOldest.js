const findTheOldest = function(people) {
    const currYear = 2022;
    let oldest = {};
    let years = 0;

    people.forEach(element => {
        let aux = 0;
        if(element.hasOwnProperty("yearOfDeath")){
            aux = element['yearOfDeath'] - element['yearOfBirth'];
        }
        else
            aux = currYear - element['yearOfBirth'];

        if (aux > years){
            oldest = element;
            years = aux;
        }
    });

    return oldest; // It returns an Object!!!
};

// Do not edit below this line
module.exports = findTheOldest;
