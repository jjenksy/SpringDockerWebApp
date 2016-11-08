/**
 * Created by jjenkins on 10/29/2016.
 */

(function (){
    "use strict";
    //get the module that is defined in the html page example: ng-app="crudPage"
    var app = angular.module("crudPage");

    var TestCtlr = function($scope, httpRequester, $log){


        //search function implementation
        $scope.search = function(searchData){
            //custom service to get a parse the http response

            httpRequester.getHttpRequest(searchData).then(function(data)
            {
                $scope.http = data;
                console.log(data);
            })
        };
    };
    //declare the app controller and assign it a function
    app.controller("TestCtlr",TestCtlr);
}());