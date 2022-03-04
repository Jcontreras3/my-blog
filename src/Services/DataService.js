let userData = {};
function checkToken(result) {
  let IsData = localStorage.getItem("Token");
  if (IsData && IsData != null) {
    result = true;
  }
  return result;
}

async function createAccount(createdUser) {
  let res = await fetch("http://localhost:5096/User/AddUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdUser),
  });
  if (!res.ok) {
    const message = `An Error has Occurred ${res.status}`;
    throw new Error(message);
  }

  console.log(data);

  let data = await res.json();
}

async function Login(loginUser) {
  let res = await fetch("http://localhost:5096/User/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginUser),
  });
  if (!res.ok) {
    const message = `An Error has Occurred ${res.status}`;
    throw new Error(message);
  }

  let data = await res.json();
  if (data.token != null) {
    localStorage.setItem("Token", data.token);
  }
  return data;
}

async function GetLoggedInUserData(username) {
  let res = await fetch(`http://localhost:5096/User/userbyusername/${username}`);
  let data = await res.json();
  userData = data;
  console.log(userData);
}

function LoggedInData() {
  return userData;
}

async function addBlogItems(blogItems){
  let res = await fetch("http://localhost:5096/blogitem/AddBlogItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogItems)
  });
  if (!res.ok) {
    const message = `An Error has Occurred ${res.status}`;
    throw new Error(message);
  }

  let data = await res.json();
  console.log(data);
  // if (data.token != null) {
  //   localStorage.setItem("Token", data.token);
  // }
  return data;
}

async function getBlogItems(){
  let res = await fetch("http://localhost:5096/blogitem/GetBlogItems");
  let data = await res.json();
  return data;
}

async function getBlogItemsByUserId(userId){
  let res = await fetch(`http://localhost:5096/blogitem/GetItemsByUserID/${userId}`)
  let data = await res.json();
  return data;
}




export { checkToken, createAccount, Login, GetLoggedInUserData, LoggedInData, addBlogItems, getBlogItems, getBlogItemsByUserId };
