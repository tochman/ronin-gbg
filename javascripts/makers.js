var Makers   = Makers   || {},
    document = document || {},
    jQuery   = jQuery   || {};

(function(Makers, $, document) {
  "use strict";

  Makers.init = function() {
    $('#twitter-stream').tweetable({
      username:   'thomasochman',
      html5:      true,
      rotate:     true,
      replies:    false,
      retweets:   true,
      limit:      20,
      time:       true,
      onComplete: function($ul){
        $('time').timeago();
      }
    });
    $('#site_container').waypoint(Makers.revealBar);
  };

  Makers.revealBar = function(direction){
    if(direction=="down"){
      $('#reveal-bar').slideDown();
    } else {
      $('#reveal-bar').slideUp();
    }
  };

  $(Makers.init);

}(Makers, jQuery, document));