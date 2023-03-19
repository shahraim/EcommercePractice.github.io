let localDishes = [
  {
    id: "ld1",
    title: "Tasty Tikka",
    image: "/images/dish-1.png",
    price: "101.99",
    ratting: 4,
    quantity: 1,
  },
  {
    id: "ld2",
    title: "Tasty Pizza",
    image: "/images/dish-2.png",
    price: "32.99",
    ratting: 3,
    quantity: 1,
  },
  {
    id: "ld3",
    title: "Tasty Burger",
    image: "/images/dish-3.png",
    price: "20.99",
    ratting: 4,
    quantity: 1,
  },
  {
    id: "ld4",
    title: "Tasty Broast",
    image: "/images/dish-4.png",
    price: "140.99",
    ratting: 5,
    quantity: 1,
  },
  {
    id: "ld5",
    title: "Tasty Icecream",
    image: "/images/dish-5.png",
    price: "50.99",
    ratting: 2,
    quantity: 1,
  },
  {
    id: "ld6",
    title: "Tasty Boti",
    image: "/images/dish-6.png",
    price: "60.99",
    ratting: 4,
    quantity: 1,
  },
];
let cartCount = 0;
let selectedDish = [];
const addToCartBadge = document.getElementById("addToCartBadge");
const localDishesParent = document.getElementById("localDishesParent");
const cartformparent = document.getElementById("cartformparent");

// console.log(localDishesParent);

localDishes.map((item) => {
  localDishesParent.innerHTML += `
       <div class="box">
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
        <img src=${item.image} alt="dish-1" />
        <h3>${item.title}</h3>
        <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$${item.price}</span>
        <a class="btn" onclick="addToCartFunc(this.id)" id=${item.id} >add to cart</a>
        </div> 
        `;
});

// selectedDish.map((item) =>{
//     cartformparent.innerHTML += `
//     <div class="box">
//      <a href="#" class="fas fa-heart"></a>
//      <a href="#" class="fas fa-eye"></a>
//      <img src=${item.image} alt="dish-1" />
//      <h3>${item.title}</h3>
//      <div class="stars">
//      <i class="fas fa-star"></i>
//      <i class="fas fa-star"></i>
//      <i class="fas fa-star"></i>
//      <i class="fas fa-star"></i>
//      <i class="fas fa-star-half-alt"></i>
//      </div>
//      <span>$${item.price}</span>
//      <a class="btn" onclick="addToCartFunc(this.id)" id=${item.id} >add to cart</a>
//      </div>
//      `;

// })

const addToCartFunc = (DishId) => {
  //   console.log("ada da");
  //   console.log(DishId);
  //   console.log(addToCartDish);
  let addToCartDish = localDishes.find((item) => item.id === DishId);
  let checkItemExist = selectedDish.find((item) => item.id === DishId);
  if (checkItemExist) {
    let updatedItem = selectedDish.filter((item) => item.id !== DishId);
    checkItemExist.quantity = Number(checkItemExist.quantity) + 1;
    updatedItem.push(checkItemExist);
    console.log(selectedDish);
    selectedDish = updatedItem;
  } else {
    selectedDish.push(addToCartDish);
    console.log(selectedDish);
    addToCartBadge.innerText = Number(addToCartBadge.innerText) + 1;
  }
};

const carticonfunc = () => {
  cartformparent.innerHTML = `   <i onclick="finalclose()" class="fas fa-times" id="close1"></i>
  <h3 class="sub-heading">our dishes</h3>
  <h1 class="heading">popular dishes</h1>`;
  console.log("adad");
  selectedDish.map((item) => {
    cartformparent.innerHTML += `
    <div class="box-container" id="">
        
    <div class="box">
    <a href="#" class="fas fa-heart"></a>
    <a href="#" class="fas fa-eye"></a>
    <img src=${item.image} alt="dish-1" />
    <h3>${item.title}</h3>
    <div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
    </div>
    <span>$${item.price}</span>
    <span>${item.quantity}</span>
    <a class="btn" onclick="addToCartFunc(this.id)" id=${item.id} >add to cart</a>
    </div>
    </div>
     `;
  });
};
