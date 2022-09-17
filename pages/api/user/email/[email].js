import prisma from '../../../../libs/client.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const email = req.query.email;
  if (req.method === 'GET') {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    res.json({ ok: true, user });
  }
};
