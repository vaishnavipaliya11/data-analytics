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
    reqd: true,
    message: "Please input your username!",
  },
  {
    label: "Password",
    type: "password",
    reqd: true,

    message: "Please input your password!",
  },
  {
    label: "Email",
    reqd: true,

    type: "email",
    message: "Please input your email!",
  },
];
