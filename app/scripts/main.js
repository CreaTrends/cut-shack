/*eslint-env node, jquery */

'use strict';

var modalOperator = {
    open: function() {
        $('.modal').fadeIn(200);
    },
    close: function() {
        $('.modal').fadeOut(200);
    }
};

$(document).ready(function() {

    $('.snapchat a').click(function(e){
        e.preventDefault();

        modalOperator.open();
    });

    $('.modal').click(function(e){
        e.preventDefault();

        modalOperator.close();
    });
});


