import prisma from '../../../../libs/client';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany({});
    res.json({ ok: true, users });
  } else if (req.method === 'PATCH') {
    try {
      const { userId, aboutMe } = req.body;
      const response = await prisma.user.update({
        where: { id: userId },
        data: { aboutMe: aboutMe },
      });
      res.json(response);
    } catch (e) {
      console.log(e);
    }
  }
};
