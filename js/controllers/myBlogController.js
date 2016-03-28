app.controller('myBlogController', 
	function($rootScope, $scope) {
		//switch the ng-style
		$rootScope.homeActive = 0;
		console.log("blog controller loaded");


		//scroller vars
		$scope.rows = ["row0", "row1","row2","row3"]

		$scope.scrollUp = function () {
			$scope.scrollLevel >= 1 ? ( $scope.scrollLevel--, $scope.scrollTo($scope.rows[$scope.scrollLevel]) ) : console.log("can't scroll up no mo");
			
		}
		$scope.scrollDown = function () {
			$scope.scrollLevel <= $scope.rows.length-2 ? ($scope.scrollLevel++, $scope.scrollTo($scope.rows[$scope.scrollLevel]) ) : console.log("can't scroll down yo");
			
		}

		$scope.scrollTo = function (scrollLocation) {
			//$location.hash(scrollLocation);
			//$anchorScroll(scrollLocation);
	        $.smoothScroll({
	          scrollTarget: '#' + scrollLocation	
	        });
		}
});