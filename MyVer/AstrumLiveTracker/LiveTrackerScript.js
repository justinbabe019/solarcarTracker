"use strict";
let map;
let markers= [];
let traceMarkers=[];
let markerDates = [];
let infowindows=[];

const ausCenter = {lat: -25.363, lng: 131.044};
const astrumPos=ausCenter;//test

const startPos={lat: -12.4637, lng: 130.8444};
const katherinePos={lat: -14.4520, lng: 132.2699};
const dunmarraPos={lat: -16.679973, lng: 133.412624};
const tennantCreekPos={lat: -19.6495, lng: 134.1910};
const barrowCreekPos={lat: -21.3799, lng: 133.9756};
const aliceSpringsPos={lat: -23.6980, lng:133.8807};
const kulgeraPos={lat: -25.8436, lng: 133.2879};
const cooberPedyPos={lat: -29.0135, lng: 134.7544};
const glendamboPos={lat: -30.9677, lng: 135.7513};
const portAugustaPos={lat:-32.4936, lng: 137.7743};
const endPos={lat: -34.928497, lng: 138.600739};

gapi.load('auth2',function()
{
   gapi.auth2.init();
});

function unifyInitIcon(URL){
   const thing2={
      url: URL,
      scaledSize: new google.maps.Size(80, 42),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(40, 25),
   }
   return thing2;
}

function setInitMarkers(map){
   /*
   const astrumIcon="https://imgur.com/a/W7pXawQ", 
      wscIcon="https://worldsolarchallenge.org/skin/2023/images/logo.svg", 
      endPointIcon="https://static.vecteezy.com/system/resources/previews/009/342/320/original/racing-flag-clipart-design-illustration-free-png.png";
   */
   const startPointMarker = new google.maps.Marker({
      position: startPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "startingPoint",
      map,
   })
   markers.push(startPointMarker);
   const katherineMarker = new google.maps.Marker({
      position: katherinePos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "katherine",
      map,
   })
   markers.push(katherineMarker);
   const dunmarraMarker = new google.maps.Marker({
      position: dunmarraPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "dunmarra",
      map,
   })
   markers.push(dunmarraMarker);
   const tennantCreekMarker = new google.maps.Marker({
      position: tennantCreekPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "tennantCreek",
      map,
   })
   markers.push(tennantCreekMarker);
   const barrowCreekMarker = new google.maps.Marker({
      position: barrowCreekPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "barrowCreekMarker",
      map,
   })
   markers.push(barrowCreekMarker);
   const aliceSpringMarker = new google.maps.Marker({
      position: aliceSpringsPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "aliceSpring",
      map,
   })
   markers.push(aliceSpringMarker);
   const kulgeraMarker = new google.maps.Marker({
      position: kulgeraPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "kulgera",
      map,
   })
   markers.push(kulgeraMarker);
   const cooberPedyMarker = new google.maps.Marker({
      position: cooberPedyPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "cooberPedy",
      map,
   })
   markers.push(cooberPedyMarker);
   const glendamboMarker = new google.maps.Marker({
      position: glendamboPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "cooberPedy",
      map,
   })
   markers.push(glendamboMarker);
   const portAugustaMarker = new google.maps.Marker({
      position: portAugustaPos,
      icon: unifyInitIcon("https://worldsolarchallenge.org/skin/2023/images/logo.svg"),
      title: "portAugusta",
      map,
   })
   markers.push(portAugustaMarker);
   const endPointMarker = new google.maps.Marker({
      position: endPos,
      icon: unifyInitIcon("https://static.vecteezy.com/system/resources/previews/009/342/320/original/racing-flag-clipart-design-illustration-free-png.png"),
      title: "endingPoint",
      map,
   })
   markers.push(endPointMarker);

   addTraceMarker(startPos, "Astrum Current Position");
}
function setInitInfoWindow(){
   let contentString=["Darwin","Katherine", "Dunmarra", "Tennant Creek","Barrow Creek", "Alice Springs", "Kulgera", "Coober Pedy", "Glendambo", "Port Augusta", "Adelaide"];
   for(let i =0; i<contentString.length;++i){
      const infowondow= new google.maps.InfoWindow({
         content: contentString[i]+document.getElementById("instagram-media-0").innerHTML,
      });;
      infowindows.push(infowondow);
   }
}

