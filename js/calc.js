'use-strict';
$(function(){

  var calculator = new Calculator();

});

// your code here!

function Calculator() {
  this.equals();
}

Calculator.prototype.equals = function() {
  $("#equals").click(function() {
    var num1 = parseInt($("#number1").val());
    var num2 = parseInt($("#number2").val());
    var oper = $("#operation").val();

    if (isNaN(num1) || isNaN(num2)) {
      $("#result").text("Sorry, one of those is not a valid number!");
    }
    else if(oper.match(/[+-\/\*]/gi) === null || oper.match(/[+-\/\*]/gi).length > 1) {
      $("#result").text("Sorry, not a valid operation!");
    }
    else {
      $("#result").text(eval(num1 + oper + num2));
    }
  });
}
