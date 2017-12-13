function ViewModel() {
    var self = this;

    var tokenKey = 'accessToken';

    self.result = ko.observable();
    self.user = ko.observable();

    self.registerEmail = ko.observable();
    self.registerPassword = ko.observable();
    self.registerPassword2 = ko.observable();

    self.loginEmail = ko.observable();
    self.loginPassword = ko.observable();
    self.errors = ko.observableArray([]);

    self.userId = ko.observable();
    self.email = ko.observable();
    self.numberOfGuests = ko.observable();
    self.timeOfArrival = ko.observable();

    self.foods = ko.observableArray([]);
    self.paymentType = ko.observable();
    self.selectedFoods = ko.observableArray([]);
    self.creditCardNumber = ko.observable();
    self.cardHolderName = ko.observable();
    self.amount = ko.observable();
    self.cvc = ko.observable();
    self.paymentTypes = ['Cash', 'Credit Card'];
    
    self.userId = ko.observable();

    self.addFoods = function (food) {
        self.selectedFoods.push(food);
    }

    self.loadFoods = function () {
        $.ajax({
            type: 'GET',
            url: '/api/foods'
        }).done(function (data) {
            for (var i = 0; i < data.length; i++) {
                self.foods.push(data[i]);
            }
        }).fail(function () { alert('error') });
    }
    
    self.loadFoods();
    
    function showError(jqXHR) {

        self.result(jqXHR.status + ': ' + jqXHR.statusText);

        var response = jqXHR.responseJSON;
        if (response) {
            if (response.Message) self.errors.push(response.Message);
            if (response.ModelState) {
                var modelState = response.ModelState;
                for (var prop in modelState) {
                    if (modelState.hasOwnProperty(prop)) {
                        var msgArr = modelState[prop]; // expect array here
                        if (msgArr.length) {
                            for (var i = 0; i < msgArr.length; ++i) self.errors.push(msgArr[i]);
                        }
                    }
                }
            }
            if (response.error) self.errors.push(response.error);
            if (response.error_description) self.errors.push(response.error_description);
        }
    }

    self.callApi = function () {
        self.result('');
        self.errors.removeAll();

        var token = sessionStorage.getItem(tokenKey);
        var headers = {};
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }

        $.ajax({
            type: 'GET',
            url: '/api/values',
            headers: headers
        }).done(function (data) {
            self.result(data);
        }).fail(showError);
    }

    self.register = function () {
        self.result('');
        self.errors.removeAll();

        var data = {
            Email: self.registerEmail(),
            Password: self.registerPassword(),
            ConfirmPassword: self.registerPassword2()
        };

        $.ajax({
            type: 'POST',
            url: '/api/Account/Register',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function (data) {
            self.result("Done!");
        }).fail(showError);
    }

    self.login = function () {
        self.result('');
        self.errors.removeAll();

        var loginData = {
            grant_type: 'password',
            username: self.loginEmail(),
            password: self.loginPassword()
        };

        $.ajax({
            type: 'POST',
            url: '/Token',
            data: loginData
        }).done(function (data) {
            self.user(data.userName);
            // Cache the access token in session storage.
            sessionStorage.setItem(tokenKey, data.access_token);
        }).fail(showError);
    }

    self.logout = function () {
        // Log out from the cookie based logon.
        var token = sessionStorage.getItem(tokenKey);
        var headers = {};
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }

        $.ajax({
            type: 'POST',
            url: '/api/Account/Logout',
            headers: headers
        }).done(function (data) {
            // Successfully logged out. Delete the token.
            self.user('');
            sessionStorage.removeItem(tokenKey);
        }).fail(showError);
    }

    self.createReservation = function (){
        var data = {
            UserId: self.userId(),
            Email: self.email(),
            NumberOfGuests: self.numberOfGuests(),
            password: self.timeOfArrival()
        };

        $.ajax({
            type: 'POST',
            url: '/api/reservations',
            data: data
        }).done(function (data) {
            alert('Reservation Created');
            self.userId('');
            self.email('');
            self.numberOfGuests('');
            self.timeOfArrival('');
        });
    }

    self.createFoodOrder = function () {
        var order = {
            Foods: self.selectedFoods(),
            Payment : {
                PaymentType: self.paymentType(),
                Amount: self.amount(),
                CreditCardNumber: self.creditCardNumber(),
                CVC: self.cvc(),
                CardHolderName: self.cardHolderName()
            }
        };

        $.ajax({
            type: 'POST',
            url: '/api/foodorders',
            data: order
        }).done(function (data) {
            alert('Order Placed');
            self.selectedFoods.removeAll();
            self.paymentType('');
            self.amount('');
            self.creditCardNumber('');
            self.cvc('');
            self.cardHolderName('');
            });

    }

}

var app = new ViewModel();
ko.applyBindings(app);