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

export const sideBarFilter = [
  {
    label: ">15",
    type: "checkbox",
    name: "lessThan15",
  },
  {
    label: "15-25",
    type: "checkbox",
    name: "bet15",
  },
  {
    label: ">25",
    type: "checkbox",
    name: "moreThan25",
  },
  {
    label: "Male",
    type: "checkbox",
    name: "male",
  },
  {
    label: "Female",
    type: "checkbox",
    name: "female",
  },
];

export const features = ["A", "B", "C", "D", "E", "F"];