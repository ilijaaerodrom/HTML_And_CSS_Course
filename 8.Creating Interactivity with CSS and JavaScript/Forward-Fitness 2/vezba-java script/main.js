function onOFF() {
  console.log("Test onOFF");
  const lightBulb = document.getElementById("lightBulb");
  console.log(lightBulb);
  console.log(lightBulb.src);

  if (lightBulb.src === "http://127.0.0.1:5500/CreatingInteractivityWithCSSAndJavaScript/Forward-Fitness%202/vezba-java%20script/images/pic_bulbon.gif") {
    lightBulb.src = "images/pic_bulboff.gif"
  } else {
    lightBulb.src = "images/pic_bulbon.gif"
  }
}
