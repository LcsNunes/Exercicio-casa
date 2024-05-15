import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.courses.delete({
    where: {
      id: "60142f0b-0fe1-403e-8b1e-473ff9686be2",
    },
  });


  console.log(result);
}


main();