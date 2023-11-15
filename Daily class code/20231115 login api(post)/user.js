const [navbar] = document.getElementsByClassName("navbar");
const userSection = document.createElement("div");
userSection.classList.add("user-section");

let userDataFromLocal = localStorage.getItem("userData");
userDataFromLocal = JSON.parse(userDataFromLocal);
console.log("userDataFromLocal", userDataFromLocal);

userSection.innerHTML = `
    <img
    src=${userDataFromLocal?.image} 
    alt="user-profile"
    class="user-profile"
    />
    <p class="user-name">${userDataFromLocal?.firstName} ${userDataFromLocal?.lastName}  </p>
    `;

navbar.append(userSection);
