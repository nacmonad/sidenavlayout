app.controller('sidebarController', 
	function($scope, $rootScope, $element, $timeout, $location, $anchorScroll) {
		$scope.bool=0;  //isclosed
		//$scope.isCollapsed=0;  //isclosed
		$scope.toggleOffset = 180;
		
		//scroller vars
		$scope.scrollLevel = 0;
		$scope.rows = ['row0','row1','row2','row3','row4'];

		$scope.toggleMenu = function () {
			$scope.bool = $scope.bool === 0 ? 1: 0;
			$scope.toggleOffset = (1-$scope.bool) * 180;
			//console.log( $($element.children()[0]).children()[1]  );
			
			// USE DIRECTIVES TO CHANGE DOM ELEMENTS i.e ng-class ?? 
			// this jquery selector is bananaz!  just to get keydown events from the body into the controller's scope... 
			$(".toggle").toggleClass("fa-chevron-left");
			$(".toggle").toggleClass("fa-chevron-right");
		}

		$scope.keyToggleEvent = function(e) {
			if ($scope.bool == 0 && (e.keyCode == 65 || e.keyCode == 37)) { $scope.toggleMenu(); }
			if ($scope.bool == 1 && (e.keyCode == 68 || e.keyCode == 39)) { $scope.toggleMenu(); }	
		}


		$scope.toggleCollapse = function(){
			//$scope.isCollapsed = $scope.isCollapsed === 0 ? 1: 0;
			$timeout(function() {
				$("#submenu1toggle").toggleClass("fa-chevron-down");
				$("#submenu1toggle").toggleClass("fa-chevron-up");
			}, 200);			
		}	


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