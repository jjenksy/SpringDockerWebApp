/**
 * Created by jjenkins on 10/25/2016.
 */
/**
 * Created by jjenkins on 10/25/2016.
 */

/**
 * This is my main Javascript file for the web front end controller
 */
(function() {
    'use strict';
    /**
     * App.js is the main module for this angular application
     * @type {angular.Module} the setter for the angular application
     */
    //add the ngRoute as a param for routing
    var app = angular.module("crudPage",["ngRoute"]);

    //config for app runs this when app is initially created
    app.config(function($routeProvider){

        //describe the route when user navigates to /main
        $routeProvider
            .when('/',{
                templateUrl:"angularTemplates/index.html"
            })
            .when('/main',{
                templateUrl:"angularTemplates/main.html",
                controller: "MainCtlr", //determines the controller for the templateURL vie
                controllerAs:'main'
            })
            .when('/test',{
                templateUrl:"angularTemplates/test.html",
                controller: "TestCtlr", //determines the controller for the templateURL view
                controllerAs:'test'
            })//@otherwise if you dont know the url
            .when('/products',{
                templateUrl:"angularTemplates/products.html",
                controller: "ProductListCtrl", //determines the controller for the templateURL view
                controllerAs:'vm'
            })  .when('/blog',{
            templateUrl:"angularTemplates/blog.html",
            controller: "BlogController" //determines the controller for the templateURL view

        })  .when('/newAddress',{
                templateUrl:"angularTemplates/addressEntry.html",
                controller: "AddressEntryCtrl", //determines the controller for the templateURL view
                controllerAs:'newAddress'
            })//@otherwise if you dont know the url
            .otherwise({redirectTo:"/"})

    });




})();

