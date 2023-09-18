import prisma from "@/db/prismaDb";
import {List} from "../../types";

export const GetList = async () => {
  try {
    console.log("r");
    const list: List[] = await prisma.product.findMany({
      include: {
        list: true,
      },
    });
    console.log("d");
    return list;
  } catch (error) {
    throw "error";
  }
};
