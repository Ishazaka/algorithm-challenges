
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


