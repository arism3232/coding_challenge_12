// Task1- Business Dashboard- DOM Element Selection and Creation
const dashboard = document.getElementById("dashbaord"); 
const dashboardQuery = document.querySelector("#dashboard"); // Using both .getElementById and .querySelector to select dashboard container.
const revenueCard = document.createElement("div"); // Creating new div using createElement to represent metric card. 
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenue-card"); // Using setAttribute to assign a class to new element.
revenueCard.innerHTML = `<h3>Revenue</h3><p>$0</p`; // Populating card with a title and palceholder value.
dashboard.appendChild(revenueCard); // Appending new metric card using appendChild.

// Task2- Updating Dashboard Metrivs- Working with Ndelists and Arrays.
const metricCards = document.querySelectorAll(".metric-card"); // Using .querySelectorAll to select all elements with class metric-card.
const metricCardsArray = [...metricCards]; // Converting result into array.
metricCardsArray.forEach(card => {
    card.innertext += ' - Updated';
    card.style.backgroundColor = 'orange';
}); // Using array method to update each card's inner text.

// Task3- Dynamic Inventory Managemnt- Adding and Removing Items
function addProductItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const newProductItem = document.createElement("li"); // Writing function that creates a new element representing a product. 
    newProductItem.setAttribute("class", "product-item");
    newProductItem.setAttribute("data-product", productName); // Using setAttribute to add class or custom data attribute.
    newProductItem.innerText = productName;
    newProductItem.addEventListener("click", () => {
        removeProductItem(newProductItem)
    }); // Writing seperate function that removes specific li when clicked. 
    inventoryList.appendChild(newProductItem) // Adding new product item to inventory list.
};
function removeProductItem(item) {
    const inventoryList = document.getElementById("inventoryList")
    inventoryList.removeChild(item)
}; // Removing clicked item. 
document.getElementById("addProductButton").addEventListener("click", () => {
    addProductItem("New Product")
}); 
addProductItem("Lamp")
addProductItem("Light Bulb") // New product examples. 

// Task4- Business Customer Section- Handling Event Bubblinf
const customerSection = document.getElementById("customerSection")
customerSection.addEventListener("click", () => {
    console.log("Selected as an option")
}); // Creating a nested structure.
const customerCards = document.querySelectorAll(".customer-card");
customerCards.forEach((card) => {
    card.addEventListener("click", (event) => {
        console.log("Selected as an option")
        event.stopPropagation();
    }); 
});