function validateForm(){
    checkCode();
    if($('#myform')[0].checkValidity() === false || checkCode() === false ){
        event.preventDefault();
        event.stopPropagation();
    }
    $('#myform').addClass('was-validated');
}
function checkCode(){
    var codes = $('.codes').text();
    $('#code').attr('pattern',codes);
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
$('.codes').text(getRandomIntInclusive(100,999));
