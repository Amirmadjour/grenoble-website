import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Grenoble — The Capital of the Alps",
  description:
    "Discover the breathtaking beauty of Grenoble, a jewel nestled in the heart of the French Alps. Explore its majestic mountains, iconic cable cars, vibrant cycling culture, and the longest avenue in France.",
  keywords: [
    "Grenoble",
    "French Alps",
    "Bastille",
    "Cable Car",
    "Cycling",
    "Mountains",
    "France",
    "Travel",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
