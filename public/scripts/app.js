/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
   $('#tweetcompose').on('click', function() {
      $('.new-tweet').slideToggle('normal');
      $('#tweetText').focus();
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

        event.preventDefault();

        if(($('#tweetText').val()==null) || ($('#tweetText').val()=="")){
          alert("The tweet text box is emty");
        } else if ($('#tweetText').val().length >= 140) {
          alert("More than 140 characters not allowed");
        } else {
    
        var tweetData = $('#tweetText').val();
        console.log(tweetData);
        var data = {
          tweetText: $('#tweetText').val()
        };

      $.ajax({ 
        method: 'POST',
        url: '/tweets',
        data: $('#tweetform').serialize(),
        success: function(result){
          console.log("success");
          loadTweets();
          
          renderTweets(result);
                  
        },
        error: function(error){
          console.log("there was an error in making ajax cal compose");
          console.log(error);
        }
      });
      }
    });
 
  }
  function renderTweets(tweets) {
    $('#tweets-container').empty();
    // loops through tweets
    for(var i = 0; i < tweets.length; i++){
      $('#tweets-container').prepend(createTweetElement(tweets[i]));
    }
  }

  function createTweetElement (tweet)  {

    var $article = $('<article class="new-article">');
    var $section = $('<section class="tweet-section">')
      .append('<p>' + tweet.content.text + '</p>')
    var $header = $('<header class="tweet-header">')
      .append('<img class="avatars" src="' + tweet.user.avatars.small + '">')
      .append('<h3>' + tweet.user.name + '</h3>')
      .append('<p>' + tweet.user.handle + '</p>')
      var $footer = $('<footer class="tweet-footer">')
      .append('<p>' + moment(tweet.created_at).fromNow()  + '</p>')
      .append()

     $article.append($header);
     $article.append($section);
     $article.append($footer);
  

    return $article;
  }

  loadTweets();
  ComposeTweet();

//Document Ready Closing Brackets
});    