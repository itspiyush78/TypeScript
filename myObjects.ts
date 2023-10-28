// const User = {
//     name: "piyush",
//     email: "piyush@gmail.com",
//     isAvtive:true
// }

// function create({name: string, isPaid: boolean}){}

// let newUser = {name: "piyush", isPaid: false, email: "piyush@gmail.com"}

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price:388}
// }


// type User = {
//        name: string;
//        email: string;
//        isActive: boolean;
// } 


// function createUser(user: User) {}






type User = {
       readonly_id: string;
       name: string;
       email: string;
       isActive: boolean;
       credcardDetails?: number
}

let myUser: User = {
       _id: "12345",
       name: "p",
       email: "p@example.com",
       isActive: false
}

type cardNumber = {
       cardnumber: string
}

type cardDate = {
       cardDate: string
}

type credcardDetails = cardNumber & cardDate &{
       cvv: number
}


myUser.email = "p@example".com"

