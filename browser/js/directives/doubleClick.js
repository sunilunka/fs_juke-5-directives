app.directive('doubleClick', function (PlayerFactory){
	return {
		restrict: 'A', 
		scope: {
			thisIsANamedFunction: '&'
	
		},
		link: function (scope, element) {
			element.on('dblclick', function () {
				scope.thisIsANamedFunction();
				scope.$digest();
			})
		}
	}
})