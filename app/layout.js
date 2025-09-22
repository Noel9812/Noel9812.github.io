import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

// Load font with subsets and display strategy
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://noel9812.github.io"),
  title: "Noel Mathews | Web Developer",
  description: "Portfolio website of Noel Mathews, Web Developer",
  keywords:
    "Noel Mathews, Web Developer, Frontend Developer, Software Developer, NextJS, React, JavaScript, India, Portfolio",
  authors: [{ name: "Noel Mathews", url: "https://noelmathews.com" }],
  creator: "Noel Mathews",
  publisher: "Noel Mathews",
  openGraph: {
    title: "Noel Mathews | Web Developer",
    description:
      "Portfolio of Noel Mathews, a Web Developer specializing in Frontend Development with expertise in React, JavaScript and NextJS.",
    url: "https://noelmathews.com",
    siteName: "Noel Mathews Portfolio",
    locale: "in-en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noel Mathews | Web Developer",
    description:
      "Portfolio of Noel Mathews, a Web Developer specializing in Frontend Development with expertise in React, JavaScript and NextJS.",
    creator: "@NoelMathews",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2d2d2d",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.className}>
      <body className="w-full min-h-screen bg-secondary flex flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}