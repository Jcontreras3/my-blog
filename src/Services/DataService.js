function checkToken(result){
    let IsData = localStorage.getItem('Token');
    if(IsData && IsData != null){
        result = true
    }
    return result;
}

async function createAccount(createdUser){
    let res = await fetch('http://localhost:5096/User/AddUsers',{
        method: "POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(createdUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occurred ${res.status}`
        throw new Error(message)
    }


    console.log();

    let data = await res.json();
}


async function LoginToAccount(userLogin){
    let res = await fetch('http://localhost:5096/User/Login',{
        method: "POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(userLogin)
    });
    if(!res.ok)
    {
        const message = `An Error has Occurred ${res.status}`
        throw new Error(message)
    }

    let data = await res.json();
}


export {checkToken, createAccount, LoginToAccount};