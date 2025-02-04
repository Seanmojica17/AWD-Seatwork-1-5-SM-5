// Bus seat data (each bus starts with 20 seats)
let buses = JSON.parse(localStorage.getItem("buses")) || {
    bus1: 20,
    bus2: 20,
    bus3: 20
};

// Function to check available seats
function checkAvailability() {
    let selectedBus = document.getElementById("busSelect").value;
    let availableSeats = buses[selectedBus];

    document.getElementById("availableSeats").textContent = `Available Seats: ${availableSeats}`;
}

// Function to reserve 5 seats
function reserveSeats() {
    let selectedBus = document.getElementById("busSelect").value;

    if (buses[selectedBus] >= 5) {
        buses[selectedBus] -= 5;
        localStorage.setItem("buses", JSON.stringify(buses)); // Save to local storage
        document.getElementById("message").textContent = "Reservation Successful!";
        checkAvailability(); // Update seat count
    } else {
        document.getElementById("message").textContent = "Not enough seats available.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkAvailability(); // Show initial seat count

    document.querySelector("button:nth-of-type(1)").addEventListener("click", checkAvailability);
    document.querySelector("button:nth-of-type(2)").addEventListener("click", reserveSeats);
});

