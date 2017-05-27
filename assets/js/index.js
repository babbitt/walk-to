var map;
  mapboxgl.accessToken = 'pk.eyJ1IjoianJlYmFiIiwiYSI6IjQ0YTg0MmM0N2M3MGJmNGE2ODU4YzFkZDYwZmZiZWNjIn0.Fm-mS97bjywnFAfkywDp0Q'
  $.getJSON("http://freegeoip.net/json/", function(data) {
    var latitude = data.latitude
    var longitude = data.longitude
    map = new mapboxgl.Map({
        container: 'map',
        minZoom: '10',
        zoom: 15,
        center: new mapboxgl.LngLat(longitude,latitude),
        style: 'mapbox://styles/jrebab/cj37feg0500002rqm7nf0oa0d'
    });
    //Change size on scroll
    map.on('zoomend',function(){
      var zoompx = String((map.getZoom()+30)/2);
      $('.stop').css("height",zoompx+'px');
      $('.stop').css("width",zoompx+'px');
      console.log(map.getZoom());
      console.log(26-map.getZoom()^2<14);
    })
//Load stops to map
  for(stop of stops.data){
    if(stop[4] && stop[5] && (stop[0].slice([stop[0].length-1],[stop[0].length]) != "N" && stop[0].slice([stop[0].length-1],[stop[0].length]) != "S")){
      // console.log(stop[0]+": "+stop[4]+","+stop[5])
      var el = document.createElement('div');
      switch(String(stop[0]).substring(0,1)){
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
      el.setAttribute('id',stop[0]);
      var marker = new mapboxgl.Marker(el)
      .setLngLat([stop[5], stop[4]])
      .addTo(map);
      $(el).hide();
    }
  }
});
$(document).ready(function(){
  $('#map').css("height", $(document).height())
  $.get("http://cors-anywhere.herokuapp.com/http://587d347c.ngrok.io",function(data,err){
    console.log(err);
    data = JSON.parse(data)
    console.log(data);
    if()
  })
});