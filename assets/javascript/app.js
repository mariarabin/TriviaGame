// Page loads as a start of the game
$(document).ready(function () {
    //start of the game - start timer
    alert("Let's get R-E-A-D-Y👾!!!");
    timeOut();
    $('form[name="quiz"]').hide();
    $("#yourAns").hide();
    $("#ans").hide();
    $("#answers").hide();




    $("#start").on('click', function () {
        $('form[name="quiz"]').show();
        $("#ans").hide();
        $("#answers").hide();
        $("#start").hide();
        $("#cor").text("0");
        $("#inc").text("0");
        timerStarts();
    });

    $("#submit").on('click', function () {
        alert("Submitting");
        onSubmit();
        //$("input[type=radio]").disabled = true;
        $('form[name="quiz"]').attr("disabled", true);
        //$("quiz :input").attr("disabled", true);
        typeAns();

    })


});



//======VARIABLES========

var timeout = 0;
var time = 60;
var score = 0;
var inc = 0;
var numQs = 10;
var correctAns = [];



//===MAIN PROCESS=========================

function timeOut() {
    setTimeout(function () { alert("Session Expired"); }, 120000);
};

function timerStarts() {
    intervalId = setInterval(count, 1000)
};

function count() {
    time--;
    if (time == -1) {
        alert("Time is up");
        clearInterval(intervalId);
        return;
    };
    $("#timing").text(time);
};







function onSubmit() {
    var score = 0;
    var numQs = 10;
    var correctAns = ['a', 'a', 'b', 'c', 'c', 'a', 'b', 'a', 'b', 'b'];
    var inc = 0;
    var userAns = [];

    //var q1 = document.forms['quiz']['q1'].value;

    for (var i = 0; i < correctAns.length; i++) {
        var qx = document.forms["quiz"]["q" + (i + 1)].value;
        //$("#yourAnswers").push(qx);
        //alert("i:" + i + " qx:" + qx + " cAns:" + correctAns[i]);
        //$("#yourAnswers").((i + 1) + ". " + qx);
        if ((!!correctAns[i]) && (qx) == correctAns[i]) {
            score++;
            $("#cor").text(score);
            $("#yourAns").show("Your Answers:");

            //alert(qx);
            $("#ans").show("Answers:");
            $("#answers").show(answers);
            clearInterval(intervalId);
        }
        else {
            $("#inc").text(numQs - score);
            $("#ans").show("Answers:");
            $("#answers").show(answers);
            clearInterval(intervalId);
        }
    }
    return false;
}


function typeAns() {
    $("#yourAnswers").append(qx);
};