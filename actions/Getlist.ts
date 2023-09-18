import prisma from "@/db/prismaDb";
import {Item, List, prodcutItem} from "../types";

export const GetList = async () => {
  try {
    const list: List[] = await prisma.product.findMany({
      include: {
        list: true,
      },
    });
    return list;
  } catch (error) {
    throw "error";
  }
};
