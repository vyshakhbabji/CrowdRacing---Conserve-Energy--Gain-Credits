/*
 * JS for CloseEventCreation generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '6babc941-f486-4f8b-aee7-a0ac33c74d72';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Appery.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Appery.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "RaceEventScreen",
    "location": "RaceEventScreen.html"
}, {
    "name": "Delete",
    "location": "Delete.html"
}, {
    "name": "EventJoinSuccess",
    "location": "EventJoinSuccess.html"
}, {
    "name": "FacebookPublishing_NewFeed",
    "location": "FacebookPublishing_NewFeed.html"
}, {
    "name": "PopupSDGE",
    "location": "PopupSDGE.html"
}, {
    "name": "FirstScreen",
    "location": "FirstScreen.html"
}, {
    "name": "AboutSDGEandATnT",
    "location": "AboutSDGEandATnT.html"
}, {
    "name": "CrowRacing",
    "location": "CrowRacing.html"
}, {
    "name": "ATT",
    "location": "ATT.html"
}, {
    "name": "ScoreBoard",
    "location": "ScoreBoard.html"
}, {
    "name": "CloseEventCreation",
    "location": "CloseEventCreation.html"
}, {
    "name": "CreateEvent",
    "location": "CreateEvent.html"
}, {
    "name": "GreenButtonDataPage",
    "location": "GreenButtonDataPage.html"
}, {
    "name": "WelcomeScreen",
    "location": "WelcomeScreen.html"
}];

CloseEventCreation_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'successfullEventCreationlabel': 'CloseEventCreation_successfullEventCreationlabel',
        'mainMenubutton': 'CloseEventCreation_mainMenubutton'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Appery.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Appery.CurrentScreen = 'CloseEventCreation';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    CloseEventCreation_beforeshow = function() {
        Appery.CurrentScreen = "CloseEventCreation";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_A8EC_onLoad = CloseEventCreation_onLoad = function() {
        screen_A8EC_elementsExtraJS();
        var imageUrl = Appery.getImagePath('white.png');
        $('div[data-role="page"]').css('background-image', 'url(' + imageUrl + ')');
        var imageUrl = Appery.getImagePath('white.png');
        $('div[data-role="page"]').css('background-image', 'url(' + imageUrl + ')');

        // TODO fire device events only if necessary (with JS logic)
        CloseEventCreation_deviceEvents();
        CloseEventCreation_windowEvents();
        screen_A8EC_elementsEvents();
    }

    // screen window events
    screen_A8EC_windowEvents = CloseEventCreation_windowEvents = function() {

        $('#CloseEventCreation').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    CloseEventCreation_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_A8EC_elementsExtraJS = CloseEventCreation_elementsExtraJS = function() {
        // screen (CloseEventCreation) extra code

    }

    // screen elements handler
    screen_A8EC_elementsEvents = CloseEventCreation_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#CloseEventCreation_mobilecontainer [name="mainMenubutton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('FirstScreen', {
                        reverse: false
                    });

                }
            },
        });

    }

    $("#CloseEventCreation").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        CloseEventCreation_beforeshow();
    });

    if (runBeforeShow) {
        CloseEventCreation_beforeshow();
    } else {
        CloseEventCreation_onLoad();
    }

}

$("#CloseEventCreation").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    CloseEventCreation_js();
});