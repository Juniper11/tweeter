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
  } //checkTweetContent ends here.

  //for Toggling ComposeBox on 'click'
  // $('.composebox').on('submit', function() {
   $('#tweetcompose').on('click', function() {
      alert("hello");
      $('.new-tweet').slideToggle('normal');
      $('#tweetText').focus();
      // $(this).find('tweetText').select();
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

        var tweetData = $('#tweetText').val();
        console.log(tweetData);
        var data = {
          tweetText: $('#tweetText').val()
        };
      event.preventDefault();
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
    var $img =$("<img>").addClass("avatars");
    $img.attr('src, data.user.avatars.small');
    var $h3 =$("<h3>");
    $h3.text(data.user.avatars.small);
    var $headerP =$("<p>");
    $headerP.text(data.user.handle);
    var $header = $("<header>").addClass("tweeter-header");
    $header.append($img);
    $header.append($h3);
    $header.append($headerP);

    var $sectionP = $("<p>");
    $sectionP.text(data.content.text);
    var $section = $("<section>").addClass("tweet-section")
    $section.append($sectionP);

    var $footerP = $("<p>");
    $footerP.text(moment(data.created_at).format('llll'));
    var $footer = $("<footer>").addClass("tweeter-footer");
    $footer.append($footerP);

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

    var $article = $("<article>").addClass("new-article")
    $article.append($header);
    $article.append($section);
    $article.append($footer);
    $article.data('id', data._id);

    // return $article;
  }

  // $('.new-tweet').hide();
  loadTweets();
  ComposeTweet();


  //Document Ready Closing Brackets
});

