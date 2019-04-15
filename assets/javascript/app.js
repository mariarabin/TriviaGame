// Page loads as a start of the game
$(document).ready(function () {
    //start of the game - start timer
    alert("Let's get R-E-A-D-Y👾!!!");
    //======VARIABLES========
});

$("#submit").on('click', function () {
    alert("Submitting");
    onSubmit();
})


function onSubmit() {
    var score = 0;
    //var numQs = 5;
    var correctAns = ['a', 'b'];

    //var q1 = document.forms['quiz']['q1'].value;
    //var q2 = document.forms['quiz']['q2'].value;


    // for (var i = 1; i <= numQs; i++) {
    // if (eval('q' + i) == ' ') {
    // alert("You missed question" + i);
    // }
    // }

    for (var i = 0; i < correctAns.length; i++) {
        var qx = document.forms["quiz"]["q" + (i + 1)].value;
        alert("i:" + i + " qx:" + qx + " cAns:" + correctAns[i]);
        if ((!!correctAns[i]) && (qx) == correctAns[i]) {
            score++;
            $("#cor").text(score);
        }
    }
    return false;
}