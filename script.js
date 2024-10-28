1
function multiply(a, b) {
 return a * b;   
}
2
function checkAge(age) {
    if ( age >= 18 ) {
        return "სრულწლოვანი"
    }
    else { return "არასრულწლოვანი"
    }
}
3
function isEvenOrOdd(num) {
    if ( num % 2 == 0) {
        return "ლუწი"
    }
    else { return "კენტი"}
}
4
switch (true) {
    case 1: return "ორშაბათი";
    case 2: return "სამშაბათი";
    case 3: return "ოთხშაბათი";
    case 4: return "ხუთშაბათი";
    case 5: return "პარასკევი";
    case 6: return "შაბათი";
    case 7: return "კვირა";
}
5
function compareNumbers(a, b) {
    if ( a > b) {
        return "პირველი რიცხვი უფრო დიდია"
    }
    else if ( a < b) {
        return "მეორე რიცხვი უფრო დიდია"
    }
    else if ( a == b) {
        return "ორივე რიცხვი ტოლია"
    }
}
6
function calculator(a, b, operator) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        return a / b;
    }
}
7
function celsiusToFahrenheit(celsius) {
    // პირობა ვერ გავიგე
}
8
function findMax(a, b, c) {
    // ვერ გავაკეთე
}
9
function checkSign(num) {
    if (num >= 0) {
        return "დადებითი"
    }
    else {
        return "უარყოფითი"
    }
}
10
switch (true) {
    case 1: return "იანვარი";
    case 2: return "თებერვალი";
    case 3: return "მარტი";
    case 4: return "აპრილი";
    case 5: return "მაისი";
    case 6: return "ივნისი";
    case 7: return "ივლისი";
    case 8: return "აგვისტო";
    case 9: return "სექტემბერი";
    case 10: return "ოქტომბერი";
    case 11: return "ნოემბერი";
    case 12: return "დეკემბერი";
}
11
function multiplyIfGreaterThanFive(num) {
    if( num >= 5 ) {
        return num * 10
    }
    else {
        return "რიცხვი მცირეა"
    }
}
12
switch (true) {
    case 1: return "გაზაფხული";
    case 2: return "ზაფხული";
    case 3: return "შემოდგომა";
    case 4: return "ზამთარი";
}
13
function checkPrice(price) {
    if ( price > 100)
        return "ფასი მაღალია"
    else {
        return "ფასი ნორმალურია"
    }
}
14
function calculator(a, b, operator) {
    switch (operator) {
        case 1: return a + b;
        case 2: return a - b;
        case 3: return a * b;
        case 4: return a / b;
    }
}
15
function positiveSum(a, b) {
    if (a > 0 && b > 0){
        return a + b; 
    }
    else {
        return "მინიმუმ ერთი რიცხვი უარყოფითია"
    }
}
