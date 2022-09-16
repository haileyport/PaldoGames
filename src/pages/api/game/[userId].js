import prisma from "./../../../../libs/client";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const userId = req.query.userId;
      const response = await prisma.game.findFirst({
        where: {
          userId: userId,
        },
      });
      res.json({ ok: true, response });
    } catch (e) {
      console.log(e);
    }
  }
};
