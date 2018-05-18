"use strict";

  angular
    .module('app.controllers')
    .controller('carsCtrl', carsCtrl);

function carsCtrl($scope, apiCall)
{
    var cars = this;
    cars.createCar = createCars;

     cars.myCars = getCars;

     function getCars()
    {
        apiCall
        .get(
            'accounts', 
            function(response)
            {
                cars.data = response.data.output.response;
            }
        );
    }

    function createCars()
    {
        apiCall
        .post(
            'accounts',
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
