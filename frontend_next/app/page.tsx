"use client";

import { Metadata } from "next";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "@/components/Login";
import { CLIENT_ID } from "@/consts/consts";

export const metadata: Metadata = {
  title: "Inicia Sesión en GestionAppL",
};

export default function Landing() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <h1 className="mb-5 text-center">GestionAPPL te da la bienvenida</h1>
      <form className="w-80 max-w-full">
        <div className="form-control w-full mb-3">
          <label className="label">
            <span className="label-text">Ingresa tu usuario/email</span>
          </label>
          <input
            name="username"
            type="text"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Contraseña</span>
          </label>
          <input
            name="password"
            type="text"
            className="input input-bordered w-full"
          />
        </div>
        <Login />
      </form>
    </GoogleOAuthProvider>
  );
}
