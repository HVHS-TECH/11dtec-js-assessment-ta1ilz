let my_donuts = [];
let till_total = 0;

const visualList = document.getElementById("displayBox");
const cashField = document.getElementById("custMoney");

updateCartDisplay();

function grabItem(chosenName, itemCost) {
    let found = false;

    for (let i = 0; i < my_donuts.length; i++) {
        if (my_donuts[i].title === chosenName) {
            my_donuts[i].amount++;
            found = true;
            break;
        }
    }

    if (!found) {
        my_donuts.push({
            title: chosenName,
            cost: itemCost,
            amount: 1
        });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    visualList.innerHTML = "";
    till_total = 0;

    if (my_donuts.length === 0) {
        visualList.innerHTML =
            "<li style='text-align:center;color:#888;'>Empty Cart</li>";
        return;
    }

    for (let i = 0; i < my_donuts.length; i++) {
        const item = my_donuts[i];
        const lineCost = item.cost * item.amount;
        till_total += lineCost;

        const row = document.createElement("li");
        row.className = "cart-item";
        row.innerHTML =
            "<span>" +
            item.title +
            " (x" +
            item.amount +
            ")</span><span>$" +
            lineCost.toFixed(2) +
            "</span>";

        visualList.appendChild(row);
    }
}

function runTotal() {
    cashField.value = "$" + till_total.toFixed(2);
}

function clearCart() {
    my_donuts = [];
    till_total = 0;

    document.getElementById("custName").value = "";
    cashField.value = "";

    updateCartDisplay();

    document.getElementById("receipt").style.display = "none";
    document.getElementById("receiptItems").innerHTML = "";
}

function sendOrder(e) {
    e.preventDefault();

    if (my_donuts.length === 0) {
        alert("Please add at least one doughnut.");
        return;
    }

    document.getElementById("receipt").style.display = "block";

    document.getElementById("receiptName").textContent =
        document.getElementById("custName").value;

    document.getElementById("receiptMoney").textContent =
        till_total.toFixed(2);

    document.getElementById("receiptTotal").textContent =
        till_total.toFixed(2);

    document.getElementById("receiptChange").textContent =
        "0.00";

    let receiptHTML = "";

    for (let i = 0; i < my_donuts.length; i++) {
        receiptHTML +=
            "<p>" +
            my_donuts[i].amount +
            " × " +
            my_donuts[i].title +
            "</p>";
    }

    document.getElementById("receiptItems").innerHTML = receiptHTML;

    alert("Order submitted successfully!");
}

function sendOrder(e) {
    e.preventDefault();

    // Check if cart is empty
    if (my_donuts.length === 0) {
        alert("Please add at least one doughnut.");
        return;
    }

    // Get customer name
    const customerName = document.getElementById("custName").value;

    if (customerName.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    