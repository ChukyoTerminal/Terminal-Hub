import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  avatar: z.string().url().optional(),
  role: z.enum(["admin", "member", "guest"]),
  createdAt: z.date(),
  updatedAt: z.date(),
});
