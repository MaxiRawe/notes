let db = require('../database/models')

let detailController = {
    detail: function(req,res){
        return res.render('detail');
    },
    edit: function(req,res){
        db.Notas.findByPk(req.params.id)
        .then(function(unaNota){
            res.render('detail', {unaNota: unaNota})
        })
     },
    save: function(req,res){
        db.Notas.update({
        title: req.body.title,
        description: req.body.description
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            res.redirect('/')
        })
    }
       
    
}

module.exports = detailController;