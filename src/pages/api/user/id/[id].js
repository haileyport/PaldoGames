// import prisma from "./../../../../libs/client";
import { prisma } from "@prisma/client";

export default async (req, res) => {
  const id = req.query.id;
  if (req.method === "GET") {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    res.json({ ok: true, user });
  }
};
