// Giả lập "database"
const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    oldPrice: 160,
    newPrice: 120,
    discount: "-40%",
    rating: 5,
    reviews: 88,
    image: "g-92-2-500-x-500-10.png"
  },
  {
    name: "AK-900 Wired Keyboard",
    oldPrice: 1160,
    newPrice: 960,
    discount: "-35%",
    rating: 4,
    reviews: 75,
    image: "ak-900-01-500-x-500-10.png"
  },
];

// Gắn vào DOM
const productContainer = document.getElementById("product-list");
//Hien thi tat ca san pham trong danh sach
products.forEach(product => {
  const productHTML = `
    <div class="cart-with-flat-discount">
      <a href="index.html">
        <div class="frame-570">
          <div class="discount-percent">
            <div class="discount">${product.discount}</div>
          </div>
          <div class="frame-611">
            <img class="product-img" src="${product.image}" />
          </div>
        </div>
        <div class="frame-569">
          <div class="product-name">${product.name}</div>
          <div class="frame-567">
            <div class="new-price">$${product.newPrice}</div>
            <div class="old-price">$${product.oldPrice}</div>
          </div>
          <div class="frame-566">
            <img class="five-star" src="${product.rating >= 5 ? 'five-star0.svg' : 'four-star0.svg'}" />
            <div class="star">(${product.reviews})</div>
          </div>
        </div>
      <a>
    </div>
  `;
  productContainer.innerHTML += productHTML;
});


//Tao hieu ung scroll khi xem san pham
const productList = document.getElementById("product-list");
const scrollAmount = 300; // px

document.querySelector(".icons-arrow-left a").addEventListener("click", (e) => {
    e.preventDefault();
    productList.scrollLeft -= scrollAmount;
});

document.querySelector(".icons-arrow-right a").addEventListener("click", (e) => {
    e.preventDefault();
    productList.scrollLeft += scrollAmount;
});



//Xem tat ca phan loai
const categories = [
  { name: "Phones", icon: "bx bx-mobile-alt", link: "index.html" },
  { name: "Laptops", icon: "bx bx-laptop", link: "index.html" },
  { name: "Cameras", icon: "bx bx-camera", link: "index.html" },
  { name: "Headphones", icon: "bx bx-headphone", link: "index.html" },
  { name: "Smartwatches", icon: "bx  bx-wrist-watch-alt", link: "index.html" },
];

const categoryContainer = document.getElementById("category-container");

// Xoa mau cu neu co
categoryContainer.innerHTML = "";

categories.forEach(cat => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "categoryBrowse";

    categoryDiv.innerHTML = `
        <a href="${cat.link}">
        <div class="category-name">${cat.name}</div>
        <div class="category-image"><i class='${cat.icon}'></i></div>
        </a>
    `;

    categoryContainer.appendChild(categoryDiv);
});



//////////


const products2 = [
  {
    name: "Small BookSelf",
    price: 360,
    rating: 5,
    reviews: 65,
    image: "sam-moghadam-khamseh-l-7-m-qs-hl-a-u-unsplash-10.png"
  },
  {
    name: "Modern Lamp",
    price: 120,
    rating: 4,
    reviews: 42,
    image: "modern-lamp.png"
  },
  {
    name: "Wooden Chair",
    price: 220,
    rating: 5,
    reviews: 88,
    image: "wooden-chair.png"
  },
  {
    name: "Wooden Chair",
    price: 220,
    rating: 5,
    reviews: 88,
    image: "wooden-chair.png"
  }
];


const productList2 = document.getElementById("product-list2");
productList2.innerHTML = ""; // Xóa trước khi thêm

products2.forEach(product => {
  productList2.innerHTML += `
    <div class="cart">
      <a href="index.html">
        <div class="cart2">
          <div class="frame-6122">
            <img class="product-img" src="${product.image}" />
          </div>
        </div>
        <div class="frame-569">
          <div class="product-name">${product.name}</div>
          <div class="frame-567">
            <div class="new-price">$${product.price}</div>
          </div>
          <div class="frame-566">
            <img class="five-star" src="${product.rating >= 5 ? 'five-star3.svg' : 'four-star.svg'}" />
            <div class="star">(${product.reviews})</div>
          </div>
        </div>
      </a>
    </div>
  `;
});
  

