console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000*60*60*24);


function tweetIt() {
  var tweet = {
    status: 'hello world!'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log('Something went wrong');
      console.log(err);
    } else {
      console.log('Just tweeted: ' + data.text);
    }
  }
}
