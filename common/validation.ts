import zod from "zod";

export const UserValidation = zod.object({
  empId: zod.number(),
  name: zod.string(),
  designation: zod.string(),
  role: zod.enum(["Intern", "PM", "Founder"]),
  password: zod.string(),
});

export type UserType = zod.infer<typeof UserValidation>;
