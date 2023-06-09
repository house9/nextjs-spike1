import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-10">
          <nav
            className="bg-white border-gray-200 dark:bg-gray-900"
            style={{ border: "solid 1px blue" }}
          >
            <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <li className="flex items-center">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/users">Users</Link>
              </li>
              <li>
                <Link href="/widgets">Widgets</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
