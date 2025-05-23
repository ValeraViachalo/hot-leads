import localFont from "next/font/local";
import "@/styles/reset.scss";
import {
  ScrollProvider,
} from "@/lib/providers/ScrollProvider/ScrollProvider";
import Header from "@/utils/Header/Header";
import Footer from "@/utils/Footer/Footer";
import { LocaleProvider } from "@/lib/providers/LocaleContext/LocaleContext";
import { ModalProvider } from "@/lib/providers/ModalProvider/ModalProvider";

const neueHaasDisplay = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplay/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplay/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-display",
});

const hovesPro = localFont({
  src: [
    {
      path: "./fonts/TTHovesPro/TTHovesProVariable.ttf",
      style: "normal",
    }
  ],
  variable: "--font-hoves-pro",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="html">
      <body className={`${hovesPro.variable} body`}>
        <ScrollProvider scrollBar></ScrollProvider>
        <LocaleProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
