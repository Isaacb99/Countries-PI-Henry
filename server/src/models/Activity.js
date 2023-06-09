const { DataTypes, Sequelize } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nombre: { type: DataTypes.STRING, allowNull: false },
        dificultad: { type: DataTypes.ENUM("1","2","3","4","5"), allowNull: false },
        duracion: { type: DataTypes.ENUM("1","2","3","4","5","6","7","8","9","10","11","12"), allowNull: false },
        temporada: { type: DataTypes.ENUM("Verano","Otoño","Invierno","Primavera"), allowNull: false }
    }, { timestamps: false })
}