let db = require('../database/models');

let mainController = {

    index: function(req, res){
       db.Notas.findAll()
       .then(function(notitas){
    return res.render('index', {
        notitas: notitas
    })
       })   
    },
    create: function(req,res){
        db.Notas.create({
            title: req.body.title,
            description: req.body.description
        }
        )
        .then(function() {
            res.redirect('/')
        })       
},
    delete: function(req,res){
        db.Notas.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            res.redirect('/')
        })
    }
}

module.exports = mainController;