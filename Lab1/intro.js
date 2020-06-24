
var mathLib = require(`./myMath`);

function init() {
    console.log("Intro");

    var res = mathLib.sum(21,21);
    console.log("Result: " + res);

    var smaller = mathLib.smaller(798878, 789797);
    console.log("Result: " + smaller);

    var greater = mathLib.greater(23,13,42);
    console.log("Result: " + greater);

    var multi = mathLib.multiply(10, 10);
    console.log("Result: " + multi);

    var div = mathLib.divide(1,3); // if user tries to devide by 0, show an error, return 0
    console.log("Result: "+ div);

    var e = mathLib.isEven(99);
    console.log("Result: " + e);

    var o = mathLib.isOdd(111);
    console.log("Result: " + o);
}





init();