let my_donuts = [];
let till_total = 0;

const visualList = document.getElementById("displayBox");
const cashField = document.getElementById("custMoney");

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
            '<li style="text-align:center;color:#888;">Empty Cart</li>';
        return;
    }

