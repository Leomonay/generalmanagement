"use client";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { decodeJwt } from "@/utils";
import { labels, lang } from "@/consts/consts";
import Alert from "./ErrorAlert";
import { RootState } from "@/redux/store";
import { setUserData } from "@/redux/reducers/dataReducer";
import { useCheckTokenMutation } from "@/redux/services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Login() {
  const { user } = useSelector((state: RootState) => state.data);
  const [checkToken, result] = useCheckTokenMutation();
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  function handleError() {
    setLoginError("Credenciales incorrectas");
  }

  useEffect(() => {
    if (result.data?.token) {
      const data = decodeJwt(result.data.token);
      const userData = data.payload;
      if (userData.email) {
        dispatch(setUserData(userData));
        router.push("/home");
      }
    }
  }, [result]);

  async function handleSuccess(credentialResponse: CredentialResponse) {
    if (!credentialResponse.credential) {
      setLoginError(labels.NoGoogleCredentials[lang]);
    } else {
      await checkToken({
        token: credentialResponse.credential,
      });
    }
  }

  return (
    <div className="py-5 w-fit mx-auto" onClick={() => setLoginError("")}>
      {!user.email && (
        <GoogleLogin
          useOneTap
          onError={handleError}
          onSuccess={handleSuccess}
        />
      )}
      {loginError && <Alert alertType="error" message={loginError} />}
    </div>
  );
}
