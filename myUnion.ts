let score: number | string  = 33
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    name: string;
    id: number;
}

let hitesh: User | Admin = {name: "piyush", id:344}

piyush ={username: "ps", id:344}

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB ID: ${id}`);

// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
   if (typeof id === "string") {
    id.toLowerCase()
   }
    
}

// array 

const  data: number[] = [1,2,3]
const data2:  string[] = ["1", "2", "3"]
const data3:  string[] | number[] = ["1", "2", "3"]