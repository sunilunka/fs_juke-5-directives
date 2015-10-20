app.directive('albumsView', function(){

  return {

    restrict: "E",
    scope: {
      albums: "="

    },

    templateUrl: "/templates/albumsView.html",

    link: function(){

    }


  }

})