(function(){
var $button = $('.show'),
$text = $('#enquiries'),
visible = false;
$text.addClass('accessibly-hidden');
$button.click(function(){
if ( visible ) {
$text.slideUp('slow',function(){
$text.addClass('accessibly-hidden')
.slideDown(0);
});
} else {
$text.slideUp(0,function(){
$text.removeClass('accessibly-hidden')
.slideDown('slow');
});
}
visible = !visible;
});
})();
