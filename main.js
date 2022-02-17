//https://teachablemachine.withgoogle.com/models/5EZokUUrA/
//Best
//Amazing
//Victory
prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_uri+"'>";
    });


}
console.log("ml5 version",ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5EZokUUrA/model.json",modelLoaded);


function modelLoaded(){
    console.log("Model is loaded!");
}
 
function speak(){
var synth=window.speechSynthesis;
  speakdata1="The first prediction is"+prediction1;
  speakdata2="And the second prediction is"+prediction2;
  utterThis= new SpeechSynthesisUtterance(speakdata1+speakdata2);
  synth.speak(utterThis);
}



function check(){
    var img = document.getElementById("capture_img");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
       
       document.getElementById("result_gesture_meaning").innerHTML= results[0].label;
       document.getElementById("result_gesture_meaning2").innerHTML= results[1].label;
       prediction1=results[0].label;
       prediction2 = results[1].label;
      speak();
       if(results[0].label == "Best" ){
           document.getElementById("result_gesture").innerHTML= "&#128077;"
       }

       if(results[0].label == "Amazing" ){
        document.getElementById("result_gesture").innerHTML= "&#128076;"
    }

    if(results[0].label == "Victory" ){
        document.getElementById("result_gesture").innerHTML= "&#9996;"
    }
    
    if(results[1].label == "Best" ){
        document.getElementById("result_gesture2").innerHTML= "&#128077;"
    }

    if(results[1].label == "Amazing" ){
     document.getElementById("result_gesture2").innerHTML= "&#128076;"
 }

 if(results[1].label == "Victory" ){
     document.getElementById("result_gesture2").innerHTML= "&#9996;;"
 }
 
       
   }
}