import { Schema, model } from "mongoose";

export interface Usuario {
  nombre: string;
  edad: number;
  profesion: string;
}

const usuarioSchema = new Schema<Usuario>({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  profesion: {
    type: String,
    required: true
  }
});

export const usuario = model<Usuario>("usuario", usuarioSchema);
