var friends = require("../data/friends");


// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {
    // Displays all friends
    app.get("/api/friends", function(req, res) {
        res.json(friends); //maybe w/o return
    });

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        }
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference = 0;
        console.log(userScores);
        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            console.log(currentFriend.name);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }

            }
        }
        friends.push(userData);
        res.json(bestMatch);

    });
}