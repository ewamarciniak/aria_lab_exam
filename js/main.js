window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};


$(document).ready(function() {
    var operator;
    var total1;
    var total2;

    $("#one").click(function() {
        $("#input_field").val(1);
        if (total1){
            total2=1;
        }else{
            total1=1;
        }
    });
    $("#two").click(function() {
        $("#input_field").val(2);
        if (total1){
            total2=2;
        }else{
            total1=2;
        }
    });
    $("#three").click(function() {
        $("#input_field").val(3);
        if (total1){
            total2=3;
        }else{
            total1=3;
        }
    });
    $("#four").click(function() {
        $("#input_field").val(4);
        if (total1){
            total2=4;
        }else{
            total1=4;
        }
    });
    $("#five").click(function() {
        $("#input_field").val(5);
        if (total1){
            total2=5;
        }else{
            total1=5;
        }
    });
    $("#six").click(function() {
        $("#input_field").val(6);
        if (total1){
            total2=6;
        }else{
            total1=6;
        }
    });
    $("#seven").click(function() {
        $("#input_field").val(7);
        if (total1){
            total2=7;
        }else{
            total1=7;
        }
    });
    $("#eight").click(function() {
        $("#input_field").val(8);
        if (total1){
            total2=8;
        }else{
            total1=8;
        }
    });
    $("#nine").click(function() {
        $("#input_field").val(9);
        if (total1){
            total2=9;
        }else{
            total1=9;
        }
    });
    $("#zero").click(function() {
        $("#input_field").val(0);
        if (total1){
            total2=0;
        }else{
            total1=0;
        }
    });
    $("#point").click(function() {
        $("#input_field").val('.');
    });

    $("#divide_by").click(function() {
        operator ='/';
    });

    $("#multiply_by").click(function() {
        operator ='*';
    });

    $("#plus").click(function() {
        operator ='+';
    });
    $("#minus").click(function() {
        operator ='-';
    });

    $("#clear").click(function() {
        $("#input_field").val('');
        total1=null;
        total2=null;
        operator=null;
        /*clear the values */
        console.log(operator);
        console.log(total1);
        console.log(total2);
    });

    $("#equals").click(function() {
        switch (operator){
            case "+":
                $("#input_field").val(Calculator.addition(total1, total2));
                break;
            case "-":
                $("#input_field").val(Calculator.subtraction(total1, total2));
                break;
            case "*":
                $("#input_field").val(Calculator.multiplication(total1, total2));
                break;
            case "/":
                $("#input_field").val(Calculator.division(total1, total2));
                break;
            default : alert("Cannot calculate");
        }
    });

});