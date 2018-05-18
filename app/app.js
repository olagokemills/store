"use strict";

angular
    .module('ngApp', ['ui.router', 'ngSanitize', 'app.controllers', 'app.services'])
    .config(configuration)
    .constant('baseurl', '//localhost:9090/angularjs/store')
    .constant('apiurl', '//almondprojects.tk/demo/backend/')
    .run(run);
    
    run.$inject = ['$state', '$rootScope', 'baseurl'];

function run($state, $rootScope, baseurl)
{
    $rootScope.baseurl = baseurl;
}

function configuration($stateProvider, $urlRouterProvider, $locationProvider)
{
    // pages / angular states
    $urlRouterProvider.otherwise('/404');
    $stateProvider
        .state({
            name: 'Home',
            url: '/',
            templateUrl: 'app/view/Home.html',
            controller: 'mainCtrl',
            controllerAs: 'main'
        })
        .state({
            name: 'posts',
            url: '/allposts',
            templateUrl: 'app/view/allposts.html',
            controller: 'postsCtrl',
            controllerAs: 'posts'
        })
        .state({
            name: 'Payments',
            url: '/allpayments',
            templateUrl: 'app/view/allpayments.html',
            controller: 'paymentsCtrl',
            controllerAs: 'payments'
        })
         .state({
            name: 'Products',
            url: '/allproducts',
            templateUrl: 'app/view/allproducts.html',
            controller: 'productsCtrl',
            controllerAs: 'products'
        }
        .state({
            name: 'Error',
            url: '/404',
            templateUrl: 'app/view/404.html',
        });
        
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}