/*eslint-env node, jquery */

'use strict';

var isTouch = false;
if (Modernizr.touch) {
  isTouch = true;
} else {
  isTouch = false;
}

var modalOperator = {
    open: function() {
        $('.modal').fadeIn(200);
    },
    close: function() {
        $('.modal').fadeOut(200);
    }
};

$(document).ready(function() {
    if (isTouch === true) {
        $('.herovid').remove();
    }

    $('.snapchat a').click(function(e){
        e.preventDefault();

        modalOperator.open();
    });

    $('.modal').click(function(e){
        e.preventDefault();

        modalOperator.close();
    });
});


