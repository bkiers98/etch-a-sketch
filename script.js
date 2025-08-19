const startButton = document.querySelector("#start");
const gridField = document.querySelector(".grid-field");
let sideLength;

startButton.addEventListener("click", () => {
    sideLength = Number(prompt("Enter a number to determine the side length of the grid"));
    if(sideLength > 100) {
        sideLength = Number(prompt("Please enter a number less than 100"));
    };

    gridField.innerHTML = "";

    for(let i = 0; i < sideLength; i++) {
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        gridField.appendChild(column);

        for(let j = 0; j < sideLength; j++) {
            const row = document.createElement("div");
            row.setAttribute("class", "row");
            row.addEventListener("mouseenter", () => {
                row.setAttribute("class", "row-hovered");
            });
            column.appendChild(row);
        }
    };

});




