const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {
    sequelize.define('Movie',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        torrent:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {freezeTableName: true, timesStamp: true}
    );
};