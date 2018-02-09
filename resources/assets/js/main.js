

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