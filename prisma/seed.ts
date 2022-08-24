import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const array: Prisma.postsCreateInput[] = [
  {
    title: 'はろー',
    content: 'にゃあー'
  }
];

async function main() {
  console.log(`Start seeding ...`);
  for (const a of array) {
    const post = await prisma.posts.create({
      data: a,
    });
    console.log(`Created user with id: ${post.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
