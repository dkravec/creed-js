function SwitchRoutes({ routes }) {
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var pathArray = window.location.pathname.split( '/' );

    for (const route of routes) {
        if (route.name.toLowerCase() == pathArray[2].toLowerCase()) {
            document.getElementById('root').innerHTML=route.callback
        }
    }
}