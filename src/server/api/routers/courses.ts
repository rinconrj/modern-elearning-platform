import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coursesRouter = createTRPCRouter({
  // create: publicProcedure.query(data) =>{},
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.course.findMany();
  }),
});
