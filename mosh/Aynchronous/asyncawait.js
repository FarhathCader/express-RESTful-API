function getUser_(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user from a database...")//here need to add database call
            user = { id: id, username: "Mosh" }
            if (user) resolve(user)
            else reject(new Error('User not found'))
        }, 2000)
    })
}



function getContest(user) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a contest from database for user ", user.username)//here need to add database call
            contest = { id: 1, name: "Contest 1" }
            if (contest) resolve(contest)
            else reject(new Error('Contest not found'))
        }, 2000)
    }
    )
}


function getProblems(contest) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading problems for contest ", contest.name)//here need to add database call
            problems = ["problem1", "problem2", "problem3"]
            if (problems) resolve(problems)
            else reject(new Error('Problems not found'))
        }, 2000)
    }
    )
}

// getUser_(1)
// .then(user=>getContest(user))
// .then(contest=>getProblems(contest))
// .then(problems=>console.log("Problems are ",problems))
// .catch(err=>console.log("Error is ",err.message))

//async await
async function displaycommits() {
   try{ const user =  await getUser_(1)
    const contest = await getContest(user)
    const problems = await getProblems(contest)
    console.log("Problems are ", problems)
}
catch(err){
    console.log("Error is ",err.message)
}
}
displaycommits()
console.log("check") //this will be printed first as it is not async
