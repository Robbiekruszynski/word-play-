var sentInp ="this is a sentence along with a STRING";
function vowelHunt (sentence) {
  var newSentence=sentence.toLowerCase();
  var outputSentence="";
  for (var i=0; i < sentence.length; i++) {
    if (newSentence[i] === "a" || newSentence[i] === "e" || newSentence[i] === "i" || newSentence[i] === "o" || newSentence[i] ==="u" || newSentence[i] === "y") {
      outputSentence+="-"
    } else {
      outputSentence+= sentence[i];
    }
  }
  return outputSentence;
}

$(document).ready(function(){
  $('form#mySpecialForm').submit(function(event){
    event.preventDefault();
    var userInput = $("input#mySpecialInput").val();

    $("#output").text(vowelHunt(userInput));
  })
})
