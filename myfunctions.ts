function addTwo(num: number){
  // return num + 2;
  return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name:string, email:string, isPaid:boolean = false) => {}

addTwo(5)
getUpper("piyush")

signUpUser("piyush", "piyush@gmail.com", false)
loginUser("p", "p@p.com")

// function getValue(myVal: number): boolean{
//    if (myVal > 5) {
//        return true
//     }
//    return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = [" hero", "superman", "ironman"]
//const heros = [1,2,3]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function  consoleError(errmsg: string){
    console.log(errmsg);
    
}


export {}