'use strict';


//////////      Task #1

const date = new Date('1996-october-04');

console.log(date);

console.log(`0${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`);


///////

//////      Task #2


function getDiffDays (start, end) {
    let dateOne = new Date( start);
    let dateTwo = new Date( end);

    const oneDayInMilisecond = 60 * 60 * 24 * 1000;
    
    if (dateOne.toString() === 'Invalid Date') {
        return console.error('Error: invalid date');
    } else if (dateOne >= dateTwo) {
        return console.error('Error: your start date is later than end');
    } else {
        return (dateTwo - dateOne) / oneDayInMilisecond;
    }
}

console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end


//////////

/////////       Task #3


function isWeekend (date) {
    let day = new Date(date);
    let weekend = day.getDay();
    return weekend === 0 || weekend === 6;
}

console.log(isWeekend('2022-02-12'));
console.log(isWeekend('2022-02-14'));


///////     Task #4


const person = {
    fullName: 'Sherlock Holmes',
    address: {
        street: "Baker Street",
        city: "London",
        house: "221b"
    }
 }
 const json = JSON.stringify(person);

 const parsedPerson = JSON.parse(json);

 console.log(parsedPerson);


 let {fullName, address, address: {street, city, house}} = person;

 console.log(fullName);
 console.log(address);
 console.log(street);
 console.log(city);
 console.log(house);