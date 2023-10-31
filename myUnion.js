"use strict";
let score = 33;
score = 44;
score = "55";
let hitesh = { name: "piyush", id: 344 };
piyush = { username: "ps", id: 344 };
// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB ID: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array 
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", "3"];
