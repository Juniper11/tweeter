function TweetExceed (charactersLeft) {
//https://stackoverflow.com/questions/31803300/coloring-the-text-depending-on-numeric-value-using-css
//For Changing underline on tweets that exceed 140 Characters 
  if (charactersLeft < 0) {
    document.getElementById("tweetText").style.textUnderlinePosition = "red";
  } else if ("charactersLeft" > 0) {
    return;
  }
}

