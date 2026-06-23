const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#age");
const ui = document.querySelector("#img");
const card = document.querySelector(".card");

let users = [
  {
    name: "Ananya Sharma",
    email: "ananya.sharma@example.com",
    dob: "2003-05-14",
    img: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    dob: "2001-11-22",
    img: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Priya Patel",    
    email: "priya.patel@example.com",
    dob: "2002-08-09",
    img: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Arjun Singh",
    email: "arjun.singh@example.com",
    dob: "2000-03-17",
    img: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    dob: "2004-01-30",
    img: "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

function fnt() {
    card.innerHTML = "";

    users.forEach((e) => {
        card.innerHTML += `
        <div class="user_card">
            <div class="img_box">
                <img src="${e.img}" alt="${e.name}">
            </div>
            <div class="text">
                <h3>Name: ${e.name}</h3>
                <p>Age: ${e.age}</p>
            </div>
        </div>`;
    });
}

fnt();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    users.push({
        name: inp1.value,
        age: inp2.value,
        img: ui.value
    });

    fnt();
    form.reset();
});