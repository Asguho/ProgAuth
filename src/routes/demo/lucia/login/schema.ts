import {z} from 'zod';

export const loginSchema = z.object({
    userName: z.string().min(3),
    password: z.string().min(8),
});

export type LoginSchema = typeof loginSchema;