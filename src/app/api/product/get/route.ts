import prisma from "@/db/prismaDb";

import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request) {
  const reqBody = await req.json();

  const {dataa} = reqBody;
  console.log(dataa);

  const product = await prisma.product.findMany({
    where: {
      time: dataa,
    },
    include: {list: true},
  });

  if (product) {
    console.log(product);
    return NextResponse.json({message: "یافتم فزرندم", data: product});
  } else {
    console.log("object");
    throw {error: "چک کن"};
    return NextResponse.json({error: "error"});
  }
}

export async function GET(req: Request) {
  const product = await prisma.productItem.findMany({
    where: {
      title: {
        in: ["buy", "sale", "sod", "kom"],
      },
    },
  });

  if (product) {
    let sodTotla = 0;
    let komTotla = 0;
    let saleTotla = 0;
    let buyTotla = 0;
    product.map((item) => {
      if (item.title === "sod") {
        sodTotla += Number(item.subtitle);
      } else if (item.title === "kom") {
        komTotla += Number(item.subtitle);
      } else if (item.title === "sale") {
        saleTotla += Number(item.subtitle);
      } else if (item.title === "buy") {
        buyTotla += Number(item.subtitle);
      }
    });
    const fif = (item: string) => {
      switch (item.length) {
        case 4:
          return "هزار";
        case 5:
          return "هزار";
        case 6:
          return "هزار";
        case 7:
          return "میلیون";
        case 8:
          return "میلیون";
        case 9:
          return "میلیون";
        case 10:
          return "میلیارد";
        case 11:
          return "میلیارد";
        case 12:
          return "میلیارد";
        default: {
          return "";
        }
      }
    };
    const fifsod = (item: string) => {
      switch (item.length - 1) {
        case 4:
          return "هزار";
        case 5:
          return "هزار";
        case 6:
          return "هزار";
        case 7:
          return "میلیون";
        case 8:
          return "میلیون";
        case 9:
          return "میلیون";
        case 10:
          return "میلیارد";
        case 11:
          return "میلیارد";
        case 12:
          return "میلیارد";
        default: {
          return "";
        }
      }
    };
    console.log(product);
    return NextResponse.json({
      message: "یافتم فزرندم",
      data: [
        {
          subtitle: saleTotla.toString(),
          title: "فروش",
          fi: fif(saleTotla.toString()),
        },
        {
          subtitle: buyTotla.toString(),
          title: "خرید",
          fi: fif(buyTotla.toString()),
        },
        {
          subtitle: sodTotla.toString(),
          title: "سود",
          fi: fifsod(sodTotla.toString()),
          naa: sodTotla < 0 ? true : false,
        },
        {
          subtitle: komTotla.toString(),
          title: "کومیسون",
          fi: fif(komTotla.toString()),
        },
      ],
    });
  } else {
    console.log("object");
    throw {error: "چک کن"};
    return NextResponse.json({error: "error"});
  }
}
