// Code your solution in this file!
const returnFirstTwoDrivers = function(scuber){
    return scuber.slice(0,2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function(scuber1){
    return scuber1.slice(2,4);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1){
    return function(num2){
        return num2*num1;
    };
}

const fareDoubler = createFareMultiplier(2);

fareDoubler(4);

const fareTripler = createFareMultiplier(3)

fareTripler(3);

function selectDifferentDrivers(array, returnFirst){
    return returnFirst(array);
}
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
 


