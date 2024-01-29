function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the paint and supplies:");
    cost = parseFloat(cost);

    if (cost > 100)
        cost *= 1.1;

    // Get a handle for the paint paragraph
    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    // Update total and return the new total
    return callback(totalCost + cost);
}

function addFloorCoverings(totalCost, callback) {
    let cost = prompt("Enter the cost for floor coverings:");
    cost = parseFloat(cost);

    if (cost < 500)
        cost -= 0.15 * cost;

    let floorCoveringsArea = document.querySelector(".floorCoverings");
    floorCoveringsArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;

    return callback(totalCost + cost);
}

const addFurniture = (totalCost, callback) => {
    let cost = prompt("Enter the cost for furniture:");
    cost = parseFloat(cost);

    if (cost < 500)
        cost -= 0.1 * cost;

    let furnitureArea = document.querySelector(".furniture");
    furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

    return callback(totalCost + cost);
}

const updateTotals = (cost) => {
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
}

let totalCost = 0;

totalCost = addPaintAndSupplies(totalCost, updateTotals);


totalCost = addFloorCoverings(totalCost, updateTotals);


totalCost = addFurniture(totalCost, updateTotals);
