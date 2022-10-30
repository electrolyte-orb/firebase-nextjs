import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return <main className="px-6">{children}</main>;
}
