// Page loads as a start of the game
$(document).ready(function () {
    //start of the game - start timer
    alert("Let's get R-E-A-D-Y👾!!!");
    $('form[name="quiz"]').hide();
    $("#ans").hide();




    $("#start").on('click', function () {
        $('form[name="quiz"]').show();
        $("#ans").hide();
        $("#start").hide();
        $("#cor").text("TBD");
        $("#inc").text("TBD");
        timeOut();
        timerStarts();

    });


});



//======VARIABLES========

var timeout = 0;
var time = 5;
var score = 0;
var inc = 0;
var numQs = 2;
var correctAns = [];



//===MAIN PROCESS=========================

function timeOut() {
    setTimeout(function () { alert("Session Expired"); }, 60000);
};

function timerStarts() {
    intervalId = setInterval(count, 1000)
};

function count() {
    //time = 30;
    time--;
    if (time === 0) {
        alert("Time is up");
        clearInterval(intervalId);
    };
    $("#timing").text(time);
};






$("#submit").on('click', function () {
    alert("Submitting");
    onSubmit();
})


function onSubmit() {
    var score = 0;
    var numQs = 2;
    var correctAns = ['a', 'b'];
    var inc = 0;

    //var q1 = document.forms['quiz']['q1'].value;

    for (var i = 0; i < correctAns.length; i++) {
        var qx = document.forms["quiz"]["q" + (i + 1)].value;
        //alert("i:" + i + " qx:" + qx + " cAns:" + correctAns[i]);
        if ((!!correctAns[i]) && (qx) == correctAns[i]) {
            score++;
            $("#cor").text(score);
            $("#inc").text(2 - score);
        }
        else {
            $("#inc").text(2 - score);
        }
    }
    return false;
}