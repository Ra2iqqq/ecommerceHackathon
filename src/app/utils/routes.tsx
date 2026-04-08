import {
  type RouteConfig,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  route("/", "routes/index.tsx"),
  route("auth/login", "routes/auth/login/index.tsx"),

  ...prefix("dashboard", [
    route("/", "routes/home.tsx"),
    route("overview", "routes/overview/index.tsx"),

  ]),
] satisfies RouteConfig;