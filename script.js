function bookNow() {
    alert("Booking feature coming soon!");
}

function confirmBooking(event) {
    event.preventDefault();
    document.getElementById("confirmation").innerText = "Booking confirmed!";
}