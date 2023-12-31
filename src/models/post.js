'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User);
    }
  }
  Post.init({
    userID: DataTypes.STRING,
    desc: DataTypes.STRING,
    img: DataTypes.STRING,
    like: {
      type: DataTypes.STRING,
      get() {
        const stringValue = this.getDataValue('like');
        return stringValue ? stringValue.split(',') : [];
      },
      set(value) {
        const arrayValue = value ? value.join(',') : '';
        this.setDataValue('like', arrayValue);
      },
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};