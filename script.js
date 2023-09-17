/*Треба провалідувати поля у цій формі на вхідні дані при кліку на кнопку як на відео validateRegisterForm.

Ім’я та прізвище: може бути слово англійською з великої або маленької букви і не більше 20. Цифр і інші символи не допускаються.
Емейл: обов'язково @. Усі букви повинні бути англійською. Загальні вимоги наступні(будь-яка кількість букв, цифр, тире і крапок@будьяка кількість букв.( net.ua, org.ua, gmail.com. і т.д.)).
Пароль: Від 8 до 15 символів можуть бути букви та цифри.
Чекбокс: якщо всі поля правильно заповнені, то при кліку на чекбокс кнопка Sign Up розблоковується
Sign Up: при кліку на дану кнопку відкривається модальне вікно з повідомленням про успішну реєстрацію
Start exploring: при кліку на дану кнопку закривається модальне вікно, а також всі поля форми зачищуються
------------------------------------------------------------------------------------------*/
"use strict";
const getS = (selector) => document.querySelector(selector);
let form = document.forms.registrationForm;
let check = true;
let testFullName;
let testEmail;
let testPassword;
let fullNamePattern = /^[a-zA-Z]{2,20}$/;
let emailPattern = /^[a-zA-Z0-9.-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
let passwordPattern = /^\w{8,15}$/;

/* check and create first name*/
getS("#firstNameInput").addEventListener("input", () => {
  testFullName = fullNamePattern.test(getS("#firstNameInput").value);
  getS(".first").style.display = "block";
  getS("#firstNameInput").style.paddingTop = "16px";

  if (testFullName) {
    getS(".first").style.display = "block";
    getS(".check-first").classList.remove("hidden");
    getS(".error-first ").classList.add("hidden");
    getS(".valid-first").classList.add("hidden");
  } else {
    getS(".first").style.display = "none";
    getS(".valid-first").classList.remove("hidden");
    getS(".error-first ").classList.remove("hidden");
    getS(".check-first").classList.add("hidden");
    getS("#firstNameInput").style.paddingTop = "0px";
  }
  if (
    getS("#firstNameInput").value.length > 0 &&
    getS("#firstNameInput").value.length < 2
  ) {
    getS("#firstNameInput").style.paddingTop = "16px";
    getS(".first").style.display = "block";
  }
});

getS("#firstNameInput").addEventListener("blur", () => {
  if (testFullName) {
    getS("#firstNameInput").style.border = "1.5px solid rgb(60, 183, 12)";
    getS("#firstNameInput").style.boxShadow =
      "0px 0px 8px 1px rgba(84, 184, 130, 0.638)";
  } else {
    getS("#firstNameInput").style.border =
      " 1px solid rgba(236, 62, 73, 0.638)";
    getS("#firstNameInput").style.boxShadow =
      " 0px 0px 8px 2px  rgba(194, 85, 93, 0.638)";
  }
});

/* check and create last name*/
getS("#lastNameInput").addEventListener("input", () => {
  testFullName = fullNamePattern.test(getS("#lastNameInput").value);

  getS(".last").style.display = "block";
  getS("#lastNameInput").style.paddingTop = "16px";
  if (testFullName) {
    getS(".last").style.display = "block";
    getS(".check-last").classList.remove("hidden");
    getS(".error-last").classList.add("hidden");
    getS(".valid-last").classList.add("hidden");
  } else {
    getS(".last").style.display = "none";
    getS(".valid-last").classList.remove("hidden");
    getS(".error-last ").classList.remove("hidden");
    getS(".check-last").classList.add("hidden");
    getS("#lastNameInput").style.paddingTop = "0px";
  }
  if (
    getS("#lastNameInput").value.length > 0 &&
    getS("#lastNameInput").value.length < 2
  ) {
    getS("#lastNameInput").style.paddingTop = "16px";
    getS(".last").style.display = "block";
  }
});

getS("#lastNameInput").addEventListener("blur", () => {
  if (testFullName) {
    getS("#lastNameInput").style.border = "1.5px solid rgb(60, 183, 12)";
    getS("#lastNameInput").style.boxShadow =
      "0px 0px 8px 1px rgba(84, 184, 130, 0.638)";
  } else {
    getS("#lastNameInput").style.border = " 1px solid rgba(236, 62, 73, 0.638)";
    getS("#lastNameInput").style.boxShadow =
      " 0px 0px 8px 2px  rgba(194, 85, 93, 0.638)";
  }
});

/* check and create email address */
getS("#emailInput").addEventListener("input", () => {
  testEmail = emailPattern.test(getS("#emailInput").value);

  getS(".address").style.display = "block";
  getS("#emailInput").style.paddingTop = "16px";
  if (testEmail) {
    getS(".address").style.display = "block";
    getS(".check-email").classList.remove("hidden");
    getS(".error-email").classList.add("hidden");
    getS(".valid-email").classList.add("hidden");
  } else {
    getS(".address").style.display = "none";
    getS(".valid-email").classList.remove("hidden");
    getS(".error-email ").classList.remove("hidden");
    getS(".check-email").classList.add("hidden");
    getS("#emailInput").style.paddingTop = "0px";
  }
});

getS("#emailInput").addEventListener("blur", () => {
  if (testEmail) {
    getS("#emailInput").style.border = "1.5px solid rgb(60, 183, 12)";
    getS("#emailInput").style.boxShadow =
      " 0px 0px 8px 1px rgba(84, 184, 130, 0.638)";
  } else {
    getS("#emailInput").style.border = " 1px solid rgba(236, 62, 73, 0.638)";
    getS("#emailInput").style.boxShadow =
      " 0px 0px 8px 2px  rgba(194, 85, 93, 0.638)";
  }
});

/* check and create password */
getS("#passwordInput").addEventListener("input", () => {
  testPassword = passwordPattern.test(getS("#passwordInput").value);

  getS(".password-placeholder").style.display = "block";
  getS("#passwordInput").style.paddingTop = "16px";
  if (testPassword) {
    getS(".password-placeholder").style.display = "block";
    getS(".check-pass").classList.remove("hidden");
    getS(".error-pass").classList.add("hidden");
    getS(".valid-pass").classList.add("hidden");
  } else {
    getS(".password-placeholder").style.display = "none";
    getS(".valid-pass").classList.remove("hidden");
    getS(".error-pass ").classList.remove("hidden");
    getS(".check-pass").classList.add("hidden");
    getS("#passwordInput").style.paddingTop = "0px";
  }
});

getS("#passwordInput").addEventListener("blur", () => {
  if (testPassword) {
    getS("#passwordInput").style.border = "1.5px solid rgb(60, 183, 12)";
    getS("#passwordInput").style.boxShadow =
      "0px 0px 8px 1px rgba(84, 184, 130, 0.638)";
  } else {
    getS("#passwordInput").style.border = " 1px solid rgba(236, 62, 73, 0.638)";
    getS("#passwordInput").style.boxShadow =
      " 0px 0px 8px 2px  rgba(194, 85, 93, 0.638)";
  }
});

/* checkbox and check validation */
getS("#checkboxInput").addEventListener("click", () => {
  if (
    testFullName &&
    testEmail &&
    testPassword &&
    getS("#checkboxInput").checked
  ) {
    getS("#signUpButton").disabled = false;
    getS("#signUpButton").style.backgroundColor = "#0c529e";
  } else {
    getS("#signUpButton").disabled = true;
  }
});

/* registration window */
getS("#signUpButton").addEventListener("click", () => {
  getS(".second-block").classList.remove("hidden");
  getS("#signUpButton").disabled = true;
});

// /*reset form*/
getS("#btn-second").addEventListener("click", () => {
  getS(".second-block").classList.add("hidden");
  form.submit();
});
