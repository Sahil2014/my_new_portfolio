$(function () {
    $("#mathcode").hide();
    $("#factcode").hide();
    $("#palcode").hide();
    $("#fbcode").hide();
    $("#soafcode").hide();
   

    $("#showmathcode").on("click", function () {
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code")
        }
        else if ($(this).text() == "Hide Code") { $(this).text("Show Code") }
        $("#mathcode").toggle();

    });
    $("#showfactcode").on("click", function () {
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code")
        }
        else if ($(this).text() == "Hide Code") { $(this).text("Show Code") }
        $("#factcode").toggle();

    });
    $("#showpalcode").on("click", function () {
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code")
        }
        else if ($(this).text() == "Hide Code") { $(this).text("Show Code") }
        $("#palcode").toggle();

    });
    $("#showsoafcode").on("click", function () {
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code")
        }
        else if ($(this).text() == "Hide Code") { $(this).text("Show Code") }
        $("#soafcode").toggle();

    });
    $("#showfbcode").on("click", function () {
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code")
        }
        else if ($(this).text() == "Hide Code") { $(this).text("Show Code") }
        $("#fbcode").toggle();

    });


    var [num1, num2, num3, num4, num5] = [0, 0, 0, 0, 0];
    var fact = 0;
    $("#mthadd").on("click", function () {
        if (getinput()) {

            sum = add5num(num1, num2, num3, num4, num5);
            let msg = `the sum of five number is ${sum}`;
            $("#mthOutput").text(msg);
        }
    });
    $("#mthmul").on("click", function () {
        if (getinput()) {

            mul = mul5num(num1, num2, num3, num4, num5);
            let msg = `the product of five number is ${mul}`;
            $("#mthOutput").text(msg);
        }

    });
    $("#mthavg").on("click", function () {
        if (getinput()) {

            avg = add5num(num1, num2, num3, num4, num5) / 5;
            avg = avg.toPrecision(3);
            let msg = `the mean of five number is ${avg}`;
            $("#mthOutput").text(msg);
        }
    });
    $("#mthmin").on("click", function () {
        if (getinput()) {

            min = Math.min(num1, num2, num3, num4, num5);
            let msg = `the smallest of those five number is ${min}`;
            $("#mthOutput").text(msg);
        }
    });
    $("#mthmax").on("click", function () {
        if (getinput()) {

            max = Math.max(num1, num2, num3, num4, num5);
            let msg = `the largest of those five number is ${max}`;
            $("#mthOutput").text(msg);
        }
    });
    $("#runall").on("click", function () {
        if (getinput()) {
            sum = add5num(num1, num2, num3, num4, num5);
            avg = add5num(num1, num2, num3, num4, num5) / 5;
            max = Math.max(num1, num2, num3, num4, num5);
            mul = mul5num(num1, num2, num3, num4, num5);
            min = Math.min(num1, num2, num3, num4, num5);
            let msg = `the sum of five number is ${sum}</br>the product of five number is ${mul}</br > the mean of five number is ${avg}</br > the smallest of those five number is ${min}</br > the largest of those five number is ${max} `;
            $("#mthOutput").html(msg);
        }
    });
    $("#clrall").on("click", function () {
        clrall();
    });
    $("#closemath").on("click", function () {
        //if ($("#showmathcode").text() == "Show Code") {
        //    $("#showmathcode").text("Hide Code")
        //}
        //else if ($("#showmathcode").text() == "Hide Code") { $("#showmathcode").text("Show Code") }
        clrall();
        $("#mthOutput").val("");
        $("#mathcode").hide();

    });


    function getinput() {

        num1 = parseFloat($("#n1").val());
        num2 = parseFloat($("#n2").val());
        num3 = parseFloat($("#n3").val());
        num4 = parseFloat($("#n4").val());
        num5 = parseFloat($("#n5").val());
        let valid = num1 + num2 + num3 + num4 + num5;

        if (isNaN(valid)) {
            alert("enter numbers only");
            clrall();
        } return !isNaN(valid)


    }
    function clrall() {
        $("#n1").val("")
        $("#n2").val("")
        $("#n3").val("")
        $("#n4").val("")
        $("#n5").val("")
        $("#mthOutput").text("")
    }
    function add5num(num1, num2, num3, num4, num5) {
        return num1 + num2 + num3 + num4 + num5;

    }
    function mul5num(num1, num2, num3, num4, num5) {
        return num1 * num2 * num3 * num4 * num5;

    }
    $('input.numsOnly').on('keypress', function (key) {
        if (key.charCode < 45 || key.charCode > 57) {
            return false;
        }
    });
    $("#facto").on("click", function () {


        fact = factorial();
        let msg = `Factorial is: ${fact} `
        $("#factoutput").text(msg);
    })
    $("#clrfact").on("click", function () {

        $("#factinput").val("")
        $("#factoutput").text("")

    });
    $("#closefact").on("click", function () {
        //if ($("#showfactcode").text() == "Show Code") {
        //    $("#showfactcode").text("Hide Code")
        //}
        //else if ($("#showfactcode").text() == "Hide Code") { $("#showfactcode").text("Show Code") }
        $("#factinput").val("")
        $("#factoutput").text("")
        $("#factcode").hide();
    });


    function factorial() {

        nu = parseFloat($("#factinput").val());

        fact = 1;
        for (i = 1; i <= nu; i++) {
            fact *= i;

        }
        return fact;
    }
    $("#clrpalindrome").on("click", function () {

        $("#palinput").val("")
        $("#paloutput").text("")

    });
    $("#closepal").on("click", function () {
        //if ($("#showpalcode").text() == "Show Code") {
        //    $("#showpalcode").text("Hide Code")
        //}
        //else if ($("#showpalcode").text() == "Hide Code") { $("#showpalcode").text("Show Code") }
        $("#palinput").val("")
        $("#paloutput").text("")
        $("#palcode").hide();
    });
    $("#palindrome").on("click", function () {
        var palin = $("#palinput").val().toLowerCase();
        palin = palin.replace(/\s/g, "");

        repalin = palin.split("").reverse("").join("");
        let msg = "";
        if (palin == repalin) {
            msg = 'it is a palindrome'
        } else { msg = `it is not a palindrome` }
        $("#paloutput").text(msg)
    });
    $("#fbout").on("click", function () {
        fbnum1 = parseInt($("#fbinput1").val());
        fbnum2 = parseInt($("#fbinput2").val());
        let outa = [];
        for (i = 1; i <= 100; i++) {
            if (i % fbnum1 == 0 && i % fbnum2 == 0) {
                outa.push('<span class="fizzbuzz">FizzBuzz </span>');
            } else if (i % fbnum1 == 0) {
                outa.push('<span class="fizz">Fizz</span>');
            } else if (i % fbnum2 == 0) {
                outa.push('<span class="buzz">Buzz</span>');
            } else { outa.push(i); }
        }
        out = outa.join(' ');

        $("#fboutput").html(out);
    });
    $("#clrfb").on("click", function () {

        $("#fbinput1").val("")
        $("#fbinput2").val("")
        $("#fboutput").html("")

    });
    $("#closeb").on("click", function () {
        //if ($("#showpalcode").text() == "Show Code") {
        //    $("#showpalcode").text("Hide Code")
        //}
        //else if ($("#showpalcode").text() == "Hide Code") { $("#showpalcode").text("Show Code") }
        $("#fbinput1").val("")
        $("#fbinput2").val("")
        $("#fboutput").html("")
        $("#fbcode").hide();
    });
    $("#soafsearch").on("click", function () {

        let array = new Array();
        array.push(parseInt($("#soafi1").val()));
        array.push(parseInt($("#soafi2").val()));
        array.push(parseInt($("#soafi3").val()));
        array.push(parseInt($("#soafi4").val()));
        array.push(parseInt($("#soafi5").val()));
        array.push(parseInt($("#soafi6").val()));



        let k = parseInt($("#ki").val());
        let soaftext=''
        for (i = 0; i < array.length; i++) {
            check = k - array[i];
            for (j = i + 1; j < array.length - i; j++) {
                if (check == array[j]) {
                    soaftext = `The number ${k} was found by adding ${array[i]} and ${array[j]}`;
                    $("#soafoutput").text(soaftext);
                    return;
                }
            }
        }
        if (soaftext === '') {
            soaftext = `The number ${k} cannot be found by adding any two numbers of your given input`;
            $("#soafoutput").text(soaftext);
        }
    });
    $("#clrsoaf").on("click", function () {

        $("#soafi1").val("");
        $("#soafi2").val("");
        $("#soafi3").val("");
        $("#soafi4").val("");
        $("#soafi5").val("");
        $("#soafi6").val("");
        $("#ki").val("");
        $("#soafoutput").text("");
    });
    $("#closesoaf").on("click", function () {
        //if ($("#showpalcode").text() == "Show Code") {
        //    $("#showpalcode").text("Hide Code")
        //}
        //else if ($("#showpalcode").text() == "Hide Code") { $("#showpalcode").text("Show Code") }
        $("#soafi1").val("");
        $("#soafi2").val("");
        $("#soafi3").val("");
        $("#soafi4").val("");
        $("#soafi5").val("");
        $("#soafi6").val("");
        $("#ki").val("");
        $("#soafoutput").text("");
        $("#soafcode").hide();
    });
});