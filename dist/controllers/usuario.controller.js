"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_model_1.default.findAll();
        return res.status(200).json({
            susecces: true,
            usuarios,
        });
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
        return res.status(500).json({
            susecces: false,
            msg: "Ha ocurrido un error.",
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                susecces: false,
                msg: "Usuario no existe",
            });
        }
        return res.status(200).json({
            susecces: true,
            usuario,
        });
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
        return res.status(500).json({
            susecces: false,
            msg: "Ha ocurrido un error.",
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_model_1.default.findOne({ where: { email: body.email } });
        if (existeEmail) {
            return res.status(400).json({
                susecces: false,
                msg: "Ya existe un usuario con el email. " + body.email,
            });
        }
        const usuario = usuario_model_1.default.build(body);
        yield usuario.save();
        return res.status(200).json({
            susecces: true,
            usuario,
        });
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
        return res.status(500).json({
            susecces: false,
            msg: "Ha ocurrido un error.",
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                susecces: false,
                msg: "No exite un usuario con ese id.",
            });
        }
        yield usuario.update(body);
        return res.status(200).json({
            susecces: true,
            usuario,
        });
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
        return res.status(500).json({
            susecces: false,
            msg: "Ha ocurrido un error.",
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                susecces: false,
                msg: "No exite un usuario con ese id.",
            });
        }
        yield usuario.destroy();
        return res.status(200).json({
            susecces: true,
            msg: "Usuario eliminado",
        });
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
        return res.status(500).json({
            susecces: false,
            msg: "Ha ocurrido un error.",
        });
    }
    res.json({
        msg: "Delete usuario.",
        id,
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.controller.js.map