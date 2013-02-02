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
	$('#container').imagesLoaded( function(){
	  $('#container').masonry({
	    // options
	    itemSelector : '.item',
	    columnWidth : 240
	  });
	});
});