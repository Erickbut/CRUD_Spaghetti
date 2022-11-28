/*{
    id: 1,
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    password: 'string',
    birthday: 'YYYY/MM/DD'
}*/

const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  last_name: {
    type: DataTypes.TEXT,
    defaultValue: 'Anonymous'
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE,
    defaultValue: 'None'
  }
}, {
  timestamps: false //? No agrega las columnas created_at y updated_at
})

module.exports = Users