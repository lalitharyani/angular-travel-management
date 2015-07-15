app.factory('TotalChargesFactory', function () {
 return {

    calculate: function(request) {

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

  };
});