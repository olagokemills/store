"use strict";

  angular
    .module('app.controllers')
    .controller('productsCtrl', productsCtrl);

function productsCtrl($scope, apiCall)
{
    var products = this;

    products.myProducts = getProducts;

     function getProducts()
    {
        apiCall
        .get(
            'products', 
            function(response)
            {
                products.data = response.data.output.response;
            }
        );
    }

     payments.myPayments = getPayments;

     function getPayments()
    {
        apiCall
        .get(
            'payments', 
            function(response)
            {
                payments.data = response.data.output.response;
            }
        );
    }
    
}
