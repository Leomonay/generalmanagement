import { baseUrl as url } from "@/appConfig";

export function decodeJwt(token) {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Invalid token format");
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  return { header, payload };
}

async function serverAction(data) {
  const { endpoint, method, body, token } = data;
  const jwt = token || localStorage.getItem("gestion_token");
  const headers = { "Content-type": "application/json" };
  if (token) headers.Authorization = jwt;
  const settings = { method, headers };
  if (body) settings.body = JSON.stringify(body);
  const response = await fetch(url + endpoint, settings);
  return await response.json();
}

export const requests = {
  get: async (endpoint, token) =>
    await serverAction({ endpoint, method: "GET", token }),
  post: async (endpoint, body, token) =>
    await serverAction({ endpoint, method: "POST", body, token }),
  put: async (endpoint, body, token) =>
    await serverAction({ endpoint, method: "PUT", body, token }),
  delete: async (endpoint, token) =>
    await deleteAction({ endpoint, method: "DELETE", token }),
};
