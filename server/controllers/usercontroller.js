var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
    index: function(req,res){
        User.find({}, function(err,users){
            res.json(users)
        })
    },
    create: function(req,res){
        User.create({name: req.params.username}, function(err, user){
            res.redirect('/');
        });
    },

    destroy: function(req,res){
        User.remove({name: req.params.username}, function(err, user){
            res.redirect('/')
        })
    },

    update: function(req,res){
        User.findOneAndUpdate({name:req.params.oldUsername},{$set: {name:req.params.newUsername}},function(err,outcome){
            if(err){
                console.log("something went wrong");
            }
            res.redirect("/");
        })
    },
}
