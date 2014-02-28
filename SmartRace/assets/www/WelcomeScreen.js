/*
 * JS for WelcomeScreen generated by Appery.io
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

WelcomeScreen_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_15': 'WelcomeScreen_mobilebutton_15',
        'welcomeName': 'WelcomeScreen_welcomeName',
        'mobilegrid_24': 'WelcomeScreen_mobilegrid_24',
        'mobilegridcell_25': 'WelcomeScreen_mobilegridcell_25',
        'mobilegridcell_26': 'WelcomeScreen_mobilegridcell_26',
        'mobilegridcell_27': 'WelcomeScreen_mobilegridcell_27',
        'mobilegridcell_28': 'WelcomeScreen_mobilegridcell_28',
        'continueButton': 'WelcomeScreen_continueButton',
        'mobilegrid_16': 'WelcomeScreen_mobilegrid_16',
        'mobilegridcell_17': 'WelcomeScreen_mobilegridcell_17',
        'mobilegridcell_22': 'WelcomeScreen_mobilegridcell_22',
        'mobilegrid_8': 'WelcomeScreen_mobilegrid_8',
        'mobilegridcell_9': 'WelcomeScreen_mobilegridcell_9',
        'mobilelabel_2': 'WelcomeScreen_mobilelabel_2',
        'mobilegridcell_10': 'WelcomeScreen_mobilegridcell_10',
        'mobilegrid_4': 'WelcomeScreen_mobilegrid_4',
        'mobilegridcell_5': 'WelcomeScreen_mobilegridcell_5',
        'ATT': 'WelcomeScreen_ATT',
        'mobilegridcell_6': 'WelcomeScreen_mobilegridcell_6',
        'SDGElogo': 'WelcomeScreen_SDGElogo'
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

    Appery.CurrentScreen = 'WelcomeScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    WelcomeScreen_beforeshow = function() {
        Appery.CurrentScreen = "WelcomeScreen";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_F0DC_onLoad = WelcomeScreen_onLoad = function() {
        screen_F0DC_elementsExtraJS();
        var imageUrl = Appery.getImagePath('white.png');
        $('div[dsid="mobilecontainer"]').css('background-image', 'url(' + imageUrl + ')');

        ;

        // TODO fire device events only if necessary (with JS logic)
        WelcomeScreen_deviceEvents();
        WelcomeScreen_windowEvents();
        screen_F0DC_elementsEvents();
    }

    // screen window events
    screen_F0DC_windowEvents = WelcomeScreen_windowEvents = function() {

        $('#WelcomeScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    WelcomeScreen_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_F0DC_elementsExtraJS = WelcomeScreen_elementsExtraJS = function() {
        // screen (WelcomeScreen) extra code

    }

    // screen elements handler
    screen_F0DC_elementsEvents = WelcomeScreen_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#WelcomeScreen_mobileheader [name="mobilebutton_15"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('AboutSDGEandATnT', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        });

        $('#WelcomeScreen_mobilecontainer [name="continueButton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('FirstScreen', {
                        reverse: false
                    });

                }
            },
        });

        $('#WelcomeScreen_mobilecontainer [name="ATT"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    window.top.location = 'http://www.corp.att.com/gov/newsevents/community_involvement/?source=IAa425003llcomci';

                }
            },
        });

        $('#WelcomeScreen_mobilecontainer [name="SDGElogo"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    window.open('http://www.sdge.com/energy-savings-assistance-program', 'NewWindow', 'width=600,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes');

                }
            },
        });

    }

    $("#WelcomeScreen").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        WelcomeScreen_beforeshow();
    });

    if (runBeforeShow) {
        WelcomeScreen_beforeshow();
    } else {
        WelcomeScreen_onLoad();
    }

}

$("#WelcomeScreen").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    WelcomeScreen_js();
});