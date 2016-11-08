/**
 * Created by jjenkins on 11/1/2016.
 */
(function () {
    "use strict";
    var app = angular.module("crudPage");


    var AddressEntryCtrl = function ($scope, httpCustomerData) {
        
        //setup my register button click event
        $scope.addCustomer = function () {
            //take the input and make a javascript object out of them
            var data = {
                customerName:$scope.customerName,
                address:$scope.address,
                zip:$scope.zip,
                city:$scope.city,
                country:$scope.country
            };

            //use the post method to make a new customer entry
            httpCustomerData.setCustomerData("/api/customer/addCustomer",data);
            
        };

        /*
         * This method finds all the users and updats the view with the list
         * it will run everytime the page is visited this querys the database and returns all the customers there in
         */
        //todo make a view to diplay all the current customers
        (function findAllCustomers(){

            httpCustomerData.getCustomerData("/api/customer/findAll").then(function(data)
            {
                $scope.customers = data;
                console.log(data);
            });

        }());
    };



    //tell angular about my controller
    app.controller("AddressEntryCtrl", AddressEntryCtrl);
}());