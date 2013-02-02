//the login action
$("#loginAction").click(function() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
            location.reload();
        } else {
            // cancelled
            location.reload();
        }
    }, { scope: 'user_photos,friends_photos' });
});

$(function(){
	console.log("masonry");
  $('#container').masonry({
  // options
    itemSelector : '.item',
    columnWidth : 250,
  });
});


// $(window).scroll(function () {
//    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 200) {

//     var $image = $('<div class="item"><img src="' + photoDataArray[photoIndex].source + '" width="240px"></div>');
//     $('#container').append( $image ).masonry( 'appended', $image );
//     photoIndex++;
//    }
// });
