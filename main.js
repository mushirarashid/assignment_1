// ========= Assignment (1)
// function radianToDegree(degree) {
//   if (degree < 0) {
//     console.log("check your perameter");
//     return;
//   }

//   var oneRedianToDegree = 57.3;
//   var degree = oneRedianToDegree * degree;
//   return degree;
// }
// var ansDegree = radianToDegree(5);
// console.log(ansDegree);

// ========= Assignment (2) check this file is javaScript file or not

// function isJavaScriptFile(fileName) {
//   if (fileName.includes(".js") === true) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isJavaScriptFile("fime.phd");

// calculate the total oil price
// function oilPrice(diesel, petrol, octane) {
//   if (diesel < 0 && petrol < 0 && octane < 0) {
//     console.log("check your perameter");
//     return;
//   }
//   var perDieselPrice = 114;
//   var perPetrolPrice = 130;
//   var perOctanePrice = 135;

//   var myDieselBill = diesel * perDieselPrice;
//   var myPetrolBill = petrol * perPetrolPrice;
//   var myOctaneBill = octane * perOctanePrice;

//   var totalOilPrice = myDieselBill + myOctaneBill + myPetrolBill;
//   return totalOilPrice;
// }
// var returnOilPrice = oilPrice(5, 3, 8);
// console.log(returnOilPrice);

//Assignment (4) ============publicBusFare
// function publicBusFare(totalPeopele) {
//   var bus = 50;
//   var microbus = 11;
//   var busGoingPeople = totalPeopele % bus;
//   var publicBusGoingPeople = busGoingPeople - microbus;
//   var perPersonRentInPublicBus = 250;
//   var totalFare = perPersonRentInPublicBus * publicBusGoingPeople;
//   return totalFare;
// }
// var returnTotalFare = publicBusFare(263);
// console.log(returnTotalFare);

// ========= Assignment (5) ======
var frindCheck1 = {
  name: "Tom",
  friend: "Rock",
};
var frindCheck2 = {
  name: "Rock",
  friend: "Tom",
};
function isBestFrind(frinds1, friends2) {
  if (frinds1.name.includes(friends2.friend)) {
    return "they are best friend";
  } else {
    return "they are not best friend";
  }
}
var returnans = isBestFrind(frindCheck1, frindCheck2);
console.log(returnans);
