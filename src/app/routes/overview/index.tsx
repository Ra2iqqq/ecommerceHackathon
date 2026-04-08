import { ProtectedRoute } from "../../../components/ProtectedRoute";
import type { MetaArgs } from "./+types";
import OverviewModule from "../../modules/overview";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const meta = (_args: MetaArgs) => [
  { title: "New React Router App" },
  { name: "description", content: "Welcome to React Router!" },
];

export default function Home() {
  return (
    <ProtectedRoute requiredModule="ORDER">
      <OverviewModule />
    </ProtectedRoute>
  );
}