
var friends = require("../data/friends");


// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Displays a single character, or returns false
  app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  });