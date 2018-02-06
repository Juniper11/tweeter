$(document).ready(function(e){
  $('#tweetText').on('input',function(e){
    //var el = this.value
    var numberOfCharacters = this.value.length;
    var charactersLeft = 140 - numberOfCharacters;

    // console.log("Number of Characters", el.val().length);
    // console.log("charactersLeft", charactersLeft);  
   var el = $('#counter').text(charactersLeft);
    TweetExceed(charactersLeft, el);
  });

});

function TweetExceed (charactersLeft, el) {
//https://stackoverflow.com/questions/31803300/coloring-the-text-depending-on-numeric-value-using-css
  //For Changing underline on tweets that exceed 140 Characters 
  //console.log("hello");
    if (charactersLeft < 0) {
      el.css('color', 'red')
      // document.getElementById("tweetText").style.textUnderlinePosition = "red";
      // console.log("hello");
    } else {
      el.css('color', 'black')
    }
  }