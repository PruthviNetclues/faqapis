const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/connection');

const Faq = sequelize.define('Faq', {
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Faq;