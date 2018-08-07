var friendsArray = require ("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });
    app.post("/api/friends", function(req, res) {
        var friendFind = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestFriend = 0;

        for (var i = 0; i<friendsArray.length; i++){
            var difference = 0;
            for (var j = 0; j<friendFind.length; j++){
                difference += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(friendFind[j])));
            }
            scoresArray.push(difference);
        }
        for(var i = 0; i<scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestFriend]){
                bestFriend = i;
            }
        }

        var bestie = friendsArray[bestFriend];
        res.json(bestie);

        friendsArray.push(req.body);
    });

    app.post("/api/clear", function() {
        friendsArray = [];
        console.log(friendsArray);
    });
};