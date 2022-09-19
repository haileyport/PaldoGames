import prisma from "../../../../libs/client";

// eslint-disable-next-line import/no-anonymous-default-export
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
