/*
 * JS for EventJoinSuccess generated by Appery.io
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

EventJoinSuccess_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_1': 'EventJoinSuccess_mobilelabel_1',
        'mainButton': 'EventJoinSuccess_mainButton',
        'mobilebutton_17': 'EventJoinSuccess_mobilebutton_17',
        'mobilegrid_3': 'EventJoinSuccess_mobilegrid_3',
        'mobilegridcell_4': 'EventJoinSuccess_mobilegridcell_4',
        'mobilegridcell_5': 'EventJoinSuccess_mobilegridcell_5',
        'mobilegridcell_8': 'EventJoinSuccess_mobilegridcell_8',
        'mobilegridcell_6': 'EventJoinSuccess_mobilegridcell_6',
        'mobilegridcell_7': 'EventJoinSuccess_mobilegridcell_7',
        'mobilegridcell_9': 'EventJoinSuccess_mobilegridcell_9',
        'mobilegridcell_10': 'EventJoinSuccess_mobilegridcell_10',
        'mobilegridcell_11': 'EventJoinSuccess_mobilegridcell_11',
        'mobilegridcell_12': 'EventJoinSuccess_mobilegridcell_12',
        'mobilegridcell_13': 'EventJoinSuccess_mobilegridcell_13',
        'mobilegridcell_14': 'EventJoinSuccess_mobilegridcell_14',
        'mobilegridcell_15': 'EventJoinSuccess_mobilegridcell_15'
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

    Appery.CurrentScreen = 'EventJoinSuccess';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    EventJoinSuccess_beforeshow = function() {
        Appery.CurrentScreen = "EventJoinSuccess";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_0361_onLoad = EventJoinSuccess_onLoad = function() {
        screen_0361_elementsExtraJS();
        var imageUrl = Appery.getImagePath('white.png');
        $('div[data-role="page"]').css('background-image', 'url(' + imageUrl + ')');

        // TODO fire device events only if necessary (with JS logic)
        EventJoinSuccess_deviceEvents();
        EventJoinSuccess_windowEvents();
        screen_0361_elementsEvents();
    }

    // screen window events
    screen_0361_windowEvents = EventJoinSuccess_windowEvents = function() {

        $('#EventJoinSuccess').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    EventJoinSuccess_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_0361_elementsExtraJS = EventJoinSuccess_elementsExtraJS = function() {
        // screen (EventJoinSuccess) extra code

    }

    // screen elements handler
    screen_0361_elementsEvents = EventJoinSuccess_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#EventJoinSuccess_mobilecontainer [name="mainButton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('FirstScreen', {
                        transition: 'flip',
                        reverse: false
                    });

                }
            },
        });
        $('#EventJoinSuccess_mobilecontainer [name="mobilebutton_17"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    window.open('https://www.facebook.com', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');

                }
            },
        });

    }

    $("#EventJoinSuccess").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        EventJoinSuccess_beforeshow();
    });

    if (runBeforeShow) {
        EventJoinSuccess_beforeshow();
    } else {
        EventJoinSuccess_onLoad();
    }

}

$("#EventJoinSuccess").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    EventJoinSuccess_js();
});