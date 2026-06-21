import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/lib/ThemeContext";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Saamyukkth Suresh — AI/ML & GenAI Engineer",
  description:
    "Software Development Engineer specializing in AI/ML and Generative AI systems. Building production-grade LLM platforms, RAG pipelines, and agentic AI workflows.",
  keywords: ["Saamyukkth Suresh", "AI Engineer", "ML Engineer", "GenAI", "LLM", "RAG", "LangChain", "Portfolio"],
  authors: [{ name: "Saamyukkth Suresh" }],
  openGraph: {
    title: "Saamyukkth Suresh — AI/ML & GenAI Engineer",
    description: "Building intelligent systems at the intersection of AI, LLMs, and scalable engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
