import prisma from "@/db/prismaDb";
import {List, ListGet} from "../../types";

export const GetList = async () => {
  try {
    console.log("r");
    const list: ListGet[] = await prisma.product.findMany({
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
