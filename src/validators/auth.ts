import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerSchema = z
  .object({
    email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
    username: z
      .string()
      .min(2, { message: "이름은 2글자 이상이어야 합니다." })
      .max(100, { message: "이름은 100글자 이하이어야 합니다." }),
    password: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다.")
      .refine(
        (value) => passwordRegex.test(value),
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
      ),
    confirmPassword: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다.")
      .refine(
        (value) => passwordRegex.test(value),
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
      ),
  })
  // TODO: 동작하지 않음. how to fix it?
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "비밀번호가 일치하지 않습니다.",
      });
    }
  });
