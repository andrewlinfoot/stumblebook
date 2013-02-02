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
	    columnWidth : 240
	  });
	});

    $container.infinitescroll({
      navSelector  : '#page-nav',    // selector for the paged navigation 
      nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
      itemSelector : '.item',     // selector for all items you'll retrieve
      loading: {
          finishedMsg: 'No more pages to load.',
          img: 'http://i.imgur.com/6RMhx.gif'
        }
      },
      
      // trigger Masonry as a callback
      function( newElements ) {
        // hide new items while they are loading
        var $newElems = $( newElements ).css({ opacity: 0 });
        // ensure that images load before adding to masonry layout
        $newElems.imagesLoaded(function(){
          // show elems now they're ready
          $newElems.animate({ opacity: 1 });
          $container.masonry( 'appended', $newElems, true ); 
        });
      }
    );


});

$('#appendButton').click(function() {
	var $image = $('<div class="item"><img src="http://25.media.tumblr.com/tumblr_mbuypt8R0M1ri87b4o1_1280.jpg" width="240px"></div>');
	$('#container').append( $image ).masonry( 'appended', $image );
});