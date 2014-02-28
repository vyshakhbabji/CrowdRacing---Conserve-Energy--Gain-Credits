/** Parse string in "key1=value1&key2=value2" into object:
 {'key1':'value1',
 'key2':'value2'}.
 **/
function parseUrlVars(url) {
   var vars = [];
    var params = url.slice(url.indexOf('?'));
    
   if(params.indexOf('#')>=0) {
      /*Remove all symbols after '#'*/
      params = params.slice(0, params.indexOf('#'));
    }

    params = params.slice(1).split('&');
    for (var i in params) {
       var item = params[i].split('=');
       vars.push(item[0]);
       vars[item[0]] = item[1];
    }

    return vars;
}