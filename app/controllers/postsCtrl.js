"use strict";

  angular
    .module('app.controllers')
    .controller('postsCtrl', postsCtrl);

function postsCtrl($scope, apiCall)
{
    var posts = this;

    posts.myPosts = getPosts;

     function getPosts()
    {
        apiCall
        .get(
            'posts', 
            function(response)
            {
                posts.data = response.data.output.response;
            }
        );
    }
    
}
