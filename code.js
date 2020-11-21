$(document).ready(function () {
    // Object containing the validation rules
    var rules =
        {
            salary: {
                required: true,
                digits: true,
                min: 1,
                max: 1000000000
            },
            credit: {
                required: true,
                digits: true,
                min: 300,
                max: 850
            },
            job: {
                required: true,
                digits: true,
                min: 1,
                max: 1200
            }
        };

    // Object containing the error messages
    var messages =
        {
            salary: {
                required: "Please enter your salary",
                digits: "Only numbers please",
                min: "Your salary may be low, but it's not $0!",
                max: "Why are you even applying for a loan"
            },
            credit: {
                required: "Please enter your credit score",
                digits: "Only numbers please",
                min: "Please enter a score between 300 and 850",
                max: "Please enter a score between 300 and 850"
            },
            job: {
                required: "Please enter your time employed in months",
                digits: "Only numbers please",
                min: "A minimum of 1 month is required",
                max: "Please enter a realistic number"
            }
        };


    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: rules,
            messages: messages
        }
    );


    function runMyProgram() {
        // Get the value of the salary form (yes or no)

        var salary = parseFloat($("#salary").val());

        var credit = parseFloat($("#credit").val());

        var months = parseFloat($("#job").val());

        if (salary >= 40000)
        {
            if (credit >= 600)
            {
                $("#output").text("Loan Approved!");
            }
            else
            {
                if (months > 12)
                {
                    $("#output").text("Loan Approved!");
                }
                else
                {
                    $("#output").text("Loan Denied");
                }
            }
        }
        else
        {
            if (credit >= 600)
            {
                if (months > 12)
                {
                    $("#output").text("Loan Approved!");
                }
                else
                {
                    $("#output").text("Loan Denied");
                }
            }
            else
            {
                $("#output").text("Loan Denied");
            }
        }
    }
});