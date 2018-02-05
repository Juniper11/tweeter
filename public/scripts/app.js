/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  function checkTweetContent(){
    if(($('#tweetText').val()==null) || ($('#tweetText').val()=="")){
      alert("The tweet text box is emty");
    } else if ($('#tweetText').val() >= 140) {
      alert("More than 140 characters not allowed");
    } else {
      //Calls loadTweet function if error conditions are not met
    loadTweets(); 
    }
  }

//for Toggling ComposeBox on 'click'
$('.composebox').on('click', function() {
  $('.new-tweet').slideToggle(function() {
    $(this).find('textarea').select();
  });
});

  //Fetching Tweets with AJAX Step
  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: function(result){
        
        renderTweets(result);
      
        //create a function to render tweets
      },
      error: function(error){
        console.log("there was an error in making ajax call");
        console.log(error);
      }
    });
  }

    function ComposeTweet() {
      $('form').on('submit', (event) => {
        console.log("form click");

      event.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/tweets',
        text: $('textarea').val(),
        success: function(result){
          loadTweets();
          renderTweets(result);
          //create a function to render tweets
        },
        error: function(error){
          console.log("there was an error in making ajax cal compose");
          console.log(error);
        }
      });
      });
 
  }
  function renderTweets(tweets) {
  
    // loops through tweets
    for(var i = 0; i < tweets.length; i++){
      createTweetElement(tweets[i]); 
      //   // takes return value and appends it to the tweets container
      //   // $('#tweets-container').append($tweet); 
    }
    // for(var item in tweets) {
    //   console.log("render-tweets for loop", item)
    //   // calls createTweetElement for each tweet
    //   createTweetElement(item); 
    //   // takes return value and appends it to the tweets container
    //   // $('#tweets-container').append($tweet); 
    // }
    // return;
  }

  function createTweetElement (tweet)  {
    console.log("tweet", tweet);
    console.log("inside createtweetelement", tweet.user.name)
    console.log(tweet.content.text, "tweet.content.text");
  
    var tweetContainer = $("section#tweets-container");
    
    // var $tweet = $("section#tweet-container").addClass("tweet");
    // var $header = $("<header>").text(tweet.user.name);
    // $tweet.append($header)
    var tweetContent = $("<article>").text(tweet.content.text).addClass("tweet-section");
    // var tweetContent = $("<article>").text(tweet.content.text).addClass("tweet");
    // console.log("tweetContent", tweetContent);

    // $("section#tweets-container").append(tweetContent);
    $("section#tweets-container").addClass("tweet-section").append(tweetContent);
   
    console.log(tweet.content, "tweet.content");
  
    // return $tweet;
  }

  // $('.new-tweet').hide();
  loadTweets();
  ComposeTweet();


  //Document Ready Closing Brackets
});

