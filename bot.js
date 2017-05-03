//Tells our console that the bot is starting.
console.log("The Bot is starting now!");

//Require the twit package
var Twit = require('twit');

//We need to authroize
var T = new Twit({
    consumer_key: 'lVqeIOVXWGLGjgMOfYHTlzoPT',
    consumer_secret: 'I6s4fVGVwiCKvGVPhIFjTPh3qXX10UgCEHCdrZ93aGcqaJDcyz',
    access_token: '847898819505274880-rHsAVfW4EEzJ2n0Ch8EuDZdeuUmBOYa',
    access_token_secret: '6AUsGPCJoMKEmi79HnZLHaf6kkMUGcO1tO0z48uKx6xIR',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
})




//GET -> search by hashtag, location, user, etc
//POST -> Post tweets
//STREAM -> follows, you can @them, mentions, you can @ them
// 

//T.get('search/tweets', { q: 'banana since:2011-07-11', count: 2 }, function(err, data, response) {
//console.log(data)
//})

//var parameters = {
//    q: 'banana since:2011-07-11',
//    count: 2,
//    lang: 'en'
//    
//}
//
//T.get('search/tweets', parameters, gotData);
//
//function gotData(err, data, response){
//    
//    var tweets = data.statuses;
//    
//    for(var i = 0; i < tweets.length; i++){
//        
//    console.log(tweets[i].text);    
//    }
//    
//    
//}

//var tweet = { status: 'hello world!' }
//
//T.post('statuses/update', tweet, gotData);

//POST TWEET
tweetIt();

//setInterval(tweetIt, 1000*45);

function tweetIt() {

    var r = Math.floor(Math.random() * 100);

    var tweet = {
        status: 'Here is the current random number ' + r + ' #providencehigh #phs #ecs #2017'
    }

    T.post('statuses/update', tweet, gotData);

    function gotData(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        } else {
            console.log("It posted!");
        }


    }




}

////followTweet();
//
////function followTweet() {
////    var stream = T.stream('user');
//
////    stream.on('follow', followed);
//
//    function followed(eventMsg) {
//        var name = eventMsg.source.name;
//        var screenName = eventMsg.source.screen_name;
//        tweetIt2('@' + screenName + ' how do you do?');
//
//        var fs = require('fs');
//        console.log('finished tweet json');
//        var json = JSON.stringify(eventMsg, null, 2);
//        fs.writeFile("tweet.json", json);
//        
//    }
//
//}
//
//function tweetIt2(txt) {
//    var tweet = {
//        status: txt
//
//
//
//    }
//
//    T.post('statuses/update', tweet, tweeted);
//
//    function tweeted(err, data, response) {
//        if(err) {
//            console.log("Something went wrong!");
//        } else {
//            console.log("You were followed");
//        }
//    }
//
//
//}

var fs = require('fs');
//processing();

function processing(){
    console.log("uploaded image");
    var r = 1;
    var filename = 'pictures/image' + r + '.jpg';
    
    var parameters = {
        encoding: 'base64'
        
    }
    
    var b64 = fs.readFileSync(filename, parameters);
    
    T.post('media/upload', {media_data: b64}, uploaded);
    
    function uploaded(err, data, response){
        var id = data.media_id_string;
        var tweet = {
            
            status: '#ROFL #LOL xD',
            media_ids: [id]
            
        }
        
        T.post('statuses/update', tweet, tweeted);
        
        function tweeted(err, data, response){
            if (err){
                console.log("Something went wrong!");
            }else{
                console.log("It posted!");
            }
            
        }
        
    }
    
    
}



