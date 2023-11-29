// username: 'kminchelle',
// password: '0lelplR',

// async
// await
// fetch
// api
// {
// method: 'POST'
// headers: {content-type:'application/json, token:'eyasdfadfasdf'}
// body: {email: abc@gmail.com, password: 21212}
// }

const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");

const loginData = {};

const api = `https://dummyjson.com/auth/login`;

const handleLogin = async () => {
  console.log("login button pressed");

  loginData.email = email.value;
  loginData.password = password.value;

  console.log("loginData", loginData);

  const response = await fetch(api, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username: "kminchelle", password: "0lelplR" }),
  });
  console.log("response", response);

  const data = await response.json();
  localStorage.setItem("userData", JSON.stringify(data));
  console.log("data", data, response?.status);

  if (response?.status == 200) {
    window.location.href = `http://127.0.0.1:5500/Daily%20class%20code/20231115%20login%20api(post)/user.html`;
  }
};
