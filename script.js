"use strict";

const addBtn = document.querySelector(".add");
const submitBtn = document.querySelector(".submit");
const inputName = document.querySelector(".input-name");
const inputTel = document.querySelector(".input-tel");
const inputEmail = document.querySelector(".input-email");
const contactBox = document.querySelector(".contact--box");
const formBox = document.querySelector(".form-container");
const closeOverlay = document.querySelector(".close");
const bgImg = document.querySelector(".background-img");

// Contact Update Function

// Close Form  Funtion
const closeForm = function () {
  formBox.classList.add("displayNone");
  addBtn.style.display = "block";
};
const displayBg = function () {
  if (contacts.length < 0) bgImg.classList.remove("displayNone");
};
// Add Contact ------------------------------->
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  formBox.classList.remove("displayNone");
  addBtn.style.display = "none";
  inputName.value = inputTel.value = inputEmail.value = "";
});
const contacts = [];
displayBg();

// Submit Form------------------------------->
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Display Contact List
  const nameValue = inputName.value;
  const telValue = inputTel.value;
  const emailValue = inputEmail.value;

  const html = `
  <div class='contact-block' id="${telValue}">
  <pre>Name  :  <span  class="name">${nameValue}</span></pre>
  <pre>Tel   :  <span  class="tel">${telValue}</span></pre>
  <pre>Email :  <span  class="email">${emailValue}</span></pre>
  <div><img class="delete-box" src="img/trash-solid.svg" alt="Delete"></div>
  </div>
  `;
  if (
    nameValue &&
    telValue &&
    emailValue &&
    emailValue.includes("@" && ".") &&
    telValue.length >= 10 &&
    telValue.length <= 15
  ) {
    formBox.classList.add("displayNone");
    contactBox.classList.remove("hidden");
    bgImg.classList.add("displayNone");
    contactBox.style.zIndex = 5;
    addBtn.style.display = "block";
    contactBox.insertAdjacentHTML("afterbegin", html);
    console.log("success");
  } else console.log("Invalid Input");
  contacts.push(html);
  const dltBtn = document.querySelectorAll(".delete-box");
  dltBtn.forEach((btn, i) =>
    btn.addEventListener("click", function () {
      const btnBox = btn.closest(".contact-block");
      contacts.splice(i, 1);
      btnBox.classList.add("displayNone");
    })
  );
  displayBg();

  // Local Store
  const obj = {
    name: nameValue,
    contact: telValue,
    email: emailValue,
  };
  localStorage.setItem("contactData", JSON.stringify(obj));
});
// Close Form------------------------------->
closeOverlay.addEventListener("click", function (e) {
  e.preventDefault();
  closeForm();
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !formBox.classList.contains("displayNone"))
    closeForm();
});

const changeBtnColor = () => {
  if (
    inputName.value &&
    inputEmail.value &&
    inputEmail.value.includes("@" && ".") &&
    inputTel.value?.length >= 10 &&
    inputTel.value.length < 15
  ) {
    submitBtn.style.background = `linear-gradient(
      135deg,
      rgb(182, 177, 255),
      rgb(103, 93, 254),
      rgb(62, 48, 255)
    )`;
  } else {
    submitBtn.style.background = `linear-gradient(
      135deg,
      rgb(255, 255, 255),
      rgb(209, 206, 206),
      rgb(186, 186, 186)
    )`;
  }
};
