angular.module('flapperNews')
.controller('PostsCtrl', ['$scope','$stateParams','posts', function($scope, $stateParams, posts){
//.controller('PostsCtrl', ['$scope','posts', 'post', function($scope, posts, post){
	$scope.post = posts.posts[$stateParams.id - 1];
	//$scope.post = post;

  $scope.addComment = function(){
      if($scope.body === ''){ return; }
      posts.addComment(post.id, {
          body: $scope.body,
          author: 'user'
      }).success(function(comment){
          $scope.post.comments.push(comment);
      });
      $scope.body = '';
  };


	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  posts.addComment(post.id, {
	    body: $scope.body,
	    author: 'user',
	  }).success(function(comment) {
	    $scope.post.comments.push(comment);
	  });
	  $scope.body = '';
	};

	$scope.incrementUpvotes = function(comment){
	  posts.upvoteComment(post, comment);
	};
}])
