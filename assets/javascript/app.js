// Page loads as a start of the game
$(document).ready(function () {
    $('form[name="quiz"]').hide();


    //start of the game - start timer
    //alert("Let's get R-E-A-D-Y👾!!!");

    $("#yourAns").hide();
    $("#ans").hide();
    $("#answers").hide();



    $("#start").on('click', function () {
        timeOut();
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
        $('form[name="quiz"]').attr("disabled", true);
        //$("quiz :input").attr("disabled", true);
        //$("input[type=radio]").disabled = true;
        typeAns();

    })

});



//======VARIABLES========

var timeout = 0;
var time = 60;
var score = 0;
var inc = 0;
var numQs = 10;
var correctAns = ['a', 'a', 'b', 'c', 'c', 'a', 'b', 'a', 'b', 'b'];




//===MAIN PROCESS=========================

function timeOut() {
    setTimeout("pageRedirect()", 120000);
    //disableRadioButtons();
    //startPage();


};

function pageRedirect() {
    window.location.replace("https://mariarabin.github.io/TriviaGame/blankpage.html");
}


function timerStarts() {
    intervalId = setInterval(count, 1000)
};


function count() {
    time--;
    if (time == -1) {
        alert("Time is up");
        clearInterval(intervalId);
        onSubmit();
        return;
    };
    $("#timing").text(time);
};



function disableRadioButtons() {
    $("#start").hide();
    for (var i = 0; i < correctAns.length; i++) {
        for (var j = 1; j < 4; j++) {
            //document.getElementById("q" + (i + 1) + "" + j).disabled = true;
            const radioBtnId = ("#q" + (i + 1) + "" + j);
            $(radioBtnId)[0].disabled = true;
            //console.log(Object.getOwnPropertyNames($(radioBtnId)));
            //console.log(Object.getOwnPropertyNames($(radioBtnId)[0]));
            //console.log($(radioBtnId)[0]);
            //$(radioBtnId)[0].disabled = true;
            //console.log($(radioBtnId)[0].disabled);
            //console.log(Object.getOwnPropertyNames($(radioBtnId)));
        }
    }
}


function onSubmit() {
    var score = 0;
    var numQs = 10;

    var inc = 0;
    var userAns = [];

    //var q1 = document.forms['quiz']['q1'].value;
    //$("input[type=radio]").enable = true;
    //$('input').prop('disabled', true);

    for (var i = 0; i < correctAns.length; i++) {
        disableRadioButtons();
        var qx = document.forms["quiz"]["q" + (i + 1)].value;
        //alert(qx);
        $("#yourAnswers").html(qx);
        //alert("i:" + i + " qx:" + qx + " cAns:" + correctAns[i]);
        //$("#yourAnswers").((i + 1) + ". " + qx);
        if ((!!correctAns[i]) && (qx) == correctAns[i]) {
            score++;
            $("#cor").text(score);
            //$("#yourAns").show("Your Answers:");

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