import {NextRequest, NextResponse} from "next/server";
import prisma from "@/db/prismaDb";
export async function PUT(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const {id, car, model, body, prope, buy, sale, kom, som} = reqBody;

    var sod = Number(sale) - Number(buy);

    const aa = await prisma.productItem.findMany({where: {owerId: id}});

    if (aa) {
      const a1 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[0].id},
            data: {subtitle: car},
          });
          res(w);
        }, 300);
      });
      const a2 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[1].id},
            data: {subtitle: model},
          });
          res(w);
        }, 300);
      });
      const a3 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[2].id},
            data: {subtitle: body ?? ""},
          });
          res(w);
        }, 300);
      });
      const a4 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[3].id},
            data: {subtitle: prope ?? ""},
          });
          res(w);
        }, 300);
      });
      const a5 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[4].id},
            data: {subtitle: som ?? ""},
          });
          res(w);
        }, 300);
      });
      const a6 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[5].id},
            data: {subtitle: buy},
          });
          res(w);
        }, 300);
      });
      const a7 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[6].id},
            data: {subtitle: sale ?? ""},
          });
          res(w);
        }, 300);
      });
      const a8 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[7].id},
            data: {subtitle: kom ?? ""},
          });
          res(w);
        }, 300);
      });
      const a9 = new Promise((res, rej) => {
        setTimeout(() => {
          const w = prisma.productItem.update({
            where: {id: aa[8].id},
            data: {subtitle: sod.toString() ?? ""},
          });
          res(w);
        }, 300);
      });
      Promise.all([a1, a2, a3, a4, a5, a6, a7, a8, a9]).then((values) => {
        // console.log(values);
      });

      // console.log(deletee, "45trtg");
    }

    return NextResponse.json({message: "اپدیت شد"});
  } catch (error) {
    throw {error: "چک کن"};
  }
}
