import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// GET /api/posts?searchString=:searchString
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { searchString } = req.query;
  console.log(searchString);
  const resultPosts = await prisma.posts.findMany({
    where: {
      OR: [
        {
          title: { contains: Array.isArray(searchString) ? searchString[0] : searchString },
        },
        {
          content: { contains: Array.isArray(searchString) ? searchString[0] : searchString },
        },
      ],
    },
    orderBy: [
      {
        id: 'desc',
      }
    ],
  });
  res.json(resultPosts);
}
