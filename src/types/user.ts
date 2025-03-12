export type TUser = {
  email: string;
  iat: number;
  exp: number;
  role: "customer" | "admin";
};
