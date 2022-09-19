import prisma from '../../../../../libs/client';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const id = req.query.id;

  if (req.method === 'GET') {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    res.json({ ok: true, user });
  }
};
