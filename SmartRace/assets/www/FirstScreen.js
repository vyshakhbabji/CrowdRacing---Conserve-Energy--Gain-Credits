/*
 * JS for FirstScreen generated by Appery.io
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

FirstScreen_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_21': 'FirstScreen_mobilebutton_21',
        'mobilebutton_22': 'FirstScreen_mobilebutton_22',
        'createEventButton': 'FirstScreen_createEventButton',
        'startRaceButton': 'FirstScreen_startRaceButton',
        'resultButton': 'FirstScreen_resultButton',
        'mobilegrid_9': 'FirstScreen_mobilegrid_9',
        'mobilegridcell_10': 'FirstScreen_mobilegridcell_10',
        'mobilegridcell_11': 'FirstScreen_mobilegridcell_11',
        'mobilegridcell_16': 'FirstScreen_mobilegridcell_16',
        'mobilegridcell_12': 'FirstScreen_mobilegridcell_12',
        'mobilegridcell_13': 'FirstScreen_mobilegridcell_13',
        'mobileimage': 'FirstScreen_mobileimage',
        'mobilegridcell_17': 'FirstScreen_mobilegridcell_17',
        'mobilegridcell_14': 'FirstScreen_mobilegridcell_14',
        'mobilegridcell_15': 'FirstScreen_mobilegridcell_15',
        'mobilegridcell_18': 'FirstScreen_mobilegridcell_18'
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

    Appery.CurrentScreen = 'FirstScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    FirstScreen_beforeshow = function() {
        Appery.CurrentScreen = "FirstScreen";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_7913_onLoad = FirstScreen_onLoad = function() {
        screen_7913_elementsExtraJS();
        var imageUrl = Appery.getImagePath('white.png');
        $('div[data-role="page"]').css('background-image', 'url(' + imageUrl + ')');

        // TODO fire device events only if necessary (with JS logic)
        FirstScreen_deviceEvents();
        FirstScreen_windowEvents();
        screen_7913_elementsEvents();
    }

    // screen window events
    screen_7913_windowEvents = FirstScreen_windowEvents = function() {

        $('#FirstScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    FirstScreen_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_7913_elementsExtraJS = FirstScreen_elementsExtraJS = function() {
        // screen (FirstScreen) extra code

    }

    // screen elements handler
    screen_7913_elementsEvents = FirstScreen_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#FirstScreen_mobileheader [name="mobilebutton_21"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('WelcomeScreen', {
                        reverse: false
                    });

                }
            },
        });
        $('#FirstScreen_mobileheader [name="mobilebutton_22"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('AboutSDGEandATnT', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        });

        $('#FirstScreen_mobilecontainer [name="createEventButton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CreateEvent', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        });
        $('#FirstScreen_mobilecontainer [name="startRaceButton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('RaceEventScreen', {
                        reverse: false
                    });

                }
            },
        });
        $('#FirstScreen_mobilecontainer [name="resultButton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('ScoreBoard', {
                        reverse: false
                    });

                }
            },
        });

        $('#FirstScreen_mobilecontainer [name="mobileimage"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('GreenButtonDataPage', {
                        reverse: false
                    });

                }
            },
        });

    }

    $("#FirstScreen").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        FirstScreen_beforeshow();
    });

    if (runBeforeShow) {
        FirstScreen_beforeshow();
    } else {
        FirstScreen_onLoad();
    }

}

$("#FirstScreen").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    FirstScreen_js();
});