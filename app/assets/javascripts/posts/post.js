angular.module('flapperNews')
.factory('posts', ['$http', function($http){
	var o = {
		posts: []
	};

	o.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };

  o.create = function(post) {
	  return $http.post('/posts.json', post).success(function(data){
	    o.posts.push(data);
	  });
	};

	o.upvote = function(post) {
	  return $http.put('/posts/' + post.id + '/upvote.json')
	    .success(function(data){
	      post.upvotes += 1;
	    });
	};

	o.get = function(id){
		return $http.get('/posts/' + id).then(function(res){
			return res.data;
		});
	};

// esto lo pongo a ver si me soluciona el problema de mostrar el post

	o.addComment = function(id, comment) {
	  return $http.post('/posts/' + id + '/comments.json', comment);
	};

	o.upvoteComment = function(post, comment) {
	  return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
	    .success(function(data){
	      comment.upvotes += 1;
	    });
	};

// cierra el otro commentario

	return o;
}])