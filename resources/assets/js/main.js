

$( document ).ready(function() {
    moment.updateLocale('en', {
        weekdaysMin : ["PIR", "OT", "TR", "CE", "PIE", "SE", "SV"]
    });
   $('#datetimepicker').datetimepicker({
        inline: true,
        format: 'lt',
        sideBySide: true,
        minDate:new Date(),
        icons: {
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
        }
        
    }).on('dp.change', function (e) {
        markEvents();
    });
   markEvents();
   
   $('.navbar-toggler').click(function(){
		$(this).toggleClass('open');
        $(".menu-button").toggleClass('open');
	});
});
function markEvents() {
        eventArray = ['02/07/2018','02/14/2018','02/16/2018','02/17/2018','02/22/2018','02/24/2018','02/25/2018','02/28/2018','02/14/2018','02/30/2018'];
        day = $('td');
        $(".datepicker .day").each(function(){
            value = $(this).data("day");
            if ($.inArray(value, eventArray) != '-1') {
               $(this).addClass("event-on");
            }
        });
   }

function initMap() {

        var uluru = {lat: 56.625314, lng: 23.276226};
        var map = new google.maps.Map(document.getElementById('google-map'), {
          zoom: 16,
          center: uluru,
          styles:[
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f5f5"
                }
              ]
            },
            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161"
                }
              ]
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#f5f5f5"
                }
              ]
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#bdbdbd"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                color: "#eeeeee"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dadada"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161"
                }
              ]
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e"
                }
              ]
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5"
                }
              ]
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#c9c9c9"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e"
                }
              ]
            }
          ]
        });
        var image = 'build/images/map-marker.png';
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: image
          
        });

      };
