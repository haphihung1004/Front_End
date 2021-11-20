
function Clock() {
    var date = new Date();
    var second = date.getSeconds();
    var minute = date.getMinutes();
    var hour =date.getHours() ;

    $('#sec-hand').css('transform', 'rotate(' + second * 6 + 'deg)');
    $('#min-hand').css('transform', 'rotate(' + (minute * 6 + second * 0.1) + 'deg)');
    $('#hour-hand').css('transform', 'rotate(' + (hour * 30 + minute * 0.5) + 'deg)');
};
setInterval(Clock,1000);
