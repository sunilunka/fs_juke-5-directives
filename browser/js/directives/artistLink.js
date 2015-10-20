app.directive('artistLink', function() {
	return {
		restrict: "E",

		scope: {
			artist: "="
		},
		templateUrl: "/templates/artistLink.html",
	}
})