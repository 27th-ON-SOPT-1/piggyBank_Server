module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Bank",
    {
      bankName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTalbeName: true,
      timestamps: true,
    },
  );
};
