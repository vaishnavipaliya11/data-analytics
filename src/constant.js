export const loginForm = [
  {
    label: "Username",
    type: "",
    reqd: "required",
  },
  {
    label: "Password",
    type: "password",
  },
];

export const SignUpForm = [
  {
    label: "Username",
    type: "",
    name: "username",
    reqd: true,
    message: "Please input your username!",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    reqd: true,
    message: "Please input your password!",
  },
  {
    label: "Email",
    reqd: true,
    name: "email",
    type: "email",
    message: "Please input your email!",
  },
];
