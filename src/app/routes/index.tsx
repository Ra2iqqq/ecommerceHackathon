import type { LoaderArgs } from "./+types/home";
import { redirect } from "react-router";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function loader(_args: LoaderArgs) {
  return redirect("/dashboard");
}