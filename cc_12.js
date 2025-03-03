// Task1- Business Dashboard- DOM Element Selection and Creation
const dashboardId = document.getElementById("dashbaord");
const dashboardQuery = document.querySelector("#dashboard");
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenue-card");
revenueCard.innerHTML = `
<h3>Revenue</h3>
<p>$0</p>
`;
dashboardId.appendChild(revenueCard);

// Task2- Updating Dashboard Metrivs- Working with Ndelists and Arrays.
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = [...metricCards];
metricCardsArray.forEach(card => {
    card.innertext += ' - Updated';
    card.style.backgroundColor = 'orange';
});