import prisma from "./../../../../libs/client";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const editor = req.query.editor;
      const response = await prisma.community.findFirst({
        where: {
          editor: editor,
        },
      });
      res.json({ ok: true, response });
    } catch (e) {
      console.log(e);
    }
  }
};
