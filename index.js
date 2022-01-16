
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
}


