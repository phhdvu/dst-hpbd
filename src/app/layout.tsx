import type { Metadata } from "next";
import { Baloo_2, Patrick_Hand } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const patrick = Patrick_Hand({
  variable: "--font-patrick",
  subsets: ["latin", "vietnamese"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday 🎉",
  description:
    "Một lời chúc sinh nhật ngọt ngào, rực rỡ và tràn đầy niềm vui.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${baloo.variable} ${patrick.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
