"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2;
    return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => { };
addTwo(5);
getUpper("piyush");
signUpUser("piyush", "piyush@gmail.com", false);
loginUser("p", "p@p.com");
// function getValue(myVal: number): boolean{
//    if (myVal > 5) {
//        return true
//     }
//    return "200 OK"
// }
const getHello = (s) => {
    return "";
};
const heros = [" hero", "superman", "ironman"];
//const heros = [1,2,3]
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
