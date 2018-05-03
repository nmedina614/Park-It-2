alert('test');

$('#park').click(function(){

    alert("Set Parking Location");

});

$('#retrieve').click(function(){

    alert("Get parking location");

});

$('#gotIt').click(function(){

    $('#instructions').hide();

});

function initMap() {
    var grc = {lat: 47.313582, lng: -22.1800072} ;
    var tokyo = {lat: 35.6895, lng:  139.6917} ;
    var mapDiv = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: tokyo
    });
    var marker = new google.maps.Marker({
        position: tokyo,
        map: mapDiv

    });



}