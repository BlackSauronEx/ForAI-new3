import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "RVN Compare — ответ и чек-лист",
  description: "Preview of docs/ANSWER.md and docs/CHECKLIST.md.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-slate-100 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
