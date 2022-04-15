/*
Student name: Ilija Trajkovski
File Name: script.js
Date: 14.04.2022
*/

//Global variables

var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");
vi

//Function to display the burpees example video

function burpees() {
  videoSource.src = "media/burpees.mp4";
  video.style.display = "block";
  video.onload();
}

