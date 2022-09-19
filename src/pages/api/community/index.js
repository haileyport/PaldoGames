import prisma from "./../../../../libs/client";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const response = await prisma.community.findMany({});
      res.json({ ok: true, response });
    } catch (e) {
      console.log(e);
    }
  } else if (req.method === "POST") {
    try {
      const { title, content, id } = req.body;
      await prisma.community.create({
        data: {
          title: title,
          content: content,
          user: {
            connect: {
              id: id,
            },
          },
        },
      });
      res.json({ ok: true, test: "ok" });
    } catch (e) {
      console.log(e);
    }
  } else if (req.method === "DELETE") {
    try {
      const id = req.query.id;
      const deleteUser = await prisma.community.delete({
        where: {
          id: id,
        },
      });
      res.json({ ok: true, deleteUser });
    } catch (e) {
      console.log(e);
    }
  }
};
