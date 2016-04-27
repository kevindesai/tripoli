angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $rootScope, $http, $state, $ionicModal, $ionicScrollDelegate, $timeout, $ionicPopover, $ionicSlideBoxDelegate) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  
  

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


// Category Control
.controller('CategoryCtrl', function($scope,$http,$state, $stateParams, $ionicNavBarDelegate, $ionicSideMenuDelegate ) {
            var request = $http({
                method: "post",
                url: "http://www.pacificitsolution.com/tripoli/api/api.php",
                data: $.param({
                    "form_type": "all_category",
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            });
            request.success(
                    function (html) {
                        if(html.length > 0){
                            $scope.categoryData = html;
                        }
                    }
            );
     
     
     
     
		$scope.changeAllCategory = function () {
            $scope.filter.Tourish = $scope.filter.Dining = $scope.filter.Petrol = $scope.filter.cat;
   		}
	$scope.createFixed = function() {
      $state.go("app.search");
	}; 
       
})

// Category Details Control
.controller('CategoryDetailsCtrl', function($scope) {
	
})

// Map Control
.controller('MapCtrl', function($scope, $state, $cordovaGeolocation,$ionicNavBarDelegate, $ionicSideMenuDelegate) {
	

})

// Map Location Control
.controller('MapLocationCtrl', function($scope, $state, $ionicNavBarDelegate, $ionicSideMenuDelegate) {
	
 
})


.controller('PlaylistsCtrl', function($scope ,$state, $ionicNavBarDelegate, $ionicSideMenuDelegate) {
  $scope.playlists = [
    { title: 'Tourish Locations', id: 1 },
    { title: 'Dining Facilities', id: 2 },
    { title: 'Petrol', id: 3 },
    { title: 'ATMs', id: 4 },
    { title: 'Bus/Taxi Stops', id: 5 },
    { title: 'Hospital & Pharmacies', id: 6 },
	{ title: 'Wife Areas', id: 7 },
	{ title: 'Public Restrooms', id: 8 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams, $ionicNavBarDelegate, $ionicSideMenuDelegate) {
	
});


