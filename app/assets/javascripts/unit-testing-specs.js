//Test for CustomerCtrl
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

///Test for TotalChargesFactory
describe('Factory: TotalChargesFactory', function () {

    beforeEach(module('TravelManagement'));
    var fct;

    beforeEach(inject(function (_TotalChargesFactory_) {
        fct = _TotalChargesFactory_;
    }));

    it('should return Total Charges 400.00, Regular Customer && Not loyal customer', function () {
      var data = {"type":"Regular", "charges":20,"distanceTravelled":20};
       expect(fct.calculate(data)).toEqual("400.00");
    });

    it('should return Total Charges 380.00, Regular Customer && loyal customer', function () {
      var data = {"type":"Regular", "charges":20,"lps":true,"distanceTravelled":20};
       expect(fct.calculate(data)).toEqual("380.00");
    });

    it('should return Total Charges 340.00, Corporate Customer && No of employees more than 10', function () {
      var data = {"type":"Corporate", "charges":20,"employeeNumbers":20,"distanceTravelled":20};
       expect(fct.calculate(data)).toEqual("340.00");
    });

    it('should return Total Charges 360.00, Corporate Customer && No of employees less than 10', function () {
      var data = {"type":"Corporate", "charges":20,"employeeNumbers":5,"distanceTravelled":20};
       expect(fct.calculate(data)).toEqual("360.00");
    });
  
});

///Test for CustomerFactory
describe('Factory: CustomerFactory', function () {

    beforeEach(module('TravelManagement'));
    var fct;

    beforeEach(inject(function (_CustomerFactory_) {
        fct = _CustomerFactory_;
    }));

    it('should return Array object', function () {
       expect(fct).toEqual([]);
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



