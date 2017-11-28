// url of the web service
var uri = 'http://localhost:62873/api/foodorders';

function makeReservation() {
    var userId = $('#userId').val();
    var mobileNumber = $('#mobileNumber').val();
    var numberOfGuests = $('#numberOfGuests').val();
    var timeOfArrival = $('#timeOfArrival').val();


    $.post(uri,
        {
            UserId: userId,
            MobileNumber: mobileNumber,
            NumberOfGuests: numberOfGuests,
            TimeOfArrival: timeOfArrival
        }
    , function (data, status) {
        if (status == "success") {
            alert("Reservation created " + data + status);
            window.location.href = "http://localhost:62873/index.html";
        }
    }
    )
}
