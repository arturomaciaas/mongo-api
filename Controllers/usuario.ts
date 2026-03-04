import { Request, Response } from "express";
import { Usuario, usuario } from "../Models/usuario"

export const pruebas = (req: Request, res: Response): void => {
  res.status(200).send({
    mensaje: "Buena ruta bro"
  });
};

export const saveUsuario = async (req: Request, res: Response): Promise<void> => {
  const params = req.body;
  const user: Usuario = {
    nombre: params.nombre,
    edad: params.edad,
    profesion: params.profesion
  };

  try {
    await new usuario(user).save();
    res.status(200).send({
      message: "Se guardó el registro mi bro"
    })
  } catch (err) {
    console.log(err);
  };
};

export const getUsuarios = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarios = await usuario.find();
    res.status(200).send({
      usuarios
    })
  } catch (err) {
    console.log(err);
  }
}

export const updateUsuario = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  const params = req.body;

  try {
    const usuarioActualizado = await usuario.findByIdAndUpdate(userId, params, { new: true });

    if (!usuarioActualizado) {
      res.status(404).send({
        message: "No se encontró el usuario mi bro"
      });
      return;
    }

    res.status(200).send({
      usuario: usuarioActualizado
    });
  } catch (err) {
    console.log(err);
  }
}

export const deleteUsuario = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;

  try {
    const usuarioEliminado = await usuario.findByIdAndDelete(userId);

    if (!usuarioEliminado) {
      res.status(404).send({
        message: "No se encontró el usuario mi bro"
      });
      return;
    }

    res.status(200).send({
      message: "Se eliminó el usuario mi bro"
    });
  } catch (err) {
    console.log(err);
  }
}
