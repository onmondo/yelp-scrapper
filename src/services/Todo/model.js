module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'todo',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      task_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      task: {
        type: DataTypes.STRING
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      modified_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      removed_at:{
        type: DataTypes.DATE
      }
    },
    {
      paranoid: true,
      underscored: true
    }
  )
}