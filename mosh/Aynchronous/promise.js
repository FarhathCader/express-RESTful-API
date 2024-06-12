// const p = new Promise((resolve,reject)=>{
//     //kick off some async work
//     // ...call database
//     //when async work is done we get the result

//     setTimeout(()=>{
//         console.log("Reading a user from a database...")
//         // resolve({id:1,gitHubUsername:"Mosh"})  pending=>resolved, fulfilled
//         reject(new Error('message')) //pending=>rejected

//     }
//     ,2000)
// })

// p.then(result=>console.log('User is ',result) )
// .catch(err=>console.log('Error is ',err.message))



//callbacks to promise
//callback example
function getUser_(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Reading a user from a database...")//here need to add database call
            user = {id:id, username: "Mosh"}
            if(user)resolve(user)
            else reject(new Error('User not found'))
        },2000)
    })
}

    
    
    function getContest(user){

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Reading a contest from database for user ",user.username)//here need to add database call
                contest = {id:1, name: "Contest 1"}
                if(contest)resolve(contest)
                else reject(new Error('Contest not found'))
            },2000)
        }
        )
    }


    function getProblems(contest){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Reading problems for contest ",contest.name)//here need to add database call
                problems = ["problem1","problem2","problem3"]
                if(problems)resolve(problems)
                else reject(new Error('Problems not found'))
            },2000)
        }
        )
    }
    
    getUser_(1)
    .then(user=>getContest(user))
    .then(contest=>getProblems(contest))
    .then(problems=>console.log("Problems are ",problems))
    .catch(err=>console.log("Error is ",err.message))