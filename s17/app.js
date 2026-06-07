// function findGrater(a, b) {
//     return a > b ? a : b;
// }

// console.log(findGrater(5, 7));

/*

   *       i=0
  ***      i=1
 *****     i=2

*/

// var line = 12;
// for (var i = 0; i < line; i++) {
//     var result = "";
//     for (var j = 0; j < line - i; j++) {
//         result += " ";
//     }

//     for (var k = 0; k < 2 * i + 1; k++) {
//         result += "*";
//     }
//     console.log(result);
// }

// var items = [
//     {
//         name: "milk",
//         price: 1000,
//     },
//     {
//         name: "milk",
//         price: 2000,
//     },
//     {
//         name: "chips",
//         price: 2000,
//     },
// ];

// function checkout(cart) {
//     var total = 0;
//     var finalCart = {};
//     for (var i = 0; i < cart.length; i++) {
//         total += cart[i].price;
//         if (finalCart[cart[i].name]) {
//             finalCart[cart[i].name].count++;
//             finalCart[cart[i].name].price += cart[i].price;
//         } else {
//             finalCart[cart[i].name] = {
//                 count: 1,
//                 price: cart[i].price,
//             };
//         }
//     }

//     return {
//         totalPrice: total,
//         hasDiscount: checkDiscount(total),
//         finalCart: finalCart,
//     };
// }

// function checkDiscount(totalPrice) {
//     return totalPrice > 3000 ? true : false;
// }

// function printInvoice(obj) {
//     console.log(obj.finalCart);
//     console.log("totalPrice", obj.totalPrice);
//     console.log("discount", obj.hasDiscount ? "your discount code: ABC" : "");
// }

// var result = checkout(items);
// printInvoice(result);
