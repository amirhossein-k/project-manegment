import {NextRequest, NextResponse} from "next/server";
export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();
  const {name} = reqBody;

  if (name === "فلاح") {
    const response = NextResponse.json(
      {message: "خوش امدی فرزندم"},
      {status: 201}
    );

    response.cookies.set("tokken", name, {httpOnly: true});

    return response;
  } else {
    throw {error: "متاسفم"};
  }
};
