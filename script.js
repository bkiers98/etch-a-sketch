const gridField = document.querySelector(".grid-field");
const divider = 16;

for(let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.setAttribute("class", "column");
    gridField.appendChild(column);

    for(let j = 0; j < 16; j++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        column.appendChild(row);
    }
};