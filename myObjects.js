"use strict";
const User = {
    name: "piyush",
    email: "piyush@gmail.com",
    isAvtive: true
};
function create({ name: string, isPaid: boolean }) { }
createUser({ name: "piyush", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 388 };
}
