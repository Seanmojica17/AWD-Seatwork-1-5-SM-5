function reserveSeat(busID) {
    const seatElement = document.getElementById(busId + '-seats');
    let availableSeats = purseInt(SVGAnimateTransformElement.textContent);

    if (availableSeats >= 5) {
        availableSeats -= 5;
        SVGAnimateTransformElement.textContent = availableSeats;
        alert('Successfully reserved 5 seats on ' + busID);
    } else {
        alert('Not enough seats available on ' + busID);
    }
}