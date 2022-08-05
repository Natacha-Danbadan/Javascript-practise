'use strict';
//js fundamental 1

//codingchallenge1

const markMass =  78
const markHeight =  1.69
const johnMass =  92
const johnHeight = 1.95 

/* const markMass2 =  95
const markHeight2 =  1.88
const johnMass2 =  85
const johnHeight2 = 1.76 */

const markBMI = markMass/markHeight ** 2
const johnBMI = johnMass/johnHeight ** 2
// markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI)

//codingchallenge2

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`)
}

//codingchallenge3
const dolphinOne = 96;
const dolphinTwo = 108;
const dolphinThree = 89;
const averageDolphinTeam = (dolphinOne + dolphinTwo + dolphinThree) / 3 ;

const koalaOne = 88;
const koalaTwo = 91;
const koalaThree = 110;
const averagekoalaTeam = (koalaOne + koalaTwo + koalaThree) / 3

if (averageDolphinTeam > averagekoalaTeam) {
    console.log(`The winner is Team Dolphin`)
} else if (averageDolphinTeam === averagekoalaTeam){
    console.log(`The winners are Team Dolphin and Team koala`)
} else {
    console.log(`The winner is Team koala`)
} 

//BONUS 1
const averageDolphinTeamBonus = (97 + 112 + 101) / 3 ;
const averagekoalaTeamBonus = (109 + 95 + 106) / 3 ;

if (averageDolphinTeamBonus > averagekoalaTeamBonus && averageDolphinTeamBonus >= 100) {
    console.log(`The winner is Team Dolphin`) ;
} else if (averageDolphinTeamBonus === averagekoalaTeamBonus && averageDolphinTeamBonus >= 100 && averagekoalaTeamBonus >= 100){
    console.log(`The winners are Team Dolphin and Team koala`) ;
} else if (averagekoalaTeamBonus > averageDolphinTeamBonus && averagekoalaTeamBonus >= 100){
    console.log(`The winner is Team koala`) ;
} 

//codingchallenge4
let bill = 275 ;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 :  bill * 0.2 ;
 console.log (`The bill was ${bill}, the tip was ${tip}, and the total value is ${ bill + tip}`);

 //js fundamental 2

 //coding challenge 1
 const averageScoreCalculator = (score1, score2, score3) => (score1 + score2 + score3) / 3;
 
 let averageScoreDolphin = averageScoreCalculator(44, 23, 71);
 let averageScorekoala = averageScoreCalculator(65, 54, 49);
 console.log(averageScoreDolphin, averageScorekoala)

 const checkWinner = function (averageDolphin, averagekoala){
    if(averageDolphin >= 2 * averagekoala){
        console.log(`Dolphin wins with ${averageDolphin} vs. ${averagekoala}`)
    } else if(averagekoala >= 2 * averageDolphin) {
        console.log(`koala wins with ${averagekoala} vs. ${averageDolphin}`)
    } else {
        console.log(`no team wins`);
    }
 } 
 checkWinner(averageScoreDolphin, averageScorekoala);

 //Test Data 2
  averageScoreDolphin = averageScoreCalculator(85, 54, 41);
  averageScorekoala = averageScoreCalculator(23, 34, 27);

 checkWinner(averageScoreDolphin, averageScorekoala);

 //coding challenge 2

 let calcTip = function (bill) {
   tip = bill <= 300 && bill >= 50 ? bill * 0.15 :  bill * 0.2 ;
   return tip
 }

console.log(calcTip(100)) 

const bills = [125, 555, 44]
const tips =  [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [ bills [0] + tips[0], bills [1] + tips[1], bills [2] + tips[2] ]
console.log(tips, total)

//coding challenge 3

const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function (){ 
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

const john = {
    fullName : 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function (){ 
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi)

if (mark.bmi >= john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI  ${john.bmi}`)
} else if (john.bmi >= mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI  ${mark.bmi}`)
}

//coding challenge 4
 calcTip = function (bill) {
 tip = bill <= 300 && bill >= 50 ? bill * 0.15 :  bill * 0.2 ;
 return tip
}

let billsValue = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tipsValue = [];
let totalsValue = [];
 
for (let i = 0; i < billsValue.length; i++) {
    const tip = calcTip(billsValue[i]);
    tipsValue.push(tip);
    totalsValue.push(tip + billsValue[i]);
}
console.log(billsValue, tipsValue, totalsValue);

const calcAvg = function (anyArr) {
    let sum = 0;
    for (let i = 0; i < anyArr.length; i++) {
        sum += anyArr[i];
    }
    return sum / anyArr.length
}
console.log(calcAvg(totalsValue)) 