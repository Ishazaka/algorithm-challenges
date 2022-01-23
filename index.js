
// udemy coarse code challenges

// code1 (a)
const markmass = 78;
const markheight = 1.69;
const johnmass = 95;
const johnheight = 1.95;

// formula here
const bMImark = markmass / (markheight * markheight);
 const bMIjohn = johnmass /( johnheight **2);
 console.log(bMImark,bMIjohn);

 const highermarkbmi = bMImark > bMIjohn;
 console.log( highermarkbmi);


// code1 (b)
const markmasss = 95;
const markheightt = 1.88;
const johnmasss = 85;
const johnheightt = 1.76;

// formula here
const bMIImark = markmasss / (markheightt * markheightt);
 const bMIIjohn = johnmasss /( johnheightt **2);
 console.log(bMIImark,bMIIjohn);

 const highermarkbmii = bMIImark > bMIIjohn;
 console.log( highermarkbmii);

// code 2 (a)
const bmimarks =27.309;
const bmijohns =24.983;
if(bmimarks > bmijohns){
console.log(`MarkBMI (${bmimarks}) is higher than JohnBMI which is (${bmijohns})`);
}else{
console.log(`MarkBMI (${bmimarks}) is less than JohnBMI which is (${bmijohns})`);
}

// code3

// dolphin score is 96, 108 and 89
// koalas score is 88, 91 and 110

const dolphinscore = (96 + 108 + 89)/3;
const koalasscore = (88 + 91 + 110)/3;
console.log( dolphinscore,koalasscore);

if (dolphinscore > koalasscore){
  console.log(`dolphin team win the trophy`);
}else
   if (dolphinscore < koalasscore){
  console.log(`koalas team win the trophy`);
}else if(dolphinscore === koalasscore){
  console.log(`The match is draw ~both team win the trophy`);
}

// code 3 (bonus 1)(bonus2)

// dolphin score 97 85 78
// koalas score 79 95 88

const dolphinsscore = (97 + 85 + 78)/3;
const koalassscore = (79 + 95 + 88)/3;
 console.log(dolphinsscore, koalassscore)
if (dolphinsscore > koalassscore && dolphinsscore >=100 ){
   console.log(`dolphin team win the trophy`);
}else if (dolphinsscore < koalassscore &&koalassscore >=100 ){

  console.log(`koalas team win the trophy`);
}else if (koalassscore === dolphinsscore && koalassscore >= 100 && dolphinsscore >=100 ){
  console.log(`both win the game !!`)
}else {
  console.log(`no one is the winner both have less than 100 score`);
}

// // code after 3
// // do the switch type statement in if else statement 
  let day = "wednesday";


if (day === "monday"){
  console.log(`do some exercise `);
} else if (day === "tuesday"){
  console.log(`are you  exercise `);
 }else if (day === "wednesday" || day === "thursday"){
  console.log(`i am learning `);
} else if (day === "friday"){
  console.log(`that is half day `);
} else if (day === "sunday"){
  console.log(`that is fun day `);
}else{
   console.log(`you are typing wrong `);
}


// code 4
// calculate the bill and tip  
//  bill values 275 , 40 and 430

const bill =  275;
const tips = bill <= 300 && bill >=50 ? bill*0.15 : bill* 0.2; 
console.log(` the bill is ${bill} and tip is ${tips} and total is ${bill + tips}`);

const bills = 40;
const tipvalue = bills <= 300 && bills >= 50 ? bills*0.15 :bills*0.2; 
console.log(`the bills is ${bills} and tip is ${tipvalue} and total is ${bills + tipvalue}`);



// udemy codes challenges (part 2 fundamental)

// code 1(a)
 let calcaverage = (a, b, c) => (a + b + c)/3

 let scoredolphin = calcaverage(44, 23, 71);
 let scorekoalas = calcaverage(65, 54, 49);
 console.log( scoredolphin,scorekoalas)

 function checkwinner(avgdolphin, avgkoalas){
 if(avgdolphin >= avgkoalas*2){
   console.log(`dolphins wins the cup! (${scoredolphin} vs ${avgkoalas}) `);
   }else if (avgkoalas >= avgdolphin*2){
  console.log(`koalas wins the cup! (${avgkoalas} vs ${avgdolphin})`)
 }else {
   console.log("no one  will take the cup")
 }
  }
checkwinner(scoredolphin ,scorekoalas);

// code 1(b)

let calcsaverage = (a, b,c) => (a+b+c)/3

let scoresdolphin = calcsaverage(85, 54 ,41);
let scoreskoalas = calcsaverage(23, 34 ,24);
console.log(scoresdolphin, scoreskoalas);

function checkthewinner(avgsdolphin, avgskoalas){
if(avgsdolphin >= avgskoalas *2){
  console.log(`dolphin exactly take trophy! (${avgsdolphin} vs ${avgskoalas}) `);
}else if (avgskoalas >= avgsdolphin*2){
  console.log(`koalas exactly win!  (${avgkoalas} vs ${avgdolphin})`);
}else {
 console.log ("no one will get any award");
}

}
checkthewinner(scoresdolphin, scoreskoalas)


// code 2

// const calctip = function(bill){
//  return  bill <= 300 && bill >=50 ? bill * 0.15 :bill* 0.20;
// }

const calctips = bill => bill <= 300 && bill >= 50? bill* 0.15 : bill*0.2;

 const bill = [125,555, 44] ;
 const tips = [calctips(bill[0]), calctips(bill[1]), calctips(bill[2])];
console.log(bill, tips);

 const total = [bill[0] + tips[0],bill[1] + tips[1],bill[2] + tips[2] ];

 console.log(total);

// code 3

let mark = {
  fullname : "mark miller",
  height : 1.69,
  mass : 78,
  calcbmi : function (){
   this.bmi = this.mass/ this.height** 2;
    return this.bmi;
  }
};

let john = {
  fullname : "John smith",
  height : 1.95,
  mass : 92,
  calcbmi : function (){
    this.bmi = this.mass/ this.height ** 2;
    return this.bmi;
  }
};
 mark.calcbmi();
 john.calcbmi();
 console.log(mark.bmi);
 console.log(john.bmi);

if(mark.bmi > john.bmi){
  console.log(`${mark.fullname}'s bmi (${mark.bmi}) is higher than ${john.fullname}'s bmi (${john.bmi})!! `)
}else if (john.bmi > mark.bmi){
  console.log(`johns smith's bmi (${john.bmi}) is higher than mark miller's bmi ${mark.bmi}!!`);
}


// hacker ranks code

// code 3 (sum the array)

var arr = [1,2,3,4,10,11];

function simpleArraySum(ar) {
    // Write your code here
   let thesum = 0
    for (let n = 0; n < ar.length; n++){
    thesum +=ar[n];
}
return thesum;
}
console.log(simpleArraySum(arr));

// code 3 second method
// answer is correct but not a right way because spread converts array into open method and rest again convert it into array

var arr = [1,2,3,4,10,11];

function sumarray(...ar){

 let sum = 0;
 for(let i in ar){
  sum += ar[i];
 }
return sum;

}
console.log(sumarray(...arr));


