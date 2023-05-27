"use client";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { decodeJwt, requests } from "@/utils";
import { labels, lang } from "@/consts/consts";
import Alert from "./ErrorAlert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleError() {
    console.log("Login Failed");
  }

  async function handleSuccess(credentialResponse: CredentialResponse) {
    if (!credentialResponse.credential) {
      setError(labels.NoGoogleCredentials[lang]);
    } else {
      const response = await requests.post(
        "/auth",
        {},
        credentialResponse.credential
      );
      if (response.error) {
        setError(response.error);
      } else {
        const { payload } = decodeJwt(response.token);
        setEmail(payload.email);
      }
    }
  }

  return (
    <div className="py-5 w-fit mx-auto" onClick={() => setError("")}>
      {email ? (
        `Se ha iniciado sesión con el email ${email}`
      ) : (
        <GoogleLogin
          useOneTap
          onError={handleError}
          onSuccess={handleSuccess}
        />
      )}
      {error && <Alert alertType="error" message={error} />}
    </div>
  );
}
