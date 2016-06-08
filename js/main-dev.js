var vidEnabled = false
var mobile = true
var audioElement = document.createElement('audio');
var latlng = "57.70887, 11.974559999999997"
var x = document.getElementById("demo");
var weather
var period = "0"
var adress




function startVideo() {
    //console.log('start video')
    videojs("bgvid", {
        "controls": false,
        "muted": true,
        "loop": true,
        "autoplay": true,
        "preload": "auto",
        "poster": "img/rain.jpg"
    }, function() {
        $('#preloader').transition({
            opacity: 0
        }, 500);
        $('.vjs-poster').transition({
            opacity: 0
        }, 200);
        //toggleHighlight()
    });
    vidEnabled = true
        //toggle()
    toggleAbout()
        //controls()

}




function toggleHighlight() {
    $('#toggle')
        .transition({
            scale: 1.1,
            opacity: 1.0,
            delay: 2000
        }, 500)
        .transition({
            scale: 1.0,
            opacity: 0.5
        }, 500)
        .transition({
            scale: 1.1,
            opacity: 1.0
        }, 500)
        .transition({
            scale: 1.0,
            opacity: 0.5
        }, 500)
}


function rollInAbout() {
    $('#selector').transition({
        x: '-310px'
    }, 500, 'ease');
    $('#toggle').transition({
        rotate: '0deg'
    }, 500, 'ease').removeClass("out").addClass("in").css('opacity', '0.5');
    //$('#toggle').removeClass("out").addClass("in"); 


}

function rollOutAbout() {
    $('#selector').transition({
        x: '0px'
    }, 500, 'ease');
    $('#toggle').transition({
        rotate: '180deg'
    }, 500, 'ease').removeClass("in").addClass("out").css('opacity', '1');
    //$('#toggle').removeClass("in").addClass("out"); 

}


function toggleAbout() {
    var player = videojs('#bgvid');
    $("#toggle").click(function() {
        if ($('#toggle').hasClass('in')) {
            rollOutAbout();
        } else {
            rollInAbout();
        }
    })
}



//Raindrops for the mobile version//
function rainDrops() {

    $(function() {
        ndrops = 300; //500
        addDrops();
        moveDrops()

    })

    function addDrops() {
        wW = $(window).width();
        WH = $(window).height();
        for (i = 0; i <= ndrops; i++) {
            dp = "<li class='d" + i + "''></li>"
            dX = Math.floor((Math.random() * wW) + 1) + "px";
            dY = Math.floor((Math.random() * WH) + 1) + "px";
            dS = Math.floor((Math.random() * 1) + 1) * 0.5;
            dB = (Math.floor((Math.random() * 2) + 1) * 0.5) + "px";
            dO = (Math.floor((Math.random() * 2) + 1) * 0.5);
            dW = "25px" //Math.floor((Math.random()*30)+30) + "px";
            dH = Math.floor((Math.random() * 20) + 18) + "px";
            //goingDown = ".d" + Math.floor((Math.random()*100)+50);
            $("#drips").append(dp);
            $(".d" + i).css("opacity", dO).css("width", dW).css("height", dH).css({
                x: dX,
                y: dY,
                scale: dS
            });
        }
        console.log('ready')
        xxx = setInterval(function() {
            moveDrops();
        }, 20);

    }

    function moveDrops() {
        for (i = 0; i <= ndrops; i++) {
            goingDown = ".d" + Math.floor((Math.random() * 100) + 1);
            $(goingDown).addClass("move").transition({
                y: "+=" + Math.floor((Math.random() * 40) + 1) + "px"
            }, Math.floor((Math.random() * 1000) + 800), "ease");
        };

    }
}

function screenDetect() {

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    //isMobile = true
    // now i can use is_mobile to run javascript conditionally

    if (isMobile === true) {
        if (sessionStorage.getItem('mobile_request_regular') === "true") {
            loadRegular()
            sessionStorage.removeItem('mobile_request_regular')
        } else {
            launchMobile()
        }

    } else {
        loadRegular()


    }

}

function launchMobile() {
    $('#video_holder').css('display', 'none')

    $('#mobile').fadeIn()
    $('#about_info_details').append('<li id="load_regular">Load the regular site? <br>(Warning, it may rinse your data)</li>')
    mobile = true
    rainDrops()
    $('#selector').removeClass('selector_regular').addClass('selector_mobile')
    $('#about_table').addClass('about_table_mobile')
    $("#load_regular").click(function() {
        sessionStorage.setItem('mobile_request_regular', true)
        location.reload();
        //})


    });
}

function loadRegular() {

    $('#drips').empty();
    $('#video_holder').fadeIn()
    $('#mobile').fadeOut()
        //$('#selector').css('display', 'inline-block')
    $('#playpause').css('display', 'inline-block')
    $('#toggle').fadeIn()
        //menuClosed()

    if (vidEnabled === true) {} else {
        startVideo()
    }

}


function resizeMaster() {
    $(window).resize(function() {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 100);
    });


    $(window).bind('resizeEnd', function() {
        screenDetect()
    });
}






function playerSize() {
    w = $(window).width()
    h = $(window).height()
    $('#bgvid_html5_api').css({
        "height": h + "px"
    })
}

$('#mobile_open').on('click', function() {
    launchMobile()
})



function audioControl() {

    audioElement.setAttribute('src', 'audio/rain.mp3');
    audioElement.setAttribute('loop', 'loop');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

    $("#playpause").click(function() {
        if ($(this).hasClass('play')) {
            $(this).removeClass('play').addClass('pause');
            audioElement.play();

        } else {
            $(this).removeClass('pause').addClass('play');
            audioElement.pause();
        }
    })

}

