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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QYEWNSRN7H"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-QYEWNSRN7H');
        </script>
      </head>
      <body className={inter.className}>
        {children}
        <AnimatedCursor
          innerSize={10}
          outerSize={50}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          hasBlendMode
        />
      </body>
    </html>
  );
}
