// url of the web service
var uri = 'http://localhost:62873/api/customers';

function registerCustomer() {
    var userId = $('#userId').val();
    var name = $('#name').val();
    var address = $('#address').val();
    var phone = $('#phone').val();
    var email = $('#email').val();

    $.post(uri,
        {
            UserId: userId,
            Name: name,
            Address: address,
            Phone: phone,
            Email: email
        }
    , function (data, status) {
        if (status == "success") {
            alert("Registered " + data + status);
            window.location.href = "http://localhost:62873/index.html";
        }
    }
    )
}
