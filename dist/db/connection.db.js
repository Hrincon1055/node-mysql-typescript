"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("node", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.db.js.map