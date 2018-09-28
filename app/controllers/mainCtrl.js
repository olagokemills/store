"use strict";

  angular
    .module('app.controllers', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope, apiCall)
{

    var main = this;

     main.myPayments = getPayments;

     function getPayments()
    {
        apiCall
        .get(
            'payments', 
            function(response)
            {
                main.data = response.data.output.response;
            }
        );
    }

     main.myProducts = getProducts;

     function getProducts()
    {
        apiCall
        .get(
            'products', 
            function(response)
            {
                main.data = response.data.output.response;
            }
        );
    }

}
