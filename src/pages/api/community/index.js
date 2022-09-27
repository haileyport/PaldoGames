import prisma from "./../../../../libs/client";

// eslint-disable-next-line import/no-anonymous-default-export
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
          title,
          content,
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
  } else if (req.method === "PATCH") {
    try {
      const { id, title, content } = req.body;
      const response = await prisma.community.update({
        where: {
          id: id,
        },
        data: {
          title: title,
          content: content,
        },
      });
      res.json({ ok: true, response });
    } catch (e) {
      console.log(e);
    }
  } else if (req.method === "DELETE") {
    try {
      const id = req.body.id;
      const deleteUser = await prisma.community.delete({
        where: {
          id: id,
        },
      });
      res.json({ ok: true, test: "ok" });
    } catch (e) {}
  }
};
