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
  });

  $("button#likeAll").click(function(){
    $(".likeBox").prop('checked',true);
  });
  $("button#dontLikeAll").click(function(){
    $(".likeBox").prop('checked',false);
  });

  $("button#hateAll").click(function(){
    $(".hateBox").prop('checked', true);
  });

  $("button#nawAll").click(function(){
    $(".hateBox").prop('checked', false);
  });

  var favArray = [];
  var hateArray = [];
  $("#checkbox").submit(function(event){
    event.preventDefault();
      $("ul#checkOutput li").hide();
      $("input:checkbox[name=favorite-words]:checked").each(function(){
        var favWord = $(this).val();
        favArray.push(favWord);
        $('#checkOutput').append("<li>"+favWord+"</li>");
      })

  });
  $("#hateCheckBox").submit(function(event){
    event.preventDefault();
    $("ul#hateOutput li").hide();
    $("input:checkbox[name=hated-words]:checked").each(function(){
      var hateWord = $(this).val();
      hateArray.push(hateWord);
      $("#hateOutput").append("<li>"+hateWord+"</li>");
      })
    });
    $("#wellBeing").click(function(){
      if (favArray.length > hateArray.length) {
        alert ("You are an Optomist, and will enjoy a oolong and titilatting life. Raz-ma-taz!")
      } else {
        alert("Alert! You are a pessimist. Go sink your tooth into a moist cacao-covered litter-infused dongle!")
      }
    });
});
