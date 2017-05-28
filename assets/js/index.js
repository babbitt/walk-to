mapboxgl.accessToken = 'pk.eyJ1IjoianJlYmFiIiwiYSI6IjQ0YTg0MmM0N2M3MGJmNGE2ODU4YzFkZDYwZmZiZWNjIn0.Fm-mS97bjywnFAfkywDp0Q'

var map;
var stopnamed = {}
var stopidtoname = {};

    navigator.geolocation.getCurrentPosition(function(location) {
      var latitude =  location.coords.latitude;
      var longitude = location.coords.longitude;

    $('#returnhome').click(function() {
        map.flyTo({
            center: [longitude, latitude]
        });
    });

    map = new mapboxgl.Map({
        container: 'map',
        minZoom: '15',
        maxZoom: '15',
        zoom: 15,
        center: new mapboxgl.LngLat(longitude, latitude),
        style: 'mapbox://styles/jrebab/cj37feg0500002rqm7nf0oa0d'
    });

    console.log("longitude" + longitude + "latitude" + latitude)

    var usrloc = document.createElement('div');
    usrloc.setAttribute('id', 'usrloc');
    var userlocation = new mapboxgl.Marker(usrloc)
        .setLngLat([longitude, latitude])
        .addTo(map);
    });
    //Load stops to map
    for (stop of stops.data) {
        if (stop[4] && stop[5] && (stop[0].slice([stop[0].length - 1], [stop[0].length]) != "N" && stop[0].slice([stop[0].length - 1], [stop[0].length]) != "S")) {

            stopidtoname[stop[0]] = stop[2];

            if(!stopnamed[stop[2]]) stopnamed[stop[2]] = {};
                var train = stop[0].slice(0,1);
                if(!stopnamed[stop[2]][train])stopnamed[stop[2]][train] = [];


            var el = document.createElement('div');
            switch (String(stop[0]).substring(0, 1)) {
                case "1":
                    el.className = "stop one";
                    break;
                case "2":
                    el.className = "stop two";
                    break;
                case "3":
                    el.className = "stop three";
                    break;
                case "4":
                    el.className = "stop four";
                    break;
                case "5":
                    el.className = "stop five";
                    break;
                case "6":
                    el.className = "stop six";
                    break;
                case "N":
                    el.className = "stop N";
                    break;
                case "Q":
                    el.className = "stop Q";
                    break;
                case "R":
                    el.className = "stop R";
                    break;
                case "A":
                    el.className = "stop A";
                    break;
                case "C":
                    el.className = "stop C";
                    break;
                case "E":
                    el.className = "stop E";
                    break;
                case "B":
                    el.className = "stop B";
                    break;
                case "D":
                    el.className = "stop D";
                    break;
                case "F":
                    el.className = "stop F";
                    break;
                case "M":
                    el.className = "stop M";
                    break;
                case "G":
                    el.className = "stop G";
                    break;
                case "J":
                    el.className = "stop J";
                    break;
                case "Z":
                    el.className = "stop Z";
                    break;
                case "L":
                    el.className = "stop L";
                    break;
                case "S":
                    el.className = "stop S";
                    break;
                case "7":
                    el.className = "stop seven";
                    break;
                case "H":
                    el.className = "stop H";
                    break;
            }
            el.setAttribute('id', stop[0]);
            el.setAttribute('lat', stop[4]);
            el.setAttribute('long',stop[5])
            var marker = new mapboxgl.Marker(el)
                .setLngLat([stop[5], stop[4]])
                .addTo(map);
            $(el).hide();
        }
    }

$(document).ready(function(){
    console.log(stopnamed);
    console.log(stopidtoname)
    $('.mapboxgl-ctrl-attrib').hide();
    $('#map').css("height", $(document).height());
    $.get("https://cors-anywhere.herokuapp.com/https://587d347c.ngrok.io",function(data,err){
    console.log(err);
    if(data){
        data = JSON.parse(data)
        // console.log(data);
        for(stationloaded in data){
            $("#"+stationloaded.substring(0,stationloaded.length-1)).show();
            $("#"+stationloaded.substring(0,stationloaded.length-1)).html(stationloaded.substring(0,1));
            var lat = $("#"+stationloaded.substring(0,stationloaded.length-1)).attr('lat');
            var long = $("#"+stationloaded.substring(0,stationloaded.length-1)).attr('long');
            if(lat && long){
                for(stopoccurance in stationloaded){
                    var el = document.createElement('div');
                    switch (String(stationloaded).substring(0, 1)) {
                        case "1":
                            el.className = "radius one";
                            break;
                        case "2":
                            el.className = "radius two";
                            break;
                        case "3":
                            el.className = "radius three";
                            break;
                        case "4":
                            el.className = "radius four";
                            break;
                        case "5":
                            el.className = "radius five";
                            break;
                        case "6":
                            el.className = "radius six";
                            break;
                        case "N":
                            el.className = "radius N";
                            break;
                        case "Q":
                            el.className = "radius Q";
                            break;
                        case "R":
                            el.className = "radius R";
                            break;
                        case "A":
                            el.className = "radius A";
                            break;
                        case "C":
                            el.className = "radius C";
                            break;
                        case "E":
                            el.className = "radius E";
                            break;
                        case "B":
                            el.className = "radius B";
                            // break;
                        case "D":
                            el.className = "radius D";
                            break;
                        case "F":
                            el.className = "radius F";
                            break;
                        case "M":
                            el.className = "radius M";
                            break;
                        case "G":
                            el.className = "radius G";
                            break;
                        case "J":
                            el.className = "radius J";
                            break;
                        case "Z":
                            el.className = "radius Z";
                            break;
                        case "L":
                            el.className = "radius L";
                            break;
                        case "S":
                            el.className = "radius S";
                            break;
                        case "7":
                            el.className = "radius seven";
                            break;
                        case "H":
                            el.className = "radius H";
                            break;
                    }
                    el.setAttribute('id', data[stationloaded][stopoccurance]);
                    if(data[stationloaded][stopoccurance]){
                        var stopname = stopidtoname[stationloaded.substring(0,stationloaded.length-1)];
                        stopnamed[stopname][stationloaded.substring(0,1)].push(data[stationloaded][stopoccurance]);
                    }
                    var marker = new mapboxgl.Marker(el)
                        .setLngLat([long,lat])
                        .addTo(map);
                }
            }
        }
    }
    console.log(stopnamed)
});
setInterval(function(){
    $(".radius").each(function(index,data){
        dte = new Date();
        var timeleft = parseInt(($(this).attr('id'))*1000)-dte.getTime()
        if(timeleft > 0){
            // console.log(timeleft);
            timeleft = timeleft*1000
            var radleft = timeleft.map(0, 3000000000, 0, 500)/2;
            $(this).css('height',radleft);
            $(this).css('width',radleft);
            $(this).css('margin-left',-(radleft-20)/2);
            $(this).css('margin-top',-(radleft-20)/2)
        }
        else{
            $(this).hide()
        }
    })
},5000)
});

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
