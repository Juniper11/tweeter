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


  // var jazzHands = "hi";

  // // Event handling
  // $("#food-form").on('submit', (event) => {
  //   console.log(event);
  //   event.preventDefault();
  //   const text = $('#food-field').val();

  //   $('<li>')
  //     .text(text)
  //     .css({'color': 'tomato'})
  //     .appendTo($('#tastesBad'));
  // });

  // // Delegation
  // $('ul').on('click', 'li', function(event){
  //     $(this).fadeOut();
  // });

  // $('h1').on('click', function(event) {
  //   // jQuery UI
  //   $(this).effect('shake');
  // });
// });

//**********************************************************************************/

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
  renderTweets(data);
  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like

  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


  //Fetching TWeets with AJAX Ste
// function loadtweets() {



// }


});

//**************************************************************************************** */
// Fake data taken from tweets.json
const data = [
   {
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
  },
 {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  console.log("render-tweets")
  // loops through tweets
  for(var item in data) {
    console.log("render-tweets for loop", data[item])
    // calls createTweetElement for each tweet
    createTweetElement(data[item]); 
    // takes return value and appends it to the tweets container
    // $('#tweets-container').append($tweet); 
  }
  // return;
}

//renderTweets(data);

// function createTweetElement (tweet)  {
  
//   var $tweet = $("<article>").addClass("tweet");
//   var $header = $("<header>").text(tweet.user.name);
//   $tweet.append($header)
//   var tweetContent = $("<p>").text(tweet.content.text);
//   $tweet.append(tweetContent)
    
//   return $tweet;
// }
