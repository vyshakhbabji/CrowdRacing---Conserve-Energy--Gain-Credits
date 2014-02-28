/*
 * JS for FacebookPublishing_NewFeed generated by Appery.io
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

FacebookPublishing_NewFeed_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobiletextarea_2': 'FacebookPublishing_NewFeed_mobiletextarea_2',
        'mobilebutton_3': 'FacebookPublishing_NewFeed_mobilebutton_3'
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

    Appery.CurrentScreen = 'FacebookPublishing_NewFeed';

    /*
     * Nonvisual components
     */
    var datasources = [];

    set_feed = new Appery.DataSource(FacebookPublishing_SetFeed, {
        'onComplete': function(jqXHR, textStatus) {
            closePopup();

            $t.refreshScreenFormElements("FacebookPublishing_NewFeed");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['message'],
            'TYPE': 'STRING',
            'ID': 'mobiletextarea_2',
            'ATTR': 'value'
        }, {
            'PATH': ['access_token'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'access_token'
        }]
    });

    datasources.push(set_feed);

    /*
     * Events and handlers
     */

    // Before Show
    FacebookPublishing_NewFeed_beforeshow = function() {
        Appery.CurrentScreen = "FacebookPublishing_NewFeed";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_31F5_onLoad = FacebookPublishing_NewFeed_onLoad = function() {
        screen_31F5_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        FacebookPublishing_NewFeed_deviceEvents();
        FacebookPublishing_NewFeed_windowEvents();
        screen_31F5_elementsEvents();
    }

    // screen window events
    screen_31F5_windowEvents = FacebookPublishing_NewFeed_windowEvents = function() {

        $('#FacebookPublishing_NewFeed').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    FacebookPublishing_NewFeed_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_31F5_elementsExtraJS = FacebookPublishing_NewFeed_elementsExtraJS = function() {
        // screen (FacebookPublishing_NewFeed) extra code

    }

    // screen elements handler
    screen_31F5_elementsEvents = FacebookPublishing_NewFeed_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#FacebookPublishing_NewFeed_mobilecontainer [name="mobilebutton_3"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    try {
                        set_feed.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };

                }
            },
        });

    }

    $("#FacebookPublishing_NewFeed").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        FacebookPublishing_NewFeed_beforeshow();
    });

    if (runBeforeShow) {
        FacebookPublishing_NewFeed_beforeshow();
    } else {
        FacebookPublishing_NewFeed_onLoad();
    }

}

$("#FacebookPublishing_NewFeed").die("dialoginit").live("dialoginit", function(event, ui) {
    Appery.processSelectMenu($(this));
    FacebookPublishing_NewFeed_js();
});

$("#FacebookPublishing_NewFeed").die("dialogcreate").live("dialogcreate", function(event, ui) {
    //Most components initializations are done on "pagecreate" event. This event must be triggered for dialogs too.
    $(this).trigger("pagecreate");
});