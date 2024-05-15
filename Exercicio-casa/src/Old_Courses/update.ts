import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "60142f0b-0fe1-403e-8b1e-473ff9686be2",
    },
    data: {
      duration: 300,
      name: "Curso de React Native - v2",
      description: "Curso muito bom de React Native",
    },
  });


  console.log(result);
}


main();