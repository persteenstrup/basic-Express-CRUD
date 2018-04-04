var users = require("./../controllers/usercontroller.js");
module.exports = function(app){
    app.get("/", function(req,res){
        users.index(req,res);
    });

    app.get('/newuser/:username', function(req,res){
        users.create(req, res)
    })
};
