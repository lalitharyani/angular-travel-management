app.controller('CustomerCtrl', ['$scope', 'CustomerFactory', '$location', '$routeParams', function($scope, CustomerFactory, $location, $routeParams){

	$scope.customers = CustomerFactory;  // Array that will hold all customers      
  $scope.failed = ''; 
  $scope.lpsShow = false;
  $scope.employeeDisabled = true;
  $scope.new_label = "Add Customer";
  $scope.showButtons = true;

  if($routeParams.id){
  	$scope.new_label = "Customer Details";
    $scope.showButtons = false;
    
    //get the selected customer from localstorage
    var newCustomer = localStorage.getItem("customer"+$routeParams.id);
    if(newCustomer){
      $scope.newCustomer = angular.fromJson(newCustomer);
      ///convert back date into object
      $scope.newCustomer["pickupDate"] = new Date($scope.newCustomer["pickupDate"]);

      showMoreDetails($scope.newCustomer["type"]);

    }

  }
  
  ////this function works for Regular / Corporate Customer type radio buttons
  $scope.customerType= function(type){

  	showMoreDetails(type);

  };


	// add New Customer
  $scope.addCustomer= function() {  

    // If all required fields are complete 
    if( !$scope.addCustomerform.$error.required ) { 

      // Remove warning
      $scope.failed = '';

      var newRequest = {};

      // Store request data in an object         
      newRequest = $scope.newCustomer;
      newRequest["id"] = localStorage.length+1;
           
      //If "distance travelled" filled then calculate the total charges
      if(newRequest["distanceTravelled"]){
        newRequest["totalCharges"] = calculateTotalCharges(newRequest);
      }

      // Add Request object to localStorage as the value to a new property
      localStorage.setItem( 'customer' + (localStorage.length+1), JSON.stringify(newRequest) );

      // Add new Customer object to the model by adding it to the Customers array
      $scope.customers.push( newRequest );

      // Reset the inputs values for the form
      $scope.newCustomer = {};
      
      $location.path('/');

    } else {
        // Add warning
        $scope.failed = 'All fields must be filled.';
    }

  };

  //reset all form fields
  $scope.reset= function(){
  	$scope.newCustomer = {};
  }

  ///calculate totalCharges on the basis of regaular / corporate customer
  function calculateTotalCharges(request){
    
    //total charges should be per/km charge * disctance travelled
  	total_charges = request["charges"] * request["distanceTravelled"]
  	discount = 0.0;

  	if(request["type"] == "Regular"){

  		//if loyal customer then 5% flat discount
  		if(request["lps"]){
  			discount = (total_charges * 5) / 100
  		}

  	}else if(request["type"] == "Corporate"){

  		if(request["employeeNumbers"] && request["employeeNumbers"] > 10){

  			//if mora than 10 employees than flat 15% discount
  			discount = (total_charges * 15) / 100

  		// otherwise 10% discount
  		}else{
  			discount = (total_charges * 10) / 100
  		}

  	}
 
  	return (total_charges - discount).toFixed(2);

  }
 
  //show / hide regular / corporate fields
  function showMoreDetails(type){
  	$scope.lpsShow = false;
	  $scope.employeeDisabled = true;
	  if(type == "Regular"){
	  	$scope.lpsShow = true;

	  }else if(type == "Corporate"){
	    $scope.employeeDisabled = false;
	  }

  }
  

}]);