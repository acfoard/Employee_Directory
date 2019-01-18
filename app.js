(function() {
    $('section').hide();
})();

const showPage1 = function (){
    $('#Page2').hide();
    $('#Page1').show();
};

const showPage2 = function () {
    $('#Page1').hide();
    $('#Page2').show();
};