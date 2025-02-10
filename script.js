document.addEventListener("DOMContentLoaded", function () {
    drawGraph();
    startClockAnimation();
});

function simulateDSP() {
    const algorithm = document.getElementById("algorithm").value;
    const coefficients = document.getElementById("coefficients").value.split(",").map(Number);
    let output = "";

    if (algorithm === "fir") {
        output = "FIR Filter Output: " + applyFIRFilter(coefficients);
    } else if (algorithm === "iir") {
        output = "IIR Filter Output: Simulated Response";
    } else if (algorithm === "fastconv") {
        output = "Fast Convolution Output: Computed Data";
    }

    document.getElementById("output").innerText = output;
    drawGraph();
}

function applyFIRFilter(coefficients) {
    return coefficients.map(c => c * 2).join(", ");
}

function drawGraph() {
    const canvas = document.getElementById("graphCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(20, canvas.height / 2);

    for (let i = 1; i <= 10; i++) {
        const x = (canvas.width / 10) * i;
        const y = canvas.height / 2 + (Math.sin(i) * 50);
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "#007bff";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function startClockAnimation() {
    let count = 0;
    setInterval(() => {
        document.getElementById("clock").innerText = "Clock Cycle: " + count;
        count++;
    }, 1000);
}