function addTraceMarker(position, Label){
   //const contentString=document.getElementsByTagName('div')[68].innerHTML;
   //const contentString=document.getElementById("instagram-media-0").innerHTML;
   //const contentString=document.getElementsByClassName("instagram-media").innerHTML;
  //'<a href="https://www.instagram.com/p/Cus0WYCunUy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">Check out our instagram!</a>';

   const infowindow = new google.maps.InfoWindow({
      content: contentString,
      //ariaLabel: label,
   });
   const marker=new google.maps.Marker({
      position: position,
      label: Label,
      map,
   });
   marker.addListener("click", () => {
      infowindow.open({
         anchor: marker,
         map,
      });
   });
   traceMarkers.push(marker);
}

function initMap() {
   hide("ins");
   addTraceMarker({lat: -12, lng: 130},  getDateInString()+"-"+getTimeInString());
   map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: ausCenter,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false
   });
   setInitMarkers(map);        
   setInitInfoWindow();

   ///////BACKDOOR FUNC/////// 
   map.addListener("click", (event) => {
      addTraceMarker(event.latLng, getDateInString()+"-"+getTimeInString());
   });
   ///////TESTING FUNC///////

   //match infowindows with markers
   for(let i=0;i<markers.length;i++){
      markers[i].addListener("click", () => {
      infowindows[i].open({
         anchor: markers[i],
         map,
      });
   });
   }
   getAstrumPos();
   alert("done astrum post");
   //if (auth2.isSignedIn.get()) alert("signed In in initmap");
}
function hide(e){
   document.getElementById(e).hidden=true;
}
function show(e){
   document.getElementById(e).hidden=false;
   alert("done showing e");
}
function showTrace(array) {
   for (let i = 0; i < array.length; i++) {
      array[i].setMap(map);
   }
}
function hideTrace() {
   for(let i = 0; i<traceMarkers.length -1; ++i){
      traceMarkers[i].setMap(null);
   }
}
function hideInitMarker(){
   for(let i = 0; i<markers.length; ++i){
      markers[i].setMap(null);
   }
}
function reCenter(){
   map.setZoom(5);
   map.setCenter(ausCenter);
}

function getDateInString(){
   var today = new Date();
   var date = (today.getMonth()+1)+'/'+today.getDate();
   return date;
}   
function getTimeInString(){
   var today = new Date(); 
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   return time;
}
function getAstrumPos(){
   let file="./location.txt";
   fetch(file)
      .then((response) => {
         if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
         }
         let str=response.text();
         console.log("string1: " + str);
         str=str.split(",");
         console.log("Stromg2: "+str);
         addTraceMarker("{lat: "+ str[0] + ", lng: "+ str[1]+"}");
         alert("done adding marker");
         return response.text();
      })
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
   alert("done adding!");
}
function checkLogIn(loggedIn){
   infowindow.open();
   var profile = googleUser.getBasicProfile();
   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
   console.log('Name: ' + profile.getName());
   console.log('Image URL: ' + profile.getImageUrl());
   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
   alert("info window opened");
}
function onSignIn(googleUser){
   if (auth2.isSignedIn.get()) alert("signed In in onSignIn");
   alert("On sign in!");
   var profile = googleUser.getBasicProfile();
   alert("U are signed in"+profile.getName());
   $("#userName").text=profile.getName();
   $(".g-signin2").hide();
   show("userName");
   hide("g-signin2");
   alert("done hiding n showing");
   /*
   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
   console.log('Name: ' + profile.getName());
   console.log('Image URL: ' + profile.getImageUrl());
   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
   */
}
function removeTraceMarkers(num){
   traceMarkers=traceMarkers.splice(0,num);
}
function distCal(){
   //look up google map platform
}