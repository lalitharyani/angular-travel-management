describe('Controller: CustomerCtrl', function () {

  var CustomerCtrl, scope;

  beforeEach(module('TravelManagement'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerCtrl = $controller('CustomerCtrl', {
      $scope: scope
    });
  }));
  

  it('should reset customer fields on calling reset button', function(){
   
    scope.newCustomer = {"name":"test","age":23,"desc":"testing","mobileNo":1213213190,"type":"Corporate","pickupDate":"12/12/2015","charges":20,"employeeNumbers":20,"distanceTravelled":20,
    "id":1,"totalCharges":"340.00"}
    
    scope.reset();
    scope.$digest();
    expect(scope.newCustomer).toEqual({});
    
  });   


});


/*describe('Controller: HomeCtrl', function () {

  var HomeCtrl, scope, customerId, index, window;

  beforeEach(module('TravelManagement'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    var windowMock = { confirm: function(msg) { return true } }
    HomeCtrl = $controller('HomeCtrl', {$scope: scope, $window: windowMock});
  }));


  it('Delete a customer', function(){
    
    customerId = 1;
    index = 0;
    
    scope.deleteCustomer();
    scope.$digest();
    expect(scope.newCustomer).toEqual({});
    
  });   


});*/



