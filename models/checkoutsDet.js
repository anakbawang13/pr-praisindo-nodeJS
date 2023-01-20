module.exports = (sequelize, DataTypes) => {
    const CheckoutsDet = sequelize.define(
        "CheckoutsDet",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            kodebeli: {
                type: DataTypes.STRING
            },
            name: {
                type: DataTypes.STRING
            },
            qty: {
                type: DataTypes.INTEGER
            },
            price: {
                type: DataTypes.INTEGER
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
        tableName: "checkoutsDet",
    }
    );
    return CheckoutsDet;
}