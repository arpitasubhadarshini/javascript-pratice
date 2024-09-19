//   let promise = new Promise(( reject) =>{
//       console.log("Birthday party  dega");
//       reject("party nehi dega");
//   });

//  function data(id){

//      return new Promise((resolve , reject) => {
//          setTimeout(() => {
//              console.log("id" + id);
//              resolve("success");
//          }, 2000);
//      })
//  }
//  data(1).then(() => {
//     console.log("loading");
//      data(2).then(() => {
//          data(3).then(() => {

//          });
//      });
//  });

function repeated(num) {
    let numStr = num.toString();
    let digit={};
    let repeatedDigits = new set();

    for(i=0;i<num.length;i++) {
        let number = numStr[i];
        if(digit[number]) {
            digit[number]++;
            repeatedDigits.add(number);
        } else {
            digit[number]=1;
        }

    }

if(repeatedDigits.size>0) {
    return Array.from(repeatedDigits);
} else {
    return "no repeated result will found";
}
}
let num = 122333;
console.log(repeated(num));