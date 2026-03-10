import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thet Paing Oo | Software Engineer",
  description:
    "Creative Software Engineer specializing in Web Development, Mobile Development, AI Integration, and Cloud APIs. Building modern, scalable, and visually engaging applications.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Three.js",
    "AI",
    "MERN Stack",
  ],
  authors: [{ name: "Thet Paing Oo" }],
  openGraph: {
    title: "Thet Paing Oo | Software Engineer",
    description:
      "Creative Software Engineer from Myanmar, building modern web applications and AI-powered tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise-bg grid-bg">{children}</body>
    </html>
  );
}
