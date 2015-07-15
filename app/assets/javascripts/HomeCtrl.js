app.controller('HomeCtrl', ['$scope', 'CustomerFactory', '$window', function($scope, CustomerFactory, $window){

	CustomerFactory = [];
  // For each item in local storage...
  for( customer in localStorage ) {

    // Parse the json string and add it to CustomerFactory factory
    var newCustomer = angular.fromJson( localStorage[customer] );
    if(newCustomer["id"]){
      CustomerFactory.push( newCustomer );
    }
  }

  $scope.customers = CustomerFactory;
  

  //delete customer from system
  $scope.deleteCustomer = function(customerId, index) {

    if (confirm("Are you sure want to delete this customer ?")) {
      // Delete item from localStorage & customers array
      localStorage.removeItem("customer"+customerId);
	    $scope.customers.splice(index, 1);
	    
	  }
  };



}]);