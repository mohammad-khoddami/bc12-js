// var mobile = {
//     name: "iphone 17",
//     model: "apple",
//     color: ["white", "silver", "black"],
//     price: {
//         toman: 500000000,
//         dollar: 1500,
//     },
// };

// console.log(mobile.model);
// console.log(mobile.price.toman);
// console.log(mobile.color[1]);

// var car = {
//     model: "peguet",
//     name: "207",
//     color: ["white", "black", "blue"],
//     maxSpeed: 150,
// };

// console.log(car.color[2]);

// var students = [
//     { name: "mohammad", present: true, score: 4 },
//     { name: "ali", present: false, score: 7 },
// ];

// console.log(students[1].present);

// var obj = {
//     a: {
//         b: [null, null, { c: { name: "ali" } }],
//     },
// };

// console.log(obj.a.b[2].c.name); //"ali"

// var companyData = {
//     employees: [
//         null,
//         {
//             contact: {
//                 email: "abc@gmail.com",
//             },
//         },
//     ],
// };

// console.log(companyData.employees[1].contact.email); //abc@gmail.com

var testObj = {
    id: "obj-alb-2",
    tags: ["sample", "complex", "nested"],
    nested: {
        user: {
            name: "Alex",
            roles: ["admin", "editor"], //=>roles=>"editor"
            prefs: {
                theme: "dark",
                notify: { email: true, push: false }, //push=>false
            },
        },
    },
    config: {
        version: "1.0",
        features: {
            analytics: true,
            caching: { startegy: "lru", ttl: 3600 }, //ttl=>3600
        },
    },
};

console.log(testObj.nested.user.roles[1]);
console.log(testObj.nested.user.prefs.notify.push);
console.log(testObj.config.features.caching.ttl);
