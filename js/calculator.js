var Calculator = (function() {

    // Private stuff up here
    var converterValue = 2.2;

    // Public methods here
    return {
        addition: function (input_value_1,input_value_2 ) {
            var num_1 = parseInt(input_value_1);
            var num_2 = parseInt(input_value_2);

            if (isNaN(num_1) == true || isNaN(num_2) == true) {
                throw new Error("Not a number");
            }
            num = num_1 + num_2;
            return num;
        },

        subtraction: function (input_value_1,input_value_2 ) {
            var num_1 = parseInt(input_value_1);
            var num_2 = parseInt(input_value_2);

            if (isNaN(num_1) == true || isNaN(num_2) == true) {
                throw new Error("Not a number");
            }
            num = num_1 - num_2;
            return num;
        },

        multiplication: function (input_value_1,input_value_2 ) {
            var num_1 = parseInt(input_value_1);
            var num_2 = parseInt(input_value_2);

            if (isNaN(num_1) == true || isNaN(num_2) == true) {
                throw new Error("Not a number");
            }
            return num = num_1 * num_2;
        },

        division: function (input_value_1,input_value_2 ) {
            var num_1 = parseInt(input_value_1);
            var num_2 = parseInt(input_value_2);

            if (isNaN(num_1) == true || isNaN(num_2) == true) {
                throw new Error("Not a number");
            }
            if (num_2 == 0){
                throw new Error("Cannot divide by 0");
            }
            num = num_1 / num_2;
            return Math.round(num);
        }

    }

}())