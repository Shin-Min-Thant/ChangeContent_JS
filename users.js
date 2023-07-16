let users = [
  {
    Name: "Mg Mg",
    Age: 20,
    Education: "College",
    Member: "Gold Member",
    img: "../img/photo_2022-06-16_15-17-04 (2).jpg",
  },
  {
    Name: "Su Su",
    Age: 23,
    Education: "Graduate",
    Member: "Sliver Member",
    img: "../img/photo_2022-06-16_15-17-04 (3).jpg",
  },
  {
    Name: "Kyaw Kyaw",
    Age: 17,
    Education: "High School",
    Member: "Diamond Member",
    img: "../img/photo_2022-06-16_15-17-05 (2).jpg",
  },
  {
    Name: "Aye Aye",
    Age: 19,
    Education: "University",
    Member: "Gold Member",
    img: "../img/photo_2022-06-16_15-17-05 (3).jpg",
  },
  {
    Name: "Tun Tun",
    Age: 28,
    Education: "Graduate",
    Member: "Diamond Member",
    img: "../img/photo_2022-06-16_15-17-05.jpg",
  },
];

function User(users) {
  let userIndex = 0;
  return {
    next: () => {
      return userIndex < users.length
        ? { value: users[userIndex++], done: false }
        : { done: true };
    },
  };
}

let persons = User(users);
let btn = document.querySelector("#btn");
let img = document.querySelector("#img");
let list = document.querySelector("#list");

// console.log(persons.next());
btn.addEventListener("click", changeContent);
function changeContent() {
  let person = persons.next();

  if (!person.done) {
    img.innerHTML = `
        <img
            src="${person.value.img}"
            style="width: 200px; height: 200px"
            alt=""
          />`;
    list.innerHTML = `
    <ul class="list-group d-block mx-auto" style="width: 400px">
    <li class="list-group-item">${person.value.Name}</li>
    <li class="list-group-item">${person.value.Age}</li>
    <li class="list-group-item">${person.value.Education}</li>
    <li class="list-group-item">${person.value.Member}</li>
  </ul>`;
  } else {
    window.location.reload();
  }
}
changeContent();
