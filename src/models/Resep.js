const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Resep = sequelize.define("Resep", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  obat_id: DataTypes.INTEGER,
  nakes_id: DataTypes.INTEGER,
  pasien_id: DataTypes.INTEGER,
  kunjungan_id: DataTypes.INTEGER,
  deskripsi: DataTypes.TEXT,
  dosis: DataTypes.STRING,
});

module.exports = Resep;
