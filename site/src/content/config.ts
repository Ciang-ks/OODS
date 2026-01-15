import { defineCollection, z } from 'astro:content';

const homeworks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.union([z.string(), z.array(z.string())])
      .transform((val) => Array.isArray(val) ? val : [val]),
    id: z.union([z.string(), z.number(), z.array(z.union([z.string(), z.number()]))])
      .transform((val) => {
        if (Array.isArray(val)) {
          return val.join(', ');
        }
        return String(val);
      }),
    type: z.string().optional(),
    date: z.date().optional(),
  }),
});

export const collections = {
  homeworks,
};
