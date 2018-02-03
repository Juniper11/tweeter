/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//**********************************************************************************/
$(function() {
  $(".new-tweet form ").on('submit', function(event){
    event.preventDefault();
    const data = $(this).serialize();
    $.post("/tweets", data)

  });
})



// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


//
$(document).ready(function() {
  // var $tweet = createTweetElement(tweetData);
  //renderTweets(data);
  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like

  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
  //Form Validataion Exercise
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
        console.log("the ajax call was successful");
        console.log(result); 
        renderTweets(result);
        //create a function to render tweets
      },
      error: function(error){
        console.log("there was an error in making ajax call");
        console.log(error);
      }
    });
 
  }
  function renderTweets(tweets) {
    console.log("render-tweets")
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

  $('.new-tweet').hide();
  loadTweets();



  


  
});

//**************************************************************************************** */
// Fake data taken from tweets.json
// const data = [
//    {
//   "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//  {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];


//renderTweets(data);

// function createTweetElement (tweet)  {
  
//   var $tweet = $("<article>").addClass("tweet");
//   var $header = $("<header>").text(tweet.user.name);
//   $tweet.append($header)
//   var tweetContent = $("<p>").text(tweet.content.text);
//   $tweet.append(tweetContent)
    
//   return $tweet;
// }
