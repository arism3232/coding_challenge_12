// Task1- Business Dashboard- DOM Element Selection and Creation
const dashboard = document.getElementById("dashbaord");
const dashboardQuery = document.querySelector("#dashboard");
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenue-card");
revenueCard.innerHTML = `<h3>Revenue</h3><p>$0</p`;
dashboard.appendChild(revenueCard);

// Task2- Updating Dashboard Metrivs- Working with Ndelists and Arrays.
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = [...metricCards];
metricCardsArray.forEach(card => {
    card.innertext += ' - Updated';
    card.style.backgroundColor = 'orange';
});

// Task3- Dynamic Inventory Managemnt- Adding and Removing Items
function addProductItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const newProductItem = document.createElement("li");
    newProductItem.setAttribute("class", "product-item");
    newProductItem.setAttribute("data-product", productName);
    newProductItem.innerText = productName;
    newProductItem.addEventListener("click", () => {
        removeProductItem(newProductItem)
    });
    inventoryList.appendChild(newProductItem)
};
function removeProductItem(item) {
    const inventoryList = document.getElementById("inventoryList")
    inventoryList.removeChild(item)
};
document.getElementById("addProductButton").addEventListener("click", () => {
    addProductItem("New Product")
});
addProductItem("Lamp")
addProductItem("Light Bulb")

// Task4- Business Customer Section- Handling Event Bubblinf
const customerSection = document.getElementById("customerSection")
customerSection.addEventListener("click", () => {
    console.log("Selected as an option")
});
const customerCards = document.querySelectorAll(".customer-card");
customerCards.forEach((card) => {
    card.style.backgroundColor = "green"
    card.addEventListener("click", (event) => {
        console.log("Selected as an option")
    });
});