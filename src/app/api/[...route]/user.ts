import { Hono } from "hono";
import { userSchema } from "@/lib/schemas/user-schema";
import z from "zod";

type User = z.infer<typeof userSchema>;

const users: User[] = [
  {
    id: "1",
    name: "Lime",
    email: "lime@example.com",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const app = new Hono().get("/", (c) => {
  return c.json(users);
});

export default app;
