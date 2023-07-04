import "./globals.css";
import { Inter } from "next/font/google";
import Stars from "./components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aly",
  description: "Aly's personal website",
  url: "https://alysoliman.tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Stars />
      </body>
    </html>
  );
}
