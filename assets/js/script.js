// Bus seat data (each bus starts with 20 seats)
let buses = localStorage.getItem("buses") ? JSON.parse(localStorage.getItem("buses")) : {
    bus1: 20,
    bus2: 20,
    bus3: 20
};

// Function to get current date and time
function getCurrentDateTime() {
    let now = new Date();
    return now.toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS AM/PM
}

// Function to check available seats
function checkAvailability() {
    let selectedBus = document.getElementById("busSelect").value;
    let availableSeats = buses[selectedBus] || 0;
    let timestamp = getCurrentDateTime();

    document.getElementById("availableSeats").textContent = `Available Seats: ${availableSeats}`;
    document.getElementById("timestamp").textContent = `Last checked: ${timestamp}`;
}

// Function to reserve 5 seats
function reserveSeats() {
    let selectedBus = document.getElementById("busSelect").value;

    if (buses[selectedBus] && buses[selectedBus] >= 5) {
        buses[selectedBus] -= 5;
        localStorage.setItem("buses", JSON.stringify(buses)); // Save to local storage
        let reservationTime = getCurrentDateTime();
        document.getElementById("message").textContent = `Reservation Successful! (${reservationTime})`;
        checkAvailability(); // Update seat count
    } else {
        document.getElementById("message").textContent = "Not enough seats available.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkAvailability(); // Show initial seat count

    document.getElementById("checkButton").addEventListener("click", checkAvailability);
    document.getElementById("reserveButton").addEventListener("click", reserveSeats);
});

