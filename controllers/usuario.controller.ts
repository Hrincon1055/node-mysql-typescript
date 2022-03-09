import { Request, Response } from "express";
import Usuario from "../models/usuario.model";

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();

    return res.status(200).json({
      susecces: true,
      usuarios,
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
    return res.status(500).json({
      susecces: false,
      msg: "Ha ocurrido un error.",
    });
  }
};
export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
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
  } catch (error) {
    console.log(`ERROR: ${error}`);
    return res.status(500).json({
      susecces: false,
      msg: "Ha ocurrido un error.",
    });
  }
};
export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existeEmail = await Usuario.findOne({ where: { email: body.email } });
    if (existeEmail) {
      return res.status(400).json({
        susecces: false,
        msg: "Ya existe un usuario con el email. " + body.email,
      });
    }
    const usuario = Usuario.build(body);
    await usuario.save();
    return res.status(200).json({
      susecces: true,
      usuario,
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
    return res.status(500).json({
      susecces: false,
      msg: "Ha ocurrido un error.",
    });
  }
};
export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        susecces: false,
        msg: "No exite un usuario con ese id.",
      });
    }
    await usuario.update(body);
    return res.status(200).json({
      susecces: true,
      usuario,
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
    return res.status(500).json({
      susecces: false,
      msg: "Ha ocurrido un error.",
    });
  }
};
export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        susecces: false,
        msg: "No exite un usuario con ese id.",
      });
    }
    await usuario.destroy();
    return res.status(200).json({
      susecces: true,
      msg: "Usuario eliminado",
    });
  } catch (error) {
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
};
