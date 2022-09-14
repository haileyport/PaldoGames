import prisma from "../../../libs/client";

export default async (req, res) => {
  if (req.method === "GET") {
    const users = await prisma.user.findMany({});
    res.json({ ok: true, users });
  }
};
