import AnimatedCursor from "@/components/animationEffect";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exrelativity - exrelativity.github.io",
  description: "Author: Ukweh Chima Everest, Portfolio for UKWEH CHIMA EVEREST",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Author: Ukweh Chima Everest, Portfolio for UKWEH CHIMA EVEREST"
        />
        <title>Exrelativity - exrelativity.github.io </title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <AnimatedCursor
          // color="255,255,255"
          innerSize={10}
          outerSize={50}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          hasBlendMode
          //  outerStyle={{
          //    border: "3px solid var(--cursor-color)",
          //  }}
          //  innerStyle={{
          //    backgroundColor: "var(--cursor-color)",
          //  }}
        />
      </body>
    </html>
  );
}
