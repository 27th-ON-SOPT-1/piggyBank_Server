module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      profilePictureUrl: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
    },
    {
      freezeTalbeName: true,
      timestamps: true,
    },
  );
};
