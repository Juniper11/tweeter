/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// *ction() {
// // ****************$(f*****************************************************************/
// un  $(".new-tweet form ").on('submit', function(event){
// //     event.preventDefault();
//     const data = $(this).serialize();
//     $.post("/tweets", data)

//   });
// })



// Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }


//
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
          // renderTweets(result);
          //create a function to render tweets
        },
        error: function(error){
          console.log("there was an error in making ajax cal composel");
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
  
    var tweetContainer = $("section#tweets-container");
    
    // var $tweet = $("section#tweet-container").addClass("tweet");
    // var $header = $("<header>").text(tweet.user.name);
    // $tweet.append($header)
    var tweetContent = $("<article>").text(tweet.content.text).addClass("tweet");
    // console.log("tweetContent", tweetContent);
    $("section#tweets-container").append(tweetContent)
  
    // return $tweet;
  }

  // $('.new-tweet').hide();
  loadTweets();
  ComposeTweet();



  


  
});

