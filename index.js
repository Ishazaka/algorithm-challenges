
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
