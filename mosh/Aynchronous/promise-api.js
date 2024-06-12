const p = Promise.resolve({id:1,gitHubUsername:"Mosh"})
p.then(result=>console.log('User is ',result) )