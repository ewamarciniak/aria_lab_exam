describe ("My Calculator", function() {
    it("should add two integers", function() {
        expect (Calculator.addition(33, 20)).toBe(53);
    })

    it("should be able to deal with strings when adding", function() {
        expect (function() {
            Calculator.addition("hello")
        }).toThrow(new Error("Not a number"));
    })

    it("should subtract one integer from another", function() {
        expect (Calculator.subtraction(40,19)).toBe(21);
    })

    it("should be able to deal with strings when subtracting", function() {
        expect (function() {
            Calculator.subtraction("hello")
        }).toThrow(new Error("Not a number"));
    })

    it("should multiply one two integers", function() {
        expect (Calculator.multiplication(20,5)).toBe(100);
    })

    it("should be able to deal with strings when multiplying", function() {
        expect (function() {
            Calculator.multiplication("hello")
        }).toThrow(new Error("Not a number"));
    })
    it("should divide one integer by another", function() {
        expect (Calculator.division(20,5)).toBe(4);
    })

    it("should be able to deal with strings when dividing", function() {
        expect (function() {
            Calculator.division("hello")
        }).toThrow(new Error("Not a number"));
    })

    it("should be able to deal with dividing by 0", function() {
        expect (function() {
            Calculator.division(20, 0)
        }).toThrow(new Error("Cannot divide by 0"));
    })
})
