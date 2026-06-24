const createbtn = document.querySelector("#create");
const formdiv = document.querySelector(".form");
const closebtn = document.querySelector("#close");
const form = document.querySelector("form");
const productdiv = document.querySelector(".products");

const productarr = [];
var updateIndex = null;

let ui = () => {

  productdiv.innerHTML = "";
  productarr.forEach((elem,index) => {
    productdiv.innerHTML += `<div class="product-card">
            <div class="img">
                <img 
                src="${elem.imgurl}" 
                alt="">
            </div>
            <div class="text">
                <h3>Name : ${elem.productNmae}</h3>
                <p>Description : ${elem.description}</p>
                <p>Price : ${elem.price}</p>
            </div>

            <div class="btns">
                <button onclick="updateproduct('${elem.productNmae}')" id="update">update</button>
                <button onclick="deleteProduct(${index})" id="delete">delete</button>
            </div>
           </div>`
  })


}

createbtn.addEventListener("click", () => {
  formdiv.style.display = "flex";
})

closebtn.addEventListener("click", () => {
  formdiv.style.display = "none";
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let productNmae = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let imgurl = event.target[3].value;

  if (productNmae.trim() === "" || description.trim() === "" || price.trim() === "" || imgurl.trim() === "") {
    alert("please fill all the fields");
    return;
  }
  let obj = {
    productNmae,
    description,
    price,
    imgurl,
  };

   if (updateIndex !== null) {
    productarr[updateIndex]=obj;
    updateIndex=null;
  }
  else {
      productarr.push(obj);
  }
  ui();
  form.reset();
  formdiv.style.display = "none";
})

let updateproduct = (name) => {
  formdiv.style.display = "flex";
  let pro = productarr.find((ele) => ele.productNmae === name);
  updateIndex = productarr.findIndex((ele) => ele.productNmae === name);
  form[0].value = pro.productNmae;
  form[1].value = pro.description;
  form[2].value = pro.price;
  form[3].value = pro.imgurl;
} 

let deleteProduct = (index) => {
  productarr.splice(index,1);
  ui();
}