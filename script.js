alert("if you like,please upvote")
function openclick() {
  document.getElementById("time").style.display = "none";
  document.getElementById("date").style.display = "none";

  document.getElementById("videoapp").style.display = "block";
  document.getElementById("musicapp").style.display = "block";
  document.getElementById("musicapp").style.marginLeft = "86px";
  document.getElementById("musicapp").style.marginTop = "-75px";
  document.getElementById("clockapp").style.display = "block";
  document.getElementById("clockapp").style.marginLeft = "167px";
  document.getElementById("clockapp").style.marginTop = "-75px";
  document.getElementById("weatherapp").style.display = "block";
  document.getElementById("weatherapp").style.marginTop = "10px";
  document.getElementById("gameapp").style.display = "block";
  document.getElementById("gameapp").style.marginLeft = "86px";
  document.getElementById("gameapp").style.marginTop = "-75px";
  document.getElementById("cameraapp").style.display = "block";
  document.getElementById("cameraapp").style.marginLeft = "167px";
  document.getElementById("cameraapp").style.marginTop = "-75px";
  document.getElementById("settingsapp").style.display = "block";
  document.getElementById("settingsapp").style.marginTop = "15px";
  document.getElementById("sololearnapp").style.display = "block";
  document.getElementById("sololearnapp").style.marginLeft = "86px";
  document.getElementById("sololearnapp").style.marginTop = "-75px";
  document.getElementById("linkedinapp").style.display = "block";
  document.getElementById("linkedinapp").style.marginLeft = "167px";
  document.getElementById("linkedinapp").style.marginTop = "-75px";
  document.getElementById("titles").style.display = "block";
}
function time() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  document.getElementById("time").innerHTML = hours + ":" + minutes;
  if (minutes < 10) {
    document.getElementById("time").innerHTML = hours + ":" + "0" + minutes;
  }
  
}
setInterval(time, 100);
