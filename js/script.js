const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const addBtn = document.getElementById("addBtn");
const tBody = document.getElementById("tBody");

let counter = 1;
let innerHTML = "";

addBtn.onclick = (e) => {
  e.preventDefault();
  innerHTML += `<tr class="trs">
    <th scope="row">${counter}</th>
    <td>${name.value}</td>
    <td>${surname.value}</td>
    <td>${email.value}</td>
    <td><button class="btn btn-danger deleteBtns">Delete</button></td>
    <td><button class="btn btn-primary doneBtns">Done</button></td>
  </tr>`;
  tBody.innerHTML = innerHTML;
  counter++;
  name.value = "";
  surname.value = "";
  email.value = "";
  const deleteBtns = document.getElementsByClassName("deleteBtns");
  const doneBtns = document.getElementsByClassName("doneBtns");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function (e) {
      this.parentElement.parentElement.style.display = "none";
      //   console.log(this.parentElement.parentElement.firstElementChild);
    });
  }
  for (let i = 0; i < donzeBtns.length; i++) {
    doneBtns[i].addEventListener("click", function (e) {
      //   this.parentElement.parentElement.style.backgroundColor = "green";
      this.parentElement.parentElement.style.backgroundColor = "green";
      this.parentElement.parentElement.style.color = "green";
    });
  }
};
