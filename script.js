"use strict";

const addBtn = document.querySelector(".add");
const submitBtn = document.querySelector(".submit");
const inputName = document.querySelector(".input-name");
const inputTel = document.querySelector(".input-tel");
const inputEmail = document.querySelector(".input-email");
const contactBox = document.querySelector(".contact--box");
const formBox = document.querySelector(".form-container");
const closeOverlay = document.querySelector(".close");

// Contact Update Function
// const displayContact = function () {};

// Close Form  Funtion
const closeForm = function () {
  formBox.classList.add("displayNone");
  addBtn.style.opacity = 1;
};

// Add Contact ------------------------------->
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  formBox.classList.remove("displayNone");
  addBtn.style.opacity = 0;
  inputName.value = inputTel.value = inputEmail.value = "";
});
const contacts = [];

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
  if (nameValue && telValue && emailValue && emailValue.includes("@" && ".")) {
    formBox.classList.add("displayNone");
    contactBox.classList.remove("hidden");
    contactBox.style.zIndex = 5;
    addBtn.style.opacity = 1;
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
