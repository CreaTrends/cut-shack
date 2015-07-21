
'use strict';

var isTouch = false;
if (Modernizr.touch) {
  isTouch = true;
} else {
  isTouch = false;
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        var expires;
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    } else {
        expires = '';
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

var modalOperator = {
    open: function() {
        $('.modal').fadeIn(300);
        $('body').addClass('lock');
    },
    close: function() {
        $('.modal').fadeOut(300);
        $('body').removeClass('lock');
    },
    openEmail: function() {
        $('.signup-modal').fadeIn(200);
        $('.signup-modal .form-holder').addClass('animate');
        $('body').addClass('lock');
    },
    closeEmail: function() {
        $('.signup-modal').fadeOut(300);
        $('body').removeClass('lock');

        $('.signup-modal .form-holder').removeClass('animate');


        // cookie stuff

        var cookie = readCookie('listSignup');


        if (cookie === null) {
            // if list sign up cookie doesn't exist, check for perma or add cookie
            // console.log('no cookie');

            modalOperator.openEmail();

            var permo = readCookie('permaCookie');

            if (permo === null) {
                createCookie('permaCookie', true, 9000);
            } else {
                createCookie('listSignup', true, 9000);
            }

        } else {
            // if it does, check for permacookie
            // console.log(readCookie('permaCookie'));
            createCookie('permaCookie', true, 9000);
        }
    }
};



// not needed for now
// function eraseCookie(name) {
//     createCookie(name, '', -1);
// }

function listTry() {

    //erase this
    // eraseCookie('listSignup');

    var cookie = readCookie('listSignup');

    if (cookie === null) {
        // console.log('no cookie');

        modalOperator.openEmail();

        createCookie('listSignup', true, 30);
    }
}


$(document).ready(function() {
    if (isTouch === true) {
        // $('.herovid').remove();
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

    $('.form-holder').click(function(e) {
        e.stopPropagation();
    });

    $('.form-holder .close').click(function(e) {
        e.stopPropagation();
        e.preventDefault();

        modalOperator.closeEmail();

    });

    $('.form-holder input[type="submit"]').click(function() {
        createCookie('listSignup', true, 9000);
        modalOperator.closeEmail();
    });

    $('.highlights .email-signup-box input[type="submit"]').click(function() {
        createCookie('listSignup', true, 9000);
    });

    setTimeout(listTry, 10000);
});


