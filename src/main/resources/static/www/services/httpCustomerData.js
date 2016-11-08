/**
 * Created by jjenkins on 11/1/2016.
 * This object is used to read the customer data from the database
 */

(function(){
    "use strict";
    var httpCustomerData = function($http, $log){
        /**
         * This method allows for custom searching based on the argument passed to it
         * so if I invoke getUser('findAll') it will get all my users from the data base
         * @param userName the argument to be passed to the get request
         */
        var getCustomerData = function(url){

            return $http.get(url)
                .then(function(response) {
                    //returns everything in the database
                    $log.info(response.data);
                    return response.data;
                }).catch(function(e){
                    //catch any exception thrown
                    $log.info(e);
                });
        };

        var getCustomerDataByID = function(url,id){

            //make sure it is an int
            var intID = parseInt(id);

            return $http.get(url+"/"+intID)
                .then(function(response) {
                    //returns everything in the database
                    $log.info(response.data);
                    return response.data;
                }).catch(function(e){
                    //catch any exception thrown
                    $log.info(e);
                });
        };

        /**
         * This method is for posting the data to my server
         * @param url the api url for the controller on the server
         * @param data the data to post
         */
        var setCustomerData = function (url, data) {

                //post the data
            $http.post(url,data).then(function(e){
                console.log(e);
            }).catch(function(e){
                console.log(e);
            });

        };



        return {
            getCustomerData:getCustomerData,
            setCustomerData:setCustomerData,
            getCustomerDataByID:getCustomerDataByID
        };


    };
    var module = angular.module('crudPage');
    //call the factory function to create the service
    module.factory("httpCustomerData", httpCustomerData);
}());