function sharing() {

    $("#social").jsSocials({
        url: "http://www.projectraindance.com",
        text: "When did you last sit and watch the rain?",
        shareIn: "popup",
        showCount: true,
        showLabel: false,
        shares: [{
                share: "twitter",
                hashtags: "watchtherain"
            },
            "facebook",
            "googleplus",
            "linkedin"

        ]
    });

}


function getLocation() {
var apiGeolocationSuccess = function(position) {
    //alert("API geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
    latlng = position.coords.latitude +','+position.coords.longitude
    showPosition()
};

var tryAPIGeolocation = function() {
    console.log('tryAPIGeolocation')
    jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU", function(success) {
        apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
  })
  .fail(function(err) {
    //alert("API Geolocation error! \n\n"+err);
    console.log('function err')
  });
};

var browserGeolocationSuccess = function(position) {
    console.log('browser success')
    //alert("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
    latlng = position.coords.latitude +','+position.coords.longitude
    showPosition()
};

var browserGeolocationFail = function(error) {
    console.log('browser fail: ' + error)
  switch (error.code) {
    case error.TIMEOUT:
    console.log('browser fail timeout')
    switchToManual()
      break;
    case error.PERMISSION_DENIED:
    console.log('browser fail permission denied: ' + error.message)
    switchToManual()
      if(error.message.indexOf("Only secure origins are allowed") == 0) {
        tryAPIGeolocation();
      }
      break;
    case error.POSITION_UNAVAILABLE:
        console.log('browser fail position unavailable')
        switchToManual()
      break;
  }
};

var tryGeolocation = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        browserGeolocationSuccess,
      browserGeolocationFail,
      {maximumAge: 50000, timeout: 20000, enableHighAccuracy: true});
  }
};

tryGeolocation();
}

function showPosition(position) {
    
    //latlng = position.coords.latitude +','+position.coords.longitude
    $.ajax({
        url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng,
        type: 'GET',
        data: {
            format: 'json'
        },
    error: function(data) {
      console.log('geo locate error: ' + JSON.stringify(data))
        },
    dataType: 'json',
    success: function(data) {
        for(var i=0;i<data.results.length;i++) {
        adress = data.results[2].formatted_address;
        console.log('adress ' + adress)
    }
        //console.log('geo success: ' + adress)
        //$('#geo_result').prepend('<p>'+ adress + '</p>').fadeIn()

        },
    });
    
    //$('#location_search').css('display', 'block')
    
    console.log(latlng)
    getWeather()
    manualLocation()
}

function switchToManual(){
    console.log('switching to manual')
    $('#location_search').css('display', 'block')
    $('#loader').fadeOut(function(){
        $('#location').fadeIn()
        manualLocation()
  })


}


function manualLocation(){
    //$('#location_search').css('display', 'block')
    console.log('manual')
    $("#geocomplete").geocomplete()
          .bind("geocode:result", function(event, result){
            

            console.log('Geo Result : ' + JSON.stringify(result.formatted_address))
            adress = result.formatted_address

            latlng = result.geometry.location
            latlng = latlng.toString()
            latlng = latlng.replace(/[{()}]/g, '');
            getWeather()
          })
          .bind("geocode:error", function(event, status){
            console.log("ERROR: " + status);
          })
          .bind("geocode:multiple", function(event, results){
            console.log("Multiple: " + results.length + " results found");
          });
        
        $("#find").click(function(){
          $("#geocomplete").trigger("geocode");
        });
        

    
}

function getWeather(){

    $.ajax({
   url: 'https://api.forecast.io/forecast/692a2d1bfaf4f14187d4106cd381bd45/'+latlng+'/?units=si&exclude=daily,alerts,flags',
   type: 'GET',
   data: {
      format: 'json'
   },
   error: function() {
      console.log('get weather error')
   },
   dataType: 'jsonp',
   success: function(data) {
      console.log('weather success: ' + JSON.stringify(data))
      weather = data
      weatherFilter()
      $('#loader').fadeOut(function(){
      $('#forecast').fadeIn()
      $('#location').fadeIn()

      $('#location_search').fadeOut(
        function(){
            $('#location_change').fadeIn()
            manualLocation()
        })
  })
   },
});


    
}

function weatherFilter(){
    $('#amount').html('Now');
    displayWeather()
     $( "#slider" ).slider({
      value:1,
      min: 1,
      max: 48,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount" ).html( ui.value + ' hours from now');
        console.log('period' + ui.value) 
        period = ui.value
        displayWeather()
      },

    });
    
     $( "#amount" ).html(' 1 hour from now');
}

function displayWeather(){

    percent = weather.hourly.data[period].precipProbability*100
    percent = Math.round(percent)
    summary = weather.hourly.data[period].summary
    //console.log('prediction: ' + percent)
    //console.log('summary' + summary)
    if (summary === "Drizzle" ||
        summary === "Light Rain"){
        type=summary
    }
    else{

        type="rain"
    }

    $('#prec_percent').html(percent+'%');
    $('#prec_type').html(type);
    $('#adress').html(adress);

}

function changeLocation(){
    
    $('#location_change').fadeOut(
        function(){
            $('#location_search').fadeIn()
            manualLocation()
        }
        )

}



$(document).ready(function() {
    //aboutSize()
    screenDetect()
    audioControl()
    sharing()
    getLocation()

});
