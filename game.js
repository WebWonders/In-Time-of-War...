$(document).ready(function() {
    function confirmUserChoice() {
        $('.shown').addClass('hidden');
        $('.hidden').removeClass('shown');
    }
    function nextQuestion(ImgID) {
        ImgID.addClass('shown');
    }
    $('#confirmButton').onClick(function() {
        confirmUserChoice();
        nextQuestion($('Choice1Q1'));
        nextQuestion($('Choice2Q1'));
    }
});
