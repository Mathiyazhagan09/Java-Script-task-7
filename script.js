const api = document.querySelector(".api");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
      });