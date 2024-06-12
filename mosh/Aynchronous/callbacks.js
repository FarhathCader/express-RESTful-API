//callback example
function getUser_(id,callback){
setTimeout(()=>{
    console.log("Reading a user from a database...")//here need to add database call
    user = {id:id, username: "Mosh"}
    callback(user)
},2000)
}

function getContest(user,callback){
    setTimeout(()=>{
        console.log("Reading a contest from database for user ",user.username)//here need to add database call
        contest = {id:1, name: "Contest 1"}
        callback(contest)
    },2000)
}

function getProblems(contest){
    setTimeout(()=>{
        console.log("Reading problems for contest ",contest.name)//here need to add database call
        problems = ["problem1","problem2","problem3"]
        console.log("Problems are ",problems)
    },2000)
}

getUser_(1,(user)=>{
    console.log("User is ",user)
    getContest(user,(contest)=>{
        console.log("Contest is ",contest)
        getProblems(contest)
    })
})





