/*
 * Service settings
 */
var SmartRace_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "527e2860e4b0157abfe97232"
}
var FacebookPublishing_Settings = {
    "client_id": "609392985773055",
    "client_secret": "db59d003a9db8c2dd706deb11ab9ab82",
    "redirect_uri": ""
}
var Day1_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "527e18cce4b0157abfe97180"
}

/*
 * Services
 */

var Tokenservice = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});

var SmartRace_events_list_service = new Appery.RestService({
    'url': '{database_url}/collections/events',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var FacebookPublishing_GetToken = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': FacebookPublishing_Settings
});

var SmartRace_events_query_service = new Appery.RestService({
    'url': '{database_url}/collections/events',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var baseballservice = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var SmartRace_UserEvent_query_service = new Appery.RestService({
    'url': '{database_url}/collections/UserEvent',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var FacebookPublishing_GetFeed = new Appery.RestService({
    'url': 'https://graph.facebook.com/{profile_id}/feed',
    'dataType': 'json',
    'type': 'get',
});

var SmartRace_events_create_service = new Appery.RestService({
    'url': '{database_url}/collections/events',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var Day1_intervalReading_read_service = new Appery.RestService({
    'url': '{database_url}/collections/intervalReading/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Day1_settings
});

var FacebookPublishing_SetFeed = new Appery.RestService({
    'url': 'https://graph.facebook.com/me/feed',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',
});

var SmartRace_events_read_service = new Appery.RestService({
    'url': '{database_url}/collections/events/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var Day1_intervalReading_create_service = new Appery.RestService({
    'url': '{database_url}/collections/intervalReading',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Day1_settings
});

var FacebookPublishing_SetLike = new Appery.RestService({
    'url': 'https://graph.facebook.com/{feed_id}/likes',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',
});

var SmartRace_events_update_service = new Appery.RestService({
    'url': '{database_url}/collections/events/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var Day1_intervalReading_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/intervalReading/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Day1_settings
});

var SmartRace_events_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/events/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': SmartRace_settings
});

var Day1_intervalReading_update_service = new Appery.RestService({
    'url': '{database_url}/collections/intervalReading/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': Day1_settings
});

var FacebookPublishing_SetComments = new Appery.RestService({
    'url': 'https://graph.facebook.com/{feed_id}/comments',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',
});

var SmartRace__devices_update_service = new Appery.RestService({
    'url': '{database_url}/collections/_devices/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var Day1_intervalReading_query_service = new Appery.RestService({
    'url': '{database_url}/collections/intervalReading',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Day1_settings
});

var FacebookPublishing_GetData = new Appery.RestService({
    'url': 'https://graph.facebook.com/{data_id}',
    'dataType': 'json',
    'type': 'get',
});

var SmartRace__devices_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/_devices/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': SmartRace_settings
});

var Day1_intervalReading_list_service = new Appery.RestService({
    'url': '{database_url}/collections/intervalReading',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Day1_settings
});

var SmartRace__devices_list_service = new Appery.RestService({
    'url': '{database_url}/collections/_devices',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace__devices_query_service = new Appery.RestService({
    'url': '{database_url}/collections/_devices',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace__users_query_service = new Appery.RestService({
    'url': '{database_url}/collections/_users',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace__users_list_service = new Appery.RestService({
    'url': '{database_url}/collections/_users',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace__devices_read_service = new Appery.RestService({
    'url': '{database_url}/collections/_devices/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace__devices_create_service = new Appery.RestService({
    'url': '{database_url}/collections/_devices',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var SmartRace__users_read_service = new Appery.RestService({
    'url': '{database_url}/collections/_users/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var apiservice = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var SmartRace__users_create_service = new Appery.RestService({
    'url': '{database_url}/collections/_users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var SmartRace__users_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/_users/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': SmartRace_settings
});

var SmartRace__users_update_service = new Appery.RestService({
    'url': '{database_url}/collections/_users/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var SmartRace_UserEvent_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/UserEvent/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': SmartRace_settings
});

var SmartRace_UserEvent_list_service = new Appery.RestService({
    'url': '{database_url}/collections/UserEvent',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace_UserEvent_read_service = new Appery.RestService({
    'url': '{database_url}/collections/UserEvent/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace_UserEvent_update_service = new Appery.RestService({
    'url': '{database_url}/collections/UserEvent/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var SmartRace_login_service = new Appery.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace_UserEvent_create_service = new Appery.RestService({
    'url': '{database_url}/collections/UserEvent',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var deleteService = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var SmartRace_scoreboard_list_service = new Appery.RestService({
    'url': '{database_url}/collections/scoreboard',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace_scoreboard_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/scoreboard/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': SmartRace_settings
});

var SmartRace_scoreboard_update_service = new Appery.RestService({
    'url': '{database_url}/collections/scoreboard/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var SendService = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',
});

var SmartRace_scoreboard_read_service = new Appery.RestService({
    'url': '{database_url}/collections/scoreboard/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});

var SmartRace_scoreboard_create_service = new Appery.RestService({
    'url': '{database_url}/collections/scoreboard',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': SmartRace_settings
});

var SmartRace_scoreboard_query_service = new Appery.RestService({
    'url': '{database_url}/collections/scoreboard',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SmartRace_settings
});