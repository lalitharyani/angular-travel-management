//Test for CustomerCtrl
describe('Controller: CustomerCtrl', function () {

  var CustomerCtrl, scope, location, rootScope, customerID;

  beforeEach(module('TravelManagement'));

  beforeEach(inject(function ($location, $controller, $rootScope) {
    location = $location;
    rootScope = $rootScope;
    scope = $rootScope.$new();
    CustomerCtrl = $controller('CustomerCtrl', {
      $scope: scope
    });
  }));


  it('should create new customer Corporate Type on calling save button', function(){
   
    scope.newCustomer = {"name":"test","age":23,"desc":"testing","mobileNo":1213213190,"type":"Corporate","pickupDate":"12/12/2015","charges":20,"employeeNumbers":20,"distanceTravelled":20,
  "totalCharges":"340.00"}
    
    scope.addCustomer();
    scope.$apply();
    expect(location.path()).toBe('/');
    
  });

  it('should create new customer Regular Type on calling save button', function(){
   
    scope.newCustomer = {"name":"test","age":23,"desc":"testing","mobileNo":1213213190,"type":"Regular","pickupDate":"12/12/2015","charges":20,"distanceTravelled":20,
    "totalCharges":"340.00"}
    
    scope.addCustomer();
    scope.$apply();
    expect(location.path()).toBe('/');
    
  });


  it('should update existing Corporate customer on calling save button Update', function(){
   
    scope.newCustomer = {"name":"testCorporate","age":23,"desc":"testing","mobileNo":1213213190,"type":"Regular","pickupDate":"12/12/2015","charges":20,"distanceTravelled":20,
    "totalCharges":"340.00"}

    customerID = 1;
    
    scope.updateCustomer(customerID);
    scope.$apply();
    expect(location.path()).toBe('/');
    
  });

  it('should update existing Regular customer on calling save button Update', function(){
   
    scope.newCustomer = {"name":"testRegular","age":23,"desc":"testing","mobileNo":1213213190,"type":"Regular","pickupDate":"12/12/2015","charges":20,"distanceTravelled":20,
    "totalCharges":"340.00"}

    customerID = 2;
    
    scope.updateCustomer(customerID);
    scope.$apply();
    expect(location.path()).toBe('/');
    
  });
  

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
