import prisma from "./../../../../libs/client";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const id = req.body.id;
      await prisma.game.create({
        data: {
          user: {
            connect: {
              id: id,
            },
          },
        },
      });
      res.json({ ok: true, test: "ok" });
    } catch (e) {
      if (e.code === "P2002") {
        console.log("이미 게임 table이 존재합니다.");
      } else {
        console.log(e);
      }
    }
  } else if (req.method === "PATCH") {
    try {
      const { userId, point } = req.body;
      console.log(point);
      const response = await prisma.game.update({
        where: { userId: userId },
        data: { totalPoint: point },
      });
      res.json(response);
    } catch (e) {
      console.log(e);
    }
  }
};
