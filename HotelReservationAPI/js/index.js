
// url of the web service
var uri = 'http://localhost:62873/api/products';
var uri2 = 'http://localhost:62873/api/customers';

// Here, we get the list of all products by calling the url
$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(uri)
        .done(function (data) {
            // On success, 'data' contains a list of products.
            $.each(data, function (key, item) {
                // Add a list item for the product.
                $('<li>', { text: formatItem(item) }).appendTo($('#products'));
            });
        });

    $.getJSON(uri2)
        .done(function (data) {
            // On success, 'data' contains a list of products.
            $.each(data, function (key, item) {
                // Add a list item for the product.
                $('<li>', { text: item.UserId }).appendTo($('#customers'));
            });
        });
});

function formatItem(item) {
    return item.Name + ': $' + item.Price;
}

// here, we get a product by giving the product id

function find() {
    var id = $('#prodId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            $('#product').text(formatItem(data));
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#product').text('Error: ' + err);
        });
}

function deleteProduct() {
    var id = $('#prodId').val();
    $.ajax({
        url: uri + '/' + id,
        type: 'DELETE',
        success: function (result) { alert("Deleted") }
    });
}
