interface User {
    readly dbId: number
    email: string,
    userId: number,
    googleId?: string
    startTrail: () => string
}

const piyush: User = { dbId: 22, email: "p@p.com", userId:2211}
piyush.email = "p@p.com"