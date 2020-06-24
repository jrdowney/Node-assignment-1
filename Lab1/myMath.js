module.exports = {
    sum: function(num1, num2){
        return num1 + num2;
    },
    smaller: function(num1, num2){
        // return the smallest (lower)
        
        if (num1 < num2) 
            return num1;// {} are not required if only one in if statement
        
        return num2; // no need for else
    },
    greater: function(num1, num2, num3){

        if (num1>num2&& num1>num3) return num1;
        if (num2> num1 && num2 > num3) return num2;
            return num3; // no need for else
        
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function (num1, num2){
        if (num2 == 0) {
        console.log("Error, Cannot devide by zero");
        return 0;
        }
        return (num1/num2);
    },
    isEven: function(num){
        var res = num % 2; //devide by 2, get the residue (not the result). % modulus (mod) operator
        return res == 0; // return either true or false

        
        // return (num % 2) == 0;
    },
    isOdd: function(num){
        return (num % 1) == 0
    }

};