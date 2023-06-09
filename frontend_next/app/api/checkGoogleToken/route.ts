import { OAuth2Client } from "google-auth-library";
import { CLIENT_ID } from "@/consts/consts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request: Request) {
  const body = await request.json();
  const client = new OAuth2Client(CLIENT_ID);
  if (!body) {
    const response = NextResponse.json(
      {
        message: "Invalid body",
      },
      {
        status: 400,
      }
    );
    return response;
  }

  async function verify(body: any) {
    const ticket = await client.verifyIdToken({
      idToken: body.token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
  }

  try {
    const payload = await verify(body);
    return NextResponse.json(payload);
  } catch (error) {
    const response = NextResponse.json(
      {
        code: 400,
        message: error instanceof Error ? error.message : "Unknown",
      },
      {
        status: 400,
      }
    );
    return response;
  }
}
