import { DataTypes, Model } from "sequelize"
import sequelize from "./connection"


// User Schema
export class User extends Model {}
User.init({ 
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    passwordHash: {
        allowNull: false,
        type: DataTypes.CHAR(64)
    },
}, {
    defaultScope : {
        rawAttributes: { exclude : [ "passwordHash" ]}
    },
    modelName: "users",
    sequelize
});

// User session to set session after user initialize
export class UserSession extends Model {}

UserSession.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.CHAR(32)
    },
    userId: {
        allowNull: false,
        references: {
            key: "id",
            model: "users"
        },
        type: DataTypes.UUID
    },
    expiresAt: {
        allowNull: false,
        type: DataTypes.CHAR(32)
    },
}, {
    modelName: "userSessions",
    paranoid: false,
    sequelize,
    updatedAt: false
});