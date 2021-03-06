module.exports = function(sequelize, dataTypes){
    let alias = "Notas";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING,
            notNull: true
        },
        description:{
            type: dataTypes.TEXT,
            notNull: true
        }
    }
    let config = {
        tableName: "notas",
        timestamps: false
    }

    const Notas = sequelize.define(alias, cols, config)
    return Notas;
}