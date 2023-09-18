import prisma from "@/db/prismaDb";
import {Item, List, ListGet, prodcutItem} from "../types";

export const GetList = async () => {
  try {
    const list: ListGet[] = await prisma.product.findMany({
      include: {
        list: true,
      },
    });
    return list;
  } catch (error) {
    throw "error";
  }
};
