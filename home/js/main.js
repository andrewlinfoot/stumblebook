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
	$container = $('#container');

	console.log("masonry");
	$container.imagesLoaded( function(){
	  $container.masonry({
	    // options
	    itemSelector : '.item',
	    columnWidth : 250,
	  });
	});
});

$('#appendButton').click(function() {
 	var $image = $('<div class="item"><img src="http://www.phlmetropolis.com/Cats.jpg" width="240px"></div><div class="item"><img src="http://25.media.tumblr.com/tumblr_mbuypt8R0M1ri87b4o1_1280.jpg" width="240px"></div>');
 	$('#container').append( $image ).masonry( 'appended', $image );
});

$(window).scroll(function () {
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
    var $image = $('<div class="item"><img src="http://www.phlmetropolis.com/Cats.jpg" width="240px"></div><div class="item"><img src="http://25.media.tumblr.com/tumblr_mbuypt8R0M1ri87b4o1_1280.jpg" width="240px"></div>');
    $('#container').append( $image ).masonry( 'appended', $image );
   }
});