import {ConnectDb} from "@/db/dbConfig";
import prisma from "@/db/prismaDb";

import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request) {
  const reqBody = await req.json();

  const {car, model, body, prope, buy, sale, kom, som} = reqBody;

  const product = await prisma.product.create({
    data: {
      time: "2023-9-17",
    },
  });

  if (product) {
    const sod = Number(sale) - Number(buy);

    const newproduct = await prisma.productItem.createMany({
      data: [
        {title: "car", subtitle: car, owerId: product.id},
        {title: "model", subtitle: model ?? "", owerId: product.id},
        {title: "body", subtitle: body ?? "", owerId: product.id},
        {title: "prope", subtitle: prope ?? "", owerId: product.id},
        {title: "som", subtitle: som ?? "", owerId: product.id},
        {title: "buy", subtitle: buy, owerId: product.id},
        {title: "sale", subtitle: sale, owerId: product.id},
        {title: "kom", subtitle: kom, owerId: product.id},
        {title: "sod", subtitle: sod.toString(), owerId: product.id},
      ],
    });

    return NextResponse.json({message: "اضافه شد"});
  } else {
    return NextResponse.json({error: "error"});
  }
}

export async function GET(req: Request) {
  try {
    const list = await prisma.product.findMany({
      // include: {
      //   list: true,

      // },
      select: {
        id: true,

        list: true,
        time: false,
      },
    });

    return NextResponse.json(list);
  } catch (error) {
    throw {error: "چک کن"};
  }
}
export async function PUT(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const {id} = reqBody;

    const deletee = await prisma.product.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({message: "پاک شد"});
  } catch (error) {
    throw {error: "چک کن"};
  }
}
