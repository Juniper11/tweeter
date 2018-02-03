  for(var tweets in #tweets-container) {
    // calls createTweetElement for each tweet
    createTweetElement(tweets); 
    // takes return value and appends it to the tweets container
    $('#tweets-container').append($tweet); 
  }
  return #tweets-container;