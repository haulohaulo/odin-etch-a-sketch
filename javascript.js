let container = document.querySelector(".container");
let btn = document.querySelector("button");



btn.addEventListener("click", (e) => {
    let requestedSize = prompt("Grid size?");
    while (requestedSize < 2 || requestedSize > 100) {
        requestedSize = prompt("Grid size?");
    }
    generateGrid(requestedSize);
})



function generateGrid(oneSideSize) {
    let totalSquares = oneSideSize ** 2;
    for (i = 1; i <= totalSquares; i++) {
        let square = document.createElement("div");
        let sqauresPerSide = 650 / oneSideSize;  //650 px is the restricted length for each row
        
        square.className = "square";
        square.style.width = `${sqauresPerSide}px`;
        square.style.height = `${sqauresPerSide}px`;
        container.appendChild(square);

        square.addEventListener('mouseenter', (e) => {
            square.style.backgroundColor = "yellow";
        });

        square.addEventListener('mouseleave', (e) => {
            square.style.backgroundColor = "blue";
        });
    };
}










