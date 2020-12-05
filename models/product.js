module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Product",
    {
      productName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      productImageUrl: {
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
