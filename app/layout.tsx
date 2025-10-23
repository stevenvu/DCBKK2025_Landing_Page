import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowTrack Kanban",
  description: "A focused kanban board MVP for managing work in progress"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
