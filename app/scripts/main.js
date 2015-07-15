/*eslint-env node, jquery */
/*global Modernizr:true*/

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
        $('body').addClass('lock');
    },
    close: function() {
        $('.modal').fadeOut(200);
        $('body').removeClass('lock');
    },
    openEmail: function() {
        $('.signup-modal').fadeIn(200);
        $('body').addClass('lock');
    },
    closeEmail: function() {
        $('.signup-modal').fadeOut(200);
        $('body').removeClass('lock');
    }
};

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


$(document).ready(function() {
    if (isTouch === true) {
        $('.herovid').remove();
    }

    $('.snapchat a').click(function(e){
        e.preventDefault();

        modalOperator.open();
    });

    $('.modal, .signup-modal').click(function(e){
        e.preventDefault();

        var me = $(this);

        if (me.hasClass('modal')) {
            modalOperator.close();
        } else {
            modalOperator.closeEmail();
        }
        
    });
});


