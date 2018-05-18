"use strict";

  angular
    .module('app.services', [])
    .factory('apiCall', apiCall);

    apiCall.$inject = ['$http', 'apiurl'];

function apiCall($http, apiurl)
{
    var apicaller = {};
    apicaller.get = get;
    apicaller.post = post;
    return apicaller;

    function get(url, callback)
    {
        $http
            .get(apiurl + url)
            .then(function (data, status, headers, config) {
                callback(data);
            }).error(function (data, status, headers, config) {
                callback(data);
            });
    }

    function post(url, formdata, callback)
    {
        $http
        .post(apiurl + url, transformRequest(formdata), {
            transformRequest: angular.identity,
        })
        .then(function (data, status, headers, config) {
            callback(data);
        }).error(function (data, status, headers, config) {
            callback(data);
        });

        function transformRequest(obj){
            var $res = [];
            for(var key in obj)
            {
                $res.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return $res.join('&');
        }
    }
}