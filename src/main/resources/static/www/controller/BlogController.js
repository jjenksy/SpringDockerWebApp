/**
 * Created by jjenkins on 11/1/2016.
 */
(function () {
    'use strict';
    var app = angular.module("crudPage");

    var BlogController = function ($location,$scope, httpBlogData) {

        $scope.ticketName = "Angular Heading";
        $scope.message = "Using Angular.js Controllers and Directives";

        /**
         * Gets the current customer info. as soon as the page is visited
         */
        (function getCustomer(){
            httpBlogData.getBlogData("/api/blog").then(function(data)
            {
                $scope.blog = data;
            });
        }());
        //the click button calls a function to navigate to a new route
        $scope.go = function (path) {

            $location.path( path );
        };
        /**
         * This is called when the value of the select box changes
         * @param item
         */
        $scope.changedValue = function() {

            httpBlogData.getBlogDataByID("/api/blog",$scope.selectedCustomer)
                .then(function(data){
                    console.log(data);
                })
        }

    };




    //tell angular about my controller
    app.controller("BlogController",BlogController);
}());