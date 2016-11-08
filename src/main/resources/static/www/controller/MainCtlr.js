/**
 * Created by jjenkins on 10/25/2016.
 */
/**
 * This module show angularjs used for http and dom manipulation
 */
(function (){
    "use strict";
    //get the module that is defined in the html page example: ng-app="crudPage"
    var app = angular.module("crudPage");
    /**
     *THis is a controller in angular js
     * @param $scope the dom
     * @param userDetails custom service that makes the http calls
     * @param $anchorScroll allows for scrolling to the tagged dom id
     * @param $location allows to set an identifier in the URL bar
     * @constructor
     */
    var MainCtlr = function($scope, userDetails, $log , $anchorScroll, $location){
        $scope.username = "angular";
        $scope.message = "Angular Viewer";

        //search function implementation
        $scope.search = function(username){
            $log.info("Searching for " + username);
                //custom service to get a parse the http response
            console.log(username);
                userDetails.getUser(username).then(function(data)
            {
                $scope.user = data;
                console.log(data);
                //set the hash(url fragment identifier)
                $location.hash('userDetails');
                //scroll to the hashed ID appending to the URL
                $anchorScroll('userDetails');
            })
        };
    };
    //declare the app controller and assign it a function
    //sets up my controller name and assigns it the named function as the cotnroller
    app.controller("MainCtlr",MainCtlr);
}());