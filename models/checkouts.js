module.exports = (sequelize, DataTypes) => {
    const Checkouts = sequelize.define(
        "Checkouts",
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
            firstname: {
                type: DataTypes.STRING
            },
            lastname: {
                type: DataTypes.STRING
            },
            address1: {
                type: DataTypes.STRING
            },
            address2: {
                type: DataTypes.STRING
            },
            city: {
                type: DataTypes.STRING
            },
            state: {
                type: DataTypes.STRING
            },
            postalcode: {
                type: DataTypes.STRING
            },
            country: {
                type: DataTypes.STRING
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
        tableName: "checkouts",
    }
    );
    return Checkouts;
}