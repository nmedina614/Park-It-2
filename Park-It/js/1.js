var storage;

function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
    storage = window.localStorage;
}


function onDeviceReady() {
    var node = document.createElemnt('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type', 'text/css');

    if (cordova.platformid == 'ios') {
        node.setAttribute('href', 'styles/park-it-ios.css');

        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefault();
    } else {
        node.setAttribute('href', 'styles/park-it-android.css');
        window.StatusBar.backgroundColorByHexString("#1565C0");
    }
    $('head').appendChild(node);
}


