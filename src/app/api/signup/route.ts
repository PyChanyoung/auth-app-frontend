import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { name, id, email, password } = await req.json();

    console.log("Name: ", name);
    console.log("ID: ", id);
    console.log("Email: ", email);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error registering user" },
      { status: 500 }
    );
  }
}
