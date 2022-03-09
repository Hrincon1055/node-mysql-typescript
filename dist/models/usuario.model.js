"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_db_1 = __importDefault(require("../db/connection.db"));
const Usuario = connection_db_1.default.define("Usuario", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Usuario;
//# sourceMappingURL=usuario.model.js.map