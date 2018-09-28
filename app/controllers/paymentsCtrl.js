"use strict";

  angular
    .module('app.controllers')
    .controller('paymentsCtrl', paymentsCtrl);

function paymentsCtrl($scope, apiCall)
{
    var payments = this;
    
    payments.createPayments = createPayments;

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

    function createPayments()
    {
        apiCall
        .post(
            'payments',
            {
                fname: "Keluba",
            },
            function(response)
            {
                alert(JSON.stringify(response.data.output));
            }
        );
    }
    
}
